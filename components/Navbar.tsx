'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappUrl =
    'https://wa.me/5531998972000?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta%20com%20o%20Dr.%20Pedro%20Ladeia.';

  const navLinks = [
    { name: 'Sobre o Médico', href: '#sobre' },
    { name: 'Especialidades', href: '#especialidades' },
    { name: 'Cirurgias Premium', href: '#cirurgias' },
    { name: 'Protocolo', href: '#protocolo' },
    { name: 'Unidades', href: '#unidades' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav py-3.5 shadow-xl shadow-black/60'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex flex-col group shrink-0">
          <div className="flex items-center gap-2">
            <span className="font-serif text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-white group-hover:text-brand-beige transition-colors">
              DR. PEDRO LADEIA
            </span>
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-beige"></span>
          </div>
          <span className="text-[10px] sm:text-[11px] font-sans tracking-[0.22em] text-brand-beige uppercase font-medium">
            Alta Oftalmologia · Córnea & Catarata
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[13px] tracking-wide text-brand-offwhite/70 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Header Right Action (Single line CTA) */}
        <div className="hidden sm:flex items-center">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-brand-black bg-brand-beige hover:bg-brand-beige-light transition-all duration-200 whitespace-nowrap shadow-sm"
          >
            <WhatsAppIcon className="w-3.5 h-3.5 text-brand-black" />
            <span className="whitespace-nowrap">Agendar Consulta</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-brand-black" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-white/80 hover:text-white focus:outline-none"
          aria-label="Abrir menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass-panel-dark border-t border-white/10 px-6 py-6 mt-3 space-y-4 animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm tracking-wide text-brand-offwhite/85 hover:text-brand-beige py-1.5 border-b border-white/5"
            >
              {link.name}
            </a>
          ))}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl text-xs font-semibold uppercase tracking-wider text-brand-black bg-brand-beige hover:bg-brand-beige-light transition-colors mt-4 whitespace-nowrap"
          >
            <WhatsAppIcon className="w-4 h-4 text-brand-black" />
            <span className="whitespace-nowrap">Agendar Consulta</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      )}
    </header>
  );
}
