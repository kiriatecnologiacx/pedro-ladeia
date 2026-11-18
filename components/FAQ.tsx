'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { wa } from '@/lib/site';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Eu posso operar para ficar sem óculos?',
      a: 'Depende do seu olho. Para saber, é preciso uma avaliação: medimos o grau, mapeamos a córnea e conversamos sobre a sua rotina. Existem opções diferentes, como cirurgia de catarata com lente premium ou laser para o grau, e só depois da consulta o Dr. Pedro diz qual faz sentido para você, ou se ainda não é o momento.',
    },
    {
      q: 'A cirurgia dói?',
      a: 'A cirurgia é feita com anestesia em colírio, e em muitos casos com sedação leve, então a maioria das pessoas relata sentir pressão e luz, mas não dor. Nas horas seguintes pode haver desconforto leve, sensação de areia ou lacrimejamento, que o Dr. Pedro orienta a tratar com colírios. Cada pessoa reage de um jeito, e você é avisado de tudo antes.',
    },
    {
      q: 'Quanto tempo leva a recuperação?',
      a: 'Varia com o tipo de cirurgia. Na catarata, muita gente volta às atividades leves em poucos dias, seguindo as orientações de colírio e cuidados. No laser, a recuperação costuma ser rápida com a técnica LASIK e um pouco mais gradual com a PRK. O Dr. Pedro explica o seu prazo na consulta e você faz retornos para acompanhar tudo.',
    },
    {
      q: 'Tenho ceratocone. Tem tratamento?',
      a: 'Sim. O tratamento depende do estágio do ceratocone. Pode envolver um procedimento para firmar a córnea (crosslinking), pequenos anéis que regularizam o formato dela e lentes de contato especiais sob medida. Só a avaliação mostra o que se aplica ao seu caso.',
    },
    {
      q: 'Onde são as consultas?',
      a: 'O Dr. Pedro atende em Vila da Serra e em Belvedere, na região de Nova Lima. Ao agendar pelo WhatsApp, a equipe informa o endereço e os horários disponíveis.',
    },
  ];

  return (
    <section id="faq" className="py-24 sm:py-32 bg-brand-navy-deep text-brand-offwhite relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 -left-20 w-80 sm:w-96 h-80 sm:h-96 bg-brand-navy/60 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-0 w-80 sm:w-96 h-80 sm:h-96 bg-brand-beige/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] text-brand-beige uppercase mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-brand-beige" />
            <span>DÚVIDAS FREQUENTES</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal leading-tight mb-4">
            O que as pacientes mais perguntam antes de operar.
          </h2>
          <p className="text-sm text-brand-offwhite/75 font-light max-w-xl mx-auto">
            Respostas simples. Para o seu caso, só a avaliação individual responde.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="glass-panel-navy rounded-2xl border border-brand-beige/25 overflow-hidden transition-all duration-200 hover:border-brand-beige/50 shadow-xl"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-6 sm:p-7 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-base sm:text-lg text-white font-medium">
                    {faq.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-brand-beige/15 border border-brand-beige/30 flex items-center justify-center shrink-0 text-brand-beige transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-brand-beige text-brand-navy-deep' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 sm:px-7 pb-6 text-sm text-brand-offwhite/85 font-light leading-relaxed border-t border-white/10 pt-4 animate-fadeIn">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Direct Contact Prompt (Single line button) */}
        <div className="mt-12 text-center glass-panel-navy p-6 rounded-2xl border border-brand-beige/35 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
          <div className="flex items-center gap-3 text-left">
            <MessageSquare className="w-5 h-5 text-brand-beige shrink-0" />
            <div>
              <p className="text-xs sm:text-sm font-semibold text-white">
                Ficou com alguma dúvida sobre o seu caso específico?
              </p>
              <p className="text-xs text-brand-offwhite/70">
                Nossa equipe orienta você diretamente pelo WhatsApp.
              </p>
            </div>
          </div>
          <a
            href={wa('Olá, tenho uma dúvida específica para o Dr. Pedro Ladeia.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-beige text-brand-navy-deep text-xs font-semibold uppercase tracking-wider hover:bg-brand-beige-light transition-colors shrink-0 whitespace-nowrap shadow-md"
          >
            <WhatsAppIcon className="w-3.5 h-3.5 text-brand-navy-deep" />
            <span className="whitespace-nowrap">Falar Conosco</span>
          </a>
        </div>
      </div>
    </section>
  );
}
