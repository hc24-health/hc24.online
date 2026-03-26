import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Our Approach", href: "#team" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C12 2 5 9.5 5 14a7 7 0 0014 0C19 9.5 12 2 12 2z" fill="white" opacity="0.9"/>
            </svg>
          </div>
          <span className={`font-outfit font-700 text-lg ${scrolled ? 'text-slate-900' : 'text-white'}`}>HC24</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`px-4 py-2 rounded-full text-sm font-outfit font-medium transition-all duration-200 hover:bg-white/10 ${
                scrolled ? "text-slate-600 hover:text-slate-900 hover:bg-slate-100" : "text-white/80 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://apps.apple.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 text-sm font-outfit font-medium border px-4 py-2 rounded-xl transition-all duration-200 ${
              scrolled ? "border-slate-300 text-slate-700 hover:border-slate-500" : "border-white/20 text-white hover:border-white/50"
            }`}
          >
            App Store
          </a>
          <a
            href="https://play.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded-xl text-sm font-outfit font-600 transition-all duration-200 shadow-lg shadow-red-600/20"
          >
            Google Play
          </a>
        </div>

        <button onClick={() => setMobileOpen(!mobileOpen)} className={`md:hidden p-2 rounded-lg ${scrolled ? "text-slate-700" : "text-white"}`}>
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-t border-slate-100 px-6 py-4 space-y-1"
        >
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="block px-3 py-2.5 text-slate-700 font-outfit text-sm rounded-lg hover:bg-slate-50" onClick={() => setMobileOpen(false)}>
              {link.label}
            </a>
          ))}
          <div className="flex flex-col gap-2 mt-2">
            <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" className="block text-center bg-slate-900 text-white px-4 py-2.5 rounded-xl text-sm font-outfit font-medium">Download on App Store</a>
            <a href="https://play.google.com" target="_blank" rel="noopener noreferrer" className="block text-center bg-red-600 text-white px-4 py-2.5 rounded-xl text-sm font-outfit font-medium">Get on Google Play</a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}