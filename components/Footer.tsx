import React from 'react';
import { ArrowUpRight, Instagram } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { wa, CREDENTIALS } from '@/lib/site';

export default function Footer() {
  const whatsappUrl = wa('Olá, gostaria de informações sobre as consultas do Dr. Pedro Ladeia.');

  return (
    <footer className="bg-brand-navy-deep border-t border-brand-beige/15 pt-16 sm:pt-20 pb-10 sm:pb-12 text-brand-offwhite/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 sm:pb-16 border-b border-white/10">
          {/* Col 1 & 2: Brand Identity */}
          <div className="sm:col-span-2 flex flex-col justify-between pr-0 lg:pr-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-white">
                  DR. PEDRO LADEIA
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-brand-beige"></span>
              </div>
              <p className="text-[10px] sm:text-[11px] font-sans tracking-[0.22em] text-brand-beige uppercase font-medium mb-4 sm:mb-6">
                Oftalmologista · Córnea & Catarata
              </p>
              <p className="text-xs sm:text-sm text-brand-offwhite/60 font-light leading-relaxed max-w-sm mb-6">
                Mais de 10 anos de experiência em córnea e catarata. Atendimento em Vila da Serra (Nova Lima) e Belvedere (Belo Horizonte).
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com/pedrohladeia"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full glass-panel-navy flex items-center justify-center text-white/70 hover:text-brand-beige hover:border-brand-beige/50 transition-colors"
                aria-label="Instagram Dr. Pedro Ladeia"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full glass-panel-navy flex items-center justify-center text-white/70 hover:text-brand-beige hover:border-brand-beige/50 transition-colors"
                aria-label="WhatsApp Dr. Pedro Ladeia"
              >
                <WhatsAppIcon className="w-4 h-4 text-white/70 hover:text-brand-beige" />
              </a>
            </div>
          </div>

          {/* Col 3: Navegação */}
          <div>
            <h4 className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-white mb-4 sm:mb-5">
              Navegação
            </h4>
            <ul className="space-y-2.5 sm:space-y-3 text-xs">
              <li>
                <a href="#protocolo" className="hover:text-brand-beige transition-colors">
                  Protocolo Cirúrgico
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-brand-beige transition-colors">
                  Sobre o Médico
                </a>
              </li>
              <li>
                <a href="#cirurgias" className="hover:text-brand-beige transition-colors">
                  Cirurgias
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-brand-beige transition-colors">
                  Perguntas Frequentes
                </a>
              </li>
              <li>
                <a href="#unidades" className="hover:text-brand-beige transition-colors">
                  Unidades de Atendimento
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Tratamentos */}
          <div>
            <h4 className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-white mb-4 sm:mb-5">
              Procedimentos
            </h4>
            <ul className="space-y-2.5 sm:space-y-3 text-xs">
              <li>
                <a href="#cirurgias" className="hover:text-brand-beige transition-colors">
                  Catarata e lentes premium
                </a>
              </li>
              <li>
                <a href="#cirurgias" className="hover:text-brand-beige transition-colors">
                  Tratamento de ceratocone
                </a>
              </li>
              <li>
                <a href="#cirurgias" className="hover:text-brand-beige transition-colors">
                  Anel na córnea (ceratocone)
                </a>
              </li>
              <li>
                <a href="#cirurgias" className="hover:text-brand-beige transition-colors">
                  Cirurgia para grau (laser)
                </a>
              </li>
              <li>
                <a href="#cirurgias" className="hover:text-brand-beige transition-colors">
                  Exames do olho
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: Atendimento & Unidades */}
          <div>
            <h4 className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-white mb-4 sm:mb-5">
              Unidades
            </h4>
            <div className="space-y-3.5 text-xs">
              <div>
                <p className="font-semibold text-white">Vila da Serra — Nova Lima, MG</p>
              </div>
              <div>
                <p className="font-semibold text-white">Belvedere — Belo Horizonte, MG</p>
              </div>
              <div className="pt-2 border-t border-white/5">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-brand-beige hover:text-white transition-colors font-medium whitespace-nowrap"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5 text-brand-beige" />
                  <span>(31) 99897-2000</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Legal */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] sm:text-xs text-brand-offwhite/40 text-center sm:text-left">
          <p>
            Dr. Pedro Henrique Ladeia Cruz · Oftalmologista · {CREDENTIALS}
          </p>
          <p>
            <a href="/privacidade" className="hover:text-brand-beige transition-colors underline underline-offset-2">
              Política de Privacidade
            </a>{' '}
            · © {new Date().getFullYear()} Dr. Pedro Ladeia
          </p>
        </div>
      </div>
    </footer>
  );
}
