'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, Phone, Award, ShieldCheck, GraduationCap, Sparkles } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function AboutDoctor() {
  const whatsappUrl =
    'https://wa.me/5531998972000?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta%20com%20o%20Dr.%20Pedro%20Ladeia.';

  const credentials = [
    {
      title: 'Especialista em Córnea & Catarata',
      desc: 'Formação aprofundada em microcirurgia de alta complexidade.',
      icon: GraduationCap,
    },
    {
      title: '+ de 10 Anos de Experiência',
      desc: 'Reconhecimento consistente em procedimentos de precisão e ectasias.',
      icon: Award,
    },
    {
      title: '2 Polos de Atendimento',
      desc: 'Atendimento Individualizado e de alto padrão no Vila da Serra e PHD Olhos.',
      icon: ShieldCheck,
    },
  ];

  return (
    <section id="sobre" className="py-20 sm:py-28 lg:py-32 bg-brand-navy-deep relative overflow-hidden">
      {/* Background Subtle Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 -left-20 w-80 sm:w-96 h-80 sm:h-96 bg-brand-navy/60 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-0 w-80 sm:w-96 h-80 sm:h-96 bg-brand-beige/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Doctor Photo Card */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-[320px] sm:max-w-[380px] rounded-3xl overflow-hidden glass-panel-navy p-2 shadow-2xl border border-brand-beige/25">
              <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-brand-navy-surface">
                <Image
                  src="/dr_pedro_about.jpg"
                  alt="Dr. Pedro Henrique Ladeia Cruz"
                  fill
                  className="object-cover object-center hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 380px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-deep/95 via-brand-navy-deep/25 to-transparent" />

                {/* Compact Doctor Signature */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 glass-panel-navy p-3 rounded-xl border border-brand-beige/25 backdrop-blur-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-white font-serif text-sm sm:text-base font-semibold tracking-wide">
                        Dr. Pedro Henrique Ladeia
                      </h4>
                      <p className="text-brand-beige text-[10px] sm:text-[11px] font-sans tracking-wider uppercase font-medium">
                        Oftalmologista · CRM-MG
                      </p>
                    </div>
                    <div className="w-7 h-7 rounded-full bg-brand-beige/15 border border-brand-beige/30 flex items-center justify-center text-brand-beige shrink-0">
                      <Sparkles className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Accent Border */}
            <div className="hidden sm:block absolute -bottom-3 -right-3 w-24 h-24 border-b-2 border-r-2 border-brand-beige/30 rounded-br-3xl pointer-events-none -z-10" />
          </div>

          {/* Right Column: Unified Conversion & Authority Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-semibold tracking-[0.25em] text-brand-beige uppercase mb-3 sm:mb-4">
              <span>✦ ATENDIMENTO INDIVIDUALIZADO E DE ALTO PADRÃO</span>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-white font-normal leading-tight mb-4 sm:mb-5">
              Sua visão é única. O seu tratamento oftalmológico também deve ser.
            </h2>

            <p className="text-xs sm:text-sm lg:text-base text-brand-offwhite/85 font-light leading-relaxed mb-6 sm:mb-8">
              Com <strong className="text-white font-medium">+ de 10 anos de experiência</strong> e{' '}
              uma sólida reputação em Minas Gerais, o <strong className="text-white font-medium">Dr. Pedro Henrique Ladeia Cruz</strong> une{' '}
              diagnósticos avançados, tecnologia microcirúrgica de ponta e um plano personalizado desenhado com rigor absoluto para a sua liberdade visual.
            </p>

            {/* Compact Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full mb-7 sm:mb-9">
              {credentials.map((c, idx) => {
                const Icon = c.icon;
                return (
                  <div
                    key={idx}
                    className="glass-panel-navy p-3.5 rounded-2xl border border-white/10 hover:border-brand-beige/30 transition-colors"
                  >
                    <div className="w-7 h-7 rounded-lg bg-brand-beige/15 flex items-center justify-center text-brand-beige shrink-0 mb-2">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <h5 className="text-[11px] font-semibold text-white uppercase tracking-wider mb-1">
                      {c.title}
                    </h5>
                    <p className="text-[10px] sm:text-[11px] text-brand-offwhite/65 font-light leading-snug">
                      {c.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Direct Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 w-full sm:w-auto">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase text-brand-navy-deep bg-brand-beige hover:bg-brand-beige-light shadow-xl transition-all duration-200 whitespace-nowrap group"
              >
                <WhatsAppIcon className="w-4 h-4 text-brand-navy-deep shrink-0" />
                <span className="whitespace-nowrap">Agendar Consulta Agora</span>
                <ArrowRight className="w-4 h-4 text-brand-navy-deep group-hover:translate-x-1 transition-transform shrink-0" />
              </a>

              <a
                href="tel:+5531998972000"
                className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 sm:py-4 rounded-full text-xs sm:text-sm font-medium tracking-wide text-brand-offwhite glass-panel-navy hover:bg-white/10 transition-colors whitespace-nowrap"
              >
                <Phone className="w-4 h-4 text-brand-beige shrink-0" />
                <span>(31) 99897-2000</span>
              </a>
            </div>

            {/* Credential Tags */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 mt-6 sm:mt-8 pt-4 sm:pt-5 border-t border-white/10 text-[11px] text-brand-offwhite/60">
              <span>✦ Atendimento: Nova Lima & Santa Luzia</span>
              <span>✦ Especialista em Córnea, Catarata e Ceratocone</span>
              <span>✦ CRM-MG</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
