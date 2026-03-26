import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/landing/Navbar";
import FooterBar from "../components/landing/FooterBar";
import { Cookie } from "lucide-react";

const cookieTypes = [
  { name: "Essential Cookies", required: true, desc: "Required for authentication, session management, and core platform security. Cannot be disabled.", examples: "Session tokens, CSRF protection, login state" },
  { name: "Analytics Cookies", required: false, desc: "Help us understand how users interact with the platform so we can improve the experience.", examples: "Page views, feature usage, session duration (anonymised)" },
  { name: "Preference Cookies", required: false, desc: "Remember your settings and preferences to personalise your experience.", examples: "Language, notification preferences, theme" },
];

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-white font-outfit">
      <Navbar />
      <div className="pt-28 pb-20">
        <div className="bg-slate-950 py-16 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 bg-red-600/10 border border-red-600/20 text-red-400 text-xs font-medium px-3 py-1.5 rounded-full mb-6">
              <Cookie className="w-3 h-3" /> Cookie Policy
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-outfit font-800 text-4xl md:text-5xl text-white mb-4">Cookie Policy</motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-slate-400 text-sm">Last updated: March 24, 2026</motion.p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-6 md:px-10 mt-14 space-y-10">
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-slate-500 text-base leading-relaxed border-l-4 border-red-500 pl-5">
            We use cookies and similar tracking technologies to ensure the Platform works correctly and to understand how it is used. This policy explains what we use, why, and how you can control it.
          </motion.p>

          <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-outfit font-700 text-slate-900 text-lg mb-6">What Cookies We Use</h2>
            <div className="space-y-4">
              {cookieTypes.map((c, i) => (
                <motion.div key={c.name} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="border border-slate-100 rounded-2xl p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-outfit font-700 text-slate-900 text-sm">{c.name}</h3>
                    <span className={`text-xs font-outfit font-medium px-2 py-0.5 rounded-full ${c.required ? "bg-red-50 text-red-600" : "bg-slate-100 text-slate-500"}`}>
                      {c.required ? "Required" : "Optional"}
                    </span>
                  </div>
                  <p className="text-slate-500 text-xs leading-relaxed mb-2">{c.desc}</p>
                  <p className="text-slate-400 text-xs"><span className="font-medium text-slate-600">Examples:</span> {c.examples}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {[
            { title: "How Long Do Cookies Last?", content: "Session cookies expire when you close your browser. Persistent cookies last between 30 days (analytics) and 1 year (preferences), unless you clear them earlier." },
            { title: "Third-Party Cookies", content: "We do not use third-party advertising cookies. Analytics are processed using privacy-first tools that do not share your data with advertising networks." },
            { title: "How to Control Cookies", content: "You can manage cookies in your browser settings. Most browsers allow you to block or delete cookies. Note that disabling essential cookies will prevent you from logging in and using core features. On mobile, you can manage app tracking permissions in your device Settings > Privacy." },
            { title: "Changes to This Policy", content: "We will notify you of material changes to this Cookie Policy via in-app notification or email." },
          ].map((s, i) => (
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