'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowUpRight, Sparkles, Eye, Shield, Layers } from 'lucide-react';

export default function Services() {
  const whatsappBase =
    'https://wa.me/5531998972000?text=Ol%C3%A1%2C%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20';

  const services = [
    {
      number: '01',
      title: 'Cirurgia de Catarata & Lentes Premium',
      category: 'Restauração da Clareza Visual',
      description:
        'Procedimento microcirúrgico a laser com implante de lentes intraoculares de última geração (multifocais, trifocais e tóricas). Permite recuperar a visão nítida em todas as distâncias com máxima independência dos óculos.',
      features: [
        'Cálculo biométrico de alta precisão',
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
      description:
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
      category: 'Liberdade sem Óculos ou Lentes',
      description:
        'Correção precisa de Miopia, Hipermetropia e Astigmatismo através de tecnologias a laser guiadas por aberrometria (Femto-LASIK e PRK). Planejamento centrado na curvatura e espessura única dos seus olhos.',
      features: [
        'LASIK e PRK personalizados',
        'Correção de aberrações de alta ordem',
        'Retorno ágil às atividades diárias',
      ],
      icon: Layers,
      tag: 'Refrativa a Laser',
    },
    {
      number: '04',
      title: 'Exames Diagnósticos de Alta Complexidade',
      category: 'Medicina de Precisão & Prevenção',
      description:
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
      className="py-24 sm:py-32 bg-brand-navy-light relative overflow-hidden"
    >
      {/* Background Subtle Elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] text-brand-gold uppercase mb-3">
              <span>✦ ÁREAS DE ATUAÇÃO & CIRURGIAS</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-normal leading-tight">
              Excelência técnica e tecnologia para cada detalhe da sua visão.
            </h2>
          </div>
          <p className="font-sans text-sm sm:text-base text-brand-offwhite/70 max-w-md font-light leading-relaxed">
            Abordagem cirúrgica refinada que alia diagnósticos ultramodernos ao respeito absoluto pela singularidade de cada paciente.
          </p>
        </div>

        {/* Highlight Image Banner */}
        <div className="mb-14 rounded-3xl overflow-hidden glass-panel border border-white/10 relative group">
          <div className="grid lg:grid-cols-12 gap-0 items-center">
            <div className="lg:col-span-7 relative h-72 sm:h-96 w-full overflow-hidden">
              <Image
                src="/clinic_laser_tech.jpg"
                alt="Tecnologia cirúrgica oftalmológica avançada"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-navy-light/40 to-brand-navy-light hidden lg:block" />
            </div>

            <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-widest text-brand-cyan uppercase mb-3">
                <span>✦ AMBIENTE CIRÚRGICO & DIAGNÓSTICO</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal mb-4">
                Infraestrutura de padrão internacional em Nova Lima e Santa Luzia.
              </h3>
              <p className="text-sm text-brand-offwhite/75 font-light leading-relaxed mb-6">
                Equipamentos de tomografia de córnea, microscopia de alta resolução e lasers cirúrgicos de precisão micrométrica proporcionam máxima segurança antes, durante e após o seu procedimento.
              </p>
              <div className="flex items-center gap-3 text-xs text-brand-gold font-medium uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                <span>Rigor técnico validado por 15+ anos de prática cirúrgica</span>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid (Editorial Numbered Cards) */}
        <div id="cirurgias" className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((srv, index) => {
            const Icon = srv.icon;
            const queryUrl = `${whatsappBase}${encodeURIComponent(
              srv.title
            )}%20com%20o%20Dr.%20Pedro%20Ladeia.`;

            return (
              <div
                key={index}
                className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 hover:border-brand-gold/40 transition-all duration-300 hover:shadow-2xl hover:shadow-brand-gold/5 group flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar with Number & Category */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-serif text-3xl sm:text-4xl text-brand-gold font-bold tracking-tight opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all">
                      {srv.number}
                    </span>
                    <span className="text-[11px] font-sans uppercase tracking-widest px-3 py-1 rounded-full glass-panel border border-brand-gold/25 text-brand-gold">
                      {srv.tag}
                    </span>
                  </div>

                  <span className="text-xs font-semibold tracking-wider uppercase text-brand-cyan/90 block mb-2">
                    {srv.category}
                  </span>

                  <h3 className="font-serif text-2xl text-white font-medium mb-4 group-hover:text-brand-gold-light transition-colors">
                    {srv.title}
                  </h3>

                  <p className="text-sm text-brand-offwhite/70 font-light leading-relaxed mb-6">
                    {srv.description}
                  </p>

                  {/* Bullet points */}
                  <ul className="space-y-2.5 mb-8 border-t border-white/5 pt-5">
                    {srv.features.map((feat, fIdx) => (
                      <li
                        key={fIdx}
                        className="flex items-center gap-2.5 text-xs text-brand-offwhite/80 font-light"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-gold shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card CTA */}
                <a
                  href={queryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between w-full pt-4 border-t border-white/10 text-xs font-semibold uppercase tracking-wider text-brand-gold hover:text-white transition-colors group/link"
                >
                  <span>Agendar Avaliação para {srv.title.split('&')[0]}</span>
                  <ArrowUpRight className="w-4 h-4 text-brand-gold group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
