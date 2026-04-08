import React from "react";
import { motion } from "motion/react";
import { FileText } from "lucide-react";

export const LegalNotice = () => (
  <div className="pt-32 pb-24 container mx-auto px-4">
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto bg-white p-12 rounded-[2rem] shadow-xl border border-slate-100"
    >
      <div className="flex items-center gap-4 mb-8">
        <div className="w-12 h-12 bg-medical-light rounded-2xl flex items-center justify-center">
          <FileText className="text-medical-blue w-6 h-6" />
        </div>
        <h1 className="text-4xl font-bold text-medical-dark">Mentions Légales</h1>
      </div>
      
      <div className="prose prose-slate max-w-none space-y-8 text-slate-600">
        <section>
          <h2 className="text-2xl font-bold text-medical-dark mb-4">1. Éditeur du Site</h2>
          <p>Le présent site est édité par la Clinique de la Médina.</p>
          <p><strong>Siège social :</strong> Rue 13 X Avenue Blaise Diagne, Dakar, Sénégal</p>
          <p><strong>Téléphone :</strong> +221 33 800 00 00</p>
          <p><strong>E-mail :</strong> contact@cliniquemedina.com</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-medical-dark mb-4">2. Hébergement</h2>
          <p>Le site est hébergé sur des serveurs sécurisés conformes aux normes de protection des données de santé.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-medical-dark mb-4">3. Propriété Intellectuelle</h2>
          <p>L'ensemble de ce site relève de la législation internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-medical-dark mb-4">4. Responsabilité Médicale</h2>
          <p>Les informations fournies sur ce site sont destinées à améliorer, non à remplacer, la relation qui existe entre le patient (ou visiteur du site) et son médecin. Elles n'ont pas vocation à établir un diagnostic ou à préconiser un traitement sans consultation préalable.</p>
        </section>
      </div>
    </motion.div>
  </div>
);
