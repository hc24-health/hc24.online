import React from "react";
import { motion } from "framer-motion";
import { Briefcase, MapPin, ArrowRight } from "lucide-react";
import Navbar from "../components/landing/Navbar";
import FooterBar from "../components/landing/FooterBar";

const openings = [
  { title: "Senior Mobile Engineer (React Native)", dept: "Engineering", location: "Lagos, Nigeria", type: "Full-time" },
  { title: "Certified Phlebotomist", dept: "Clinical", location: "Lagos, Nigeria", type: "Full-time" },
  { title: "Medical Lab Scientist", dept: "Clinical", location: "Lagos, Nigeria", type: "Full-time" },
  { title: "AI/ML Engineer", dept: "Engineering", location: "Remote", type: "Full-time" },
  { title: "Customer Experience Lead", dept: "Operations", location: "Lagos, Nigeria", type: "Full-time" },
  { title: "Marketing & Growth Manager", dept: "Marketing", location: "Lagos, Nigeria", type: "Full-time" },
];

export default function Careers() {
  return (
    <div style={{ fontFamily: "'Outfit', sans-serif" }}>
      <Navbar />
      <section className="pt-36 pb-20 bg-slate-950 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/15 rounded-full blur-[120px]" />
        <div className="max-w-3xl mx-auto px-6 md:px-10 relative z-10 text-center">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-red-400 font-outfit font-medium text-sm tracking-widest uppercase mb-4">Join Us</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-outfit font-800 text-5xl md:text-6xl text-white leading-tight mb-6">
            Build the future of <span className="text-red-400">African healthcare</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="font-outfit text-slate-400 text-lg leading-relaxed">
            We're a small team with a big mission. If you're passionate about healthcare access, technology, and Africa, we'd love to meet you.
          </motion.p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <p className="text-red-600 font-outfit font-medium text-sm tracking-widest uppercase mb-8">Open Positions</p>
          <div className="space-y-4">
            {openings.map((job, i) => (
              <motion.div key={job.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 border border-slate-100 hover:border-red-200 bg-white hover:bg-red-50/30 rounded-2xl p-6 transition-all cursor-pointer">
                <div>
                  <p className="font-outfit font-700 text-slate-900 text-base">{job.title}</p>
                  <div className="flex flex-wrap gap-3 mt-2">
                    <span className="text-xs font-outfit text-slate-500 flex items-center gap-1"><Briefcase className="w-3 h-3" />{job.dept}</span>
                    <span className="text-xs font-outfit text-slate-500 flex items-center gap-1"><MapPin className="w-3 h-3" />{job.location}</span>
                    <span className="text-xs font-outfit font-medium bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full">{job.type}</span>
                  </div>
                </div>
                <a href="mailto:careers@hc24.app" className="flex items-center gap-2 text-red-600 font-outfit font-medium text-sm group-hover:gap-3 transition-all">
                  Apply <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 bg-slate-950 rounded-3xl p-10 text-center">
            <h3 className="font-outfit font-700 text-white text-2xl mb-2">Don't see your role?</h3>
            <p className="font-outfit text-slate-400 text-sm mb-6">We're always looking for talented people. Send us your CV and we'll be in touch.</p>
            <a href="mailto:careers@hc24.app" className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl font-outfit font-medium text-sm transition-all">
              Send open application <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
      <FooterBar />
    </div>
  );
}