import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FlaskConical, Building2, ArrowRight, Loader2 } from "lucide-react";
import Navbar from "../components/landing/Navbar";
import FooterBar from "../components/landing/FooterBar";
import { db } from "../lib/firebase";
import { collection, getDocs } from "firebase/firestore";

export default function Partners() {
  const [labs, setLabs] = useState([]);
  const [hospitals, setHospitals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPartners = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "facilities"));
        const labsData = [];
        const hospitalsData = [];
        
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          const facility = {
            id: doc.id,
            name: data.name || "HC24 Partner Facility",
            type: data.type === 'laboratory' ? 'Diagnostic Lab' : (data.type === 'hospital' ? 'Medical Hospital' : 'Healthcare Facility'),
            location: data.location || "Lagos, Nigeria",
            cert: data.cert || "HC24 Verified Network", 
            rawType: data.type
          };

          if (facility.rawType === "laboratory") {
            labsData.push(facility);
          } else {
            // Default everything else (including 'hospital') to the hospitals array
            hospitalsData.push(facility);
          }
        });

        setLabs(labsData);
        setHospitals(hospitalsData);
      } catch (error) {
        console.error("Failed to load facilities:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPartners();
  }, []);

  return (
    <div style={{ fontFamily: "'Outfit', sans-serif" }}>
      <Navbar />
      <section className="pt-36 pb-20 bg-slate-950 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/15 rounded-full blur-[120px]" />
        <div className="max-w-3xl mx-auto px-6 md:px-10 relative z-10 text-center">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-red-400 font-outfit font-medium text-sm tracking-widest uppercase mb-4">Our Network</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-outfit font-800 text-5xl md:text-6xl text-white leading-tight mb-6">
            Partnered labs & <span className="text-red-400">hospitals</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="font-outfit text-slate-400 text-lg">
            Every HC24 sample is processed through accredited facilities. We partner only with labs and hospitals that meet the highest standards.
          </motion.p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-10 space-y-16">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-20">
              <Loader2 className="w-8 h-8 text-red-500 animate-spin mb-4" />
              <p className="font-outfit text-slate-500">Loading partner network...</p>
            </div>
          ) : (
            <>
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <FlaskConical className="w-5 h-5 text-red-600" />
                  <h2 className="font-outfit font-700 text-2xl text-slate-900">Partner Laboratories</h2>
                </div>
                {labs.length === 0 ? (
                    <p className="font-outfit text-slate-500">No partner laboratories found.</p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {labs.map((lab, i) => (
                        <motion.div key={lab.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                          className="border border-slate-100 rounded-2xl p-6 bg-slate-50">
                          <div className="flex items-start justify-between gap-2">
                            <div>
                              <p className="font-outfit font-700 text-slate-900 text-base">{lab.name}</p>
                              <p className="font-outfit text-slate-500 text-sm mt-0.5">{lab.location}</p>
                            </div>
                            <span className="text-xs font-outfit font-medium bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full whitespace-nowrap">{lab.cert}</span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                )}
              </div>

              <div>
                <div className="flex items-center gap-3 mb-8">
                  <Building2 className="w-5 h-5 text-red-600" />
                  <h2 className="font-outfit font-700 text-2xl text-slate-900">Partner Hospitals</h2>
                </div>
                {hospitals.length === 0 ? (
                    <p className="font-outfit text-slate-500">No partner hospitals found.</p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {hospitals.map((h, i) => (
                        <motion.div key={h.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                          className="border border-slate-100 rounded-2xl p-6 bg-slate-50">
                          <p className="font-outfit font-700 text-slate-900 text-base">{h.name}</p>
                          <div className="flex items-center gap-3 mt-2">
                            <span className="text-xs font-outfit text-slate-500">{h.type}</span>
                            <span className="text-xs font-outfit text-slate-400">· {h.location}</span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                )}
              </div>
            </>
          )}

          <div className="bg-slate-950 rounded-3xl p-10 text-center">
            <h3 className="font-outfit font-700 text-white text-2xl mb-2">Interested in partnering with HC24?</h3>
            <p className="font-outfit text-slate-400 text-sm mb-6">We're always looking to expand our network with quality labs and hospitals in Lagos and beyond.</p>
            <a href="/contact" className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl font-outfit font-medium text-sm transition-all">
              Get in touch <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
      <FooterBar />
    </div>
  );
}