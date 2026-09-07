import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustMetrics from '@/components/TrustMetrics';
import Services from '@/components/Services';
import AboutDoctor from '@/components/AboutDoctor';
import SurgicalProtocol from '@/components/SurgicalProtocol';
import Units from '@/components/Units';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-brand-navy overflow-hidden">
      <Navbar />
      <Hero />
      <TrustMetrics />
      <Services />
      <AboutDoctor />
      <SurgicalProtocol />
      <Units />
      <FAQ />
      <FinalCTA />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
