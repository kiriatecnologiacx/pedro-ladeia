'use client';

import React from 'react';
import Image from 'next/image';
import {
  ArrowRight,
  Sparkles,
  Award,
  MapPin,
  Eye,
  CheckCircle2,
} from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function Hero() {
  const whatsappUrl =
    'https://wa.me/5531998972000?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta%20com%20o%20Dr.%20Pedro%20Ladeia.';

  return (
    <section className="relative min-h-[90vh] pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28 overflow-hidden bg-brand-navy-deep flex items-center">
      {/* Background Subtle Deep Sapphire & Warm Sand Lights */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-80 sm:w-96 h-80 sm:h-96 bg-brand-navy/60 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-0 w-80 sm:w-[500px] h-80 sm:h-[500px] bg-brand-beige/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-32 bg-gradient-to-t from-brand-navy-deep to-transparent" />

        {/* Minimalist Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Editorial Value Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Top Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full glass-panel-navy border border-brand-beige/25 text-brand-beige text-[10px] sm:text-xs font-semibold tracking-wider uppercase mb-5 sm:mb-6 shadow-sm">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-brand-beige animate-pulse"></span>
              <span>OFTALMOLOGIA DE EXCELÊNCIA // NOVA LIMA & SANTA LUZIA</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-normal leading-[1.18] sm:leading-[1.15] tracking-tight mb-5 sm:mb-6">
              A precisão cirúrgica que sua{' '}
              <span className="italic text-brand-beige font-serif">visão</span>{' '}
              merece. A autoridade médica em que você confia.
            </h1>

            {/* Subtitle */}
            <p className="font-sans text-sm sm:text-base lg:text-lg text-brand-offwhite/80 leading-relaxed font-light mb-6 sm:mb-8 max-w-2xl">
              Com mais de <strong className="text-white font-medium">10 anos de trajetória</strong> e{' '}
              uma sólida reputação na oftalmologia mineira, o <strong className="text-white font-medium">Dr. Pedro Henrique Ladeia Cruz</strong> une{' '}
              tecnologia cirúrgica de última geração, rigor científico e cuidado altamente individualizado para promover a liberdade visual de seus pacientes.
            </p>

            {/* Specialty Badges */}
            <div className="flex flex-wrap gap-2 sm:gap-2.5 mb-7 sm:mb-9">
              <span className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-medium text-white/90 glass-panel-navy px-3 sm:px-3.5 py-1.5 rounded-lg border border-white/10">
                <Sparkles className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-brand-beige" />
                Córnea & Ceratocone
              </span>
              <span className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-medium text-white/90 glass-panel-navy px-3 sm:px-3.5 py-1.5 rounded-lg border border-white/10">
                <Eye className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-brand-beige" />
                Catarata com Lentes Premium
              </span>
              <span className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-medium text-white/90 glass-panel-navy px-3 sm:px-3.5 py-1.5 rounded-lg border border-white/10">
                <CheckCircle2 className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-brand-beige" />
                Cirurgia Refrativa a Laser
              </span>
            </div>

            {/* CTA Group */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 w-full sm:w-auto">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase text-brand-navy-deep bg-brand-beige hover:bg-brand-beige-light shadow-xl transition-all duration-200 whitespace-nowrap group"
              >
                <WhatsAppIcon className="w-4 h-4 text-brand-navy-deep shrink-0" />
                <span className="whitespace-nowrap">Agendar Consulta</span>
                <ArrowRight className="w-4 h-4 text-brand-navy-deep group-hover:translate-x-1 transition-transform shrink-0" />
              </a>

              <a
                href="#protocolo"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 rounded-full text-xs sm:text-sm font-medium tracking-wide text-brand-offwhite/90 hover:text-white glass-panel-navy hover:bg-white/10 transition-colors whitespace-nowrap"
              >
                <span>Conhecer Protocolo & Cirurgias</span>
                <span className="text-brand-beige">↓</span>
              </a>
            </div>

            {/* Micro Social Proof / Location */}
            <div className="flex items-center gap-4 sm:gap-6 mt-8 sm:mt-10 pt-5 sm:pt-6 border-t border-white/10 text-[11px] sm:text-xs text-brand-offwhite/60">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-brand-beige shrink-0" />
                <span>Atendimento: <strong>Vila da Serra</strong> (Nova Lima) e <strong>PHD Olhos</strong> (Santa Luzia)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Doctor Portrait */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end mt-4 lg:mt-0">
            {/* Outer Subtle Aura */}
            <div className="absolute w-64 sm:w-80 h-64 sm:h-80 rounded-full bg-brand-beige/10 blur-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

            {/* Clean Portrait Container */}
            <div className="relative w-full max-w-[340px] sm:max-w-[400px] rounded-3xl overflow-hidden glass-panel-navy p-2 shadow-2xl border border-brand-beige/25">
              <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden bg-brand-navy-surface">
                <Image
                  src="/dr_pedro_hero.jpg"
                  alt="Dr. Pedro Henrique Ladeia Cruz - Oftalmologia de excelência, Córnea e Catarata"
                  fill
                  priority
                  className="object-cover object-top hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, 400px"
                />

                {/* Subtle bottom gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-deep/95 via-brand-navy-deep/30 to-transparent" />

                {/* Embedded Doctor Quote Card */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 bg-brand-navy-deep/95 p-3.5 sm:p-4 rounded-xl border border-brand-beige/40 shadow-2xl backdrop-blur-md">
                  <p className="font-sans font-semibold text-white text-xs sm:text-[13px] leading-snug tracking-wide mb-1.5 uppercase">
                    “MINHA MISSÃO É PROPORCIONAR SUA TÃO SONHADA LIBERDADE VISUAL ATRAVÉS DE CIRURGIAS ULTRA PERSONALIZADAS”
                  </p>
                  <p className="text-[11px] font-sans uppercase tracking-widest text-brand-beige font-bold">
                    — Dr. Pedro Ladeia
                  </p>
                </div>
              </div>
            </div>

            {/* Single Floating Badge on Top-Right */}
            <div className="hidden sm:flex absolute -top-3 -right-3 glass-panel-navy px-3.5 py-2.5 rounded-2xl shadow-xl items-center gap-2.5 animate-float border border-brand-beige/30">
              <div className="w-8 h-8 rounded-lg bg-brand-beige/15 flex items-center justify-center text-brand-beige font-serif font-bold text-sm">
                +10
              </div>
              <div className="text-left">
                <div className="text-[11px] font-bold text-white uppercase tracking-wider">
                  + de 10 Anos de Experiência
                </div>
                <div className="text-[10px] text-brand-offwhite/70">
                  Alta autoridade cirúrgica
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
