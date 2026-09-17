'use client';

import React from 'react';
import { Stethoscope, FileSliders, Sparkles, UserCheck, ArrowRight } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function SurgicalProtocol() {
  const whatsappUrl =
    'https://wa.me/5531998972000?text=Ol%C3%A1%2C%20gostaria%20de%20entender%20o%20protocolo%20cir%C3%BArgico%20do%20Dr.%20Pedro%20Ladeia.';

  const steps = [
    {
      step: '01',
      title: 'Consulta Detalhada & Diagnóstico Computadorizado',
      description:
        'Exame oftalmológico aprofundado com análise tomográfica da córnea, mapeamento de retina e biometria óptica para identificar com precisão micrométrica as características do seu olho.',
      icon: Stethoscope,
      timeframe: 'Etapa 1 · Diagnóstico',
    },
    {
      step: '02',
      title: 'Planejamento Cirúrgico sob Medida',
      description:
        'Escolha customizada da lente intraocular premium (trifocal, tórica) ou indicação de anel intraestromal, crosslinking ou laser. Transparência total sobre expectativas e recuperação.',
      icon: FileSliders,
      timeframe: 'Etapa 2 · Estratégia',
    },
    {
      step: '03',
      title: 'Procedimento com Máxima Precisão & Conforto',
      description:
        'Realizado em centro cirúrgico oftalmológico de referência com anestesia em colírio, sedação leve e tecnologia a laser de última geração. Procedimento seguro, ágil e confortável.',
      icon: Sparkles,
      timeframe: 'Etapa 3 · Execução',
    },
    {
      step: '04',
      title: 'Acompanhamento Pós-Operatório Rigoroso',
      description:
        'Reavaliações sistemáticas no pós-operatório imediato e a longo prazo, garantindo estabilização perfeita da visão, conforto e tranquilidade completa.',
      icon: UserCheck,
      timeframe: 'Etapa 4 · Longevidade',
    },
  ];

  return (
    <section id="protocolo" className="py-24 sm:py-32 bg-brand-beige-sand text-brand-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] text-brand-beige-dark uppercase mb-3">
            <span>✦ DA PRIMEIRA AVALIAÇÃO AO PÓS-OPERATÓRIO</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-brand-black font-normal leading-tight mb-4">
            O Padrão Pedro Ladeia de Cuidado Cirúrgico.
          </h2>
          <p className="text-sm sm:text-base text-brand-charcoal/80 font-light leading-relaxed">
            Um fluxo de atendimento estruturado para proporcionar clareza, previsibilidade e máxima segurança em todas as etapas da sua jornada visual.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white p-8 rounded-3xl border border-brand-beige/80 hover:border-brand-black/30 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-serif text-3xl text-brand-black font-bold">
                      {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-brand-beige-card flex items-center justify-center text-brand-charcoal group-hover:bg-brand-black group-hover:text-brand-beige transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <span className="text-[11px] font-sans uppercase tracking-widest text-brand-beige-dark block mb-2 font-semibold">
                    {item.timeframe}
                  </span>

                  <h3 className="font-serif text-xl text-brand-black font-medium mb-3">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-brand-charcoal/80 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-brand-beige/50 flex items-center gap-2 text-[11px] text-brand-black uppercase tracking-wider font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-beige-dark" />
                  <span>Excelência Médica</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Banner (Single Line) */}
        <div className="mt-14 text-center">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase text-brand-beige bg-brand-black hover:bg-brand-charcoal shadow-xl transition-all duration-200 whitespace-nowrap group"
          >
            <WhatsAppIcon className="w-4 h-4 text-brand-beige" />
            <span className="whitespace-nowrap">Iniciar Minha Avaliação Oftalmológica</span>
            <ArrowRight className="w-4 h-4 text-brand-beige group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
