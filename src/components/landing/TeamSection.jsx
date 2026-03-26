import React from "react";
import { motion } from "framer-motion";
import { Brain, FlaskConical, UserCheck, ShieldCheck } from "lucide-react";

const pillars = [
  {
    icon: Brain,
    title: "AI-Powered Analysis",
    desc: "Our diagnostic AI processes your results instantly, identifying patterns and flagging anything that needs attention.",
    tag: "Instant",
    color: "bg-violet-600/10 text-violet-400",
    border: "hover:border-violet-500/20",
  },
  {
    icon: FlaskConical,
    title: "Certified Lab Processing",
    desc: "Every sample is analyzed in CLIA-certified partner labs using hospital-grade equipment and strict protocols.",
    tag: "Accredited",
    color: "bg-blue-600/10 text-blue-400",
    border: "hover:border-blue-500/20",
  },
  {
    icon: UserCheck,
    title: "Real Doctor Review",
    desc: "Licensed physicians review every AI-generated report before it reaches you. Human eyes on every result, always.",
    tag: "Human-verified",
    color: "bg-emerald-600/10 text-emerald-400",
    border: "hover:border-emerald-500/20",
  },
  {
    icon: ShieldCheck,
    title: "Consult on Demand",
    desc: "Have questions? Chat with our AI doctor 24/7, backed by real physicians who step in for complex cases.",
    tag: "24/7 Available",
    color: "bg-red-600/10 text-red-400",
    border: "hover:border-red-500/20",
  },
];

export default function TeamSection() {
  return (
    <section id="team" className="py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-4"
        >
          <div>
            <p className="text-red-600 font-outfit font-medium text-sm tracking-widest uppercase mb-3">How We Work</p>
            <h2 className="font-outfit font-800 text-4xl md:text-5xl text-slate-900 leading-tight">
              AI speed.<br />
              <span className="text-slate-400">Doctor precision.</span>
            </h2>
          </div>
          <p className="text-slate-500 font-outfit text-sm max-w-xs leading-relaxed">
            HC24 combines cutting-edge AI diagnostics with real licensed doctors — so you always get the best of both worlds.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`group bg-white border border-slate-100 rounded-3xl p-8 transition-all duration-300 ${p.border} hover:shadow-lg`}
            >
              <div className="flex items-start justify-between mb-6">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${p.color} bg-opacity-10`}>
                  <p.icon className="w-5 h-5" />
                </div>
                <span className={`text-xs font-outfit font-medium px-3 py-1 rounded-full ${p.color}`}>
                  {p.tag}
                </span>
              </div>
              <h3 className="font-outfit font-700 text-lg text-slate-900 mb-2">{p.title}</h3>
              <p className="font-outfit text-slate-500 text-sm leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}