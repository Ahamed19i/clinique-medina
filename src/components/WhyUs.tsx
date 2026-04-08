import React from "react";
import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

export const WhyUs = () => {
  const reasons = [
    { title: "Expertise Internationale", desc: "Médecins formés dans les plus grandes universités mondiales." },
    { title: "Plateau Technique Moderne", desc: "Scanner, IRM et blocs opératoires aux normes européennes." },
    { title: "Accueil Personnalisé", desc: "Une équipe dédiée pour un accompagnement VIP de chaque patient." },
    { title: "Hygiène & Sécurité", desc: "Protocoles de stérilisation et de sécurité sanitaire rigoureux." },
  ];

  return (
    <section id="à-propos" className="py-24 overflow-hidden">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <img 
            src="/images/photo_par.jpg" 
            alt="Plateau Technique Clinique Médina" 
            className="rounded-3xl shadow-lg w-full h-[400px] object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl cursor-pointer hover:scale-110 transition-transform">
            <div className="w-16 h-16 bg-medical-blue rounded-full flex items-center justify-center">
              <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[15px] border-l-white border-b-[10px] border-b-transparent ml-1" />
            </div>
          </div>
        </div>
        
        <div>
          <h2 className="text-4xl font-bold text-medical-dark mb-8">Pourquoi Choisir la Clinique de la Médina ?</h2>
          <div className="grid gap-6">
            {reasons.map((reason, i) => (
              <div key={i} className="flex gap-4">
                <div className="mt-1">
                  <CheckCircle2 className="text-medical-green w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-medical-dark text-lg">{reason.title}</h4>
                  <p className="text-slate-600">{reason.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <Link 
            to="/notre-histoire" 
            className="inline-block mt-10 bg-medical-dark text-white px-8 py-4 rounded-full font-bold hover:bg-medical-blue transition-all"
          >
            Découvrir notre histoire
          </Link>
        </div>
      </div>
    </section>
  );
};
