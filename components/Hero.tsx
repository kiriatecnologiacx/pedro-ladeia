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
    <section className="relative min-h-[92vh] pt-32 pb-20 lg:pt-36 lg:pb-28 overflow-hidden bg-brand-black flex items-center">
      {/* Background Subtle Warm Elements & Grid */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Soft Warm Sand Ambient Lights */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-brand-beige/5 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-brand-beige/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-40 bg-gradient-to-t from-brand-black-deep to-transparent" />

        {/* Minimalist Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Value Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Top Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass-panel-dark border-brand-beige/30 text-brand-beige text-[11px] sm:text-xs font-semibold tracking-wider uppercase mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-brand-beige animate-pulse"></span>
              <span>ALTA OFTALMOLOGIA // NOVA LIMA & SANTA LUZIA</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-white font-normal leading-[1.15] tracking-tight mb-6">
              A precisão cirúrgica que sua{' '}
              <span className="italic text-brand-beige font-serif">visão</span>{' '}
              merece. A autoridade médica em que você confia.
            </h1>

            {/* Subtitle */}
            <p className="font-sans text-base sm:text-lg text-brand-offwhite/80 leading-relaxed font-light mb-8 max-w-2xl">
              Com mais de <strong className="text-white font-medium">15 anos de trajetória</strong> e 
              uma sólida reputação na oftalmologia mineira, o <strong className="text-white font-medium">Dr. Pedro Henrique Ladeia Cruz</strong> une 
              tecnologia cirúrgica de última geração, rigor científico e cuidado 
              altamente individualizado em <span className="text-brand-beige font-medium">Nova Lima</span> e <span className="text-brand-beige font-medium">Santa Luzia</span>.
            </p>

            {/* Specialty Badges */}
            <div className="flex flex-wrap gap-2.5 mb-9">
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-white/90 glass-panel-dark px-3.5 py-1.5 rounded-lg border-white/10">
                <Sparkles className="w-3.5 h-3.5 text-brand-beige" />
                Córnea & Ceratocone
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-white/90 glass-panel-dark px-3.5 py-1.5 rounded-lg border-white/10">
                <Eye className="w-3.5 h-3.5 text-brand-beige" />
                Catarata com Lentes Premium
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-white/90 glass-panel-dark px-3.5 py-1.5 rounded-lg border-white/10">
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-beige" />
                Cirurgia Refrativa a Laser
              </span>
            </div>

            {/* CTA Group */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase text-brand-black bg-brand-beige hover:bg-brand-beige-light shadow-lg transition-all duration-200 whitespace-nowrap group"
              >
                <WhatsAppIcon className="w-4 h-4 text-brand-black" />
                <span className="whitespace-nowrap">Agendar Consulta Privativa</span>
                <ArrowRight className="w-4 h-4 text-brand-black group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#especialidades"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-xs sm:text-sm font-medium tracking-wide text-brand-offwhite/90 hover:text-white glass-panel-dark hover:bg-white/10 transition-colors whitespace-nowrap"
              >
                <span>Conhecer Tratamentos</span>
                <span className="text-brand-beige">↓</span>
              </a>
            </div>

            {/* Micro Social Proof / Location */}
            <div className="flex items-center gap-6 mt-10 pt-6 border-t border-white/10 text-xs text-brand-offwhite/60">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-brand-beige" />
                <span>Atendimento: <strong>Vila da Serra</strong> (Nova Lima) e <strong>PHD Olhos</strong> (Santa Luzia)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Doctor Image */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            {/* Outer Subtle Aura */}
            <div className="absolute w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-brand-beige/10 blur-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

            {/* Portrait Frame */}
            <div className="relative w-full max-w-[380px] sm:max-w-[420px] rounded-3xl overflow-hidden glass-panel-dark p-2 shadow-2xl shadow-black border border-brand-beige/25">
              <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden bg-brand-black-surface">
                <Image
                  src="/dr_pedro_hero.jpg"
                  alt="Dr. Pedro Henrique Ladeia Cruz - Especialista em Oftalmologia, Córnea e Catarata"
                  fill
                  priority
                  className="object-cover object-top hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, 420px"
                />

                {/* Subtle vignette overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent opacity-60" />

                {/* Name Badge */}
                <div className="absolute bottom-4 left-4 right-4 glass-panel-dark p-3.5 rounded-xl border border-white/15 backdrop-blur-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-white font-serif text-base font-semibold tracking-wide">
                        Dr. Pedro Henrique Ladeia
                      </h2>
                      <p className="text-brand-beige text-[11px] font-sans tracking-wider uppercase font-medium">
                        Córnea, Catarata & Ceratocone
                      </p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-brand-beige/15 border border-brand-beige/30 flex items-center justify-center text-brand-beige">
                      <Award className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Metric Card Top-Right */}
            <div className="hidden sm:flex absolute -top-4 -right-4 glass-panel-dark px-4 py-3 rounded-2xl shadow-2xl items-center gap-3 animate-float border border-brand-beige/30">
              <div className="w-10 h-10 rounded-xl bg-brand-beige/15 flex items-center justify-center text-brand-beige font-serif font-bold text-lg">
                15+
              </div>
              <div className="text-left">
                <div className="text-xs font-bold text-white uppercase tracking-wider">
                  Anos de Trajetória
                </div>
                <div className="text-[11px] text-brand-offwhite/70">
                  Alta autoridade cirúrgica
                </div>
              </div>
            </div>

            {/* Floating Metric Card Bottom-Left */}
            <div className="hidden sm:flex absolute -bottom-6 -left-6 glass-panel-dark px-4 py-3 rounded-2xl shadow-2xl items-center gap-3 border border-white/15">
              <div className="w-10 h-10 rounded-xl bg-brand-beige/15 flex items-center justify-center text-brand-beige">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="text-xs font-bold text-white uppercase tracking-wider">
                  Alto Índice de Fidelização
                </div>
                <div className="text-[11px] text-brand-offwhite/70">
                  Resultados validados por pacientes
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
