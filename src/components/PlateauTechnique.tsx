import React from "react";
import { motion } from "motion/react";
import { Activity, Baby, ShieldCheck, Clock } from "lucide-react";

export const PlateauTechnique = () => {
  const sections = [
    {
      title: "Bloc Opératoire",
      icon: <Activity className="w-6 h-6 text-medical-blue" />,
      details: ["Salle d'intervention", "Salle de surveillance postopératoire", "Salle de stérilisation"],
      img: "/images/photo1.jpg"
    },
    {
      title: "Unité de Maternité",
      icon: <Baby className="w-6 h-6 text-medical-blue" />,
      details: ["Salle de travail", "Salle d'accouchement", "Salle d'échographie"],
      img: "/images/photo2.jpg"
    },
    {
      title: "Services de Pointe",
      icon: <ShieldCheck className="w-6 h-6 text-medical-blue" />,
      details: ["Laboratoire d'analyses médicales", "Ambulance équipée 24/7"],
      img: "/images/photo3.jpg"
    },
    {
      title: "Hospitalisation",
      icon: <Clock className="w-6 h-6 text-medical-blue" />,
      details: ["Capacité de 12 lits", "3 catégories (1ère, 2ème, 3ème)", "Confort et discrétion"],
      img: "/images/photo5.jpg"
    }
  ];

  return (
    <section id="plateau-technique" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-block bg-medical-blue/10 text-medical-blue px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
            Équipements de pointe
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-medical-dark mb-4">Plateau Technique de Haut Niveau</h2>
          <p className="text-slate-600 text-sm md:text-base">
            La Clinique de la Médina dispose d'infrastructures modernes répondant aux normes internationales pour une sécurité optimale.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {sections.map((section, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100 flex flex-col"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={section.img} 
                  alt={section.title} 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6 flex-grow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-medical-light rounded-xl">
                    {section.icon}
                  </div>
                  <h3 className="font-bold text-medical-dark leading-tight">{section.title}</h3>
                </div>
                <ul className="space-y-2">
                  {section.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-slate-500">
                      <div className="w-1.5 h-1.5 bg-medical-blue rounded-full mt-1.5 shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
