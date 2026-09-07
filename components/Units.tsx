'use client';

import React from 'react';
import { MapPin, Phone, Clock, ArrowUpRight, ShieldCheck, Building2 } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function Units() {
  const units = [
    {
      name: 'Unidade Nova Lima',
      badge: 'Atendimento Privativo & Exclusivo',
      region: 'Vila da Serra / Alameda da Serra',
      address: 'Polo Médico e Empresarial de Nova Lima — MG',
      phone: '(31) 99897-2000',
      hours: 'Segunda a Sexta · Horários Agendados',
      description:
        'Consultório privativo desenhado para oferecer máxima discrição, pontualidade e sofisticação no coração do Vila da Serra.',
      highlights: [
        'Avaliação pré-operatória de alta complexidade',
        'Catarata com Lentes Premium e Refrativa a Laser',
        'Estacionamento e acesso privativo',
      ],
      whatsappMsg: 'Ol%C3%A1%2C%20gostaria%20de%20agendar%20consulta%20na%20unidade%20Nova%20Lima.',
    },
    {
      name: 'Unidade Santa Luzia (PHD Olhos)',
      badge: 'Clínica Consolidada · 15+ Anos',
      region: 'Centro Histórico & Comercial',
      address: 'Rua Santa Luzia, 292 — Centro, Santa Luzia — MG',
      phone: '(31) 99897-2000',
      hours: 'Segunda a Sexta: 08h às 18h',
      description:
        'A estrutura que consagrou a atuação cirúrgica do Dr. Pedro Ladeia na região metropolitana, com equipe completa e parque diagnóstico.',
      highlights: [
        'Centro de diagnóstico em Córnea e Ceratocone',
        'Equipe multidisciplinar e exames complementares',
        'Referência consolidada na saúde visual de Santa Luzia',
      ],
      whatsappMsg: 'Ol%C3%A1%2C%20gostaria%20de%20agendar%20consulta%20na%20unidade%20Santa%20Luzia.',
    },
  ];

  return (
    <section id="unidades" className="py-24 sm:py-32 bg-brand-black text-brand-offwhite relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] text-brand-beige uppercase mb-3">
              <span>✦ UNIDADES DE ATENDIMENTO</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-normal leading-tight">
              Duas localizações estratégicas para o seu conforto.
            </h2>
          </div>
          <p className="font-sans text-sm sm:text-base text-brand-offwhite/70 max-w-md font-light leading-relaxed">
            Escolha o polo de atendimento ideal para você com a mesma dedicação técnica e acolhimento do Dr. Pedro Ladeia.
          </p>
        </div>

        {/* Units Cards Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {units.map((unit, index) => {
            const bookingUrl = `https://wa.me/5531998972000?text=${unit.whatsappMsg}`;

            return (
              <div
                key={index}
                className="glass-panel-dark p-8 sm:p-12 rounded-3xl border border-brand-beige/25 hover:border-brand-beige/50 transition-all duration-300 shadow-2xl flex flex-col justify-between"
              >
                <div>
                  {/* Top Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[11px] font-sans uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-brand-beige/15 text-brand-beige font-semibold border border-brand-beige/30">
                      {unit.badge}
                    </span>
                    <Building2 className="w-5 h-5 text-brand-beige" />
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal mb-2">
                    {unit.name}
                  </h3>

                  <p className="text-xs text-brand-beige uppercase tracking-wider font-semibold mb-4">
                    {unit.region}
                  </p>

                  <p className="text-sm text-brand-offwhite/75 font-light leading-relaxed mb-6">
                    {unit.description}
                  </p>

                  {/* Location & Details Info */}
                  <div className="space-y-3 py-5 border-y border-white/10 text-xs text-brand-offwhite/85 mb-6">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-brand-beige shrink-0 mt-0.5" />
                      <span>{unit.address}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-brand-beige shrink-0" />
                      <span>{unit.phone} · WhatsApp & Ligações</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-4 h-4 text-brand-beige shrink-0" />
                      <span>{unit.hours}</span>
                    </div>
                  </div>

                  {/* Highlights list */}
                  <div className="space-y-2 mb-8">
                    {unit.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-center gap-2 text-xs text-brand-offwhite/70 font-light">
                        <ShieldCheck className="w-3.5 h-3.5 text-brand-beige shrink-0" />
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
                  className="inline-flex items-center justify-between w-full p-4 rounded-2xl bg-brand-beige text-brand-black text-xs font-semibold uppercase tracking-wider hover:bg-brand-beige-light transition-all group/btn whitespace-nowrap"
                >
                  <span className="inline-flex items-center gap-2 whitespace-nowrap">
                    <WhatsAppIcon className="w-3.5 h-3.5 text-brand-black" />
                    <span className="whitespace-nowrap">Agendar Consulta nesta Unidade</span>
                  </span>
                  <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform shrink-0" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
