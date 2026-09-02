import React from 'react';
import { Calendar, ShieldCheck, Clock, Building2, HardDrive, CheckCircle2 } from 'lucide-react';
import { companyInfo } from '../data/companyData';

export default function MetricsStats() {
  const icons = [Calendar, ShieldCheck, Clock, Building2, HardDrive, CheckCircle2];
  const statsList = companyInfo.stats || [];

  return (
    <section className="py-20 border-b relative overflow-hidden bg-[#F8FAFC] border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {statsList.map((stat, idx) => {
            const Icon = icons[idx] || ShieldCheck;
            return (
              <div
                key={stat.label || idx}
                className="p-5 sm:p-6 rounded-2xl border text-center transition-all duration-300 group hover:-translate-y-1.5 shadow-sm bg-white border-slate-200 hover:border-[#C59B27]/50 hover:shadow-md"
              >
                <div className="w-10 h-10 mx-auto mb-3 rounded-xl border flex items-center justify-center group-hover:scale-110 transition-transform bg-amber-50 border-amber-200 text-[#B38728]">
                  <Icon className="w-5 h-5" />
                </div>
                
                <div className="text-2xl sm:text-3xl font-extrabold font-mono tracking-tight transition-colors text-slate-900 group-hover:text-[#B38728]">
                  {stat.value}
                </div>
                
                <div className="text-xs font-bold mt-1.5 line-clamp-1 text-slate-800">
                  {stat.label}
                </div>
                
                <div className="text-[11px] mt-0.5 line-clamp-1 text-slate-500">
                  {stat.sub}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}