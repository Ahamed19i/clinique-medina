import React from "react";

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  experience: string;
  image: string;
  bio?: string;
  education?: string[];
  languages?: string[];
}

export interface InfrastructureItem {
  title: string;
  desc: string;
  img: string;
  category: string;
}
