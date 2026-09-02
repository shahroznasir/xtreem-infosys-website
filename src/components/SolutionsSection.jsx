import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Building2, 
  Network, 
  Lock, 
  Wrench, 
  Check, 
  ArrowRight, 
  Sparkles, 
  Server, 
  Layers, 
  Clock, 
  CheckCircle2, 
  X,
  ExternalLink
} from 'lucide-react';
import { servicesData } from '../data/servicesData';

export default function SolutionsSection({ onOpenQuoteModal }) {
  const [selectedSolution, setSelectedSolution] = useState(null);

  const iconMap = {
    ShieldCheck: ShieldCheck,
    Building2: Building2,
    Network: Network,
    Lock: Lock,
    Wrench: Wrench
  };

  const solutions = servicesData || [];

  return (
    <section id="solutions" className="py-10 sm:py-16 bg-white border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header (Team Computers Style) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-6 sm:mb-10 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-50 border border-amber-200 text-[#B38728]">
            <Sparkles className="w-3.5 h-3.5" />
            Explore Our Tech Solutions
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-sans text-slate-950">
            Enterprise Infrastructure &amp; Managed IT Excellence
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Certified on-site engineering, multi-vendor AMC contracts, and structured enterprise networks designed for zero business downtime across Delhi NCR.
          </p>
        </motion.div>

        {/* High-Impact Visual Solution Cards Grid with Real Enterprise Photography */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {solutions.map((sol, idx) => {
            const Icon = iconMap[sol.icon] || ShieldCheck;

            return (
              <motion.div
                key={sol.id || idx}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.55, delay: idx * 0.09, ease: [0.16, 1, 0.3, 1] }}
                className="group relative rounded-3xl overflow-hidden bg-white border border-slate-200/90 shadow-md hover:shadow-2xl hover:border-[#D4AF37]/60 transition-all duration-500 flex flex-col justify-between cursor-pointer"
                onClick={() => setSelectedSolution(sol)}
              >
                {/* Visual Photo Header with Liquid Glass Sheen */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-900 liquid-glass-sheen">
                  <img 
                    src={sol.image} 
                    alt={sol.title} 
                    className="w-full h-full object-cover object-top group-hover:scale-108 transition-transform duration-700 brightness-100 contrast-105"
                    loading="lazy"
                  />

                  {/* Clean Transparent Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent"></div>

                  {/* Floating SLA Badge (Top-Right Only to keep faces 100% clear) */}
                  <div className="absolute top-3 right-3 z-10">
                    <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/20 text-[#FDE68A] shadow-sm">
                      {sol.badge}
                    </span>
                  </div>

                  {/* Icon Emblem Anchored with Exact Alignment */}
                  <div className="absolute bottom-3 left-4 z-10 flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-2xl bg-white border border-slate-200/90 shadow-md flex items-center justify-center text-[#B38728] group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* Card Body with Equalized Grid Heights */}
                <div className="p-6 flex flex-col justify-between flex-1 space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#B38728] bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200/80">
                        {sol.category}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold font-sans tracking-tight text-slate-950 group-hover:text-[#B38728] transition-colors leading-snug min-h-[52px] sm:min-h-[56px] flex items-start">
                      {sol.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed min-h-[60px]">
                      {sol.shortDesc}
                    </p>
                  </div>

                  {/* Bottom Action Bar */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-[#B38728] group-hover:translate-x-1 transition-transform">
                      <span>Explore Scope</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>

                    <span className="text-[11px] text-slate-400 font-mono">
                      SLA &lt; 2 Hrs
                    </span>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Deep-Dive Detail Modal (When Clicked) */}
      {selectedSolution && (
        <div 
          className="fixed inset-0 z-50 overflow-y-auto p-4 sm:p-6 bg-slate-950/70 backdrop-blur-md animate-fadeIn flex items-center justify-center custom-modal-scroll"
          onClick={(e) => {
            if (e.target === e.currentTarget) setSelectedSolution(null);
          }}
        >
          <div className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-2xl my-auto">
            
            {/* Modal Image Header */}
            <div className="relative aspect-16/8 sm:aspect-16/7 w-full bg-slate-900 overflow-hidden">
              <img 
                src={selectedSolution.image} 
                alt={selectedSolution.title} 
                className="w-full h-full object-cover brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent"></div>

              <button
                onClick={() => setSelectedSolution(null)}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-slate-900/80 backdrop-blur-md text-white hover:bg-slate-950 transition-colors z-20 shadow-lg border border-white/20"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-4 left-6 right-6 z-10">
                <span className="text-[10px] sm:text-[11px] font-mono text-[#FDE68A] font-bold uppercase tracking-wider">
                  {selectedSolution.category} &bull; {selectedSolution.badge}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white font-sans mt-0.5">
                  {selectedSolution.title}
                </h3>
              </div>
            </div>

            {/* Modal Content Body */}
            <div className="p-6 sm:p-8 space-y-6">
              <p className="text-sm leading-relaxed text-slate-600">
                {selectedSolution.fullDesc || selectedSolution.shortDesc}
              </p>

              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#B38728]" />
                  Deliverables &amp; Inclusions:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {(selectedSolution.features || []).map((feat, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5 text-xs text-slate-800">
                      <Check className="w-4 h-4 text-[#C59B27] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-[#B38728]" />
                  <div>
                    <div className="text-xs font-bold text-slate-900">Contractual SLA</div>
                    <div className="text-[11px] text-slate-600">&lt; 2-Hour Emergency Arrival Across Delhi NCR</div>
                  </div>
                </div>
                <button
                  onClick={() => {
                    const t = selectedSolution.title;
                    setSelectedSolution(null);
                    onOpenQuoteModal(t);
                  }}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-[#FDE68A] via-[#D4AF37] to-[#B38728] shadow-md hover:scale-105 transition-all"
                >
                  Request Custom SLA Proposal
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
