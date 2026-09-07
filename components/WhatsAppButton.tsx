'use client';

import React from 'react';
import WhatsAppIcon from './WhatsAppIcon';

export default function WhatsAppButton() {
  const whatsappUrl =
    'https://wa.me/5531998972000?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta%20com%20o%20Dr.%20Pedro%20Ladeia.';

  return (
    <aside
      aria-label="Atendimento via WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center group"
    >
      {/* Tooltip on hover */}
      <span className="hidden md:inline-block mr-3 px-3.5 py-1.5 rounded-xl glass-panel-dark text-xs text-white font-medium shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none translate-x-2 group-hover:translate-x-0 border border-brand-beige/30 whitespace-nowrap">
        Agendar via WhatsApp
      </span>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 relative group-hover:shadow-[0_0_30px_rgba(37,211,102,0.6)]"
        aria-label="Falar pelo WhatsApp com Dr. Pedro Ladeia"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25 pointer-events-none" />
        <WhatsAppIcon className="w-7 h-7 text-white" />
      </a>
    </aside>
  );
}
