import React from 'react';
import { Language } from '../../types';
import { ShieldCheck, Cpu, CheckCircle2, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

interface MethodSectionProps {
  lang: Language;
}

export const MethodSection: React.FC<MethodSectionProps> = ({ lang }) => {
  const steps = [
    {
      step: '1',
      phaseFr: 'AMONT CAPEX',
      phaseEn: 'PRE-CAPEX',
      titleFr: 'Cadrage & analyse des risques CAPEX',
      titleEn: 'Scoping & CAPEX Risk Assessment',
      descFr: 'Analyse des besoins (URS), contraintes réglementaires (GMP, HACCP, ATEX) et identification des angles morts avant chantier.',
      descEn: 'Needs review (URS), regulatory constraints (GMP, HACCP, ATEX), and pre-construction blind spot detection.',
      icon: ShieldCheck
    },
    {
      step: '2',
      phaseFr: 'INGÉNIERIE',
      phaseEn: 'ENGINEERING',
      titleFr: 'Ingénierie procédés & validation technique',
      titleEn: 'Process Engineering & Technical Design',
      descFr: 'Production des livrables PFD, P&ID, bilans thermiques et hydrauliques, dimensionnements cuves & réseaux, spécifications d’achats.',
      descEn: 'Production of PFD, P&ID, hydraulic & thermal balances, vessel & piping sizing, purchasing specifications.',
      icon: Cpu
    },
    {
      step: '3',
      phaseFr: 'ARBITRAGE',
      phaseEn: 'DECISION',
      titleFr: 'Plan d’action & arbitrages CAPEX',
      titleEn: 'Action Plan & CAPEX Trade-Offs',
      descFr: 'Priorisation des risques critiques, arbitrages coût/performance et validation du calendrier réaliste d’exécution.',
      descEn: 'Critical risk prioritization, cost/performance trade-offs, and realistic execution schedule validation.',
      icon: CheckCircle2
    },
    {
      step: '4',
      phaseFr: 'MISE EN SERVICE',
      phaseEn: 'COMMISSIONING',
      titleFr: 'Mise en service sécurisée & qualification',
      titleEn: 'Secure Start-up & Qualification',
      descFr: 'Encadrement des phases FAT/SAT, des qualifications (QI/QO/QP) et formation des équipes d’opérateurs.',
      descEn: 'Oversight of FAT/SAT phases, IQ/OQ/PQ protocol execution, and operator team training.',
      icon: Zap
    }
  ];

  return (
    <section id="methode" className="py-20 lg:py-24 bg-[#02006F] text-white bg-noga-grid overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-16 text-left space-y-2"
        >
          <span className="font-display font-extrabold text-[14px] uppercase tracking-wider text-[#FFC000] block">
            {lang === 'fr' ? 'Méthodologie Projets' : 'Project Methodology'}
          </span>
          <h2 className="font-display font-black text-[32px] sm:text-[42px] text-white tracking-tight leading-[1.15]">
            {lang === 'fr'
              ? 'Une méthode en 4 étapes pour sécuriser votre investissement.'
              : 'A 4-step methodology to secure your industrial investment.'}
          </h2>
        </motion.div>

        {/* Spacious 2x2 Grid Layout: Wide, balanced cards with Blue hover glow */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {steps.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white text-[#111827] p-8 sm:p-9 rounded-2xl border border-gray-200/80 shadow-sm hover:border-[#02006F] hover:shadow-[0_0_30px_rgba(2,0,111,0.25)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <span className="w-11 h-11 rounded-full bg-[#02006F] text-[#FFC000] flex items-center justify-center font-display font-black text-[20px] shadow-sm">
                        {item.step}
                      </span>
                      <span className="font-display font-extrabold text-[14px] uppercase text-[#02006F] tracking-wider">
                        {lang === 'fr' ? item.phaseFr : item.phaseEn}
                      </span>
                    </div>
                    <IconComp className="w-6 h-6 text-[#02006F]" />
                  </div>

                  <h3 className="font-display font-black text-[24px] text-[#02006F] group-hover:text-[#1F2366] transition-colors leading-snug">
                    {lang === 'fr' ? item.titleFr : item.titleEn}
                  </h3>

                  <p className="font-sans text-[17px] sm:text-[18px] text-[#475569] leading-[1.65]">
                    {lang === 'fr' ? item.descFr : item.descEn}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
