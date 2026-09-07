'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, Phone, MessageCircle, ShieldCheck } from 'lucide-react';

export default function FinalCTA() {
  const whatsappUrl =
    'https://wa.me/5531998972000?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta%20com%20o%20Dr.%20Pedro%20Ladeia.';

  return (
    <section className="py-24 sm:py-32 bg-brand-navy relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        <div className="relative rounded-3xl overflow-hidden glass-panel-gold border border-brand-gold/40 p-8 sm:p-16 lg:p-20 shadow-2xl">
          {/* Background Ambient Image */}
          <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
            <Image
              src="/macro_cornea_precision.jpg"
              alt="Precisão da córnea humana"
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/90 to-brand-navy/80" />
          </div>

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] text-brand-gold uppercase mb-4">
              <ShieldCheck className="w-4 h-4 text-brand-gold" />
              <span>TRANSFORME A SUA QUALIDADE DE VIDA VISUAL</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-normal leading-tight mb-6">
              Sua visão é única. O seu tratamento oftalmológico também deve ser.
            </h2>

            <p className="text-base sm:text-lg text-brand-offwhite/85 font-light leading-relaxed mb-10">
              Agende uma consulta com o <strong className="text-white font-medium">Dr. Pedro Henrique Ladeia Cruz</strong> e 
              tenha acesso a uma avaliação oftalmológica completa, tecnologia de ponta e um plano cirúrgico desenhado com precisão para os seus olhos.
            </p>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-sm font-semibold tracking-wider uppercase text-brand-navy bg-gradient-to-r from-brand-gold-light via-brand-gold to-brand-gold-dark hover:brightness-110 shadow-xl shadow-brand-gold/20 transition-all group"
              >
                <MessageCircle className="w-5 h-5 text-brand-navy" />
                <span>Agendar Consulta Agora</span>
                <ArrowRight className="w-4 h-4 text-brand-navy group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="tel:+5531998972000"
                className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-full text-sm font-medium tracking-wide text-brand-offwhite glass-panel hover:bg-white/10 transition-colors"
              >
                <Phone className="w-4 h-4 text-brand-gold" />
                <span>(31) 99897-2000</span>
              </a>
            </div>

            {/* Credential footer inside banner */}
            <div className="flex flex-wrap items-center gap-6 mt-10 pt-6 border-t border-white/10 text-xs text-brand-offwhite/60">
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
