import React from "react";
import { useParams } from "react-router-dom";
import { UserRound, CheckCircle2, MessageSquare, Clock, ArrowRight } from "lucide-react";
import { DOCTORS } from "../constants";

export const DoctorProfile = () => {
  const { id } = useParams();
  const doctor = DOCTORS.find(d => d.id === id);

  if (!doctor) return <div className="pt-32 text-center">Médecin non trouvé</div>;

  return (
    <div className="pt-32 pb-24 container mx-auto px-4">
      <div className="max-w-5xl mx-auto">
        <a href="/#équipe" className="inline-flex items-center gap-2 text-medical-blue font-bold mb-8 hover:gap-3 transition-all">
          <ArrowRight className="w-5 h-5 rotate-180" /> Retour à l'équipe
        </a>
        
        <div className="bg-white rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 flex flex-col md:flex-row">
          <div className="md:w-2/5 h-[500px] md:h-auto">
            <img 
              src={doctor.image} 
              alt={doctor.name} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="md:w-3/5 p-12 lg:p-16">
            <div className="inline-block bg-medical-light text-medical-blue px-4 py-1 rounded-full text-sm font-bold mb-4">
              {doctor.specialty}
            </div>
            <h1 className="text-4xl font-bold text-medical-dark mb-6">{doctor.name}</h1>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              {doctor.bio}
            </p>
            
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <h3 className="font-bold text-medical-dark mb-4 flex items-center gap-2">
                  <UserRound className="w-5 h-5 text-medical-blue" /> Formation
                </h3>
                <ul className="space-y-2 text-slate-500 text-sm">
                  {doctor.education?.map((edu, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-medical-green mt-0.5 shrink-0" />
                      {edu}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-medical-dark mb-4 flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-medical-blue" /> Langues
                </h3>
                <div className="flex flex-wrap gap-2">
                  {doctor.languages?.map((lang, i) => (
                    <span key={i} className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-medium">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="mt-12 pt-8 border-t border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <Clock className="text-green-600 w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 uppercase font-bold tracking-wider">Disponibilité</div>
                  <div className="text-sm font-bold text-medical-dark">Sur rendez-vous</div>
                </div>
              </div>
              <a href="/#rendez-vous" className="bg-medical-green text-white px-8 py-3 rounded-xl font-bold shadow-lg hover:bg-medical-dark transition-all">
                Prendre RDV
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
