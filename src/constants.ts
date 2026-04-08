import React from "react";
import { Stethoscope, HeartPulse, Phone, Clock, Activity, Baby, ShieldCheck } from "lucide-react";
import { Service, Doctor, InfrastructureItem } from "./types";

export const SERVICES: Service[] = [
  {
    id: "med",
    title: "Prestations Médicales",
    description: "Consultations spécialisées, médecine interne, cardiologie et suivi pédiatrique complet.",
    icon: React.createElement(Stethoscope, { className: "w-8 h-8 text-medical-blue" }),
  },
  {
    id: "chi",
    title: "Prestations Chirurgicales",
    description: "Chirurgie générale, gynécologique et obstétrique avec un plateau technique de pointe.",
    icon: React.createElement(Activity, { className: "w-8 h-8 text-medical-blue" }),
  },
  {
    id: "gyn",
    title: "Gynéco-Obstétrique",
    description: "Maternité, salle d'accouchement sécurisée et suivi de grossesse personnalisé.",
    icon: React.createElement(HeartPulse, { className: "w-8 h-8 text-medical-blue" }),
  },
  {
    id: "urg",
    title: "Urgences 24h/24",
    description: "Service d'urgence opérationnel du lundi au dimanche, 24 heures sur 24.",
    icon: React.createElement(Phone, { className: "w-8 h-8 text-red-500" }),
  },
  {
    id: "hosp",
    title: "Hospitalisation",
    description: "Chambres de toutes catégories alliant confort, sérénité et discrétion.",
    icon: React.createElement(Clock, { className: "w-8 h-8 text-medical-blue" }),
  },
  {
    id: "plateau",
    title: "Plateau Technique",
    description: "Équipements de haute technologie pour des diagnostics et soins de précision.",
    icon: React.createElement(Activity, { className: "w-8 h-8 text-medical-blue" }),
  },
];

export const DOCTORS: Doctor[] = [
  {
    id: "1",
    name: "Dr. Abdoulaye Gassama",
    specialty: "Médecin Spécialiste",
    experience: "Expertise Médicale",
    image: "https://picsum.photos/seed/gassama/400/500",
    bio: "Le Dr. Abdoulaye Gassama est un expert reconnu en médecine interne avec plus de 15 ans d'expérience. Il se consacre à fournir des soins complets et personnalisés à ses patients.",
    education: ["Doctorat en Médecine - Université Cheikh Anta Diop", "Spécialisation en Médecine Interne - Paris"],
    languages: ["Français", "Anglais", "Wolof"]
  },
  {
    id: "2",
    name: "Pr. Boubacar Diallo",
    specialty: "Professeur Spécialiste",
    experience: "Expertise Chirurgicale",
    image: "https://picsum.photos/seed/diallo/400/500",
    bio: "Le Pr. Boubacar Diallo est un chirurgien de renommée internationale, spécialisé dans les interventions complexes. Il dirige le département de chirurgie de la Clinique de la Médina.",
    education: ["Agrégation en Chirurgie", "Diplôme d'Études Spécialisées en Chirurgie Viscérale"],
    languages: ["Français", "Anglais"]
  },
  {
    id: "3",
    name: "Équipe Médicale",
    specialty: "Multidisciplinaire",
    experience: "Disponibilité 24/7",
    image: "https://picsum.photos/seed/team/400/500",
    bio: "Notre équipe pluridisciplinaire regroupe des spécialistes dévoués travaillant en synergie pour assurer une prise en charge globale et coordonnée de chaque patient.",
    education: ["Divers diplômes internationaux"],
    languages: ["Français", "Wolof", "Anglais", "Arabe"]
  },
];

export const INFRASTRUCTURES: InfrastructureItem[] = [
  { title: "Plateau Technique", category: "Équipement", img: "/images/photo_par.jpg", desc: "Équipements de haute technologie" },
  { title: "Salle d'Intervention", category: "Bloc Opératoire", img: "/images/photo1.jpg", desc: "Salle d'intervention équipée" },
  { title: "Salle d'Accouchement", category: "Maternité", img: "/images/photo2.jpg", desc: "Un cadre sécurisé" },
  { title: "Laboratoire Moderne", category: "Analyses", img: "/images/photo3.jpg", desc: "Analyses médicales de pointe" },
  { title: "Ambulance Médicalisée", category: "Urgences", img: "/images/photo4.jpg", desc: "Équipée 24/7" },
  { title: "Chambre d'Hospitalisation", category: "Confort", img: "/images/photo5.jpg", desc: "Confort et discrétion" },
];

export const HERO_IMAGES = [
  "/images/acceuil.jpeg",
  "/images/photo1.jpg",
  "/images/photo2.jpg",
  "/images/photo3.jpg"
];

export const LOGO_URL = "/images/logo_vrai.png";
