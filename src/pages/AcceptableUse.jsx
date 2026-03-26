import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/landing/Navbar";
import FooterBar from "../components/landing/FooterBar";
import { Scale, XCircle, CheckCircle } from "lucide-react";

const prohibited = [
  "Providing false personal or health information",
  "Using the Platform for any unlawful purpose",
  "Attempting to gain unauthorised access to the Platform or other users' accounts",
  "Reverse engineering, decompiling, or extracting source code from the Platform",
  "Uploading malicious code, viruses, or disruptive scripts",
  "Scraping, harvesting, or mining user data without express permission",
  "Impersonating HC24 staff, physicians, or other users",
  "Submitting samples on behalf of another person without proper consent",
  "Using the Platform to distribute unsolicited communications (spam)",
  "Circumventing or attempting to bypass any security or access controls",
];

const permitted = [
  "Using the Platform to book and manage your own diagnostic tests",
  "Sharing your own results with your healthcare providers",
  "Using the in-app messaging feature to communicate with HC24 support",
  "Accessing your historical health data within the Platform",
  "Providing feedback and reviews of your experience",
];

export default function AcceptableUse() {
  return (
    <div className="min-h-screen bg-white font-outfit">
      <Navbar />
      <div className="pt-28 pb-20">
        <div className="bg-slate-950 py-16 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 bg-red-600/10 border border-red-600/20 text-red-400 text-xs font-medium px-3 py-1.5 rounded-full mb-6">
              <Scale className="w-3 h-3" /> Platform Policy
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-outfit font-800 text-4xl md:text-5xl text-white mb-4">Acceptable Use Policy</motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-slate-400 text-sm">Last updated: March 24, 2026</motion.p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-6 md:px-10 mt-14 space-y-12">
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-slate-500 text-base leading-relaxed border-l-4 border-red-500 pl-5">
            This Acceptable Use Policy defines what you may and may not do when using the HC24 platform. Violations may result in account suspension or termination and, in serious cases, legal action.
          </motion.p>

          <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-outfit font-700 text-slate-900 text-xl mb-5 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-emerald-600" /> Permitted Use
            </h2>
            <div className="space-y-3">
              {permitted.map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                  className="flex gap-3 items-start bg-emerald-50 rounded-xl px-4 py-3">
                  <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <p className="text-slate-700 text-sm">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-outfit font-700 text-slate-900 text-xl mb-5 flex items-center gap-2">
              <XCircle className="w-5 h-5 text-red-600" /> Prohibited Activities
            </h2>
            <div className="space-y-3">
              {prohibited.map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                  className="flex gap-3 items-start bg-red-50 rounded-xl px-4 py-3">
                  <XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                  <p className="text-slate-700 text-sm">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {[
            { title: "Enforcement", content: "HC24 reserves the right to investigate suspected violations of this policy. We may suspend or permanently terminate accounts found in violation without prior notice. For serious violations, we may report activity to relevant authorities." },
            { title: "Reporting Violations", content: "If you become aware of any misuse of the Platform, please report it to abuse@hc24.app. We take all reports seriously and will investigate promptly." },
          ].map((s) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
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