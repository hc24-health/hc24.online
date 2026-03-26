import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Clock, CheckCircle } from "lucide-react";

const cities = [
  { id: 1, name: "Lagos", country: "Nigeria", status: "live", x: 47.5, y: 52, desc: "Serving all of Lagos — same-day booking available." },
  { id: 2, name: "Abuja", country: "Nigeria", status: "soon", x: 50, y: 50, desc: "Coming Q3 2026 — join the waitlist." },
  { id: 3, name: "Accra", country: "Ghana", status: "soon", x: 46.5, y: 53, desc: "Coming Q4 2026." },
  { id: 4, name: "Nairobi", country: "Kenya", status: "soon", x: 57, y: 57, desc: "Coming 2027." },
  { id: 5, name: "Johannesburg", country: "South Africa", status: "planned", x: 54, y: 67, desc: "On our roadmap." },
  { id: 6, name: "Cairo", country: "Egypt", status: "planned", x: 54.5, y: 43, desc: "On our roadmap." },
];

export default function AvailabilityMap() {
  const [active, setActive] = useState(cities[0]);

  return (
    <section className="py-28 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(220,38,38,0.08)_0%,transparent_70%)]" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <p className="text-red-400 font-outfit font-medium text-sm tracking-widest uppercase mb-4">Availability</p>
          <h2 className="font-outfit font-800 text-4xl md:text-5xl text-white leading-tight">
            Live in Lagos.<br />
            <span className="text-slate-400">Expanding across Africa.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* City list */}
          <div className="space-y-3">
            {cities.map((city, i) => (
              <motion.button
                key={city.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                onClick={() => setActive(city)}
                className={`w-full text-left flex items-center gap-4 px-5 py-4 rounded-2xl border transition-all duration-300 ${
                  active.id === city.id
                    ? "bg-white/10 border-white/20"
                    : "bg-white/[0.03] border-white/5 hover:bg-white/5"
                }`}
              >
                <div className={`w-3 h-3 rounded-full flex-shrink-0 ${
                  city.status === "live" ? "bg-green-400 shadow-lg shadow-green-400/50" :
                  city.status === "soon" ? "bg-yellow-400 shadow-lg shadow-yellow-400/30" :
                  "bg-slate-600"
                } ${city.status === "live" ? "animate-pulse" : ""}`} />
                <div className="flex-1 min-w-0">
                  <p className="font-outfit font-700 text-white text-sm">{city.name}</p>
                  <p className="font-outfit text-slate-500 text-xs">{city.country}</p>
                </div>
                <span className={`text-xs font-outfit font-medium px-2.5 py-1 rounded-full ${
                  city.status === "live" ? "bg-green-500/10 text-green-400" :
                  city.status === "soon" ? "bg-yellow-500/10 text-yellow-400" :
                  "bg-slate-700 text-slate-400"
                }`}>
                  {city.status === "live" ? "Live" : city.status === "soon" ? "Coming soon" : "Planned"}
                </span>
              </motion.button>
            ))}
          </div>

          {/* Map */}
          <div className="lg:col-span-2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative bg-slate-900 border border-white/5 rounded-3xl overflow-hidden"
              style={{ aspectRatio: "16/10" }}
            >
              {/* SVG World Map (simplified Africa-focused) */}
              <svg
                viewBox="0 0 100 70"
                className="absolute inset-0 w-full h-full opacity-20"
                preserveAspectRatio="xMidYMid slice"
              >
                {/* Africa continent outline - simplified path */}
                <path d="M47 20 L52 18 L58 20 L62 25 L63 32 L60 38 L62 45 L58 52 L54 58 L50 62 L46 60 L43 55 L42 48 L44 42 L42 36 L43 28 Z" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.3)" strokeWidth="0.3"/>
                {/* Europe */}
                <path d="M46 10 L54 9 L58 12 L56 16 L50 17 L46 15 Z" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.15)" strokeWidth="0.3"/>
                {/* Middle East */}
                <path d="M58 18 L65 16 L68 20 L66 26 L62 26 L60 22 Z" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.15)" strokeWidth="0.3"/>
                {/* Grid dots */}
                {Array.from({ length: 20 }).map((_, r) =>
                  Array.from({ length: 30 }).map((_, c) => (
                    <circle key={`${r}-${c}`} cx={5 + c * 3} cy={5 + r * 3} r="0.15" fill="rgba(255,255,255,0.2)" />
                  ))
                )}
              </svg>

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 via-transparent to-slate-900/60" />

              {/* City pins */}
              {cities.map((city) => (
                <motion.button
                  key={city.id}
                  onClick={() => setActive(city)}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 group z-10"
                  style={{ left: `${city.x}%`, top: `${city.y}%` }}
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {/* Ping animation for live */}
                  {city.status === "live" && (
                    <motion.div
                      animate={{ scale: [1, 2.5, 1], opacity: [0.6, 0, 0.6] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inset-0 rounded-full bg-green-400"
                    />
                  )}
                  <div className={`w-4 h-4 rounded-full border-2 ${
                    active.id === city.id ? "border-white scale-125" : "border-white/50"
                  } ${
                    city.status === "live" ? "bg-green-400" :
                    city.status === "soon" ? "bg-yellow-400" :
                    "bg-slate-600"
                  } relative z-10 transition-all duration-200`} />
                </motion.button>
              ))}

              {/* Active city info card */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md border border-white/10 rounded-2xl p-4"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white font-outfit font-700 text-base">{active.name}, {active.country}</p>
                      <p className="text-slate-400 font-outfit text-xs mt-0.5">{active.desc}</p>
                    </div>
                    <div className={`flex items-center gap-1.5 text-xs font-outfit font-medium px-3 py-1.5 rounded-full ${
                      active.status === "live" ? "bg-green-500/10 text-green-400" :
                      active.status === "soon" ? "bg-yellow-500/10 text-yellow-400" :
                      "bg-slate-700 text-slate-400"
                    }`}>
                      {active.status === "live" ? <CheckCircle className="w-3 h-3" /> : <Clock className="w-3 h-3" />}
                      {active.status === "live" ? "Live Now" : active.status === "soon" ? "Coming Soon" : "Planned"}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>
        </div>

        {/* Legend */}
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-6 mt-10">
          {[
            { color: "bg-green-400", label: "Live now" },
            { color: "bg-yellow-400", label: "Coming soon" },
            { color: "bg-slate-600", label: "Planned" },
          ].map((l) => (
            <div key={l.label} className="flex items-center gap-2">
              <div className={`w-2.5 h-2.5 rounded-full ${l.color}`} />
              <span className="font-outfit text-slate-400 text-sm">{l.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}