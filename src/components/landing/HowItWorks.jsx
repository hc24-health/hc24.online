import React from "react";
import { motion } from "framer-motion";
import { MapPin, FlaskConical, BellRing } from "lucide-react";

const steps = [
  {
    icon: MapPin,
    number: "01",
    title: "We Come to You",
    description: "Pick a time and we send a certified phlebotomist to your home, office, or any location. No clinic queues.",
    color: "from-blue-600 to-blue-700",
    glow: "blue",
  },
  {
    icon: FlaskConical,
    number: "02",
    title: "Lab Processing",
    description: "Your sample is securely transported to our CLIA-certified lab and analyzed using hospital-grade equipment.",
    color: "from-red-600 to-red-700",
    glow: "red",
  },
  {
    icon: BellRing,
    number: "03",
    title: "Results in Your Pocket",
    description: "You receive a full digital report within 24 hours, with clear explanations from our medical team.",
    color: "from-emerald-600 to-emerald-700",
    glow: "emerald",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-28 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:72px_72px]" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <p className="text-red-500 font-outfit font-medium text-sm tracking-widest uppercase mb-3">Simple Process</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="font-outfit font-800 text-4xl md:text-5xl text-white leading-tight">
              Three steps to your<br />
              <span className="text-slate-400">lab results</span>
            </h2>
            <p className="text-slate-500 font-outfit text-sm max-w-xs leading-relaxed">
              From booking to results, the entire process is designed to be as effortless as possible.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 50, scale: 0.92 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="group relative bg-slate-900 border border-white/5 rounded-3xl p-8 hover:border-white/15 transition-colors duration-300 cursor-default"
            >
              {/* Glow on hover */}
              <motion.div
                className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10 bg-gradient-to-br ${step.color}`}
                style={{ transform: 'scale(0.85)' }}
              />
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-8 shadow-lg`}>
                <step.icon className="w-6 h-6 text-white" />
              </div>

              <div className="absolute top-8 right-8 font-outfit font-800 text-7xl text-white/5 leading-none select-none group-hover:text-white/[0.07] transition-colors">
                {step.number}
              </div>

              <h3 className="font-outfit font-700 text-xl text-white mb-3">{step.title}</h3>
              <p className="font-outfit text-slate-400 text-sm leading-relaxed">{step.description}</p>

              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-px bg-white/10 z-10" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}