import React from 'react';
import { Language } from '../../types';
import { Check, ShieldAlert, Cpu, Award, Zap } from 'lucide-react';

interface MethodologySectionProps {
  lang: Language;
}

export const MethodologySection: React.FC<MethodologySectionProps> = ({ lang }) => {
  const steps = [
    {
      num: '01',
      phaseFr: 'Amont CAPEX',
      phaseEn: 'Pre-CAPEX Framing',
      titleFr: 'Cadrage & analyse des risques CAPEX',
      titleEn: 'Scoping & CAPEX Risk Assessment',
      descFr: 'Lecture structurée de vos besoins (URS), contraintes réglementaires (GMP, HACCP, ATEX) et diagnostic technique des angles morts en 30 minutes.',
      descEn: 'Structured review of your URS requirements, regulatory constraints (GMP, HACCP, ATEX), and 30-min blind spot diagnostic.',
      tags: ['URS', 'GMP / HACCP / ATEX', 'Diagnostic 30 min'],
      icon: ShieldAlert
    },
    {
      num: '02',
      phaseFr: 'Ingénierie procédés',
      phaseEn: 'Process Design',
      titleFr: 'Ingénierie procédés & validation technique',
      titleEn: 'Process Engineering & Design Validation',
      descFr: 'Production des livrables décisionnels : PFD, P&ID, bilans thermiques et hydrauliques, dimensionnements cuves & pompes, spécifications fournisseurs.',
      descEn: 'Production of key deliverables: PFD, P&ID, thermal & hydraulic balances, vessel & pump sizing, vendor specifications.',
      tags: ['PFD / P&ID', 'Calculs Hydrauliques', 'Spéc. Fournisseurs'],
      icon: Cpu
    },
    {
      num: '03',
      phaseFr: 'Décision & arbitrage',
      phaseEn: 'CAPEX Decision',
      titleFr: 'Plan d’action & arbitrages CAPEX',
      titleEn: 'Action Plan & CAPEX Trade-Offs',
      descFr: 'Un plan de priorisation clair : risques critiques, décisions à figer, alternatives techniques et calendrier réaliste avant consultations.',
      descEn: 'Clear prioritization roadmap: critical risks, frozen choices, technical alternatives, and realistic timeline before tender.',
      tags: ['Priorités CAPEX', 'Maîtrise Budget', 'Calendrier Réaliste'],
      icon: Award
    },
    {
      num: '04',
      phaseFr: 'Mise en service',
      phaseEn: 'Commissioning',
      titleFr: 'MES sécurisée & transfert exploitation',
      titleEn: 'Secure Start-up & Operations Handover',
      descFr: 'Encadrement des phases FAT/SAT, des qualifications (QI/QO/QP) et de la formation des équipes d’opérateurs pour un démarrage fiable.',
      descEn: 'Oversight of FAT/SAT phases, qualification protocol execution (IQ/OQ/PQ), and team training for seamless startup.',
      tags: ['FAT / SAT', 'QI / QO / QP', 'Formation Équipes'],
      icon: Zap
    }
  ];

  return (
    <section id="methodology" className="py-24 bg-[#020812] relative border-t border-[#00D9FF]/15 bg-dots-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#00D9FF]/10 border border-[#00D9FF]/30 text-[#00D9FF] font-tech text-xs uppercase tracking-widest mb-4">
            <span>Méthodologie Éprouvée</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-[#F5F8FA] tracking-tight">
            {lang === 'fr'
              ? 'De la conception à la mise en service sans mauvaise surprise'
              : 'From Concept to Start-up With Zero Surprises'}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#AAB7C4]">
            {lang === 'fr'
              ? '4 étapes structurées pour sécuriser votre projet CAPEX — zéro dérive budgétaire, zéro retard en qualification.'
              : '4 structured steps to secure your CAPEX project — zero budget drift, zero qualification delays.'}
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => {
            const IconComp = step.icon;
            return (
              <div
                key={step.num}
                className="glass-card glass-card-hover p-6 rounded-3xl relative flex flex-col justify-between border border-[#00D9FF]/20 hover:border-[#00D9FF]/60"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-tech text-2xl font-black text-[#00D9FF] bg-[#00D9FF]/10 px-3 py-1 rounded-xl border border-[#00D9FF]/30">
                      {step.num}
                    </span>
                    <div className="p-2.5 rounded-xl bg-[#07111F] text-[#00D9FF] border border-white/10">
                      <IconComp className="w-5 h-5" />
                    </div>
                  </div>

                  <span className="font-tech text-xs uppercase font-bold text-[#B8F500]">
                    {lang === 'fr' ? step.phaseFr : step.phaseEn}
                  </span>

                  <h3 className="font-display font-bold text-lg text-[#F5F8FA] mt-2 mb-3">
                    {lang === 'fr' ? step.titleFr : step.titleEn}
                  </h3>

                  <p className="text-[#AAB7C4] text-xs leading-relaxed font-sans mb-4">
                    {lang === 'fr' ? step.descFr : step.descEn}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 space-y-1.5">
                  {step.tags.map((t, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-[11px] font-tech text-[#F5F8FA]">
                      <Check className="w-3 h-3 text-[#00D9FF]" />
                      <span>{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
