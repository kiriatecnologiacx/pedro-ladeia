import React from 'react';
import { ArrowUpRight, Instagram, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const whatsappUrl =
    'https://wa.me/5531998972000?text=Ol%C3%A1%2C%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20as%20consultas%20do%20Dr.%20Pedro%20Ladeia.';

  return (
    <footer className="bg-brand-navy-deep border-t border-white/10 pt-20 pb-12 text-brand-offwhite/70">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 pb-16 border-b border-white/10">
          {/* Col 1 & 2: Brand Identity */}
          <div className="lg:col-span-2 flex flex-col justify-between pr-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="font-serif text-2xl font-bold tracking-tight text-white">
                  DR. PEDRO LADEIA
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold"></span>
              </div>
              <p className="text-[11px] font-sans tracking-[0.25em] text-brand-gold uppercase font-medium mb-6">
                Alta Oftalmologia · Córnea & Catarata
              </p>
              <p className="text-xs sm:text-sm text-brand-offwhite/60 font-light leading-relaxed max-w-sm mb-6">
                Mais de 15 anos dedicados à excelência cirúrgica, restauração visual e segurança oftalmológica em Minas Gerais.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com/pedrohladeia"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full glass-panel flex items-center justify-center text-white/70 hover:text-brand-gold hover:border-brand-gold/50 transition-colors"
                aria-label="Instagram Dr. Pedro Ladeia"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full glass-panel flex items-center justify-center text-white/70 hover:text-brand-gold hover:border-brand-gold/50 transition-colors"
                aria-label="WhatsApp Dr. Pedro Ladeia"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 3: Navegação */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white mb-5">
              Navegação
            </h4>
            <ul className="space-y-3 text-xs">
              <li>
                <a href="#sobre" className="hover:text-brand-gold transition-colors">
                  Sobre o Médico
                </a>
              </li>
              <li>
                <a href="#especialidades" className="hover:text-brand-gold transition-colors">
                  Áreas de Atuação
                </a>
              </li>
              <li>
                <a href="#cirurgias" className="hover:text-brand-gold transition-colors">
                  Cirurgias Premium
                </a>
              </li>
              <li>
                <a href="#protocolo" className="hover:text-brand-gold transition-colors">
                  Protocolo Cirúrgico
                </a>
              </li>
              <li>
                <a href="#unidades" className="hover:text-brand-gold transition-colors">
                  Unidades de Atendimento
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-brand-gold transition-colors">
                  Perguntas Frequentes
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Tratamentos */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white mb-5">
              Procedimentos
            </h4>
            <ul className="space-y-3 text-xs">
              <li>
                <a href="#cirurgias" className="hover:text-brand-gold transition-colors">
                  Catarata & Lentes Premium
                </a>
              </li>
              <li>
                <a href="#cirurgias" className="hover:text-brand-gold transition-colors">
                  Tratamento de Ceratocone
                </a>
              </li>
              <li>
                <a href="#cirurgias" className="hover:text-brand-gold transition-colors">
                  Anel Intrastromal
                </a>
              </li>
              <li>
                <a href="#cirurgias" className="hover:text-brand-gold transition-colors">
                  Cirurgia Refrativa Laser
                </a>
              </li>
              <li>
                <a href="#cirurgias" className="hover:text-brand-gold transition-colors">
                  Exames & Biometria Óptica
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: Atendimento & Unidades */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white mb-5">
              Unidades
            </h4>
            <div className="space-y-4 text-xs">
              <div>
                <p className="font-semibold text-white">Nova Lima — MG</p>
                <p className="text-brand-offwhite/50 text-[11px]">Vila da Serra · Atendimento Privativo</p>
              </div>
              <div>
                <p className="font-semibold text-white">Santa Luzia — MG</p>
                <p className="text-brand-offwhite/50 text-[11px]">Rua Santa Luzia, 292 — Centro</p>
              </div>
              <div className="pt-2 border-t border-white/5">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-brand-gold hover:text-white transition-colors font-medium"
                >
                  <span>(31) 99897-2000</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-brand-offwhite/40">
          <p>
            Dr. Pedro Henrique Ladeia Cruz · Especialista em Córnea e Catarata · CRM-MG
          </p>
          <p>© {new Date().getFullYear()} Dr. Pedro Ladeia. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
