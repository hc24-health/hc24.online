import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/landing/Navbar";
import FooterBar from "../components/landing/FooterBar";
import { AlertTriangle } from "lucide-react";

const sections = [
  { title: "Not a Substitute for Medical Advice", content: "The information, results, and AI-generated insights provided through HC24 are for informational and diagnostic support purposes only. They do not constitute medical advice, diagnosis, or treatment. Always seek the advice of a qualified physician or other qualified health provider with any questions you may have regarding a medical condition." },
  { title: "AI-Generated Content", content: "HC24 uses artificial intelligence to assist in the interpretation of diagnostic results. While our AI is trained on validated clinical data and every report is reviewed by a licensed physician before delivery, AI systems are not infallible. Results should always be considered in the context of your full clinical picture." },
  { title: "Emergency Situations", content: "HC24 is not an emergency service. If you are experiencing a medical emergency, call 112 (Nigeria Emergency), your local emergency number, or proceed to the nearest hospital immediately. Do not use this Platform to seek emergency medical assistance." },
  { title: "Accuracy of Results", content: "While HC24 partners with CLIA-certified laboratories and maintains strict quality control standards, no laboratory test has 100% accuracy. Results may be affected by sample quality, timing, medication use, and other factors. Abnormal or unexpected results should be discussed with a healthcare provider before any action is taken." },
  { title: "No Doctor-Patient Relationship", content: "Use of HC24 does not create a doctor-patient relationship between you and HC24, its staff, or its partnered physicians. The reviewing physicians are providing a second-opinion verification service, not establishing an ongoing therapeutic relationship." },
  { title: "Liability Limitation", content: "HC24 Technologies Ltd shall not be held liable for any actions taken or not taken based on the information or results provided through the Platform. This includes, without limitation, any delay in seeking professional medical advice." },
];

export default function Disclaimer() {
  return (
    <div className="min-h-screen bg-white font-outfit">
      <Navbar />
      <div className="pt-28 pb-20">
        <div className="bg-amber-950 py-16 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 bg-amber-400/10 border border-amber-400/20 text-amber-400 text-xs font-medium px-3 py-1.5 rounded-full mb-6">
              <AlertTriangle className="w-3 h-3" /> Medical Disclaimer
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-outfit font-800 text-4xl md:text-5xl text-white mb-4">Disclaimer</motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-amber-200/60 text-sm">Last updated: March 24, 2026</motion.p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-6 md:px-10 mt-14 space-y-10">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="bg-amber-50 border border-amber-200 rounded-2xl p-5 flex gap-4">
            <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <p className="text-amber-800 text-sm leading-relaxed font-outfit">
              <strong>Important:</strong> HC24 provides diagnostic support — not medical treatment. In any emergency, contact emergency services immediately.
            </p>
          </motion.div>

          {sections.map((s, i) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}>
              <h2 className="font-outfit font-700 text-slate-900 text-lg mb-3">{s.title}</h2>
              <p className="text-slate-600 text-sm leading-relaxed">{s.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <FooterBar />
    </div>
  );
}