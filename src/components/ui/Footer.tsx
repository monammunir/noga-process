import React from 'react';
import { COMPANY_INFO } from '../../data/content';
import { Language } from '../../types';
import { ExternalLink } from 'lucide-react';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  return (
    <footer className="bg-[#02006F] border-t border-white/10 pt-16 pb-12 font-sans text-white/80">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Col 1: Brand & Tagline */}
          <div className="lg:col-span-2 space-y-4">
            <img src="/images/logo.png" alt="Noga Process Logo" className="h-10 w-auto bg-white/90 p-1.5 rounded-lg" />
            <p className="font-display font-extrabold text-[14px] uppercase tracking-wider text-[#FFC000]">
              {COMPANY_INFO.tagline}
            </p>
            <p className="text-white/80 text-[15px] sm:text-[16px] leading-relaxed max-w-sm">
              Architecte des procédés industriels et partenaire de décision CAPEX. Accompagnement de la définition du besoin à la mise en service.
            </p>
          </div>

          {/* Col 2: Navigation Links - Minimum 16px */}
          <div className="space-y-3">
            <h4 className="font-display font-black text-[14px] uppercase text-[#FFC000] tracking-wider">Navigation</h4>
            <ul className="space-y-2.5 text-[16px] font-medium">
              <li><a href="#expertise" className="hover:text-[#FFC000] transition-colors">Expertises</a></li>
              <li><a href="#secteurs" className="hover:text-[#FFC000] transition-colors">Secteurs</a></li>
              <li><a href="#methode" className="hover:text-[#FFC000] transition-colors">Méthode</a></li>
              <li><a href="#apropos" className="hover:text-[#FFC000] transition-colors">À propos</a></li>
              <li><a href="#contact" className="hover:text-[#FFC000] transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Col 3: Secteurs - Minimum 16px */}
          <div className="space-y-3">
            <h4 className="font-display font-black text-[14px] uppercase text-[#FFC000] tracking-wider">Secteurs</h4>
            <ul className="space-y-2.5 text-[16px] font-medium">
              <li><a href="#secteurs" className="hover:text-[#FFC000] transition-colors">Pharmaceutique</a></li>
              <li><a href="#secteurs" className="hover:text-[#FFC000] transition-colors">Biotechnologie</a></li>
              <li><a href="#secteurs" className="hover:text-[#FFC000] transition-colors">Cosmétique</a></li>
              <li><a href="#secteurs" className="hover:text-[#FFC000] transition-colors">Agro-alimentaire</a></li>
              <li><a href="#secteurs" className="hover:text-[#FFC000] transition-colors">Chimie Fine</a></li>
            </ul>
          </div>

          {/* Col 4: Outils & Legals - Minimum 16px */}
          <div className="space-y-3">
            <h4 className="font-display font-black text-[14px] uppercase text-[#FFC000] tracking-wider">Ressources</h4>
            <ul className="space-y-2.5 text-[16px] font-medium">
              <li>
                <a
                  href={COMPANY_INFO.calculatorUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FFC000] transition-colors inline-flex items-center space-x-1"
                >
                  <span>Outils de Calcul</span>
                  <ExternalLink className="w-4 h-4 text-[#FFC000]" />
                </a>
              </li>
              <li><a href={COMPANY_INFO.linkedinUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#FFC000] transition-colors">LinkedIn</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-[14px] sm:text-[15px] text-white/70">
          <p>NOGA-PROCESS © 2026. Tous droits réservés. Bureau d’ingénierie des procédés industriels, Lille.</p>
          <p className="text-right">41 Rue Jacquemars Giélée, 59800 Lille · Bureaux Lesquin</p>
        </div>

      </div>
    </footer>
  );
};
