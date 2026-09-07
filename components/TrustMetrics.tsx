import React from 'react';
import { Award, ShieldCheck, Cpu, UserCheck } from 'lucide-react';

export default function TrustMetrics() {
  const metrics = [
    {
      number: '15+',
      unit: 'Anos',
      label: 'De Excelência Médica',
      description: 'Trajetória sólida e respeito construído na oftalmologia mineira.',
      icon: Award,
    },
    {
      number: 'Milhares',
      unit: 'de Vidas',
      label: 'Transformadas com Clareza Visual',
      description: 'Cirurgias de alta complexidade e tratamentos restauradores.',
      icon: UserCheck,
    },
    {
      number: 'High-Tech',
      unit: 'Padrão Internacional',
      label: 'Tecnologia Diagnóstica de Ponta',
      description: 'Mapeamento corneano e biometria óptica de máxima precisão.',
      icon: Cpu,
    },
    {
      number: '2 Polos',
      unit: 'Estratégicos',
      label: 'Nova Lima & Santa Luzia',
      description: 'Atendimento privativo de alto padrão e clínica consolidada.',
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="relative z-20 -mt-8 max-w-7xl mx-auto px-5 sm:px-8">
      <div className="glass-panel-gold rounded-2xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl border border-brand-gold/25">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          {metrics.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`flex flex-col justify-between ${
                  idx > 0 ? 'sm:pl-6 pt-5 sm:pt-0' : ''
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight">
                      {item.number}
                    </span>
                    <span className="text-xs font-sans tracking-wider uppercase text-brand-gold font-semibold">
                      {item.unit}
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-brand-gold/10 flex items-center justify-center text-brand-gold">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-white mb-1">
                    {item.label}
                  </h3>
                  <p className="text-xs text-brand-offwhite/60 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
