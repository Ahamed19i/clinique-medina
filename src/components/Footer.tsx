import React from "react";
import { Link } from "react-router-dom";
import { HeartPulse, Activity, MapPin, Phone, Mail, Clock } from "lucide-react";
import { LOGO_URL } from "../constants";

export const Footer = () => {
  return (
    <footer id="contact" className="bg-medical-dark text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-6">
              <div className="h-16 w-auto bg-white rounded-lg p-2 flex items-center justify-center">
                <img 
                  src={LOGO_URL} 
                  alt="Clinique de la Médina" 
                  className="h-full w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <p className="text-blue-100/70 leading-relaxed mb-6">
              L'excellence médicale au service de la population sénégalaise et de la diaspora.
            </p>
            <div className="flex gap-4">
              {[1, 2, 3].map(i => (
                <div key={i} className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-medical-blue transition-colors cursor-pointer">
                  <Activity className="w-5 h-5" />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Liens Rapides</h4>
            <ul className="space-y-4 text-blue-100/70">
              <li><Link to="/" className="hover:text-white transition-colors">Accueil</Link></li>
              <li><a href="/#services" className="hover:text-white transition-colors">Nos Services</a></li>
              <li><a href="/#infrastructures" className="hover:text-white transition-colors">Infrastructures</a></li>
              <li><a href="/#équipe" className="hover:text-white transition-colors">Notre Équipe</a></li>
              <li><a href="/#rendez-vous" className="hover:text-white transition-colors">Rendez-vous</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Nos Services</h4>
            <ul className="space-y-4 text-blue-100/70">
              <li><a href="/#services" className="hover:text-white transition-colors">Urgences 24/7</a></li>
              <li><a href="/#services" className="hover:text-white transition-colors">Cardiologie</a></li>
              <li><a href="/#services" className="hover:text-white transition-colors">Pédiatrie</a></li>
              <li><a href="/#services" className="hover:text-white transition-colors">Maternité</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Contact</h4>
            <ul className="space-y-4 text-blue-100/70">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-medical-blue shrink-0" />
                <span>Rue 13 X Avenue Blaise Diagne, Dakar, Sénégal</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-medical-blue shrink-0" />
                <span>+221 33 800 00 00</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-medical-blue shrink-0" />
                <span>contact@cliniquemedina.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-medical-blue shrink-0" />
                <span>24h/24, 7j/7</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:row items-center justify-between gap-4 text-sm text-blue-100/50">
          <p>© 2026 Clinique de la Médina. Tous droits réservés.</p>
          <div className="flex gap-6">
            <Link to="/mentions-legales" className="hover:text-white">Mentions Légales</Link>
            <Link to="/confidentialite" className="hover:text-white">Confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
