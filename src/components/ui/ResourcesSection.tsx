import React from 'react';
import { COMPANY_INFO } from '../../data/content';
import { Language } from '../../types';
import { Calculator, ExternalLink, Activity, CheckSquare } from 'lucide-react';

interface ResourcesSectionProps {
  lang: Language;
}

export const ResourcesSection: React.FC<ResourcesSectionProps> = ({ lang }) => {
  const toolsList = [
    { titleFr: 'Débit & Pertes de charge', titleEn: 'Flow Rate & Pressure Loss' },
    { titleFr: 'Calcul Hauteur Manométrique (HMT)', titleEn: 'Pump Total Dynamic Head (TDH)' },
    { titleFr: 'Bilans Échange Thermique', titleEn: 'Heat Transfer & Thermal Balance' },
    { titleFr: 'Vapeur pure & Réseaux Condensats', titleEn: 'Pure Steam & Condensate Networks' },
    { titleFr: 'Compatibilité Fittings Inox & Clamps', titleEn: 'Stainless Fitting & Clamp Sizing' }
  ];

  return (
    <section className="py-20 bg-[#020812] relative border-y border-[#00D9FF]/15 bg-tech-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="glass-card p-8 sm:p-12 rounded-3xl border border-[#00D9FF]/30 relative overflow-hidden bg-gradient-to-br from-[#07111F] via-[#020812] to-[#07111F]">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#B8F500]/10 border border-[#B8F500]/30 text-[#B8F500] font-tech text-xs uppercase tracking-widest">
                <Calculator className="w-3.5 h-3.5" />
                <span>Outils Terrain Gratuits NOGA</span>
              </div>

              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#F5F8FA]">
                {lang === 'fr'
                  ? 'Vérifiez vos calculs procédés avant chantier'
                  : 'Verify Your Process Sizing Before Construction'}
              </h2>

              <p className="text-[#AAB7C4] text-sm sm:text-base leading-relaxed font-sans">
                {lang === 'fr'
                  ? 'Des calculateurs conçus pour détecter rapidement les erreurs de dimensionnement (débit, HMT, thermique, raccords) avant qu’elles ne coûtent cher.'
                  : 'Calculators designed to quickly catch sizing errors (flow, pump head, thermal balance, fittings) before they turn into costly site fixes.'}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {toolsList.map((t, i) => (
                  <div key={i} className="flex items-center space-x-2 text-xs font-tech text-[#F5F8FA] bg-[#020812] p-2.5 rounded-lg border border-white/10">
                    <CheckSquare className="w-4 h-4 text-[#00D9FF] flex-shrink-0" />
                    <span>{lang === 'fr' ? t.titleFr : t.titleEn}</span>
                  </div>
                ))}
              </div>

            </div>

            {/* Action Card */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center p-8 rounded-2xl glass-card border border-[#00D9FF]/40 text-center space-y-4 bg-[#07111F]/80">
              <div className="w-16 h-16 rounded-2xl bg-[#00D9FF]/10 border border-[#00D9FF]/40 flex items-center justify-center text-[#00D9FF]">
                <Activity className="w-8 h-8 animate-pulse" />
              </div>

              <h3 className="font-display font-bold text-xl text-[#F5F8FA]">
                {lang === 'fr' ? 'Accéder à la suite de calcul NOGA' : 'Access NOGA Calculation Suite'}
              </h3>

              <p className="text-xs text-[#AAB7C4]">
                {lang === 'fr'
                  ? 'Plateforme en ligne sécurisée avec formules et abaques industriels.'
                  : 'Secure online portal with industrial formulas and charts.'}
              </p>

              <a
                href={COMPANY_INFO.calculatorUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full px-6 py-3.5 rounded-xl bg-[#00D9FF] text-[#020812] font-tech text-xs uppercase font-bold tracking-wider hover:bg-[#B8F500] transition-all shadow-[0_0_20px_rgba(0,217,255,0.4)]"
              >
                <span>{lang === 'fr' ? 'Ouvrir les Calculateurs →' : 'Open Calculators →'}</span>
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
