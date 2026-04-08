import React from "react";
import { Link } from "react-router-dom";
import { DOCTORS } from "../constants";

export const Team = () => {
  return (
    <section id="équipe" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-medical-dark mb-4">Nos Experts Médicaux</h2>
          <p className="text-slate-600">Une équipe pluridisciplinaire dévouée à votre bien-être, disponible 24h/24 pour des soins de qualité.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {DOCTORS.map((doc) => (
            <div key={doc.id} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all group">
              <div className="h-80 overflow-hidden relative">
                <img 
                  src={doc.image} 
                  alt={doc.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-medical-dark text-xl mb-1">{doc.name}</h3>
                <p className="text-sm text-medical-blue font-semibold mb-4">{doc.specialty}</p>
                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <span className="text-sm text-slate-500">{doc.experience}</span>
                  <Link to={`/doctor/${doc.id}`} className="text-medical-blue font-bold text-sm hover:underline">Voir profil</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
