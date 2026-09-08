'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, Phone, ShieldCheck } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function FinalCTA() {
  const whatsappUrl =
    'https://wa.me/5531998972000?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta%20com%20o%20Dr.%20Pedro%20Ladeia.';

  return (
    <section className="py-20 sm:py-28 lg:py-32 bg-brand-navy-deep relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden glass-panel-navy border border-brand-beige/30 p-6 sm:p-12 lg:p-16 shadow-2xl">
          {/* Background Ambient Image */}
          <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
            <Image
              src="/macro_cornea_precision.jpg"
              alt="Precisão da córnea humana"
              fill
              className="object-cover object-center"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-navy-deep via-brand-navy-deep/90 to-brand-navy-deep/80" />
          </div>

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-semibold tracking-[0.25em] text-brand-beige uppercase mb-3 sm:mb-4">
              <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-beige" />
              <span>TRANSFORME A SUA QUALIDADE DE VIDA VISUAL</span>
            </div>

            <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl text-white font-normal leading-tight mb-4 sm:mb-6">
              Sua visão é única. O seu tratamento oftalmológico também deve ser.
            </h2>

            <p className="text-xs sm:text-base lg:text-lg text-brand-offwhite/85 font-light leading-relaxed mb-6 sm:mb-10">
              Agende uma consulta com o <strong className="text-white font-medium">Dr. Pedro Henrique Ladeia Cruz</strong> e 
              tenha acesso a uma avaliação oftalmológica completa, tecnologia de ponta e um plano cirúrgico desenhado com precisão para os seus olhos.
            </p>

            {/* Actions (Single line) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
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

            {/* Credential footer */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 mt-8 sm:mt-10 pt-5 sm:pt-6 border-t border-white/10 text-[11px] sm:text-xs text-brand-offwhite/60">
              <span>✦ Atendimento em Nova Lima & Santa Luzia</span>
              <span>✦ Especialista em Córnea, Catarata e Ceratocone</span>
              <span>✦ CRM-MG</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
