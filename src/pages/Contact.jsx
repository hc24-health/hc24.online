import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, MessageSquare, Send } from "lucide-react";
import Navbar from "../components/landing/Navbar";
import FooterBar from "../components/landing/FooterBar";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailto = `mailto:hello@hc24.app?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;
    window.location.href = mailto;
    setSent(true);
  };

  return (
    <div style={{ fontFamily: "'Outfit', sans-serif" }}>
      <Navbar />
      <section className="pt-36 pb-20 bg-slate-950 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/15 rounded-full blur-[120px]" />
        <div className="max-w-3xl mx-auto px-6 md:px-10 relative z-10 text-center">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-red-400 font-outfit font-medium text-sm tracking-widest uppercase mb-4">Contact</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-outfit font-800 text-5xl md:text-6xl text-white leading-tight mb-6">
            We'd love to <span className="text-red-400">hear from you</span>
          </motion.h1>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-outfit font-700 text-slate-900 text-2xl mb-6">Get in touch</h2>
            <div className="space-y-5">
              {[
                { icon: Mail, label: "Email", value: "hello@hc24.app", href: "mailto:hello@hc24.app" },
                { icon: MessageSquare, label: "Support", value: "support@hc24.app", href: "mailto:support@hc24.app" },
                { icon: MapPin, label: "Location", value: "Lagos, Nigeria", href: null },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4 bg-slate-50 rounded-2xl p-5">
                  <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <p className="font-outfit font-600 text-slate-700 text-sm">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="font-outfit text-slate-500 text-sm hover:text-red-600 transition-colors">{item.value}</a>
                    ) : (
                      <p className="font-outfit text-slate-500 text-sm">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-slate-950 rounded-2xl p-6">
              <p className="text-red-400 font-outfit font-medium text-xs tracking-widest uppercase mb-2">Availability</p>
              <p className="text-white font-outfit font-700 text-lg">Currently serving Lagos, Nigeria</p>
              <p className="text-slate-400 font-outfit text-sm mt-1">Expanding to more cities soon. Download the app to join the waitlist.</p>
            </div>
          </div>

          <div>
            {sent ? (
              <div className="h-full flex items-center justify-center text-center">
                <div>
                  <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Send className="w-7 h-7 text-green-600" />
                  </div>
                  <p className="font-outfit font-700 text-slate-900 text-xl mb-2">Message sent!</p>
                  <p className="font-outfit text-slate-500 text-sm">We'll get back to you within 1-2 business days.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {[
                  { label: "Your Name", key: "name", type: "text", placeholder: "Chidi Okonkwo" },
                  { label: "Email Address", key: "email", type: "email", placeholder: "chidi@email.com" },
                  { label: "Subject", key: "subject", type: "text", placeholder: "I have a question about..." },
                ].map((f) => (
                  <div key={f.key}>
                    <label className="block font-outfit font-medium text-slate-700 text-sm mb-1">{f.label}</label>
                    <input
                      type={f.type}
                      placeholder={f.placeholder}
                      value={form[f.key]}
                      onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                      required
                      className="w-full border border-slate-200 rounded-xl px-4 py-3 font-outfit text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500/30 focus:border-red-400"
                    />
                  </div>
                ))}
                <div>
                  <label className="block font-outfit font-medium text-slate-700 text-sm mb-1">Message</label>
                  <textarea
                    rows={5}
                    placeholder="Tell us how we can help..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    required
                    className="w-full border border-slate-200 rounded-xl px-4 py-3 font-outfit text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500/30 focus:border-red-400 resize-none"
                  />
                </div>
                <button type="submit" className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3.5 rounded-xl font-outfit font-600 text-sm transition-all">
                  Send Message <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
      <FooterBar />
    </div>
  );
}