import React from "react";
import { motion } from "motion/react";
import { ShieldCheck } from "lucide-react";

export const PrivacyPolicy = () => (
  <div className="pt-32 pb-24 container mx-auto px-4">
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto bg-white p-12 rounded-[2rem] shadow-xl border border-slate-100"
    >
      <div className="flex items-center gap-4 mb-8">
        <div className="w-12 h-12 bg-medical-light rounded-2xl flex items-center justify-center">
          <ShieldCheck className="text-medical-blue w-6 h-6" />
        </div>
        <h1 className="text-4xl font-bold text-medical-dark">Politique de Confidentialité</h1>
      </div>
      
      <div className="prose prose-slate max-w-none space-y-8 text-slate-600">
        <section>
          <h2 className="text-2xl font-bold text-medical-dark mb-4">1. Collecte des Données</h2>
          <p>La Clinique de la Médina s'engage à ce que la collecte et le traitement de vos données, effectués à partir du site, soient conformes au règlement général sur la protection des données (RGPD) et à la législation sénégalaise en vigueur.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-medical-dark mb-4">2. Utilisation des Données</h2>
          <p>Les données personnelles collectées via le formulaire de rendez-vous sont uniquement utilisées pour traiter votre demande et assurer votre suivi médical au sein de notre établissement.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-medical-dark mb-4">3. Sécurité des Données</h2>
          <p>Nous mettons en œuvre toutes les mesures techniques et organisationnelles nécessaires pour garantir la sécurité et la confidentialité de vos données de santé.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-medical-dark mb-4">4. Vos Droits</h2>
          <p>Vous disposez d'un droit d'accès, de rectification, d'opposition et de suppression des données vous concernant. Pour exercer ce droit, contactez-nous par e-mail.</p>
        </section>
      </div>
    </motion.div>
  </div>
);
