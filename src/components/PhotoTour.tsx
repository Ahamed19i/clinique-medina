import React from "react";
import { motion } from "motion/react";
import { INFRASTRUCTURES } from "../constants";

export const PhotoTour = () => {
  return (
    <section id="infrastructures" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-medical-dark mb-4">Infrastructures & Équipements</h2>
          <p className="text-slate-600 text-sm md:text-base">Explorez nos locaux et découvrez la qualité de nos équipements en images.</p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {INFRASTRUCTURES.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              className="break-inside-avoid group relative rounded-2xl overflow-hidden shadow-md"
            >
              <img 
                src={item.img} 
                alt={item.title} 
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="p-5 bg-white border-t border-slate-50">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-medical-blue font-bold text-[10px] uppercase tracking-widest">{item.category}</span>
                  <div className="w-1.5 h-1.5 bg-medical-green rounded-full shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
                </div>
                <h4 className="text-medical-dark text-base font-bold mb-1">{item.title}</h4>
                <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
