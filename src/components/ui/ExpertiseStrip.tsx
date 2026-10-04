import React from 'react';
import { EXPERTISE_CARDS } from '../../data/content';
import { Language } from '../../types';
import { Cpu, TrendingUp, ShieldCheck, CheckCircle2, Zap, Sliders } from 'lucide-react';

interface ExpertiseStripProps {
  lang: Language;
}

const iconMap: Record<string, React.ReactNode> = {
  Cpu: <Cpu className="w-6 h-6 text-[#00D9FF]" />,
  TrendingUp: <TrendingUp className="w-6 h-6 text-[#1D6FFF]" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-[#00D9FF]" />,
  CheckCircle2: <CheckCircle2 className="w-6 h-6 text-[#B8F500]" />,
  Zap: <Zap className="w-6 h-6 text-[#00D9FF]" />,
  Sliders: <Sliders className="w-6 h-6 text-[#1D6FFF]" />
};

export const ExpertiseStrip: React.FC<ExpertiseStripProps> = ({ lang }) => {
  return (
    <section id="expertise" className="py-16 bg-[#020812] border-y border-[#00D9FF]/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-10">
          <h2 className="font-tech text-xs uppercase tracking-widest text-[#00D9FF]">
            {lang === 'fr' ? 'Domaines d’Expertise Métier Integrés' : 'Integrated Core Expertise'}
          </h2>
          <p className="font-display font-extrabold text-2xl sm:text-3xl text-[#F5F8FA] mt-2">
            {lang === 'fr'
              ? 'Une lecture transverse : Procédés, Utilités, Qualité & Mise en service'
              : 'End-to-End View: Process, Utilities, Quality & Commissioning'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {EXPERTISE_CARDS.map((card) => (
            <div
              key={card.id}
              className="glass-card glass-card-hover p-6 rounded-2xl relative overflow-hidden group"
            >
              <div className="flex items-start justify-between">
                <div className="p-3 rounded-xl bg-[#07111F] border border-[#00D9FF]/30 group-hover:border-[#00D9FF] transition-colors">
                  {iconMap[card.icon] || <Cpu className="w-6 h-6 text-[#00D9FF]" />}
                </div>

                {card.metric && (
                  <span className="font-tech text-xs uppercase font-bold text-[#00D9FF] bg-[#00D9FF]/10 px-2.5 py-1 rounded border border-[#00D9FF]/30">
                    {card.metric}
                  </span>
                )}
              </div>

              <h3 className="font-display font-bold text-lg text-[#F5F8FA] mt-4">
                {lang === 'fr' ? card.title : card.titleEn}
              </h3>

              <p className="text-sm text-[#AAB7C4] mt-2 leading-relaxed font-sans">
                {lang === 'fr' ? card.desc : card.descEn}
              </p>

              {/* Accent Line */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#00D9FF]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
