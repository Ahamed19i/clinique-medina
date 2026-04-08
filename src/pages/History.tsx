import React from "react";
import { motion } from "motion/react";
import { History as HistoryIcon, Award, Users, Heart } from "lucide-react";

export const History = () => {
  const milestones = [
    {
      year: "2010",
      title: "Fondation",
      desc: "Création de la Clinique de la Médina avec une vision claire : offrir des soins de standard international au cœur de Dakar.",
      icon: <HistoryIcon className="w-6 h-6" />
    },
    {
      year: "2015",
      title: "Expansion Technique",
      desc: "Acquisition du premier scanner de dernière génération et ouverture du service de cardiologie interventionnelle.",
      icon: <Award className="w-6 h-6" />
    },
    {
      year: "2018",
      title: "Nouveau Plateau Technique",
      desc: "Rénovation complète des blocs opératoires et mise aux normes européennes de stérilisation.",
      icon: <Users className="w-6 h-6" />
    },
    {
      year: "2023",
      title: "Certification Excellence",
      desc: "Reconnaissance comme l'un des meilleurs établissements privés du Sénégal pour la qualité des soins et la sécurité des patients.",
      icon: <Heart className="w-6 h-6" />
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <h1 className="text-5xl font-display font-bold text-medical-dark mb-6">Notre Histoire</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Depuis plus d'une décennie, la Clinique de la Médina s'engage à transformer le paysage médical sénégalais par l'excellence, l'innovation et l'humanité.
          </p>
        </motion.div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-medical-dark mb-6">Une Vision, Un Engagement</h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                La Clinique de la Médina est née de la volonté de médecins passionnés de créer une structure de santé capable de répondre aux défis médicaux les plus complexes sans que les patients n'aient à quitter le pays.
              </p>
              <p>
                Située dans le quartier historique de la Médina à Dakar, notre clinique est devenue un symbole de modernité et de confiance. Nous avons investi massivement dans les technologies de pointe tout en préservant une approche humaine et personnalisée du soin.
              </p>
              <p>
                Aujourd'hui, avec plus de 50 spécialistes et un plateau technique de premier ordre, nous continuons d'écrire notre histoire avec vous, pour votre santé.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img 
              src="/images/photo_par.jpg" 
              alt="Clinique de la Médina" 
              className="rounded-[2rem] shadow-2xl w-full h-[500px] object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-6 -right-6 bg-medical-blue text-white p-8 rounded-2xl shadow-xl">
              <div className="text-4xl font-bold mb-1">14+</div>
              <div className="text-sm font-medium opacity-80">Années d'Excellence</div>
            </div>
          </motion.div>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-medical-dark text-center mb-12">Dates Clés</h3>
          <div className="space-y-12">
            {milestones.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col md:flex-row gap-8 items-start"
              >
                <div className="md:w-32 flex-shrink-0">
                  <span className="text-3xl font-bold text-medical-blue">{item.year}</span>
                </div>
                <div className="flex-1 bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex gap-6">
                  <div className="w-12 h-12 bg-medical-light rounded-xl flex items-center justify-center text-medical-blue flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-medical-dark mb-2">{item.title}</h4>
                    <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
