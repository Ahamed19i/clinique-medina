import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "motion/react";
import { HeartPulse, Menu, X, Phone } from "lucide-react";
import { LOGO_URL } from "../constants";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Accueil", path: isHome ? "#accueil" : "/" },
    { name: "Services", path: isHome ? "#services" : "/#services" },
    { name: "Infrastructures", path: isHome ? "#infrastructures" : "/#infrastructures" },
    { name: "Équipe", path: isHome ? "#équipe" : "/#équipe" },
    { name: "Contact", path: isHome ? "#contact" : "/#contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || !isHome ? "glass-morphism py-3 shadow-sm" : "bg-transparent py-5"}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <div className="h-12 w-auto flex items-center justify-center">
            <img 
              src={LOGO_URL} 
              alt="Clinique de la Médina" 
              className="h-full w-auto object-contain"
              referrerPolicy="no-referrer"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const parent = target.parentElement;
                if (parent) {
                  const fallback = document.createElement('div');
                  fallback.className = "flex items-center gap-2";
                  fallback.innerHTML = `
                    <div class="w-10 h-10 bg-medical-blue rounded-lg flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart-pulse"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"/></svg>
                    </div>
                    <span class="text-xl font-display font-bold text-medical-dark">Médina Clinique</span>
                  `;
                  parent.appendChild(fallback);
                }
              }}
            />
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            item.path.startsWith("#") || item.path.includes("#") ? (
              <a 
                key={item.name} 
                href={item.path}
                className="text-sm font-medium text-slate-600 hover:text-medical-blue transition-colors"
              >
                {item.name}
              </a>
            ) : (
              <Link 
                key={item.name} 
                to={item.path}
                className="text-sm font-medium text-slate-600 hover:text-medical-blue transition-colors"
              >
                {item.name}
              </Link>
            )
          ))}
          <a 
            href={isHome ? "#rendez-vous" : "/#rendez-vous"}
            className="bg-medical-green text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-medical-dark transition-all shadow-md hover:shadow-lg"
          >
            Rendez-vous
          </a>
          <a 
            href="tel:+221338000000" 
            className="bg-red-500 text-white p-2.5 rounded-full hover:bg-red-600 transition-all animate-pulse"
            title="Urgence"
          >
            <Phone className="w-5 h-5" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-medical-dark" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-slate-100 p-4 flex flex-col gap-4"
        >
          {navItems.map((item) => (
            item.path.startsWith("#") || item.path.includes("#") ? (
              <a 
                key={item.name} 
                href={item.path}
                className="text-lg font-medium text-slate-700 py-2 border-b border-slate-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ) : (
              <Link 
                key={item.name} 
                to={item.path}
                className="text-lg font-medium text-slate-700 py-2 border-b border-slate-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            )
          ))}
          <div className="flex flex-col gap-3 pt-2">
            <a href="#rendez-vous" className="bg-medical-green text-white text-center py-3 rounded-xl font-bold">Prendre RDV</a>
            <a href="tel:+221338000000" className="bg-red-500 text-white text-center py-3 rounded-xl font-bold flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" /> Urgence 24/7
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
};
