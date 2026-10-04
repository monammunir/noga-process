import React, { useState } from 'react';
import { PROCESS_TIMELINE } from '../../data/content';
import { Language } from '../../types';
import { Check, ChevronRight, Layers, Workflow, FileCode, CheckCircle, Shield, Rocket } from 'lucide-react';

interface ProcessJourneyProps {
  lang: Language;
}

const stepIcons = [Workflow, FileCode, Layers, Shield, CheckCircle, Rocket];

export const ProcessJourney: React.FC<ProcessJourneyProps> = ({ lang }) => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const activeStep = PROCESS_TIMELINE[activeStepIndex];

  return (
    <section className="py-24 bg-[#07111F] relative overflow-hidden bg-dots-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#1D6FFF]/10 border border-[#1D6FFF]/30 text-[#1D6FFF] font-tech text-xs uppercase tracking-widest mb-4">
            <span>Project Lifecycle Standard</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-[#F5F8FA] tracking-tight">
            {lang === 'fr' ? 'Parcours Projet Intégré' : 'Integrated Project Journey'}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#AAB7C4]">
            {lang === 'fr'
              ? 'De l’analyse amont des risques à la qualification et au transfert d’usine : une méthodologie sans angle mort.'
              : 'From front-end risk assessment to qualification and plant handover: a methodology with zero blind spots.'}
          </p>
        </div>

        {/* Timeline Navigation Nodes */}
        <div className="relative mb-12">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-[#020812] -translate-y-1/2 hidden md:block" />
          <div
            className="absolute top-1/2 left-0 h-1 bg-gradient-to-r from-[#00D9FF] to-[#1D6FFF] -translate-y-1/2 transition-all duration-500 hidden md:block"
            style={{ width: `${(activeStepIndex / (PROCESS_TIMELINE.length - 1)) * 100}%` }}
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 relative z-10">
            {PROCESS_TIMELINE.map((step, idx) => {
              const IconComp = stepIcons[idx] || Workflow;
              const isActive = idx === activeStepIndex;
              const isPast = idx < activeStepIndex;

              return (
                <button
                  key={step.stepNumber}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`flex flex-col items-center p-4 rounded-xl glass-card transition-all text-center ${
                    isActive
                      ? 'border-[#00D9FF] shadow-[0_0_20px_rgba(0,217,255,0.3)] bg-[#07111F]'
                      : isPast
                      ? 'border-[#1D6FFF]/50 text-[#F5F8FA]'
                      : 'border-white/10 opacity-70 hover:opacity-100'
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-tech text-xs font-bold transition-all mb-2 ${
                      isActive
                        ? 'bg-[#00D9FF] text-[#020812]'
                        : isPast
                        ? 'bg-[#1D6FFF] text-white'
                        : 'bg-[#020812] text-[#AAB7C4] border border-white/20'
                    }`}
                  >
                    {step.stepNumber}
                  </div>
                  <span className="font-tech text-xs uppercase font-semibold text-[#00D9FF]">
                    {lang === 'fr' ? step.phase : step.phaseEn}
                  </span>
                  <span className="font-sans text-xs font-medium text-[#F5F8FA] line-clamp-1 mt-1">
                    {lang === 'fr' ? step.title : step.titleEn}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Step Detail Card */}
        <div className="glass-card p-8 sm:p-10 rounded-3xl border border-[#00D9FF]/30 shadow-2xl animate-fadeIn">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center space-x-3">
                <span className="font-tech text-sm text-[#00D9FF] bg-[#00D9FF]/10 px-3 py-1 rounded-full border border-[#00D9FF]/30">
                  {lang === 'fr' ? `Jalon ${activeStep.stepNumber}` : `Milestone ${activeStep.stepNumber}`}
                </span>
                <span className="font-tech text-xs text-[#B8F500] uppercase tracking-wider">
                  Node ID: {activeStep.technicalNode}
                </span>
              </div>

              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#F5F8FA]">
                {lang === 'fr' ? activeStep.title : activeStep.titleEn}
              </h3>

              <p className="text-base text-[#AAB7C4] leading-relaxed font-sans">
                {lang === 'fr' ? activeStep.desc : activeStep.descEn}
              </p>

              <div className="pt-4 border-t border-[#00D9FF]/15">
                <h4 className="font-tech text-xs uppercase text-[#00D9FF] tracking-wider mb-3">
                  {lang === 'fr' ? 'Livrables Techniques Clés :' : 'Key Technical Deliverables:'}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {(lang === 'fr' ? activeStep.deliverables : activeStep.deliverablesEn).map((item, i) => (
                    <div key={i} className="flex items-center space-x-2 text-xs font-sans text-[#F5F8FA] bg-[#020812]/80 p-2.5 rounded-lg border border-white/10">
                      <Check className="w-4 h-4 text-[#B8F500] flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side 3D Focus Marker */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 rounded-2xl glass-card border border-[#1D6FFF]/30 bg-[#020812]/50 text-center">
              <div className="w-16 h-16 rounded-2xl bg-[#00D9FF]/10 border border-[#00D9FF]/40 flex items-center justify-center text-[#00D9FF] mb-4">
                <Layers className="w-8 h-8" />
              </div>
              <span className="font-tech text-xs text-[#AAB7C4] uppercase">Associated 3D Asset</span>
              <span className="font-display font-bold text-lg text-[#F5F8FA] mt-1">{activeStep.glbFocus}</span>
              <p className="text-xs text-[#AAB7C4] mt-2">
                {lang === 'fr'
                  ? 'Équipement modélisé en 3D dans le système ingénierie NOGA.'
                  : '3D modeled equipment in NOGA engineering system.'}
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
