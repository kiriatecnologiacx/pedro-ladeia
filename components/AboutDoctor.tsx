'use client';

import React from 'react';
import Image from 'next/image';
import { Award, ShieldCheck, HeartPulse, GraduationCap, CheckCircle } from 'lucide-react';

export default function AboutDoctor() {
  const credentials = [
    {
      title: 'Especialista em Córnea e Catarata',
      desc: 'Formação aprofundada com foco em procedimentos microcirúrgicos de alta complexidade.',
      icon: GraduationCap,
    },
    {
      title: '15+ Anos de Atuação Cirúrgica',
      desc: 'Mais de uma década e meia à frente de cirurgias de restauração visual e ectasias corneanas.',
      icon: Award,
    },
    {
      title: 'Fundador da Clínica Consolidada em Santa Luzia',
      desc: 'Liderança médica e reconhecimento regional na gestão e atendimento do PHD Olhos.',
      icon: ShieldCheck,
    },
    {
      title: 'Atendimento Privativo & Humanizado em Nova Lima',
      desc: 'Consultas detalhadas, tempo dedicado a cada caso e planejamento cirúrgico sob medida.',
      icon: HeartPulse,
    },
  ];

  return (
    <section id="sobre" className="py-24 sm:py-32 bg-brand-black relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-brand-beige/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Doctor Photo Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden glass-panel-dark p-2 shadow-2xl border border-brand-beige/25">
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-brand-black-surface">
                <Image
                  src="/dr_pedro_about.jpg"
                  alt="Dr. Pedro Henrique Ladeia Cruz no consultório"
                  fill
                  className="object-cover object-center hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-transparent to-transparent" />
                
                {/* Embedded Quote */}
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="font-serif italic text-white/90 text-sm sm:text-base leading-snug mb-2">
                    “A visão é o sentido mais precioso do ser humano. Cuidar dela exige rigor científico inegociável e sensibilidade médica profunda.”
                  </p>
                  <p className="text-[11px] font-sans uppercase tracking-widest text-brand-beige font-semibold">
                    — Dr. Pedro Henrique Ladeia Cruz
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative Beige Accent Frame */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border-b-2 border-r-2 border-brand-beige/30 rounded-br-3xl pointer-events-none -z-10" />
          </div>

          {/* Right Column: Editorial Narrative & Authority */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] text-brand-beige uppercase mb-3">
              <span>✦ TRAJETÓRIA MÉDICA & AUTORIDADE</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-normal leading-tight mb-6">
              Mais de 15 anos construindo confiança e excelência na oftalmologia mineira.
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-brand-offwhite/80 font-light leading-relaxed mb-8">
              <p>
                O <strong className="text-white font-medium">Dr. Pedro Henrique Ladeia Cruz</strong> construiu 
                uma trajetória sólida ao longo de mais de 15 anos dedicados à oftalmologia de excelência, 
                tornando-se uma das principais referências cirúrgicas de Minas Gerais. Em Santa Luzia, 
                consolidou uma clínica de destaque reconhecida pelo alto índice de fidelização de seus 
                pacientes e pela segurança consistente em procedimentos de alta complexidade.
              </p>
              <p>
                Sua atuação clínica e cirúrgica é fundamentada no domínio aprofundado em <strong className="text-brand-beige font-medium">Córnea, Catarata e Ceratocone</strong>. 
                Com o objetivo de oferecer um atendimento ainda mais exclusivo e sofisticado, expande sua 
                presença para <strong className="text-white font-medium">Nova Lima</strong>, trazendo aos pacientes 
                da região um modelo de consulta privativa, com tempo dedicado, diagnóstico computadorizado 
                e tecnologia cirúrgica de ponta.
              </p>
            </div>

            {/* Credential Grid */}
            <div className="grid sm:grid-cols-2 gap-4 w-full mb-8">
              {credentials.map((c, idx) => {
                const Icon = c.icon;
                return (
                  <div
                    key={idx}
                    className="glass-panel-dark p-4 rounded-2xl border border-white/5 flex items-start gap-3.5 hover:border-brand-beige/30 transition-colors"
                  >
                    <div className="w-9 h-9 rounded-xl bg-brand-beige/15 flex items-center justify-center text-brand-beige shrink-0 mt-0.5">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-1">
                        {c.title}
                      </h4>
                      <p className="text-xs text-brand-offwhite/60 font-light leading-relaxed">
                        {c.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Commitment Highlight */}
            <div className="w-full glass-panel-dark p-4 rounded-2xl border border-brand-beige/30 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-brand-beige/15 flex items-center justify-center text-brand-beige shrink-0">
                <CheckCircle className="w-5 h-5" />
              </div>
              <p className="text-xs sm:text-sm text-brand-offwhite/90 font-light">
                <strong className="text-white font-medium">Compromisso Ético & Científico:</strong> Cada indicação cirúrgica é estritamente personalizada, priorizando a segurança e a longevidade visual de cada paciente.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
