import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import helmet from "helmet";
import validator from "validator";
import rateLimit from "express-rate-limit";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Rate Limiting - Strict for production, permissive for dev
  const appointmentLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: process.env.NODE_ENV === "production" ? 5 : 100,
    message: { status: "error", message: "Trop de demandes de rendez-vous. Veuillez réessayer plus tard." },
    standardHeaders: true,
    legacyHeaders: false,
    // Trust proxy is important for Cloud Run/Nginx to get real IP
    skip: (req) => req.ip === '127.0.0.1' || req.ip === '::1',
  });

  // Security Headers - Production Grade
  app.use(helmet({
    contentSecurityPolicy: {
      directives: {
        ...helmet.contentSecurityPolicy.getDefaultDirectives(),
        "img-src": ["'self'", "data:", "https:", "http:", "https://picsum.photos"],
        "script-src": ["'self'", "'unsafe-inline'", "'unsafe-eval'"],
        "frame-ancestors": process.env.NODE_ENV === "production" 
          ? ["'self'"] // Strict in production
          : ["'self'", "*"], // Allow preview in dev
      },
    },
    crossOriginEmbedderPolicy: process.env.NODE_ENV === "production",
    xFrameOptions: process.env.NODE_ENV === "production" ? { action: "sameorigin" } : false,
    hsts: process.env.NODE_ENV === "production", // Force HTTPS in production
    referrerPolicy: { policy: "strict-origin-when-cross-origin" },
  }));

  // Trust proxy for Cloud Run
  app.set('trust proxy', 1);

  app.use(express.json({ limit: "10kb" })); // Limit body size to prevent DoS

  // API Route for Appointment Requests
  app.post("/api/appointment", appointmentLimiter, async (req, res) => {
    let { name, phone, email, specialty, message } = req.body;

    // Basic Sanitization
    name = validator.escape(validator.trim(name || ""));
    phone = validator.escape(validator.trim(phone || ""));
    email = email ? validator.normalizeEmail(validator.trim(email)) : "";
    specialty = validator.escape(validator.trim(specialty || ""));
    message = validator.escape(validator.trim(message || ""));

    // Validation
    if (!name || !phone || !specialty) {
      return res.status(400).json({ status: "error", message: "Champs obligatoires manquants" });
    }

    if (email && !validator.isEmail(email)) {
      return res.status(400).json({ status: "error", message: "Email invalide" });
    }

    // Check if SMTP is configured
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.warn("SMTP not configured. Appointment request received but not sent:", { name, phone, email, specialty });
      return res.status(200).json({ 
        status: "success", 
        message: "Request received (SMTP not configured for real sending)"
      });
    }

    try {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || "smtp.gmail.com",
        port: parseInt(process.env.SMTP_PORT || "587"),
        secure: process.env.SMTP_PORT === "465",
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      const mailOptions = {
        from: process.env.SMTP_FROM || process.env.SMTP_USER,
        to: process.env.SMTP_TO || "contact@ahamedhassani.com",
        subject: `Nouveau Rendez-vous: ${name}`,
        text: `
          Nouveau rendez-vous reçu depuis le site web :
          
          Nom: ${name}
          Téléphone: ${phone}
          Email: ${email || "Non fourni"}
          Spécialité: ${specialty}
          Message: ${message || "Aucun message"}
        `,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
            <h2 style="color: #0f172a;">Nouveau Rendez-vous</h2>
            <p>Un nouveau rendez-vous a été demandé depuis le site de la Clinique de la Médina.</p>
            <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
            <table style="width: 100%;">
              <tr><td style="padding: 8px 0;"><strong>Nom:</strong></td><td>${name}</td></tr>
              <tr><td style="padding: 8px 0;"><strong>Téléphone:</strong></td><td>${phone}</td></tr>
              <tr><td style="padding: 8px 0;"><strong>Email:</strong></td><td>${email || "Non fourni"}</td></tr>
              <tr><td style="padding: 8px 0;"><strong>Spécialité:</strong></td><td>${specialty}</td></tr>
            </table>
            <div style="margin-top: 20px; padding: 15px; background-color: #f8fafc; border-radius: 5px;">
              <strong>Message:</strong><br>
              ${message || "Aucun message"}
            </div>
          </div>
        `,
      };

      await transporter.sendMail(mailOptions);
      res.status(200).json({ status: "success", message: "Email sent successfully" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ status: "error", message: "Failed to send email" });
    }
  });

  // Final Vite/Static Middleware
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  // Generic Error Handler (Security: Prevent leaking stack traces)
  app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.error(err.stack);
    res.status(500).json({ 
      status: "error", 
      message: "Une erreur interne est survenue. Veuillez réessayer plus tard." 
    });
  });

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
