import React from "react";
import { motion } from "framer-motion";

const SCREENSHOT_1 = "https://media.base44.com/images/public/69bf8af46c81bb39ef461e54/3ad80afa1_SimulatorScreenshot-iPhone17ProMax-2026-03-22at171648.png";
const SCREENSHOT_2 = "https://media.base44.com/images/public/69bf8af46c81bb39ef461e54/e049c05a4_SimulatorScreenshot-iPhone17ProMax-2026-03-23at153238.png";

const features = [
  { screen: SCREENSHOT_1, title: "Cycle & Health Tracking", desc: "Monitor your cycle, ovulation, and fertility window. Log symptoms and get AI-powered insights — all in one place." },
  { screen: SCREENSHOT_2, title: "Laboratory Catalog", desc: "Browse 200+ tests across all diagnostic categories. Select what you need, pay securely with Apple Pay or crypto, and we'll come to you." },
];

export default function AppScreenshots() {
  return (
    <section className="py-28 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:72px_72px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-20">
          <p className="text-red-400 font-outfit font-medium text-sm tracking-widest uppercase mb-4">The App</p>
          <h2 className="font-outfit font-800 text-4xl md:text-5xl text-white leading-tight">
            Everything health,<br />
            <span className="text-slate-400">beautifully designed</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="flex flex-col items-center gap-8"
            >
              {/* Phone frame */}
              <div className="relative w-56">
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/30 to-transparent rounded-[2.8rem] blur-2xl scale-110" />
                <div className="relative bg-slate-900 rounded-[2.8rem] border border-white/10 overflow-hidden shadow-2xl" style={{ aspectRatio: "9/19.5" }}>
                  <img src={f.screen} alt={f.title} className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="text-center">
                <h3 className="font-outfit font-700 text-white text-xl mb-2">{f.title}</h3>
                <p className="font-outfit text-slate-400 text-sm leading-relaxed max-w-xs mx-auto">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Download buttons */}
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-wrap justify-center gap-4 mt-20">
          <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-black hover:bg-slate-900 border border-white/10 text-white px-6 py-3.5 rounded-xl transition-all">
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="white"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
            <div className="text-left">
              <p className="text-white/60 text-xs font-outfit leading-none">Download on the</p>
              <p className="text-white font-outfit font-700 text-base leading-tight">App Store</p>
            </div>
          </a>
          <a href="https://play.google.com" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-black hover:bg-slate-900 border border-white/10 text-white px-6 py-3.5 rounded-xl transition-all">
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="white"><path d="M3.18 23.76c.3.17.64.24.99.2l12.6-7.28-2.81-2.81L3.18 23.76zM20.47 10.46l-2.75-1.59L14.6 12l3.12 3.12 2.75-1.59c.78-.45.78-1.63 0-2.07zM2.19.24C1.88.42 1.67.78 1.67 1.24v21.52c0 .46.21.82.52 1l11.7-11.7L2.19.24zM14.6 12L4.17.55 16.62 7.95 14.6 12z"/></svg>
            <div className="text-left">
              <p className="text-white/60 text-xs font-outfit leading-none">Get it on</p>
              <p className="text-white font-outfit font-700 text-base leading-tight">Google Play</p>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}