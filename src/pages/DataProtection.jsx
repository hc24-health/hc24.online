import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/landing/Navbar";
import FooterBar from "../components/landing/FooterBar";
import { ShieldCheck, Server, Eye, Key, AlertTriangle, Globe } from "lucide-react";

const pillars = [
  { icon: Key, title: "Encryption", desc: "AES-256 encryption at rest. TLS 1.3 for all data in transit. Your health records are never stored in plain text.", color: "text-blue-600 bg-blue-50" },
  { icon: Eye, title: "Access Controls", desc: "Role-based access. Only authorised physicians and lab personnel can view your results — and only when necessary.", color: "text-violet-600 bg-violet-50" },
  { icon: Server, title: "Data Residency", desc: "Your data is stored on Africa-region servers where possible, minimising cross-border data transfers.", color: "text-emerald-600 bg-emerald-50" },
  { icon: AlertTriangle, title: "Breach Response", desc: "We have a documented incident response plan. Affected users are notified within 72 hours of confirmed breach discovery.", color: "text-orange-600 bg-orange-50" },
  { icon: Globe, title: "Compliance", desc: "We comply with Nigeria Data Protection Act (NDPA) 2023, HIPAA-equivalent standards, and ISO/IEC 27001 best practices.", color: "text-red-600 bg-red-50" },
  { icon: ShieldCheck, title: "Audits", desc: "Independent third-party security audits are conducted annually. Our infrastructure is penetration-tested quarterly.", color: "text-slate-700 bg-slate-100" },
];

const rights = [
  { right: "Right to Access", detail: "Request a copy of all personal data we hold about you at any time." },
  { right: "Right to Rectification", detail: "Correct any inaccurate or incomplete personal data." },
  { right: "Right to Erasure", detail: "Request deletion of your data (subject to legal medical retention requirements)." },
  { right: "Right to Portability", detail: "Receive your data in a structured, machine-readable format." },
  { right: "Right to Object", detail: "Object to processing for direct marketing or legitimate interest purposes." },
  { right: "Right to Restrict", detail: "Request restriction of processing while a complaint is being investigated." },
  { right: "Withdraw Consent", detail: "Withdraw consent for non-essential processing at any time via app settings." },
];

export default function DataProtection() {
  return (
    <div className="min-h-screen bg-white font-outfit">
      <Navbar />
      <div className="pt-28 pb-20">
        {/* Hero */}
        <div className="bg-slate-950 py-16 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 bg-red-600/10 border border-red-600/20 text-red-400 text-xs font-medium px-3 py-1.5 rounded-full mb-6">
              <ShieldCheck className="w-3 h-3" /> Data Protection
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-outfit font-800 text-4xl md:text-5xl text-white mb-4">Data Protection</motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-slate-400 text-sm max-w-lg mx-auto leading-relaxed">How we safeguard your sensitive health data with enterprise-grade security and full regulatory compliance.</motion.p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-6 md:px-10 mt-16 space-y-16">
          {/* Security pillars */}
          <motion.section initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-outfit font-700 text-2xl text-slate-900 mb-8">Security Infrastructure</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {pillars.map((p, i) => (
                <motion.div key={p.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                  className="bg-slate-50 border border-slate-100 rounded-2xl p-5 hover:shadow-md transition-shadow">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${p.color}`}>
                    <p.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-outfit font-700 text-slate-900 text-sm mb-1">{p.title}</h3>
                  <p className="font-outfit text-slate-500 text-xs leading-relaxed">{p.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Data lifecycle */}
          <motion.section initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-outfit font-700 text-2xl text-slate-900 mb-6">Data Lifecycle</h2>
            <div className="bg-slate-950 rounded-3xl p-8 text-white space-y-5">
              {[
                { stage: "Collection", detail: "Minimum data necessary is collected. You are informed of purpose at the point of collection." },
                { stage: "Processing", detail: "Data is processed only for the stated purpose. AI processing is sandboxed and does not persist raw health data." },
                { stage: "Storage", detail: "Encrypted at rest in Africa-region data centres. Backups are encrypted and access-controlled." },
                { stage: "Sharing", detail: "Shared only with verified partners (labs, physicians) under binding data processing agreements." },
                { stage: "Deletion", detail: "Non-essential data deleted on request. Health records retained 7 years per Nigerian medical law, then securely destroyed." },
              ].map((item, i) => (
                <motion.div key={item.stage} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="flex gap-4 items-start">
                  <div className="w-6 h-6 rounded-full bg-red-600/20 border border-red-600/30 text-red-400 font-outfit font-700 text-xs flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</div>
                  <div>
                    <p className="font-outfit font-700 text-white text-sm">{item.stage}</p>
                    <p className="font-outfit text-slate-400 text-xs leading-relaxed">{item.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Your rights */}
          <motion.section initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-outfit font-700 text-2xl text-slate-900 mb-6">Your Data Rights (NDPA 2023)</h2>
            <div className="divide-y divide-slate-100 border border-slate-100 rounded-2xl overflow-hidden">
              {rights.map((r, i) => (
                <motion.div key={r.right} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                  className="flex flex-col sm:flex-row sm:items-center gap-2 px-6 py-4 hover:bg-slate-50 transition-colors">
                  <span className="font-outfit font-700 text-slate-900 text-sm w-48 flex-shrink-0">{r.right}</span>
                  <span className="font-outfit text-slate-500 text-xs leading-relaxed">{r.detail}</span>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* DPO contact */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="bg-red-50 border border-red-100 rounded-3xl p-8 text-center">
            <ShieldCheck className="w-10 h-10 text-red-600 mx-auto mb-4" />
            <h3 className="font-outfit font-700 text-slate-900 text-lg mb-2">Contact Our Data Protection Officer</h3>
            <p className="font-outfit text-slate-500 text-sm mb-4">For data requests, complaints, or questions about how we handle your information.</p>
            <a href="mailto:dpo@hc24.app" className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl font-outfit font-600 text-sm transition-colors">
              Email dpo@hc24.app
            </a>
          </motion.div>
        </div>
      </div>
      <FooterBar />
    </div>
  );
}