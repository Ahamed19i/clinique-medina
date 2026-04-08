import React from "react";
import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";
import { SERVICES } from "../constants";

export const Services = () => {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-medical-dark mb-4">Nos Spécialités Médicales</h2>
          <p className="text-slate-600">Une offre de soins complète pour répondre à tous vos besoins de santé, avec les meilleurs médecins de Dakar.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-slate-100 group"
            >
              <div className="mb-6 p-4 bg-medical-light rounded-2xl inline-block group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-medical-dark mb-3">{service.title}</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
              <a href="#rendez-vous" className="text-medical-blue font-bold flex items-center gap-2 hover:gap-3 transition-all">
                En savoir plus <ChevronRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
