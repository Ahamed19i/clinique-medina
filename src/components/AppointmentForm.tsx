import React, { useState } from "react";
import { motion } from "motion/react";
import { Phone, MessageSquare, CheckCircle2 } from "lucide-react";

export const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    specialty: "Médecine Générale",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Le nom est requis";
    if (!formData.phone.trim()) newErrors.phone = "Le téléphone est requis";
    if (!/^\+?[0-9\s-]{8,}$/.test(formData.phone)) newErrors.phone = "Numéro de téléphone invalide";
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Email invalide";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");
    
    try {
      const response = await fetch("/api/appointment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send appointment request");
      }

      setStatus("success");
      setFormData({ name: "", phone: "", email: "", specialty: "Médecine Générale", message: "" });
    } catch (error) {
      console.error("Error sending appointment:", error);
      setStatus("error");
    }
  };

  return (
    <section id="rendez-vous" className="py-24">
      <div className="container mx-auto px-4">
        <div className="bg-medical-dark rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          <div className="lg:w-1/2 p-12 lg:p-20 text-white">
            <h2 className="text-4xl font-bold mb-6">Prendre Rendez-vous en Ligne</h2>
            <p className="text-blue-100 mb-10 text-lg">
              Remplissez le formulaire et notre équipe vous contactera dans les plus brefs délais pour confirmer votre créneau.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-blue-200">Appelez-nous</div>
                  <div className="font-bold text-xl">+221 33 800 00 00</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-blue-200">WhatsApp</div>
                  <div className="font-bold text-xl">+221 77 000 00 00</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 bg-white p-12 lg:p-20">
            {status === "success" ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center"
              >
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-medical-dark mb-4">Demande Envoyée !</h3>
                <p className="text-slate-600 mb-8">
                  Votre demande a été transmise à <strong>contact@ahamedhassani.com</strong>. Nous vous rappellerons très prochainement.
                </p>
                <button 
                  onClick={() => setStatus("idle")}
                  className="text-medical-blue font-bold hover:underline"
                >
                  Envoyer une autre demande
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="grid gap-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Nom Complet *</label>
                    <input 
                      type="text" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Ex: Jean Diop" 
                      className={`w-full px-4 py-3 rounded-xl border ${errors.name ? 'border-red-500' : 'border-slate-200'} focus:border-medical-blue focus:ring-2 focus:ring-medical-blue/20 outline-none transition-all`} 
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Téléphone *</label>
                    <input 
                      type="tel" 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="+221 ..." 
                      className={`w-full px-4 py-3 rounded-xl border ${errors.phone ? 'border-red-500' : 'border-slate-200'} focus:border-medical-blue focus:ring-2 focus:ring-medical-blue/20 outline-none transition-all`} 
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Email (Optionnel)</label>
                  <input 
                    type="email" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="votre@email.com" 
                    className={`w-full px-4 py-3 rounded-xl border ${errors.email ? 'border-red-500' : 'border-slate-200'} focus:border-medical-blue focus:ring-2 focus:ring-medical-blue/20 outline-none transition-all`} 
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Spécialité Souhaitée</label>
                  <select 
                    value={formData.specialty}
                    onChange={(e) => setFormData({...formData, specialty: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-medical-blue focus:ring-2 focus:ring-medical-blue/20 outline-none transition-all bg-white"
                  >
                    <option>Médecine Générale</option>
                    <option>Pédiatrie</option>
                    <option>Gynécologie</option>
                    <option>Cardiologie</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Message (Optionnel)</label>
                  <textarea 
                    rows={4} 
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Comment pouvons-nous vous aider ?" 
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-medical-blue focus:ring-2 focus:ring-medical-blue/20 outline-none transition-all resize-none"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  disabled={status === "loading"}
                  className="bg-medical-green text-white py-4 rounded-xl font-bold text-lg hover:bg-medical-dark transition-all shadow-lg disabled:opacity-70 flex items-center justify-center gap-2"
                >
                  {status === "loading" ? "Envoi en cours..." : "Confirmer la demande"}
                </button>
                {status === "error" && <p className="text-red-500 text-center text-sm">Une erreur est survenue. Veuillez réessayer.</p>}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
