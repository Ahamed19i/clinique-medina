import React from "react";
import { MapPin, Phone } from "lucide-react";

export const MapSection = () => {
  return (
    <section id="localisation" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-[3rem] overflow-hidden shadow-xl border border-slate-100">
          <div className="grid lg:grid-cols-3">
            <div className="p-12 lg:p-16 flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-medical-dark mb-6">Nous Trouver</h2>
              <p className="text-slate-600 mb-8">
                La Clinique de la Médina est idéalement située au cœur de Dakar pour un accès rapide et facile.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-medical-light rounded-2xl flex items-center justify-center shrink-0">
                    <MapPin className="text-medical-blue w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-medical-dark">Adresse</h4>
                    <p className="text-sm text-slate-500">Rue 13 X Avenue Blaise Diagne, Dakar, Sénégal</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-medical-light rounded-2xl flex items-center justify-center shrink-0">
                    <Phone className="text-medical-blue w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-medical-dark">Contact</h4>
                    <p className="text-sm text-slate-500">+221 33 800 00 00</p>
                  </div>
                </div>
              </div>
              <a 
                href="https://www.google.com/maps/dir//Clinique+de+la+M%C3%A9dina,+Dakar,+Senegal/@14.6799094,-17.4490542,17z" 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-10 bg-medical-blue text-white text-center py-4 rounded-xl font-bold hover:bg-medical-dark transition-all"
              >
                Obtenir l'itinéraire
              </a>
            </div>
            <div className="lg:col-span-2 h-[500px] lg:h-auto">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.456789!2d-17.45124288515!3d14.67990938975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec1725946622a13%3A0x77dbe0cb9883b4d6!2sClinique%20de%20la%20M%C3%A9dina!5e0!3m2!1sfr!2ssn!4v1712480000000!5m2!1sfr!2ssn" 
                className="w-full h-full border-0" 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
