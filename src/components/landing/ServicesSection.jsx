import React from "react";
import { motion } from "framer-motion";
import { Heart, Activity, Droplets, Shield, Dna, Zap } from "lucide-react";
import { ArrowUpRight } from "lucide-react";

const services = [
  { icon: Droplets, title: "Complete Blood Count", tag: "Popular", desc: "Full CBC with differential — red cells, white cells, platelets, and hemoglobin." },
  { icon: Heart, title: "Cardiac Panel", tag: "Preventive", desc: "Cholesterol, LDL/HDL, triglycerides, and hs-CRP for heart health assessment." },
  { icon: Activity, title: "Metabolic Screening", tag: "Comprehensive", desc: "Thyroid, liver enzymes, kidney function, and fasting glucose in one panel." },
  { icon: Dna, title: "Hormonal Profile", tag: "Specialist", desc: "Testosterone, estrogen, cortisol, DHEA for hormonal balance screening." },
  { icon: Shield, title: "Wellness Panel", tag: "Routine", desc: "Vitamins D & B12, iron, ferritin, and inflammation markers." },
  { icon: Zap, title: "Rapid Pathogen Test", tag: "Fast", desc: "Same-day results for common bacterial and viral infection markers." },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <p className="text-red-600 font-outfit font-medium text-sm tracking-widest uppercase mb-3">What We Test</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="font-outfit font-800 text-4xl md:text-5xl text-slate-900 leading-tight">
              200+ tests available,<br />
              <span className="text-slate-400">all in the HC24 app</span>
            </h2>
            <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" className="self-start md:self-auto inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-xl font-outfit font-medium text-sm transition-all duration-200">
              Get the app <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="group relative border border-slate-100 rounded-3xl p-8 hover:border-red-100 hover:bg-red-50/30 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 bg-slate-100 group-hover:bg-red-100 rounded-2xl flex items-center justify-center transition-colors duration-300">
                  <s.icon className="w-5 h-5 text-slate-700 group-hover:text-red-600 transition-colors duration-300" />
                </div>
                <span className="text-xs font-outfit font-medium bg-slate-100 group-hover:bg-red-100 text-slate-500 group-hover:text-red-600 px-3 py-1 rounded-full transition-colors duration-300">
                  {s.tag}
                </span>
              </div>
              <h3 className="font-outfit font-700 text-lg text-slate-900 mb-2">{s.title}</h3>
              <p className="font-outfit text-slate-500 text-sm leading-relaxed">{s.desc}</p>

              <div className="mt-6 flex items-center gap-1 text-xs font-outfit font-medium text-slate-400 group-hover:text-red-600 transition-colors">
                Available in app <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}