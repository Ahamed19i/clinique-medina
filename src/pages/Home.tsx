import React from "react";
import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import { WhyUs } from "../components/WhyUs";
import { PlateauTechnique } from "../components/PlateauTechnique";
import { PhotoTour } from "../components/PhotoTour";
import { Team } from "../components/Team";
import { MapSection } from "../components/MapSection";
import { AppointmentForm } from "../components/AppointmentForm";

export const Home = () => (
  <>
    <Hero />
    <Services />
    <WhyUs />
    <PlateauTechnique />
    <PhotoTour />
    <Team />
    <MapSection />
    <AppointmentForm />
  </>
);
