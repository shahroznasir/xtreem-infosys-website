import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Building2, 
  Network, 
  Lock, 
  Wrench, 
  Check, 
  ArrowRight, 
  Sparkles,
  X,
  Clock,
  Layers,
  Cpu
} from 'lucide-react';
import { servicesData } from '../data/servicesData';

export default function Services({ onOpenQuoteModal }) {
  const [selectedService, setSelectedService] = useState(null);

  const iconMap = {
    ShieldCheck: ShieldCheck,
    Building2: Building2,
    Network: Network,
    Lock: Lock,
    Wrench: Wrench
  };

  const servicesList = servicesData || [];

  return (
    <section id="services" className="relative py-10 sm:py-20 lg:py-24 border-t bg-white border-slate-200">
      
      {/* Ambient Glows */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 rounded-full blur-[120px] pointer-events-none aurora-orb-sky"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-7 sm:mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider border bg-amber-50 border-amber-200 text-[#B38728]">
            <Sparkles className="w-3.5 h-3.5" />
            What We Do • Core Capabilities
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-sans text-slate-900">
            Enterprise IT Services &amp; Facility Operations
          </h2>
          <p className="text-base text-slate-600">
            Comprehensive maintenance contracts, certified on-site engineers, and structured networking built for high-stakes corporate and government environments.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {servicesList.map((svc, idx) => {
            const Icon = iconMap[svc.icon] || ShieldCheck;
            const features = svc.features || [];
            return (
              <div
                key={svc.id || idx}
                className={`relative rounded-3xl p-7 sm:p-8 flex flex-col justify-between group transition-all duration-300 border shadow-sm pearl-glass pearl-glass-hover bg-white border-slate-200 ${
                  idx === 0 ? 'md:col-span-2 lg:col-span-1 bg-gradient-to-b from-amber-50/40 to-white' : ''
                }`}
              >
                <div>
                  {/* Card Header: Icon & SLA Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl border flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-sm bg-gradient-to-br from-amber-100 to-amber-200 border-amber-300 text-amber-900">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="px-3 py-1 rounded-full border text-xs font-mono font-bold bg-slate-100 border-slate-200 text-slate-800">
                      {svc.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold mb-3 font-sans transition-colors text-slate-900 group-hover:text-[#B38728]">
                    {svc.title}
                  </h3>
                  <p className="text-sm leading-relaxed mb-6 text-slate-600">
                    {svc.shortDesc}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2.5 mb-6 text-xs border-t pt-4 text-slate-700 border-slate-100">
                    {features.slice(0, 3).map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-[#C59B27] shrink-0 mt-0.5" />
                        <span className="font-medium">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Footer: Action Links */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedService(svc)}
                    className="text-xs font-bold text-[#B38728] hover:text-amber-950 flex items-center gap-1 group/btn"
                  >
                    View Full Scope
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>

                  <button
                    onClick={() => onOpenQuoteModal(svc.title)}
                    className="px-3.5 py-1.5 rounded-full border text-xs font-bold transition-all bg-slate-100 hover:bg-[#FEF3C7] border-slate-200 hover:border-[#FCD34D] text-slate-700 hover:text-amber-950"
                  >
                    Inquire
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Deep-Dive Scope Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-2xl border rounded-3xl p-6 sm:p-9 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto bg-white border-slate-200 text-slate-800">
            
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 p-2.5 rounded-full transition-colors bg-slate-100 text-slate-500 hover:text-slate-900"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-amber-100 text-[#B38728] flex items-center justify-center border border-amber-300">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-mono text-[#B38728] font-bold uppercase tracking-wider">
                  {selectedService.category}
                </span>
                <h3 className="text-2xl font-bold text-slate-900">
                  {selectedService.title}
                </h3>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-slate-600">
              {selectedService.fullDesc || selectedService.shortDesc}
            </p>

            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#B38728] flex items-center gap-2">
                <Layers className="w-4 h-4" />
                Comprehensive Deliverables &amp; Inclusions
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {(selectedService.features || []).map((feat, idx) => (
                  <div key={idx} className="p-3 rounded-xl border flex items-start gap-2.5 text-xs bg-slate-50 border-slate-200">
                    <Check className="w-4 h-4 text-[#C59B27] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-2xl border flex flex-col sm:flex-row items-center justify-between gap-4 bg-amber-50/60 border-amber-200">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#B38728]" />
                <div>
                  <div className="text-xs font-bold text-slate-900">Standard SLA Commitment</div>
                  <div className="text-[11px] text-slate-600">Under 2-Hour On-Site Resolution • 99.9% Uptime</div>
                </div>
              </div>
              <button
                onClick={() => {
                  const title = selectedService.title;
                  setSelectedService(null);
                  onOpenQuoteModal(title);
                }}
                className="w-full sm:w-auto px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-[#FDE68A] via-[#D4AF37] to-[#B38728] shadow-md hover:scale-105 transition-all"
              >
                Request Custom SLA Scope
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}