'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Como a cirurgia de catarata com lentes premium pode me livrar dos óculos?',
      a: 'A cirurgia moderna de catarata substitui o cristalino opaco por uma lente intraocular artificial altamente avançada. As lentes trifocais e de foco estendido corrigem a visão para perto, meia distância e longe simultaneamente. Pacientes com astigmatismo utilizam lentes tóricas personalizadas, permitindo excelente independência dos óculos na maioria das atividades do cotidiano.',
    },
    {
      q: 'Tenho Ceratocone. Quais são as melhores abordagens de tratamento?',
      a: 'O tratamento do ceratocone depende do estágio da ectasia. Nos estágios iniciais e em progressão, o Crosslinking do Colágeno Corneano estabiliza a estrutura da córnea. Para regularizar a curvatura e melhorar a visão, o implante de Anel Intrastromal (como o Anel de Ferrara) é altamente eficaz. Além disso, dispomos de adaptação precisa de lentes de contato esclerais sob medida.',
    },
    {
      q: 'A cirurgia refrativa a laser dói? Qual é o tempo de recuperação?',
      a: 'O procedimento é completamente indolor, realizado sob anestesia tópica com colírios específicos. O laser age em poucos segundos por olho. Na técnica LASIK, a recuperação visual é notada logo nas primeiras 24 horas. Na técnica PRK, a visão se estabiliza gradualmente ao longo dos primeiros dias, sempre com acompanhamento minucioso.',
    },
    {
      q: 'Qual é a diferença entre as consultas em Nova Lima e em Santa Luzia?',
      a: 'Ambas as unidades contam com a condução médica e o rigor técnico do Dr. Pedro Ladeia. A unidade de Nova Lima foi especialmente estruturada para atendimentos privativos e avaliações personalizadas no polo do Vila da Serra, enquanto a unidade de Santa Luzia (PHD Olhos) conta com nossa infraestrutura consolidada de exames e atendimento regional.',
    },
    {
      q: 'O consultório emite documentação para reembolso de convênios?',
      a: 'Sim. Oferecemos atendimento focado na excelência e personalização de cada consulta, emitindo nota fiscal detalhada, relatórios e laudos cirúrgicos completos para que você solicite o reembolso diretamente junto ao seu plano de saúde.',
    },
  ];

  return (
    <section id="faq" className="py-24 sm:py-32 bg-brand-beige-light text-brand-black relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] text-brand-beige-dark uppercase mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-brand-beige-dark" />
            <span>ESCLARECIMENTOS & DÚVIDAS FREQUENTES</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-brand-black font-normal leading-tight mb-4">
            Perguntas frequentes sobre tratamentos e procedimentos.
          </h2>
          <p className="text-sm text-brand-charcoal/80 font-light max-w-xl mx-auto">
            Transparência e segurança são valores fundamentais no cuidado com a sua saúde ocular.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-brand-beige/70 overflow-hidden transition-all duration-200 hover:border-brand-black/30 shadow-sm"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-6 sm:p-7 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-base sm:text-lg text-brand-black font-medium">
                    {faq.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-brand-beige-card flex items-center justify-center shrink-0 text-brand-black transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-brand-black text-brand-beige' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 sm:px-7 pb-6 text-sm text-brand-charcoal/80 font-light leading-relaxed border-t border-brand-beige/40 pt-4 animate-fadeIn">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Direct Contact Prompt (Single line button) */}
        <div className="mt-12 text-center bg-brand-beige-card p-6 rounded-2xl border border-brand-beige flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <MessageSquare className="w-5 h-5 text-brand-black shrink-0" />
            <div>
              <p className="text-xs sm:text-sm font-semibold text-brand-black">
                Ficou com alguma dúvida sobre o seu caso específico?
              </p>
              <p className="text-xs text-brand-charcoal/70">
                Nossa equipe está à disposição para orientá-lo diretamente pelo WhatsApp.
              </p>
            </div>
          </div>
          <a
            href="https://wa.me/5531998972000?text=Ol%C3%A1%2C%20tenho%20uma%20d%C3%BAvida%20espec%C3%ADfica%20para%20o%20Dr.%20Pedro%20Ladeia."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-black text-brand-beige text-xs font-semibold uppercase tracking-wider hover:bg-brand-charcoal transition-colors shrink-0 whitespace-nowrap"
          >
            <WhatsAppIcon className="w-3.5 h-3.5 text-brand-beige" />
            <span className="whitespace-nowrap">Falar Conosco</span>
          </a>
        </div>
      </div>
    </section>
  );
}
