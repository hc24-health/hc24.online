import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Brain, UserCheck, Shield, Zap, MessageCircle, CheckCircle } from "lucide-react";

const trustPoints = [
  { icon: Brain, title: "AI Diagnostic Engine", desc: "Our proprietary AI analyses your results against millions of data points, flagging anomalies and patterns instantly." },
  { icon: UserCheck, title: "Verified by Real Doctors", desc: "Every AI-generated report is reviewed and signed off by a licensed physician before you see it. No exceptions." },
  { icon: Shield, title: "Medical Practitioners On Call", desc: "Pharmacists, lab scientists, nurses, and specialist physicians are always in the loop — not just one doctor." },
  { icon: MessageCircle, title: "Ask Your AI Doctor", desc: "Chat 24/7 with our AI doctor for instant guidance. Complex questions are escalated to human practitioners automatically." },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function AIDoctorSection() {
  return (
    <section className="py-28 bg-white relative overflow-hidden">
      {/* Animated background blobs */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], rotate: [0, 10, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-32 -right-32 w-96 h-96 bg-red-50 rounded-full blur-3xl opacity-60"
      />
      <motion.div
        animate={{ scale: [1, 1.15, 1], rotate: [0, -8, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute -bottom-32 -left-32 w-80 h-80 bg-violet-50 rounded-full blur-3xl opacity-40"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-20">
          <p className="text-red-600 font-outfit font-medium text-sm tracking-widest uppercase mb-4">Our Medical Model</p>
          <h2 className="font-outfit font-800 text-4xl md:text-5xl text-slate-900 leading-tight mb-5">
            AI speed.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-violet-600">Human wisdom.</span>
          </h2>
          <p className="font-outfit text-slate-500 text-base max-w-xl mx-auto leading-relaxed">
            HC24 is not a replacement for doctors — it's powered by them. Every feature is built in collaboration with licensed medical practitioners so you get the best of both worlds.
          </p>
        </motion.div>

        {/* Central visual + cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left: animated trust orbit */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex items-center justify-center h-80"
          >
            {/* Center node */}
            <motion.div
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 w-24 h-24 rounded-3xl bg-gradient-to-br from-red-500 to-red-700 flex flex-col items-center justify-center shadow-2xl shadow-red-500/40"
            >
              <Brain className="w-8 h-8 text-white" />
              <p className="text-white font-outfit font-700 text-xs mt-1">HC24 AI</p>
            </motion.div>

            {/* Orbit ring 1 */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              className="absolute w-52 h-52 rounded-full border border-dashed border-slate-200"
            >
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-xl bg-white border border-slate-100 shadow-lg flex items-center justify-center"
              >
                <UserCheck className="w-4 h-4 text-emerald-600" />
              </motion.div>
            </motion.div>

            {/* Orbit ring 2 */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute w-72 h-72 rounded-full border border-dashed border-slate-100"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-xl bg-white border border-slate-100 shadow-lg flex items-center justify-center"
              >
                <Shield className="w-4 h-4 text-blue-600" />
              </motion.div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-xl bg-white border border-slate-100 shadow-lg flex items-center justify-center"
              >
                <Zap className="w-4 h-4 text-yellow-500" />
              </motion.div>
            </motion.div>

            {/* Floating label */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-xs font-outfit font-medium px-4 py-2 rounded-full whitespace-nowrap flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
              Always physician-reviewed
            </motion.div>
          </motion.div>

          {/* Right: grid of trust points */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            {trustPoints.map((tp) => (
              <motion.div key={tp.title} variants={itemVariants}
                className="group bg-slate-50 border border-slate-100 rounded-2xl p-5 hover:bg-white hover:shadow-lg hover:border-red-100 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-red-100 group-hover:bg-red-600 flex items-center justify-center mb-3 transition-colors duration-300">
                  <tp.icon className="w-5 h-5 text-red-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-outfit font-700 text-slate-900 text-sm mb-1">{tp.title}</h3>
                <p className="font-outfit text-slate-500 text-xs leading-relaxed">{tp.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom certification bar */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
          className="mt-16 bg-slate-950 rounded-3xl px-8 py-6 flex flex-wrap justify-center gap-8">
          {["CLIA Certified", "HIPAA Compliant", "ISO 15189", "Licensed Physicians", "AI + Human Review"].map((cert) => (
            <div key={cert} className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
              <span className="font-outfit font-medium text-white text-sm">{cert}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}