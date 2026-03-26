import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Clock, Shield } from "lucide-react";

const badges = [
  { icon: CheckCircle, text: "98.9% Accuracy" },
  { icon: Clock, text: "Fast Results" },
  { icon: Shield, text: "CLIA Certified" },
];

export default function HeroSection({ heroImage }) {
  return (
    <section className="relative min-h-screen bg-slate-950 overflow-hidden flex flex-col">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:72px_72px]" />
      
      {/* Red glow accent */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-600/20 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-red-900/20 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pt-36 pb-16 flex-1 flex flex-col justify-between">
        
        {/* Top label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex items-center gap-2 mb-12"
        >
          <span className="flex items-center gap-2 bg-red-600/10 border border-red-600/20 text-red-400 text-xs font-outfit font-medium px-3 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
            Now available nationwide
          </span>
        </motion.div>

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center flex-1">
          {/* Left content */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="font-outfit font-800 text-5xl md:text-6xl lg:text-7xl text-white leading-[1.05] tracking-tight mb-6"
            >
              Tests.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
                At Your Door.
              </span>{" "}
              Results Online.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="font-outfit text-slate-400 text-lg leading-relaxed mb-10 max-w-lg"
            >
              A certified phlebotomist collects your sample at home. Our lab processes it with precision, and your results are delivered securely — straight to the HC24 app.
            </motion.p>

            {/* Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="flex flex-wrap gap-3 mb-10"
            >
              {badges.map((b) => (
                <div key={b.text} className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2">
                  <b.icon className="w-4 h-4 text-red-400" />
                  <span className="text-white/70 text-sm font-outfit font-medium">{b.text}</span>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="https://apps.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 bg-white text-slate-900 px-7 py-4 rounded-xl font-outfit font-600 text-base transition-all duration-200 shadow-xl"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                App Store
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href="https://play.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-7 py-4 rounded-xl font-outfit font-600 text-base transition-all duration-200 shadow-xl shadow-red-600/25"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M3.18 23.76c.3.17.64.24.99.2l12.6-7.28-2.81-2.81L3.18 23.76zM20.47 10.46l-2.75-1.59L14.6 12l3.12 3.12 2.75-1.59c.78-.45.78-1.63 0-2.07zM2.19.24C1.88.42 1.67.78 1.67 1.24v21.52c0 .46.21.82.52 1l11.7-11.7L2.19.24zM14.6 12L4.17.55 16.62 7.95 14.6 12z"/></svg>
                Google Play
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </motion.div>
          </div>

          {/* Right: Visual card stack */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative flex justify-center items-center"
          >
            {/* Main hero image */}
            <div className="relative w-full max-w-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/30 to-transparent rounded-3xl blur-2xl scale-110" />
              <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-slate-900">
                <img
                  src={heroImage}
                  alt="Blood test collection"
                  className="w-full h-96 object-cover opacity-90"
                />
                {/* Overlay card */}
                <div className="absolute bottom-4 left-4 right-4 bg-slate-900/80 backdrop-blur-md border border-white/10 rounded-2xl p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white font-outfit font-600 text-sm">Sample #HML-2024</p>
                      <p className="text-slate-400 font-outfit text-xs mt-0.5">Processing at lab · Est. 18h</p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center">
                      <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating app badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="absolute -bottom-6 -left-8 md:-left-16 bg-slate-900 border border-white/10 rounded-2xl p-3 flex items-center gap-3 shadow-2xl"
            >
              <div className="w-10 h-10 rounded-xl bg-red-600/20 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 2C12 2 5 9.5 5 14a7 7 0 0014 0C19 9.5 12 2 12 2z" fill="white" opacity="0.9"/></svg>
              </div>
              <div>
                <p className="text-white font-outfit font-600 text-xs">HC24 App</p>
                <p className="text-slate-400 font-outfit text-xs">iOS & Android</p>
              </div>
            </motion.div>

            {/* Stat pill */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute -top-4 -right-4 md:-right-8 bg-red-600 rounded-2xl px-5 py-3 shadow-xl shadow-red-600/30"
            >
              <p className="text-white font-outfit font-800 text-2xl leading-none">50k+</p>
              <p className="text-red-200 font-outfit text-xs mt-0.5">Tests processed</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-20 pt-8 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: "Fast", label: "Results turnaround" },
            { value: "200+", label: "Tests available" },
            { value: "98.9%", label: "Result accuracy" },
            { value: "All cities", label: "Nationwide coverage" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="font-outfit font-700 text-2xl text-white">{stat.value}</p>
              <p className="font-outfit text-sm text-slate-500 mt-0.5">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}