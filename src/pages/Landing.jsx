import React from "react";
import Navbar from "../components/landing/Navbar";
import HeroSection from "../components/landing/HeroSection";
import ServicesSection from "../components/landing/ServicesSection";
import HowItWorks from "../components/landing/HowItWorks";
import TeamSection from "../components/landing/TeamSection";
import CTASection from "../components/landing/CTASection";
import AppScreenshots from "../components/landing/AppScreenshots";
import AIDoctorSection from "../components/landing/AIDoctorSection";
import AvailabilityMap from "../components/landing/AvailabilityMap";
import FooterBar from "../components/landing/FooterBar";

const HERO_IMAGE = "https://media.base44.com/images/public/69bf8af46c81bb39ef461e54/c00fa45a3_generated_b887e2e0.png";

export default function Landing() {
  return (
    <div style={{ fontFamily: "'Outfit', sans-serif" }}>
      <Navbar />
      <HeroSection heroImage={HERO_IMAGE} />
      <ServicesSection />
      <HowItWorks />
      <AIDoctorSection />
      <TeamSection />
      <AppScreenshots />
      <AvailabilityMap />
      <CTASection />
      <FooterBar />
    </div>
  );
}