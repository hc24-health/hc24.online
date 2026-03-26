import React from "react";
import { motion } from "framer-motion";
import { MapPin, Heart, Brain, Shield } from "lucide-react";
import Navbar from "../components/landing/Navbar";
import FooterBar from "../components/landing/FooterBar";

const values = [
  { icon: Heart, title: "Patient First", desc: "Every decision we make starts with what's best for the patient — speed, accuracy, and dignity." },
  { icon: Brain, title: "AI-Augmented Care", desc: "We use cutting-edge AI diagnostics, always verified by licensed physicians before reaching you." },
  { icon: Shield, title: "Privacy by Design", desc: "Your health data is encrypted, never sold, and you stay in full control at all times." },
  { icon: MapPin, title: "Built for Africa", desc: "HC24 is built from the ground up for African healthcare infrastructure, starting in Lagos, Nigeria." },
];

export default function About() {
  return (
    <div style={{ fontFamily: "'Outfit', sans-serif" }}>
      <Navbar />
      <section className="pt-36 pb-20 bg-slate-950 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/15 rounded-full blur-[120px]" />
        <div className="max-w-4xl mx-auto px-6 md:px-10 relative z-10 text-center">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-red-400 font-outfit font-medium text-sm tracking-widest uppercase mb-4">Our Story</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-outfit font-800 text-5xl md:text-6xl text-white leading-tight mb-6">
            Healthcare that comes <span className="text-red-400">to you</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="font-outfit text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto">
            HC24 was founded with a simple belief: nobody should have to sit in a clinic waiting room just to get a blood test. We bring certified phlebotomists to your door, process your samples in CLIA-accredited labs, and deliver verified results — right to your phone.
          </motion.p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-20">
            <div>
              <p className="text-red-600 font-outfit font-medium text-sm tracking-widest uppercase mb-3">Where We Are</p>
              <h2 className="font-outfit font-800 text-4xl text-slate-900 leading-tight mb-4">Currently live in <span className="text-red-600">Lagos, Nigeria</span></h2>
              <p className="font-outfit text-slate-500 text-base leading-relaxed">We're currently serving all of Lagos, Nigeria — with plans to expand across West Africa and the continent. If you're outside Lagos, join our waitlist in the app to be notified when we arrive in your city.</p>
            </div>
            <div className="bg-slate-950 rounded-3xl p-8 text-center">
              <div className="w-16 h-16 bg-red-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-red-400" />
              </div>
              <p className="text-white font-outfit font-700 text-2xl">Lagos, Nigeria</p>
              <p className="text-slate-400 font-outfit text-sm mt-1">All areas covered · Same-day booking</p>
              <div className="mt-4 inline-flex items-center gap-2 bg-red-600/10 border border-red-600/20 text-red-400 text-xs font-outfit font-medium px-3 py-1.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
                Now live
              </div>
            </div>
          </div>

          <p className="text-red-600 font-outfit font-medium text-sm tracking-widest uppercase mb-6 text-center">Our Values</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div key={v.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="bg-slate-50 rounded-3xl p-6 border border-slate-100">
                <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                  <v.icon className="w-5 h-5 text-red-600" />
                </div>
                <h3 className="font-outfit font-700 text-slate-900 text-base mb-2">{v.title}</h3>
                <p className="font-outfit text-slate-500 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <FooterBar />
    </div>
  );
}