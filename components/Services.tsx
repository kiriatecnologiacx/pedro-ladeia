'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowUpRight, Sparkles, Eye, Shield, Layers, ChevronDown, ChevronUp } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function Services() {
  const [expandedCards, setExpandedCards] = useState<{ [key: number]: boolean }>({});

  const toggleExpand = (index: number) => {
    setExpandedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const whatsappBase =
    'https://wa.me/5531998972000?text=Ol%C3%A1%2C%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20';

  const services = [
    {
      number: '01',
      title: 'Cirurgia de Catarata & Lentes Premium',
      category: 'Restauração Visual',
      shortDesc:
        'Microcirurgia de alta precisão com implante de lentes intraoculares para recuperação da visão nítida e independência dos óculos.',
      fullDesc:
        'Procedimento microcirúrgico a laser com implante de lentes intraoculares de última geração (multifocais, trifocais e tóricas). Permite recuperar a visão nítida em todas as distâncias com máxima independência dos óculos.',
      features: [
        'Cálculo biométrico de alta precisão a laser',
        'Lentes tóricas para correção de astigmatismo',
        'Recuperação rápida e minimamente invasiva',
      ],
      icon: Eye,
      tag: 'Catarata Premium',
    },
    {
      number: '02',
      title: 'Tratamento Avançado de Ceratocone',
      category: 'Especialidade em Córnea',
      shortDesc:
        'Referência em Minas Gerais na estabilização da córnea e reabilitação óptica com Crosslinking, Anel de Ferrara e lentes esclerais.',
      fullDesc:
        'Uma das maiores referências no tratamento do ceratocone em Minas Gerais. Abordagem personalizada com Crosslinking para estabilização da córnea, Implante de Anel Intrastromal (Ferrara) e adaptação de lentes esclerais de alta performance.',
      features: [
        'Crosslinking do colágeno corneano',
        'Implante de anel intraestromal a laser',
        'Lentes de contato esclerais sob medida',
      ],
      icon: Sparkles,
      tag: 'Referência em Córnea',
    },
    {
      number: '03',
      title: 'Cirurgia Refrativa Personalizada a Laser',
      category: 'Liberdade sem Óculos',
      shortDesc:
        'Correção personalizada de Miopia, Astigmatismo e Hipermetropia com tecnologias guiadas por topografia (Femto-LASIK e PRK).',
      fullDesc:
        'Correção precisa de Miopia, Hipermetropia e Astigmatismo através de tecnologias a laser guiadas por aberrometria (Femto-LASIK e PRK). Planejamento centrado na curvatura e espessura única dos seus olhos.',
      features: [
        'LASIK e PRK personalizados a laser',
        'Correção de aberrações de alta ordem',
        'Retorno ágil às atividades diárias',
      ],
      icon: Layers,
      tag: 'Refrativa a Laser',
    },
    {
      number: '04',
      title: 'Exames Diagnósticos de Alta Complexidade',
      category: 'Medicina de Precisão',
      shortDesc:
        'Avaliação minuciosa com tomografia de córnea (Pentacam), mapeamento de retina e biometria óptica para segurança cirúrgica total.',
      fullDesc:
        'Bateria diagnóstica com equipamentos oftalmológicos modernos para avaliação detalhada de Córnea, Retina, Nervo Óptico e Glaucoma. Laudos precisos para condução clínica e planejamento cirúrgico seguro.',
      features: [
        'Tomografia e Topografia de Córnea (Pentacam)',
        'Biometria óptica computadorizada',
        'Mapeamento de retina e tonometria',
      ],
      icon: Shield,
      tag: 'Diagnóstico Avançado',
    },
  ];

  return (
    <section
      id="especialidades"
      className="py-20 sm:py-28 bg-brand-beige-light text-brand-black relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 sm:mb-16 gap-5">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-brand-beige-dark uppercase mb-3">
              <span>✦ ÁREAS DE ATUAÇÃO & CIRURGIAS</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl text-brand-black font-normal leading-tight">
              Excelência técnica e tecnologia para cada detalhe da sua visão.
            </h2>
          </div>
          <p className="font-sans text-xs sm:text-sm text-brand-charcoal/80 max-w-md font-light leading-relaxed">
            Abordagem cirúrgica refinada que alia diagnósticos ultramodernos ao respeito absoluto pela singularidade de cada paciente.
          </p>
        </div>

        {/* Highlight Image Banner */}
        <div className="mb-10 sm:mb-14 rounded-2xl sm:rounded-3xl overflow-hidden bg-brand-beige-card border border-brand-beige shadow-md relative group">
          <div className="grid lg:grid-cols-12 gap-0 items-center">
            <div className="lg:col-span-7 relative h-60 sm:h-80 lg:h-96 w-full overflow-hidden">
              <Image
                src="/clinic_laser_tech.jpg"
                alt="Tecnologia cirúrgica oftalmológica avançada"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-beige-card/30 to-brand-beige-card hidden lg:block" />
            </div>

            <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] font-semibold tracking-widest text-brand-beige-dark uppercase mb-2 sm:mb-3">
                <span>✦ AMBIENTE CIRÚRGICO & DIAGNÓSTICO</span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl text-brand-black font-normal mb-3 sm:mb-4">
                Infraestrutura de padrão internacional em Nova Lima e Santa Luzia.
              </h3>
              <p className="text-xs sm:text-sm text-brand-charcoal/80 font-light leading-relaxed mb-4 sm:mb-6">
                Equipamentos de tomografia de córnea, microscopia de alta resolução e lasers cirúrgicos de precisão micrométrica proporcionam máxima segurança antes, durante e após o seu procedimento.
              </p>
              <div className="flex items-center gap-2 text-[11px] sm:text-xs text-brand-black font-medium uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-beige-dark shrink-0" />
                <span>Rigor técnico validado por 15+ anos de prática cirúrgica</span>
              </div>
            </div>
          </div>
        </div>

        {/* Compact Services Grid with Expandable "Saiba Mais" */}
        <div id="cirurgias" className="grid md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8">
          {services.map((srv, index) => {
            const isExpanded = !!expandedCards[index];
            const queryUrl = `${whatsappBase}${encodeURIComponent(
              srv.title
            )}%20com%20o%20Dr.%20Pedro%20Ladeia.`;

            return (
              <div
                key={index}
                className="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-brand-beige/70 hover:border-brand-black/30 transition-all duration-300 hover:shadow-lg flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar with Number & Category */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-serif text-2xl sm:text-3xl text-brand-black font-bold tracking-tight">
                      {srv.number}
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-sans uppercase tracking-wider px-3 py-1 rounded-full bg-brand-beige-sand text-brand-charcoal font-medium border border-brand-beige">
                      {srv.tag}
                    </span>
                  </div>

                  <span className="text-[11px] sm:text-xs font-semibold tracking-wider uppercase text-brand-beige-dark block mb-1.5">
                    {srv.category}
                  </span>

                  <h3 className="font-serif text-lg sm:text-xl font-medium text-brand-black mb-2.5">
                    {srv.title}
                  </h3>

                  {/* Concise Summary (No text walls) */}
                  <p className="text-xs sm:text-sm text-brand-charcoal/80 font-light leading-relaxed mb-4">
                    {srv.shortDesc}
                  </p>

                  {/* Expandable "Saiba mais" Dropdown Button */}
                  <button
                    onClick={() => toggleExpand(index)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-beige-dark hover:text-brand-black mb-4 transition-colors focus:outline-none"
                    aria-expanded={isExpanded}
                  >
                    <span>{isExpanded ? 'Ocultar detalhes' : 'Saiba mais sobre o procedimento'}</span>
                    {isExpanded ? (
                      <ChevronUp className="w-3.5 h-3.5" />
                    ) : (
                      <ChevronDown className="w-3.5 h-3.5" />
                    )}
                  </button>

                  {/* Expandable technical details */}
                  {isExpanded && (
                    <div className="pt-3 pb-2 border-t border-brand-beige/40 mb-4 animate-fadeIn">
                      <p className="text-xs text-brand-charcoal/80 font-light leading-relaxed mb-3">
                        {srv.fullDesc}
                      </p>
                      <ul className="space-y-2">
                        {srv.features.map((feat, fIdx) => (
                          <li
                            key={fIdx}
                            className="flex items-center gap-2 text-xs text-brand-charcoal font-light"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-beige-dark shrink-0" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Card Direct WhatsApp CTA (Single Line) */}
                <a
                  href={queryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between w-full pt-4 border-t border-brand-beige/40 text-xs font-semibold uppercase tracking-wider text-brand-black hover:text-brand-beige-dark transition-colors group/link whitespace-nowrap mt-2"
                >
                  <span className="inline-flex items-center gap-2 truncate">
                    <WhatsAppIcon className="w-3.5 h-3.5 text-brand-black shrink-0" />
                    <span className="truncate">Agendar Avaliação</span>
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-brand-black group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform shrink-0 ml-2" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
