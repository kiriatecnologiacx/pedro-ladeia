'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowUpRight, Sparkles, Eye, Shield, Layers, ChevronDown, ChevronUp } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { wa } from '@/lib/site';

export default function Services() {
  const [expandedCards, setExpandedCards] = useState<{ [key: number]: boolean }>({});

  const toggleExpand = (index: number) => {
    setExpandedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const services = [
    {
      number: '01',
      title: 'Catarata e lentes premium',
      category: 'Visão nítida',
      shortDesc:
        'Cirurgia que troca o cristalino embaçado por uma lente nova, podendo reduzir a dependência dos óculos.',
      fullDesc:
        'O cristalino, que é a lente natural do olho, fica embaçado com o tempo (catarata). Na cirurgia, ele é trocado por uma lente artificial. Há lentes que ajudam a enxergar de longe e de perto, e lentes que também corrigem o astigmatismo. A escolha depende do seu olho e da sua rotina.',
      features: [
        'Medidas do olho para escolher a lente certa',
        'Opções de lente que corrigem o astigmatismo',
        'Cirurgia por pequena incisão, com acompanhamento',
      ],
      icon: Eye,
      tag: 'Catarata',
    },
    {
      number: '02',
      title: 'Tratamento do ceratocone',
      category: 'Córnea',
      shortDesc:
        'Tratamentos que ajudam a firmar a córnea e a melhorar a visão de quem tem ceratocone, conforme o estágio de cada caso.',
      fullDesc:
        'No ceratocone a córnea vai ficando mais fina e inclinada. Dependendo do caso, o tratamento pode incluir um procedimento para firmar a córnea (crosslinking), pequenos anéis que ajudam a regularizar o formato dela e lentes de contato especiais feitas sob medida.',
      features: [
        'Procedimento para firmar a córnea (crosslinking)',
        'Anéis que regularizam o formato da córnea',
        'Lentes de contato especiais sob medida',
      ],
      icon: Sparkles,
      tag: 'Ceratocone',
    },
    {
      number: '03',
      title: 'Cirurgia a laser para o grau',
      category: 'Sem óculos',
      shortDesc:
        'Laser que corrige miopia, astigmatismo e hipermetropia, para quem quer enxergar sem depender dos óculos.',
      fullDesc:
        'O laser remodela a superfície da córnea para corrigir o grau. As técnicas mais usadas são o LASIK e o PRK. Antes, medimos a curvatura e a espessura da sua córnea para saber se você pode fazer e qual técnica é a mais indicada.',
      features: [
        'Técnicas LASIK e PRK, escolhidas para o seu caso',
        'Avaliação da córnea antes de indicar',
        'Orientação sobre o retorno às atividades',
      ],
      icon: Layers,
      tag: 'Laser',
    },
    {
      number: '04',
      title: 'Exames do olho',
      category: 'Diagnóstico',
      shortDesc:
        'Exames que mostram a córnea, a retina e as medidas do olho, para planejar a cirurgia com segurança.',
      fullDesc:
        'Fazemos exames indolores que fotografam e medem o seu olho por dentro e por fora. Eles ajudam a descobrir doenças e a planejar a cirurgia, quando ela é indicada.',
      features: [
        'Mapa da córnea (tomografia e topografia)',
        'Medida do olho para calcular a lente',
        'Exame da retina e medida da pressão do olho',
      ],
      icon: Shield,
      tag: 'Exames',
    },
  ];

  return (
    <section
      id="cirurgias"
      className="py-20 sm:py-28 bg-brand-beige-light text-brand-black relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 sm:mb-16 gap-5">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-brand-beige-dark uppercase mb-3">
              <span>✦ CIRURGIAS E TRATAMENTOS</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl text-brand-black font-normal leading-tight">
              Entenda cada procedimento em linguagem simples.
            </h2>
          </div>
          <p className="font-sans text-xs sm:text-sm text-brand-charcoal/80 max-w-md font-light leading-relaxed">
            Toda indicação é individual: só depois de avaliar o seu olho o Dr. Pedro diz o que faz sentido para você.
          </p>
        </div>

        {/* Highlight Image Banner */}
        <div className="mb-10 sm:mb-14 rounded-2xl sm:rounded-3xl overflow-hidden bg-brand-beige-card border border-brand-beige shadow-md relative group">
          <div className="grid lg:grid-cols-12 gap-0 items-center">
            <div className="lg:col-span-7 relative h-60 sm:h-80 lg:h-96 w-full overflow-hidden">
              <Image
                src="/clinic_laser_tech.jpg"
                alt="Equipamento de exames oftalmológicos"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-beige-card/30 to-brand-beige-card hidden lg:block" />
            </div>

            <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] font-semibold tracking-widest text-brand-beige-dark uppercase mb-2 sm:mb-3">
                <span>✦ EXAMES E PLANEJAMENTO</span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl text-brand-black font-normal mb-3 sm:mb-4">
                Exames que ajudam a planejar a sua cirurgia.
              </h3>
              <p className="text-xs sm:text-sm text-brand-charcoal/80 font-light leading-relaxed mb-4 sm:mb-6">
                Antes de qualquer indicação, medimos e mapeamos o seu olho. É com esses dados que o Dr. Pedro escolhe, junto com você, o melhor caminho.
              </p>
              <div className="flex items-center gap-2 text-[11px] sm:text-xs text-brand-black font-medium uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-beige-dark shrink-0" />
                <span>Mais de 10 anos de experiência em córnea e catarata</span>
              </div>
            </div>
          </div>
        </div>

        {/* Compact Services Grid with Expandable "Saiba Mais" */}
        <div className="grid md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8">
          {services.map((srv, index) => {
            const isExpanded = !!expandedCards[index];
            const queryUrl = wa(
              `Olá, gostaria de informações sobre ${srv.title.toLowerCase()} com o Dr. Pedro Ladeia.`
            );

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
                    <span>{isExpanded ? 'Ocultar detalhes' : 'Saiba mais'}</span>
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
                    <span className="truncate">Quero minha avaliação</span>
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
