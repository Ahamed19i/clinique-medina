import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2, ArrowRight, Phone, Activity, ShieldCheck } from "lucide-react";
import { HERO_IMAGES } from "../constants";

export const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="accueil" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-medical-light/30 -skew-x-12 transform translate-x-1/4 -z-10" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-medical-blue/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-medical-light text-medical-blue px-4 py-2 rounded-full text-sm font-bold mb-6">
            <CheckCircle2 className="w-4 h-4" />
            <span>Clinique de Référence à Dakar</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-medical-dark leading-[1.1] mb-6">
            Votre Santé, Notre <span className="text-medical-blue">Objectif</span>
          </h1>
          <p className="text-lg text-slate-600 mb-10 max-w-lg leading-relaxed">
            La Clinique de la Médina est une structure mixte privée située à Dakar, offrant des soins d'excellence en spécialités médicales, chirurgicales et gynéco-obstétriques.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#rendez-vous" className="bg-medical-green text-white px-6 py-4 rounded-full font-bold text-base md:text-lg hover:bg-medical-dark transition-all shadow-lg flex items-center justify-center gap-2 group">
              Prendre rendez-vous <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="tel:+221338000000" className="border-2 border-red-500 text-red-500 px-6 py-4 rounded-full font-bold text-base md:text-lg hover:bg-red-50 transition-all flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" /> Urgence 24/7
            </a>
          </div>
          
          <div className="mt-12 grid grid-cols-3 gap-4 sm:gap-8">
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
              <div className="text-2xl md:text-3xl font-bold text-medical-blue">24/7</div>
              <div className="text-xs md:text-sm text-slate-500 font-medium">Urgences</div>
            </div>
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
              <div className="text-2xl md:text-3xl font-bold text-medical-blue">50+</div>
              <div className="text-xs md:text-sm text-slate-500 font-medium">Spécialistes</div>
            </div>
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
              <div className="text-2xl md:text-3xl font-bold text-medical-blue">15k+</div>
              <div className="text-xs md:text-sm text-slate-500 font-medium">Patients/An</div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white aspect-[4/5]">
            <AnimatePresence mode="wait">
              <motion.img 
                key={currentImage}
                src={HERO_IMAGES[currentImage]} 
                alt={`Clinique de la Médina Dakar ${currentImage + 1}`} 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </AnimatePresence>
            {/* Dots */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-30">
              {HERO_IMAGES.map((_, i) => (
                <div 
                  key={i} 
                  className={`w-2 h-2 rounded-full transition-all ${i === currentImage ? "bg-white w-6" : "bg-white/50"}`}
                />
              ))}
            </div>
          </div>
          {/* Floating Cards */}
          <div className="absolute -bottom-6 -left-6 z-20 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-[240px]">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <Activity className="text-green-600 w-6 h-6" />
              </div>
              <span className="font-bold text-medical-dark">Plateau de Pointe</span>
            </div>
            <p className="text-xs text-slate-500">Équipements de dernière génération pour des soins de précision.</p>
          </div>
          
          <div className="absolute top-10 -right-6 z-20 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 max-w-[180px] hidden lg:block">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <ShieldCheck className="text-blue-600 w-5 h-5" />
              </div>
              <span className="font-bold text-medical-dark text-sm">Sécurité</span>
            </div>
            <p className="text-[10px] text-slate-500">Normes internationales d'hygiène et de sécurité.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
