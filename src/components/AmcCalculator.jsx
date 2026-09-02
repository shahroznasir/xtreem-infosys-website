import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Calculator, 
  Laptop, 
  Monitor, 
  Tv, 
  Server, 
  Projector, 
  FileText, 
  Check, 
  Send,
  Sparkles,
  Shield,
  Clock,
  ArrowRight
} from 'lucide-react';
import { companyInfo } from '../data/companyData';

export default function AmcCalculator({ onOpenQuoteModal }) {
  const formatINR = (val) => {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(val);
  };

  const [laptops, setLaptops] = useState(30);
  const [desktops, setDesktops] = useState(25);
  const [aios, setAios] = useState(6);
  const [servers, setServers] = useState(3);
  const [projectors, setProjectors] = useState(2);

  const [contractType, setContractType] = useState('comp');
  const [slaTier, setSlaTier] = useState('gold');

  const baseRates = {
    laptop: contractType === 'comp' ? 3200 : 1400,
    desktop: contractType === 'comp' ? 2800 : 1200,
    aio: contractType === 'comp' ? 3000 : 1300,
    server: contractType === 'comp' ? 9500 : 4500,
    projector: contractType === 'comp' ? 4200 : 1900,
  };

  const slaMultipliers = {
    silver: 1.0,
    gold: 1.2,
    platinum: 1.5,
  };

  const multiplier = slaMultipliers[slaTier] || 1.0;
  const totalDevices = laptops + desktops + aios + servers + projectors;

  const rawAnnual = (
    laptops * baseRates.laptop +
    desktops * baseRates.desktop +
    aios * baseRates.aio +
    servers * baseRates.server +
    projectors * baseRates.projector
  ) * multiplier;

  const estimatedAnnual = Math.round(rawAnnual / 100) * 100;
  const estimatedMonthly = Math.round((estimatedAnnual / 12) / 100) * 100;

  const handleSendWhatsApp = () => {
    const message = `Hello Xtreem Infosys!
I configured an AMC estimate on your website:
- Laptops: ${laptops}
- Desktops: ${desktops}
- All-in-Ones: ${aios}
- Enterprise Servers & Switches: ${servers}
- Projectors / AV: ${projectors}
- Total Inventory Assets: ${totalDevices}
- AMC Type: ${contractType === 'comp' ? 'Comprehensive (Includes Spares & Parts)' : 'Non-Comprehensive (Service & Preventive Only)'}
- SLA Tier: ${slaTier.toUpperCase()} (${slaTier === 'platinum' ? '24/7 1-Hour SLA' : slaTier === 'gold' ? '< 2-Hour Priority SLA' : '4-Hour Standard SLA'})
- Estimated Annual Budget: ${formatINR(estimatedAnnual)} (approx ${formatINR(estimatedMonthly)}/month)

Please connect with me to finalize our corporate AMC proposal.`;

    window.open(`https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="amc-calculator" className="relative py-10 sm:py-16 overflow-hidden bg-[#F8FAFC]">
      
      {/* Ambient Glows */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] rounded-full blur-[130px] pointer-events-none aurora-orb-sky"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-6 sm:mb-10 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider border bg-amber-50 border-amber-200 text-[#B38728]">
            <Calculator className="w-3.5 h-3.5" />
            Interactive Enterprise Estimator
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-sans text-slate-900">
            Calculate Your Custom AMC Budget
          </h2>
          <p className="text-base text-slate-600">
            Configure your enterprise device inventory, SLA response priority, and maintenance tier to instantly estimate transparent annual operating costs.
          </p>
        </motion.div>

        {/* 2-Column Bento Calculator with Perfectly Matched Height Alignment */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Sliders & Controls (7 Cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 rounded-3xl p-6 sm:p-9 border shadow-xl bg-white border-slate-200 flex flex-col justify-between space-y-6 h-full"
          >
            
            {/* Step 1: Inventory Sliders in 2-Column Responsive Grid */}
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-2.5 border-b border-slate-100">
                <h3 className="text-sm font-bold uppercase tracking-wider font-sans text-slate-950">
                  1. Configure Asset Inventory ({totalDevices} Units Total)
                </h3>
                <span className="text-[11px] font-mono text-[#B38728] font-bold px-2.5 py-0.5 rounded-full bg-amber-50 border border-amber-200">
                  SLIDER CONTROLS
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3.5">
                {/* Laptops */}
                <div className="space-y-1.5 p-3 rounded-2xl bg-slate-50/80 border border-slate-200/80">
                  <div className="flex items-center justify-between text-xs font-semibold">
                    <span className="flex items-center gap-1.5 text-slate-800">
                      <Laptop className="w-3.5 h-3.5 text-[#B38728]" /> Laptops &amp; Ultrabooks
                    </span>
                    <span className="font-mono font-bold text-[#B38728] text-xs">{laptops} Units</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="150"
                    value={laptops}
                    onChange={(e) => setLaptops(Number(e.target.value))}
                    className="w-full accent-[#B38728] cursor-pointer"
                  />
                </div>

                {/* Desktops */}
                <div className="space-y-1.5 p-3 rounded-2xl bg-slate-50/80 border border-slate-200/80">
                  <div className="flex items-center justify-between text-xs font-semibold">
                    <span className="flex items-center gap-1.5 text-slate-800">
                      <Monitor className="w-3.5 h-3.5 text-sky-600" /> Desktops &amp; PCs
                    </span>
                    <span className="font-mono font-bold text-sky-600 text-xs">{desktops} Units</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="150"
                    value={desktops}
                    onChange={(e) => setDesktops(Number(e.target.value))}
                    className="w-full accent-sky-500 cursor-pointer"
                  />
                </div>

                {/* All-in-Ones */}
                <div className="space-y-1.5 p-3 rounded-2xl bg-slate-50/80 border border-slate-200/80">
                  <div className="flex items-center justify-between text-xs font-semibold">
                    <span className="flex items-center gap-1.5 text-slate-800">
                      <Tv className="w-3.5 h-3.5 text-purple-600" /> All-in-One Systems (AIO)
                    </span>
                    <span className="font-mono font-bold text-purple-600 text-xs">{aios} Units</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="50"
                    value={aios}
                    onChange={(e) => setAios(Number(e.target.value))}
                    className="w-full accent-purple-500 cursor-pointer"
                  />
                </div>

                {/* Projectors & AV */}
                <div className="space-y-1.5 p-3 rounded-2xl bg-slate-50/80 border border-slate-200/80">
                  <div className="flex items-center justify-between text-xs font-semibold">
                    <span className="flex items-center gap-1.5 text-slate-800">
                      <Projector className="w-3.5 h-3.5 text-amber-600" /> Projectors &amp; Smart AV
                    </span>
                    <span className="font-mono font-bold text-amber-600 text-xs">{projectors} Units</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="20"
                    value={projectors}
                    onChange={(e) => setProjectors(Number(e.target.value))}
                    className="w-full accent-amber-500 cursor-pointer"
                  />
                </div>

                {/* Servers & Network Racks (Spans full width) */}
                <div className="sm:col-span-2 space-y-1.5 p-3 rounded-2xl bg-slate-50/80 border border-slate-200/80">
                  <div className="flex items-center justify-between text-xs font-semibold">
                    <span className="flex items-center gap-1.5 text-slate-800">
                      <Server className="w-3.5 h-3.5 text-emerald-600" /> Servers, Switches &amp; Network Racks
                    </span>
                    <span className="font-mono font-bold text-emerald-600 text-xs">{servers} Units</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="30"
                    value={servers}
                    onChange={(e) => setServers(Number(e.target.value))}
                    className="w-full accent-emerald-500 cursor-pointer"
                  />
                </div>
              </div>
            </div>

            {/* Step 2: Contract Coverage Tier */}
            <div className="space-y-2.5">
              <h3 className="text-sm font-bold uppercase tracking-wider font-sans text-slate-950">
                2. Select AMC Coverage Scope
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  onClick={() => setContractType('comp')}
                  className={`p-3.5 rounded-2xl border text-left transition-all ${
                    contractType === 'comp'
                      ? 'bg-amber-50/80 border-[#C59B27] shadow-sm'
                      : 'bg-white border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-xs text-slate-900">Comprehensive AMC</span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-100 text-[#B38728] font-bold">RECOMMENDED</span>
                  </div>
                  <p className="text-[11px] leading-relaxed text-slate-500">
                    Includes all replacement parts, motherboard repairs, and labour with zero surprise invoices.
                  </p>
                </button>

                <button
                  onClick={() => setContractType('non-comp')}
                  className={`p-3.5 rounded-2xl border text-left transition-all ${
                    contractType === 'non-comp'
                      ? 'bg-amber-50/80 border-[#C59B27] shadow-sm'
                      : 'bg-white border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-xs text-slate-900">Non-Comprehensive</span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 font-bold">SERVICE ONLY</span>
                  </div>
                  <p className="text-[11px] leading-relaxed text-slate-500">
                    Full preventive &amp; breakdown engineering support; spares billed separately as needed.
                  </p>
                </button>
              </div>
            </div>

            {/* Step 3: SLA Priority */}
            <div className="space-y-2.5">
              <h3 className="text-sm font-bold uppercase tracking-wider font-sans text-slate-950">
                3. SLA Response Guarantee
              </h3>
              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                {[
                  { id: 'silver', label: 'Silver', sla: '< 4 Hrs SLA', mult: '1.0x' },
                  { id: 'gold', label: 'Gold (Standard)', sla: '< 2 Hrs SLA', mult: '1.2x' },
                  { id: 'platinum', label: 'Platinum 24/7', sla: '< 1 Hr Priority', mult: '1.5x' }
                ].map((tier) => (
                  <button
                    key={tier.id}
                    onClick={() => setSlaTier(tier.id)}
                    className={`p-3 rounded-2xl border text-center transition-all ${
                      slaTier === tier.id
                        ? 'bg-amber-100/70 border-amber-400 text-amber-900 font-bold shadow-sm'
                        : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <div className="text-xs font-bold">{tier.label}</div>
                    <div className="text-[10px] opacity-80 mt-0.5">{tier.sla}</div>
                  </button>
                ))}
              </div>
            </div>

          </motion.div>

          {/* Right Column: Live Price & Instant Proposal (5 Cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 h-full"
          >
            <div className="rounded-3xl p-6 sm:p-9 border shadow-xl bg-white border-slate-200 h-full flex flex-col justify-between space-y-6">
              
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-3.5 border-b border-slate-100">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#B38728]">
                    Estimated AMC Investment
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-mono text-[11px] font-bold border border-emerald-200">
                    SLA GUARANTEED
                  </span>
                </div>

                {/* Big Price Display */}
                <div>
                  <div className="text-4xl sm:text-5xl font-extrabold font-mono text-slate-950 tracking-tight">
                    {formatINR(estimatedAnnual)}
                  </div>
                  <div className="text-xs text-slate-500 mt-1.5 flex items-center gap-2">
                    <span>Approx. <strong className="text-slate-950 font-mono">{formatINR(estimatedMonthly)}</strong> / month</span>
                    <span>•</span>
                    <span>Plus GST</span>
                  </div>
                </div>

                {/* Inclusions Summary */}
                <div className="p-4 rounded-2xl border space-y-2.5 text-xs bg-slate-50/90 border-slate-200 text-slate-700">
                  <div className="flex items-center justify-between">
                    <span>Total Monitored Endpoints:</span>
                    <span className="font-bold text-slate-900">{totalDevices} Units</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Contract Scope:</span>
                    <span className="font-bold text-[#B38728]">
                      {contractType === 'comp' ? 'Comprehensive (Parts + Service)' : 'Non-Comprehensive'}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Guaranteed SLA:</span>
                    <span className="font-bold text-emerald-700">
                      {slaTier === 'platinum' ? '24/7 1-Hour SLA' : slaTier === 'gold' ? '< 2-Hour Rapid SLA' : '4-Hour SLA'}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Preventive Audits:</span>
                    <span className="font-bold text-slate-900">Quarterly Deep Inspection</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Standby Unit Buffer:</span>
                    <span className="font-bold text-slate-900">Included at Facility</span>
                  </div>
                </div>
              </div>

              {/* Actions & Note */}
              <div className="space-y-3 pt-2">
                <button
                  onClick={handleSendWhatsApp}
                  className="w-full py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-emerald-600 hover:bg-emerald-500 shadow-[0_4px_18px_rgba(16,185,129,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Send Configuration via WhatsApp
                </button>

                <button
                  onClick={() => onOpenQuoteModal(`Custom AMC Configuration (${totalDevices} Assets - ${contractType.toUpperCase()})`)}
                  className="w-full py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-[#FDE68A] via-[#D4AF37] to-[#B38728] shadow-[0_4px_18px_rgba(212,175,55,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                >
                  <FileText className="w-4 h-4" />
                  Lock In Formal AMC Proposal
                </button>

                <p className="text-[11px] text-center text-slate-500 leading-relaxed pt-1">
                  Final pricing subject to baseline hardware audit. On-site engineer staffing available upon request.
                </p>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}