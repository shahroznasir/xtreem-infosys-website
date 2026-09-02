import React from 'react';
import { Building, Award, CheckCircle } from 'lucide-react';
import { companyInfo } from '../data/companyData';

export default function ClientTicker() {
  const clientsList = companyInfo.clients || [];
  const clientsDoubled = [...clientsList, ...clientsList];

  return (
    <section id="clients" className="relative py-10 sm:py-12 border-y bg-white border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 border bg-amber-50 border-amber-200 text-[#B38728]">
          <Award className="w-3.5 h-3.5" />
          Enterprise Trust Wall
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold font-sans text-slate-900">
          Trusted By Premier Public-Sector &amp; Corporate Leaders
        </h2>
        <p className="text-sm max-w-xl mx-auto mt-2 text-slate-500">
          From Government of India autonomous telecom R&amp;D (C-DOT) to Fortune 500 giants (Concentrix) and multinational manufacturers (Greenlam).
        </p>
      </div>

      <div className="relative w-full overflow-hidden">
        {/* Gradient Blur Edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-48 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-48 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        {/* Continuous Marquee */}
        <div className="flex gap-5 animate-marquee hover:[animation-play-state:paused] w-max py-2">
          {clientsDoubled.map((client, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 px-6 py-4 rounded-2xl border shadow-sm min-w-[290px] sm:min-w-[350px] group cursor-default transition-all duration-300 pearl-glass pearl-glass-hover bg-white border-slate-200"
            >
              <div className="w-12 h-12 rounded-xl border flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm shrink-0 bg-gradient-to-br from-amber-50 to-amber-100 border-amber-200 text-[#B38728]">
                <Building className="w-6 h-6" />
              </div>
              <div className="flex flex-col overflow-hidden">
                <div className="flex items-center gap-1.5">
                  <span className="text-sm font-bold truncate font-sans transition-colors text-slate-900 group-hover:text-[#B38728]">
                    {client.name}
                  </span>
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                </div>
                <span className="text-xs text-[#B38728] font-bold mt-0.5 truncate">
                  {client.tag}
                </span>
                <span className="text-[11px] truncate text-slate-500">
                  {client.desc}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}