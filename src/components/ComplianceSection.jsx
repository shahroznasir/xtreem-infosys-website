import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Building, 
  FileCheck2, 
  CreditCard, 
  Copy, 
  Check, 
  ShieldCheck, 
  MapPin, 
  User, 
  Mail, 
  Download,
  Calendar,
  Sparkles
} from 'lucide-react';
import { companyInfo } from '../data/companyData';

export default function ComplianceSection({ onOpenQuoteModal }) {
  const [copiedField, setCopiedField] = useState(null);

  const handleCopy = (text, fieldName) => {
    try {
      if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text);
      } else {
        const ta = document.createElement('textarea');
        ta.value = text;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
      }
      setCopiedField(fieldName);
      setTimeout(() => setCopiedField(null), 2500);
    } catch (e) {
      console.warn("Copy failed:", e);
    }
  };

  const compliance = companyInfo.compliance || {};
  const address = companyInfo.address || {};

  return (
    <section id="compliance" className="py-10 sm:py-16 border-t bg-white border-slate-200">
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
            <ShieldCheck className="w-3.5 h-3.5" />
            Corporate Governance &amp; Statutory Compliance
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-sans text-slate-900">
            Company Registration &amp; Banking Details
          </h2>
          <p className="text-base text-slate-600">
            Full regulatory compliance, verified GST credentials, and statutory transparency for seamless enterprise vendor empanelment.
          </p>
        </motion.div>

        {/* 3-Column Bento Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          
          {/* Card 1: Business Identity & Registration */}
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-3xl p-6 sm:p-8 border shadow-xl space-y-6 bg-white border-slate-200"
          >
            <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
              <div className="w-11 h-11 rounded-xl border flex items-center justify-center bg-amber-50 border-amber-200 text-[#B38728]">
                <Building className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold font-sans text-slate-900">
                  Business Identity
                </h3>
                <p className="text-xs text-slate-500">Official Company Registration</p>
              </div>
            </div>

            <div className="space-y-4 text-xs">
              <div>
                <div className="text-[11px] uppercase tracking-wider font-semibold text-slate-500">
                  Trade Name
                </div>
                <div className="text-sm font-bold mt-0.5 text-slate-900">
                  {companyInfo.tradeName}
                </div>
              </div>

              <div>
                <div className="text-[11px] uppercase tracking-wider font-semibold text-slate-500">
                  Legal Entity / Proprietor
                </div>
                <div className="text-sm font-bold mt-0.5 text-slate-900">
                  {companyInfo.legalName}
                </div>
              </div>

              <div>
                <div className="text-[11px] uppercase tracking-wider font-semibold text-slate-500">
                  Date of Incorporation
                </div>
                <div className="text-sm font-bold font-mono text-[#B38728] mt-0.5 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  {companyInfo.incorporatedDate} (Active)
                </div>
              </div>

              <div className="pt-2 border-t border-slate-100">
                <div className="text-[11px] uppercase tracking-wider font-semibold text-slate-500">
                  Registered Address
                </div>
                <div className="text-xs leading-relaxed mt-1 flex items-start gap-1.5 text-slate-700">
                  <MapPin className="w-4 h-4 text-[#C59B27] shrink-0 mt-0.5" />
                  <span>{address.full}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Statutory Tax Verification */}
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-3xl p-6 sm:p-8 border shadow-xl space-y-6 bg-white border-slate-200"
          >
            <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
              <div className="w-11 h-11 rounded-xl border flex items-center justify-center bg-amber-50 border-amber-200 text-[#B38728]">
                <FileCheck2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold font-sans text-slate-900">
                  Tax &amp; Compliance
                </h3>
                <p className="text-xs text-slate-500">Government &amp; Tax Records</p>
              </div>
            </div>

            <div className="space-y-4 text-xs">
              {/* GSTIN with 1-Click Copy */}
              <div className="p-4 rounded-2xl border bg-slate-50 border-slate-200">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-slate-500">
                    GST Identification Number
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold border border-emerald-300">
                    VERIFIED
                  </span>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-base font-extrabold font-mono text-[#B38728] tracking-wider">
                    {compliance.gstin}
                  </span>
                  <button
                    onClick={() => handleCopy(compliance.gstin, 'gst')}
                    className={`p-2 rounded-lg border transition-all ${
                      copiedField === 'gst'
                        ? 'bg-emerald-100 text-emerald-800 border-emerald-400'
                        : 'bg-white hover:bg-slate-100 border-slate-300 text-slate-700'
                    }`}
                    title="Copy GSTIN"
                  >
                    {copiedField === 'gst' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* GST Filing Status & ITC Eligibility */}
              <div className="p-4 rounded-2xl border bg-slate-50 border-slate-200 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-slate-500">
                    Filing Status &amp; ITC Eligibility
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold border border-emerald-300">
                    ACTIVE
                  </span>
                </div>
                <div className="text-xs text-slate-700 font-medium leading-relaxed">
                  Regular Taxpayer under GST Act. All enterprise purchase orders and AMC contracts are issued with standard GST tax invoices eligible for Input Tax Credit (ITC).
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Corporate Banking Details */}
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-3xl p-6 sm:p-8 border shadow-xl space-y-6 bg-white border-slate-200"
          >
            <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
              <div className="w-11 h-11 rounded-xl border flex items-center justify-center bg-amber-50 border-amber-200 text-[#B38728]">
                <CreditCard className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold font-sans text-slate-900">
                  Corporate Banking
                </h3>
                <p className="text-xs text-slate-500">Empanelment Banking Coordinates</p>
              </div>
            </div>

            <div className="space-y-3.5 text-xs">
              <div>
                <div className="text-[11px] uppercase tracking-wider font-semibold text-slate-500">
                  Bank Name
                </div>
                <div className="text-sm font-bold mt-0.5 text-slate-900">
                  {compliance.bankName}
                </div>
              </div>

              <div>
                <div className="text-[11px] uppercase tracking-wider font-semibold text-slate-500">
                  Branch Location
                </div>
                <div className="text-xs font-medium mt-0.5 text-slate-700">
                  {compliance.branch}
                </div>
              </div>

              <div className="p-3.5 rounded-xl border bg-slate-50 border-slate-200">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[11px] uppercase tracking-wider font-semibold text-slate-500">
                      Account Number
                    </div>
                    <div className="text-sm font-mono font-bold text-slate-900 mt-0.5">
                      {compliance.accountNumber}
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(compliance.accountNumber, 'acc')}
                    className={`p-1.5 rounded-lg border transition-all ${
                      copiedField === 'acc'
                        ? 'bg-emerald-100 text-emerald-800 border-emerald-400'
                        : 'bg-white border-slate-300 text-slate-700'
                    }`}
                  >
                    {copiedField === 'acc' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              <div className="p-3.5 rounded-xl border bg-slate-50 border-slate-200">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[11px] uppercase tracking-wider font-semibold text-slate-500">
                      IFSC Code
                    </div>
                    <div className="text-sm font-mono font-bold text-[#B38728] mt-0.5">
                      {compliance.ifscCode}
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(compliance.ifscCode, 'ifsc')}
                    className={`p-1.5 rounded-lg border transition-all ${
                      copiedField === 'ifsc'
                        ? 'bg-emerald-100 text-emerald-800 border-emerald-400'
                        : 'bg-white border-slate-300 text-slate-700'
                    }`}
                  >
                    {copiedField === 'ifsc' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Vendor Empanelment Banner */}
        <div className="mt-10 p-6 sm:p-8 rounded-3xl border flex flex-col sm:flex-row items-center justify-between gap-6 bg-gradient-to-r from-amber-50 via-white to-amber-50/50 border-amber-200 shadow-sm">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base font-bold font-sans text-slate-900">
              Enterprise Vendor Empanelment &amp; NDA Readiness
            </h4>
            <p className="text-xs text-slate-600">
              Download our complete corporate compliance dossier including GST certificate, cancelled cheque, and vendor onboarding form.
            </p>
          </div>
          <button
            onClick={() => onOpenQuoteModal('Vendor Empanelment Request')}
            className="px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-[#FDE68A] via-[#D4AF37] to-[#B38728] shadow-md hover:scale-105 transition-all flex items-center gap-2 shrink-0"
          >
            <Download className="w-4 h-4" />
            Request Vendor Empanelment Kit
          </button>
        </div>

      </div>
    </section>
  );
}