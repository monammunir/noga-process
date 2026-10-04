import React, { useState } from 'react';
import { COMPANY_INFO } from '../../data/content';
import { Language } from '../../types';
import { Phone, Mail, MapPin, MessageSquare, Send, CheckCircle2, Shield } from 'lucide-react';

interface ContactSectionProps {
  lang: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ lang }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-[#07111F] relative bg-tech-grid border-t border-[#00D9FF]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Contact & Info */}
          <div className="lg:col-span-5 space-y-8 text-left">
            
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#00D9FF]/10 border border-[#00D9FF]/30 text-[#00D9FF] font-tech text-xs uppercase tracking-widest">
              <span>Échange & Diagnostic CAPEX</span>
            </div>

            <h2 className="font-display font-black text-3xl sm:text-5xl text-[#F5F8FA] tracking-tight">
              {lang === 'fr' ? 'Parlons de votre prochain projet industriel.' : 'Let’s Discuss Your Next Industrial Project.'}
            </h2>

            <p className="text-[#AAB7C4] text-base leading-relaxed font-sans">
              {lang === 'fr'
                ? 'Profitez d’un diagnostic initial de 30 minutes offert pour identifier les angles morts techniques, budgétaires et réglementaires de vos lignes de production.'
                : 'Take advantage of a complimentary 30-minute diagnostic session to identify technical, financial, and regulatory blind spots.'}
            </p>

            {/* Direct Channels */}
            <div className="space-y-4 font-tech text-xs">
              <a
                href={`tel:${COMPANY_INFO.phoneClean}`}
                className="flex items-center space-x-4 p-4 rounded-2xl glass-card border border-white/10 hover:border-[#00D9FF] transition-all group"
              >
                <div className="p-3 rounded-xl bg-[#00D9FF]/10 text-[#00D9FF] group-hover:bg-[#00D9FF] group-hover:text-[#020812] transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[#AAB7C4] block uppercase">Téléphone Direct</span>
                  <span className="text-[#F5F8FA] font-bold text-sm">{COMPANY_INFO.phone}</span>
                </div>
              </a>

              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="flex items-center space-x-4 p-4 rounded-2xl glass-card border border-white/10 hover:border-[#00D9FF] transition-all group"
              >
                <div className="p-3 rounded-xl bg-[#1D6FFF]/10 text-[#1D6FFF] group-hover:bg-[#1D6FFF] group-hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[#AAB7C4] block uppercase">Email Projets</span>
                  <span className="text-[#F5F8FA] font-bold text-sm">{COMPANY_INFO.email}</span>
                </div>
              </a>

              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 rounded-2xl glass-card border border-[#B8F500]/30 hover:border-[#B8F500] transition-all group"
              >
                <div className="p-3 rounded-xl bg-[#B8F500]/10 text-[#B8F500] group-hover:bg-[#B8F500] group-hover:text-[#020812] transition-colors">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[#AAB7C4] block uppercase">Échange Rapide WhatsApp</span>
                  <span className="text-[#F5F8FA] font-bold text-sm">Discuter sur WhatsApp →</span>
                </div>
              </a>
            </div>

            {/* Address */}
            <div className="p-6 rounded-2xl glass-card border border-white/10 space-y-2 font-tech text-xs text-[#AAB7C4]">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-[#00D9FF] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#F5F8FA] block">Siège Social Lille :</strong>
                  <span>{COMPANY_INFO.address}</span>
                </div>
              </div>
              <div className="flex items-start space-x-2 pt-2 border-t border-white/10">
                <MapPin className="w-4 h-4 text-[#1D6FFF] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#F5F8FA] block">Bureaux & Réunions Lesquin :</strong>
                  <span>{COMPANY_INFO.officeAddress}</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-8 sm:p-10 rounded-3xl border border-[#00D9FF]/30 shadow-2xl relative">
              
              {submitted ? (
                <div className="text-center py-12 space-y-4 animate-fadeIn">
                  <CheckCircle2 className="w-16 h-16 text-[#B8F500] mx-auto animate-bounce" />
                  <h3 className="font-display font-extrabold text-2xl text-[#F5F8FA]">
                    {lang === 'fr' ? 'Demande transmise avec succès !' : 'Request Submitted Successfully!'}
                  </h3>
                  <p className="text-sm text-[#AAB7C4] max-w-md mx-auto">
                    {lang === 'fr'
                      ? 'Un ingénieur NOGA-PROCESS vous recontactera sous 24h ouvrées pour qualifier votre besoin.'
                      : 'A NOGA-PROCESS engineer will contact you within 24 business hours.'}
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl bg-[#00D9FF] text-[#020812] font-tech text-xs uppercase font-bold"
                  >
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <div className="flex items-center space-x-2 pb-4 border-b border-white/10">
                    <Shield className="w-4 h-4 text-[#00D9FF]" />
                    <span className="font-tech text-xs uppercase text-[#AAB7C4]">
                      Confidentialité Garantie · Réponses sous 24h
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-tech text-xs uppercase text-[#AAB7C4] mb-2">Prénom *</label>
                      <input
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        placeholder="Votre prénom"
                        className="w-full px-4 py-3 rounded-xl bg-[#020812] border border-white/15 text-[#F5F8FA] font-sans focus:outline-none focus:border-[#00D9FF] text-sm"
                      />
                    </div>

                    <div>
                      <label className="block font-tech text-xs uppercase text-[#AAB7C4] mb-2">Nom *</label>
                      <input
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        placeholder="Votre nom"
                        className="w-full px-4 py-3 rounded-xl bg-[#020812] border border-white/15 text-[#F5F8FA] font-sans focus:outline-none focus:border-[#00D9FF] text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-tech text-xs uppercase text-[#AAB7C4] mb-2">Email Professionnel *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="nom@entreprise.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#020812] border border-white/15 text-[#F5F8FA] font-sans focus:outline-none focus:border-[#00D9FF] text-sm"
                      />
                    </div>

                    <div>
                      <label className="block font-tech text-xs uppercase text-[#AAB7C4] mb-2">Téléphone *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+33 6 00 00 00 00"
                        className="w-full px-4 py-3 rounded-xl bg-[#020812] border border-white/15 text-[#F5F8FA] font-sans focus:outline-none focus:border-[#00D9FF] text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-tech text-xs uppercase text-[#AAB7C4] mb-2">Entreprise & Site Industrielle</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Nom de votre société"
                      className="w-full px-4 py-3 rounded-xl bg-[#020812] border border-white/15 text-[#F5F8FA] font-sans focus:outline-none focus:border-[#00D9FF] text-sm"
                    />
                  </div>

                  <div>
                    <label className="block font-tech text-xs uppercase text-[#AAB7C4] mb-2">Votre Projet / Problématique Procédé *</label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Décrivez brièvement votre projet CAPEX, ligne de production ou besoin de qualification..."
                      className="w-full px-4 py-3 rounded-xl bg-[#020812] border border-white/15 text-[#F5F8FA] font-sans focus:outline-none focus:border-[#00D9FF] text-sm"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-[#00D9FF] text-[#020812] font-tech text-xs uppercase font-bold tracking-wider hover:bg-[#B8F500] transition-all flex items-center justify-center space-x-2 shadow-[0_0_25px_rgba(0,217,255,0.4)]"
                  >
                    <Send className="w-4 h-4" />
                    <span>{lang === 'fr' ? 'Transmettre Ma Demande de Diagnostic' : 'Submit Diagnostic Request'}</span>
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
