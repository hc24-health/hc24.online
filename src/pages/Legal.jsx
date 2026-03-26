import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "../components/landing/Navbar";
import FooterBar from "../components/landing/FooterBar";
import { FileText, Lock, ShieldCheck, Scale, Cookie, HelpCircle, ArrowRight } from "lucide-react";

const legalDocs = [
  {
    icon: FileText,
    title: "Terms & Conditions",
    desc: "The agreement that governs your use of the HC24 platform, your rights, and your obligations.",
    href: "/terms",
    updated: "March 24, 2026",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: Lock,
    title: "Privacy Policy",
    desc: "How we collect, use, store, and protect your personal and health data.",
    href: "/privacy",
    updated: "March 24, 2026",
    color: "bg-violet-50 text-violet-600",
  },
  {
    icon: ShieldCheck,
    title: "Data Protection",
    desc: "Our technical and organisational security measures and your NDPA 2023 data rights.",
    href: "/data-protection",
    updated: "March 24, 2026",
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: Cookie,
    title: "Cookie Policy",
    desc: "What cookies we use, why, and how you can control them.",
    href: "/cookies",
    updated: "March 24, 2026",
    color: "bg-yellow-50 text-yellow-600",
  },
  {
    icon: Scale,
    title: "Disclaimer",
    desc: "Important medical and liability disclaimers regarding the use of our diagnostic services.",
    href: "/disclaimer",
    updated: "March 24, 2026",
    color: "bg-orange-50 text-orange-600",
  },
  {
    icon: HelpCircle,
    title: "Acceptable Use Policy",
    desc: "Prohibited activities and behaviour standards for using the HC24 platform.",
    href: "/acceptable-use",
    updated: "March 24, 2026",
    color: "bg-red-50 text-red-600",
  },
];

export default function Legal() {
  return (
    <div className="min-h-screen bg-white font-outfit">
      <Navbar />
      <div className="pt-28 pb-20">
        {/* Hero */}
        <div className="bg-slate-950 py-20 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 bg-red-600/10 border border-red-600/20 text-red-400 text-xs font-medium px-3 py-1.5 rounded-full mb-6">
              <Scale className="w-3 h-3" /> Legal & Compliance
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-outfit font-800 text-4xl md:text-5xl text-white mb-5">Legal Centre</motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-slate-400 text-base max-w-lg mx-auto leading-relaxed">
              Transparency is core to our values. Find all our legal documents, policies, and compliance information in one place.
            </motion.p>
          </div>
        </div>

        {/* Documents grid */}
        <div className="max-w-5xl mx-auto px-6 md:px-10 mt-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {legalDocs.map((doc, i) => (
              <motion.div key={doc.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <Link to={doc.href} className="group flex flex-col h-full bg-white border border-slate-100 hover:border-slate-200 hover:shadow-xl rounded-2xl p-6 transition-all duration-300">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 ${doc.color}`}>
                    <doc.icon className="w-6 h-6" />
                  </div>
                  <h2 className="font-outfit font-700 text-slate-900 text-base mb-2">{doc.title}</h2>
                  <p className="font-outfit text-slate-500 text-sm leading-relaxed flex-1">{doc.desc}</p>
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-100">
                    <span className="font-outfit text-slate-400 text-xs">Updated {doc.updated}</span>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-slate-900 group-hover:translate-x-1 transition-all" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Contact legal */}
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
            className="mt-16 bg-slate-950 rounded-3xl p-10 text-center">
            <Scale className="w-10 h-10 text-red-400 mx-auto mb-4" />
            <h3 className="font-outfit font-700 text-white text-xl mb-3">Legal Enquiries</h3>
            <p className="font-outfit text-slate-400 text-sm max-w-md mx-auto mb-6 leading-relaxed">
              For legal correspondence, partnership agreements, or compliance enquiries, contact our legal team directly.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="mailto:legal@hc24.app" className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl font-outfit font-600 text-sm transition-colors">
                legal@hc24.app
              </a>
              <a href="mailto:dpo@hc24.app" className="bg-white/10 hover:bg-white/15 text-white px-6 py-3 rounded-xl font-outfit font-600 text-sm transition-colors border border-white/10">
                dpo@hc24.app (DPO)
              </a>
            </div>
          </motion.div>
        </div>
      </div>
      <FooterBar />
    </div>
  );
}