import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, Shield, Clock, Award, Users, Wrench, Sparkles } from 'lucide-react';

export default function WhyChooseUs({ onOpenQuoteModal }) {
  const comparisonData = [
    {
      feature: "Emergency On-Site Response Time",
      xtreem: "< 2 Hours in Delhi NCR",
      local: "24 - 48 Hours (Unpredictable)",
      oem: "Next Business Day (24-72 Hours)",
      highlight: true
    },
    {
      feature: "Multi-Brand Multi-Vendor Support",
      xtreem: "Single Window for All OEM Brands",
      local: "Limited brand expertise",
      oem: "Strictly proprietary brand only",
      highlight: true
    },
    {
      feature: "Standby Buffer Hardware Units",
      xtreem: "Included to ensure zero downtime",
      local: "Rarely provided",
      oem: "Requires expensive tier add-on",
      highlight: false
    },
    {
      feature: "Dedicated On-Site Resident Engineers",
      xtreem: "Available full-time stationed at client",
      local: "Not available",
      oem: "Extremely cost-prohibitive",
      highlight: true
    },
    {
      feature: "Component Chip-Level Motherboard Repair",
      xtreem: "Certified in-house lab BGA rework",
      local: "Outsourced to third parties",
      oem: "Full board replacement only ($$$)",
      highlight: false
    },
    {
      feature: "Statutory Tax & GST Invoicing",
      xtreem: "100% Verified GSTIN & PAN compliant",
      local: "Often unorganized or non-compliant",
      oem: "Fully compliant corporate",
      highlight: false
    }
  ];

  return (
    <section id="why-us" className="py-10 sm:py-16 border-t bg-white border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-6 sm:mb-10 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider border bg-amber-50 border-amber-200 text-[#B38728]">
            <Award className="w-3.5 h-3.5" />
            The Xtreem Advantage
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-sans text-slate-900">
            Why Enterprise Leaders Choose Us
          </h2>
          <p className="text-base text-slate-600">
            Experience the agility of a dedicated regional partner combined with the technical rigor and compliance of top-tier OEM standards.
          </p>
        </motion.div>

        {/* Comparison Matrix Table */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-3xl border border-slate-200 overflow-hidden shadow-xl bg-white"
        >
          <div className="sm:hidden text-center text-[10px] font-bold tracking-wider uppercase text-[#B38728] py-1.5 bg-amber-50/60 border-b border-amber-100">
            &larr; Swipe Horizontally to Compare &rarr;
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm min-w-[640px]">
              <thead>
                <tr className="border-b bg-slate-50 border-slate-200 text-slate-800">
                  <th className="p-4 sm:p-6 font-bold uppercase tracking-wider">Evaluation Parameter</th>
                  <th className="p-4 sm:p-6 font-extrabold uppercase tracking-wider text-[#B38728] bg-amber-50/70 border-x border-amber-200">
                    ★ Xtreem Infosys
                  </th>
                  <th className="p-4 sm:p-6 font-semibold uppercase tracking-wider text-slate-600">Generic Local Vendors</th>
                  <th className="p-4 sm:p-6 font-semibold uppercase tracking-wider text-slate-600">Direct OEM Carepacks</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonData.map((row, idx) => (
                  <tr 
                    key={idx} 
                    className="hover:bg-slate-50/80 transition-colors"
                  >
                    <td className="p-4 sm:p-6 font-semibold text-slate-900">
                      {row.feature}
                    </td>
                    <td className="p-4 sm:p-6 font-bold text-[#B38728] bg-amber-50/30 border-x border-amber-200">
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{row.xtreem}</span>
                      </div>
                    </td>
                    <td className="p-4 sm:p-6 text-slate-500">
                      <div className="flex items-center gap-2">
                        <X className="w-4 h-4 text-rose-500 shrink-0" />
                        <span>{row.local}</span>
                      </div>
                    </td>
                    <td className="p-4 sm:p-6 text-slate-500">
                      <div className="flex items-center gap-2">
                        <span className="w-4 h-4 flex items-center justify-center font-bold text-slate-400">•</span>
                        <span>{row.oem}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Bottom Callout */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 text-center"
        >
          <button
            onClick={() => onOpenQuoteModal('Enterprise Infrastructure Assessment')}
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-[#FDE68A] via-[#D4AF37] to-[#B38728] shadow-[0_8px_25px_rgba(212,175,55,0.4)] hover:shadow-[0_12px_32px_rgba(212,175,55,0.6)] hover:scale-105 transition-all"
          >
            <Sparkles className="w-4 h-4" />
            Switch Your Infrastructure AMC to Xtreem Infosys
          </button>
        </motion.div>

      </div>
    </section>
  );
}