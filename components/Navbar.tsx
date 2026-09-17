'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappUrl =
    'https://wa.me/5531998972000?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta%20com%20o%20Dr.%20Pedro%20Ladeia.';

  const navLinks = [
    { name: 'Protocolo', href: '#protocolo' },
    { name: 'Sobre o Médico', href: '#sobre' },
    { name: 'Cirurgias Premium', href: '#cirurgias' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Unidades', href: '#unidades' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav-scrolled py-3 shadow-2xl shadow-black/40'
          : 'bg-transparent py-4 sm:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex flex-col group shrink-0">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span className="font-serif text-base sm:text-xl lg:text-2xl font-bold tracking-tight text-white group-hover:text-brand-beige transition-colors">
              DR. PEDRO LADEIA
            </span>
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-beige"></span>
          </div>
          <span className="text-[9px] sm:text-[10px] md:text-[11px] font-sans tracking-[0.2em] text-brand-beige uppercase font-medium">
            Oftalmologia de excelência · Córnea & Catarata
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs sm:text-[13px] tracking-wide text-brand-offwhite/75 hover:text-brand-beige transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Header Right Action (Strictly single line) */}
        <div className="hidden sm:flex items-center shrink-0">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-brand-navy-deep bg-brand-beige hover:bg-brand-beige-light transition-all duration-200 whitespace-nowrap shadow-md shadow-black/20"
          >
            <WhatsAppIcon className="w-3.5 h-3.5 text-brand-navy-deep shrink-0" />
            <span className="whitespace-nowrap">Agendar Consulta</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-brand-navy-deep shrink-0" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-white/90 hover:text-brand-beige focus:outline-none transition-colors"
          aria-label="Abrir menu de navegação"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass-panel-navy border-t border-brand-beige/20 px-6 py-6 mt-2 space-y-3.5 animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm tracking-wide text-brand-offwhite/90 hover:text-brand-beige py-2 border-b border-white/5"
            >
              {link.name}
            </a>
          ))}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl text-xs font-semibold uppercase tracking-wider text-brand-navy-deep bg-brand-beige hover:bg-brand-beige-light transition-colors mt-3 whitespace-nowrap shadow-lg"
          >
            <WhatsAppIcon className="w-4 h-4 text-brand-navy-deep" />
            <span className="whitespace-nowrap">Agendar Consulta</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      )}
    </header>
  );
}
