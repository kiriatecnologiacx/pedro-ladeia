'use client';

import React from 'react';
import { MapPin, Phone, ArrowUpRight, ShieldCheck, Building2 } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { wa, PHONE_DISPLAY } from '@/lib/site';

export default function Units() {
  const units = [
    {
      name: 'Vila da Serra',
      badge: 'Nova Lima — MG',
      region: 'Atendimento com hora marcada',
      description:
        'Consultório para avaliações oftalmológicas, exames e planejamento de cirurgia de catarata, córnea e laser, com atendimento individual.',
      highlights: [
        'Avaliação para saber se você pode operar',
        'Catarata com lentes premium e cirurgia a laser para o grau',
        'Tratamento do ceratocone',
      ],
      whatsappMsg: 'Olá, gostaria de agendar uma consulta em Vila da Serra.',
    },
    {
      name: 'Belvedere',
      badge: 'Nova Lima — MG',
      region: 'Atendimento com hora marcada',
      description:
        'Mais uma opção de local para você ser avaliado(a) pelo Dr. Pedro, com a mesma conversa individual e o mesmo cuidado em cada consulta.',
      highlights: [
        'Consulta com tempo para tirar todas as dúvidas',
        'Exames e orientação sobre o melhor tratamento',
        'Acompanhamento antes e depois da cirurgia',
      ],
      whatsappMsg: 'Olá, gostaria de agendar uma consulta no Belvedere.',
    },
  ];

  return (
    <section id="unidades" className="py-20 sm:py-28 lg:py-32 bg-brand-beige-sand text-brand-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 sm:mb-16 gap-5">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-semibold tracking-[0.25em] text-brand-beige-dark uppercase mb-3">
              <span>✦ ONDE ATENDEMOS</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-brand-black font-normal leading-tight">
              Atendimento em Vila da Serra e Belvedere.
            </h2>
          </div>
          <p className="font-sans text-xs sm:text-sm text-brand-charcoal/80 max-w-md font-light leading-relaxed">
            Escolha o local mais conveniente para você. A conversa e o cuidado são os mesmos nos dois.
          </p>
        </div>

        {/* Units Cards Grid */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
          {units.map((unit, index) => {
            const bookingUrl = wa(unit.whatsappMsg);

            return (
              <div
                key={index}
                className="bg-white p-6 sm:p-10 rounded-2xl sm:rounded-3xl border border-brand-beige/80 hover:border-brand-black/30 transition-all duration-300 shadow-lg hover:shadow-xl flex flex-col justify-between"
              >
                <div>
                  {/* Top Badge */}
                  <div className="flex items-center justify-between mb-5 sm:mb-6">
                    <span className="text-[10px] sm:text-[11px] font-sans uppercase tracking-widest px-3 py-1.5 rounded-full bg-brand-beige-sand text-brand-charcoal font-semibold border border-brand-beige">
                      {unit.badge}
                    </span>
                    <Building2 className="w-5 h-5 text-brand-beige-dark shrink-0" />
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl text-brand-black font-normal mb-1.5">
                    {unit.name}
                  </h3>

                  <p className="text-[11px] sm:text-xs text-brand-beige-dark uppercase tracking-wider font-semibold mb-4">
                    {unit.region}
                  </p>

                  <p className="text-xs sm:text-sm text-brand-charcoal/80 font-light leading-relaxed mb-6">
                    {unit.description}
                  </p>

                  {/* Location & Details Info */}
                  <div className="space-y-2.5 py-4 border-y border-brand-beige/50 text-xs text-brand-charcoal mb-6">
                    <div className="flex items-start gap-2.5">
                      <MapPin className="w-4 h-4 text-brand-beige-dark shrink-0 mt-0.5" />
                      <span>{unit.name}, Nova Lima — MG · endereço enviado ao agendar</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Phone className="w-4 h-4 text-brand-beige-dark shrink-0" />
                      <span>{PHONE_DISPLAY} · WhatsApp</span>
                    </div>
                  </div>

                  {/* Highlights list */}
                  <div className="space-y-2 mb-6 sm:mb-8">
                    {unit.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-center gap-2 text-[11px] sm:text-xs text-brand-charcoal/85 font-light">
                        <ShieldCheck className="w-3.5 h-3.5 text-brand-beige-dark shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Direct CTA (Single Line) */}
                <a
                  href={bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between w-full p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-brand-black text-brand-beige text-xs font-semibold uppercase tracking-wider hover:bg-brand-charcoal transition-all group/btn whitespace-nowrap shadow-md"
                >
                  <span className="inline-flex items-center gap-2 whitespace-nowrap truncate">
                    <WhatsAppIcon className="w-3.5 h-3.5 text-brand-beige shrink-0" />
                    <span className="whitespace-nowrap truncate">Agendar neste local</span>
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-brand-beige group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform shrink-0 ml-2" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
