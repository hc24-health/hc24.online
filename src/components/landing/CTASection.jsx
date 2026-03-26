import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Clock, Shield } from "lucide-react";

export default function CTASection() {
  return (
    <section id="book" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-950 rounded-[2.5rem] p-10 md:p-16 lg:p-20 relative overflow-hidden"
        >
          {/* Background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-red-900/20 rounded-full blur-[80px]" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-red-400 font-outfit font-medium text-sm tracking-widest uppercase mb-4">Get Started</p>
              <h2 className="font-outfit font-800 text-4xl md:text-5xl text-white leading-tight mb-6">
                Your health,
                <br />
                <span className="text-red-400">in your pocket.</span>
              </h2>
              <p className="font-outfit text-slate-400 text-base leading-relaxed mb-10 max-w-md">
                Download HC24 to book tests, consult with our AI doctor, and receive verified results — all from your phone.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://apps.apple.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-xl font-outfit font-600 text-base transition-all duration-200 shadow-xl"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                  App Store
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </a>
                <a
                  href="https://play.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-outfit font-600 text-base transition-all duration-200 shadow-xl shadow-red-600/30"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M3.18 23.76c.3.17.64.24.99.2l12.6-7.28-2.81-2.81L3.18 23.76zM20.47 10.46l-2.75-1.59L14.6 12l3.12 3.12 2.75-1.59c.78-.45.78-1.63 0-2.07zM2.19.24C1.88.42 1.67.78 1.67 1.24v21.52c0 .46.21.82.52 1l11.7-11.7L2.19.24zM14.6 12L4.17.55 16.62 7.95 14.6 12z"/></svg>
                  Google Play
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              {[
                { icon: MapPin, title: "At-home collection", desc: "We come to you — home, office, or hotel." },
                { icon: Clock, title: "Fast results", desc: "Reliable turnaround from accredited labs, based on test complexity." },
                { icon: Shield, title: "Fully confidential", desc: "Your data is encrypted and never shared." },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4 bg-white/5 border border-white/5 rounded-2xl p-5">
                  <div className="w-10 h-10 rounded-xl bg-red-600/20 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-4 h-4 text-red-400" />
                  </div>
                  <div>
                    <p className="text-white font-outfit font-600 text-sm">{item.title}</p>
                    <p className="text-slate-400 font-outfit text-sm mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}