import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustMetrics from '@/components/TrustMetrics';
import SurgicalProtocol from '@/components/SurgicalProtocol';
import AboutDoctor from '@/components/AboutDoctor';
import Services from '@/components/Services';
import FAQ from '@/components/FAQ';
import Units from '@/components/Units';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-brand-navy overflow-hidden">
      <Navbar />
      <Hero />
      <TrustMetrics />
      <SurgicalProtocol />
      <AboutDoctor />
      <Services />
      <FAQ />
      <Units />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
