import React, { useState } from 'react';
import { SERVICES } from '../../data/content';
import { Language, ServiceItem } from '../../types';
import { ModelCardViewer } from '../3d/ModelCardViewer';
import { ArrowRight, Check, X, ShieldAlert, Cpu } from 'lucide-react';

interface ServicesSectionProps {
  lang: Language;
  onOpenContact: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ lang, onOpenContact }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <section id="services" className="py-24 bg-[#020812] relative border-t border-[#00D9FF]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#00D9FF]/10 border border-[#00D9FF]/30 text-[#00D9FF] font-tech text-xs uppercase tracking-widest mb-4">
            <span>Engineering & Qualification Portfolio</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-[#F5F8FA] tracking-tight">
            {lang === 'fr' ? 'Nos Offres & Services Procédés' : 'Our Process Services & Offerings'}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#AAB7C4]">
            {lang === 'fr'
              ? 'Une expertise intégrée pour concevoir, valider et démarrer vos unités de production sans dérive budgétaire.'
              : 'Integrated expertise to design, validate, and launch your production units with zero budget drift.'}
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="glass-card glass-card-hover p-8 rounded-3xl relative flex flex-col justify-between border border-[#00D9FF]/20 hover:border-[#00D9FF]/60 group"
            >
              <div>
                {/* Top Badge & 3D Mini Preview */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-tech text-xs uppercase font-bold text-[#00D9FF] bg-[#00D9FF]/10 px-3 py-1 rounded-full border border-[#00D9FF]/30">
                    {lang === 'fr' ? service.category : service.categoryEn}
                  </span>
                  <span className="font-tech text-xs text-[#AAB7C4]">{service.modelHotspotLabel}</span>
                </div>

                <h3 className="font-display font-extrabold text-2xl text-[#F5F8FA] mb-3 group-hover:text-[#00D9FF] transition-colors">
                  {lang === 'fr' ? service.title : service.titleEn}
                </h3>

                <p className="text-[#AAB7C4] text-sm leading-relaxed mb-6 font-sans">
                  {lang === 'fr' ? service.shortDesc : service.shortDescEn}
                </p>

                {/* Deliverables List Preview */}
                <div className="space-y-2 mb-6 border-t border-white/10 pt-4">
                  {(lang === 'fr' ? service.deliverables : service.deliverablesEn).slice(0, 3).map((item, i) => (
                    <div key={i} className="flex items-center space-x-2 text-xs text-[#F5F8FA]">
                      <Check className="w-3.5 h-3.5 text-[#B8F500] flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => setSelectedService(service)}
                className="inline-flex items-center justify-between w-full pt-4 border-t border-white/10 text-xs font-tech uppercase font-bold text-[#00D9FF] hover:text-[#B8F500] transition-colors"
              >
                <span>{lang === 'fr' ? 'En savoir plus →' : 'Learn More →'}</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

      </div>

      {/* Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#020812]/80 backdrop-blur-md animate-fadeIn">
          <div className="glass-card max-w-2xl w-full p-8 rounded-3xl border border-[#00D9FF]/40 relative space-y-6 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-[#020812] border border-white/20 text-[#AAB7C4] hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="font-tech text-xs uppercase text-[#00D9FF] bg-[#00D9FF]/10 px-3 py-1 rounded-full border border-[#00D9FF]/30">
              {lang === 'fr' ? selectedService.category : selectedService.categoryEn}
            </span>

            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#F5F8FA]">
              {lang === 'fr' ? selectedService.title : selectedService.titleEn}
            </h3>

            <p className="text-[#AAB7C4] text-sm leading-relaxed">
              {lang === 'fr' ? selectedService.fullDesc : selectedService.fullDescEn}
            </p>

            <div className="space-y-3">
              <h4 className="font-tech text-xs uppercase text-[#00D9FF] tracking-wider">
                {lang === 'fr' ? 'Livrables & Périmètre Technologique :' : 'Deliverables & Tech Scope:'}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {(lang === 'fr' ? selectedService.deliverables : selectedService.deliverablesEn).map((d, idx) => (
                  <div key={idx} className="flex items-center space-x-2 p-3 rounded-xl bg-[#020812] border border-white/10 text-xs text-[#F5F8FA]">
                    <Check className="w-4 h-4 text-[#B8F500] flex-shrink-0" />
                    <span>{d}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex justify-end space-x-4">
              <button
                onClick={() => setSelectedService(null)}
                className="px-4 py-2 rounded-xl bg-white/10 text-xs font-tech uppercase"
              >
                Fermer
              </button>
              <button
                onClick={() => {
                  setSelectedService(null);
                  onOpenContact();
                }}
                className="px-6 py-2 rounded-xl bg-[#00D9FF] text-[#020812] text-xs font-tech font-bold uppercase hover:bg-[#B8F500]"
              >
                {lang === 'fr' ? 'Demander un devis' : 'Request Proposal'}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
