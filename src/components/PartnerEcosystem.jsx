import React from 'react';
import { ShieldCheck, Cpu, ArrowRight, Sparkles, CheckCircle2, Award } from 'lucide-react';

export default function PartnerEcosystem({ onOpenQuoteModal }) {
  const oemLogosTrack1 = [
    { name: "Apple", tag: "Mac & iPad Enterprise", logo: " Apple" },
    { name: "Dell Technologies", tag: "Commercial PC & Servers", logo: "DELL" },
    { name: "HP Enterprise", tag: "EliteBook & ProDesk", logo: "hp" },
    { name: "Lenovo", tag: "ThinkPad & ThinkSystem", logo: "Lenovo" },
    { name: "Cisco Systems", tag: "Enterprise Switching & Wi-Fi", logo: "CISCO" },
  ];

  const oemLogosTrack2 = [
    { name: "Fortinet", tag: "Next-Gen Cyber Security", logo: "FORTINET" },
    { name: "APC by Schneider", tag: "Rack UPS & Power Backup", logo: "APC" },
    { name: "Microsoft", tag: "Windows & Active Directory", logo: "Microsoft" },
    { name: "Epson", tag: "Laser Projectors & AV", logo: "EPSON" },
    { name: "Sony Professional", tag: "Smart Boardrooms", logo: "SONY" },
  ];

  const partners = [
    {
      name: "Apple",
      role: "Enterprise Mac & iOS Deployment",
      desc: "MacBook Pro, MacBook Air, iMac & Mac Studio enterprise enrollment, MDM configuration & hardware care.",
      badge: "Apple Ecosystem",
      iconText: ""
    },
    {
      name: "Dell Technologies",
      role: "Certified Commercial Partner",
      desc: "OptiPlex desktops, Latitude laptops, Precision workstations & PowerEdge servers warranty & AMC support.",
      badge: "OEM Certified",
      iconText: "DELL"
    },
    {
      name: "HP Enterprise",
      role: "EliteBook & ProDesk Solutions",
      desc: "Enterprise HP ProDesk, EliteBook, Z-Series CAD workstations & LaserJet fleet maintenance.",
      badge: "Commercial Tier",
      iconText: "HP"
    },
    {
      name: "Lenovo",
      role: "ThinkPad & ThinkCentre Fleet",
      desc: "Legendary durability ThinkPad laptops, ThinkCentre desktops & ThinkSystem server infrastructure care.",
      badge: "Authorized Care",
      iconText: "LENOVO"
    },
    {
      name: "Cisco Systems",
      role: "Enterprise Networking & Switching",
      desc: "Catalyst switches, ISR routers, Meraki Wi-Fi & structured enterprise network deployments.",
      badge: "Network Core",
      iconText: "CISCO"
    },
    {
      name: "Fortinet",
      role: "Next-Gen Perimeter Security",
      desc: "FortiGate firewalls, secure remote VPN access, intrusion prevention (IPS) & policy hardening.",
      badge: "Cyber Defense",
      iconText: "FORTINET"
    },
    {
      name: "APC by Schneider",
      role: "Power Protection & Smart-UPS",
      desc: "High-density server rack UPS battery banks, power conditioning & zero-switchover runtime backup.",
      badge: "Clean Power",
      iconText: "APC"
    },
    {
      name: "Epson & Sony",
      role: "Commercial AV & Projectors",
      desc: "High-lumen boardroom laser projectors, motorized screens, conference displays & calibration.",
      badge: "Smart Boardroom",
      iconText: "AV"
    }
  ];

  return (
    <section id="partners" className="py-14 sm:py-16 bg-[#F8FAFC] border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        
        {/* Section Header (Exact Team Computers Style) */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-50 border border-amber-200 text-[#B38728]">
            <Award className="w-3.5 h-3.5" />
            Our Partner Ecosystem
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-sans text-slate-950">
            United by Technology
          </h2>
          <p className="text-base text-slate-600">
            Certified partnerships and multi-vendor OEM support across global technology pioneers.
          </p>
        </div>

      </div>

      {/* Dual Continuous Scrolling Logo Marquees (Team Computers Signature) */}
      <div className="space-y-4 mb-16">
        
        {/* Track 1: Scroll Left */}
        <div className="relative w-full overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#F8FAFC] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#F8FAFC] to-transparent z-10 pointer-events-none"></div>
          
          <div className="flex gap-4 animate-marquee hover:[animation-play-state:paused] w-max py-1">
            {[...oemLogosTrack1, ...oemLogosTrack1, ...oemLogosTrack1].map((logo, idx) => (
              <div 
                key={idx}
                className="flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-white border border-slate-200 shadow-sm min-w-[240px] hover:border-[#C59B27]/60 transition-all cursor-default group"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-900 text-white font-extrabold text-xs flex items-center justify-center group-hover:bg-[#B38728] transition-colors">
                  {logo.logo}
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 group-hover:text-[#B38728] transition-colors">{logo.name}</div>
                  <div className="text-[11px] text-slate-500">{logo.tag}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Track 2: Scroll Right */}
        <div className="relative w-full overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#F8FAFC] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#F8FAFC] to-transparent z-10 pointer-events-none"></div>
          
          <div className="flex gap-4 animate-marquee hover:[animation-play-state:paused] w-max py-1" style={{ animationDirection: 'reverse' }}>
            {[...oemLogosTrack2, ...oemLogosTrack2, ...oemLogosTrack2].map((logo, idx) => (
              <div 
                key={idx}
                className="flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-white border border-slate-200 shadow-sm min-w-[240px] hover:border-[#C59B27]/60 transition-all cursor-default group"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-900 text-white font-extrabold text-xs flex items-center justify-center group-hover:bg-[#B38728] transition-colors">
                  {logo.logo}
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 group-hover:text-[#B38728] transition-colors">{logo.name}</div>
                  <div className="text-[11px] text-slate-500">{logo.tag}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Partner Capabilities Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {partners.map((partner, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-white border border-slate-200/90 hover:border-[#C59B27]/50 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white font-extrabold text-xs flex items-center justify-center tracking-wider shadow-sm group-hover:bg-[#B38728] transition-colors">
                    {partner.iconText}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 font-mono">
                    {partner.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#B38728] transition-colors font-sans">
                  {partner.name}
                </h3>
                <div className="text-xs font-bold text-[#B38728] mt-0.5 mb-2.5">
                  {partner.role}
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {partner.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-[11px] text-emerald-700 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> OEM Certified
                </span>
                <button
                  onClick={() => onOpenQuoteModal(`OEM Support for ${partner.name}`)}
                  className="font-bold text-[#B38728] hover:text-amber-900 flex items-center gap-1 group/btn"
                >
                  Explore
                  <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
