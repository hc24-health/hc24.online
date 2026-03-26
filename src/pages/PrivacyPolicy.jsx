import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/landing/Navbar";
import FooterBar from "../components/landing/FooterBar";
import { Lock } from "lucide-react";

const sections = [
  {
    title: "1. Who We Are",
    content: `HC24 Technologies Ltd ("HC24", "we", "us", "our") operates the HC24 mobile application and website. We are registered in Nigeria and are committed to protecting your personal health information in accordance with applicable data protection laws, including the Nigeria Data Protection Act (NDPA) 2023.`,
  },
  {
    title: "2. Information We Collect",
    content: `We collect: (a) Identity data — full name, date of birth, gender, government ID; (b) Contact data — email address, phone number, home address; (c) Health data — test orders, sample types, diagnostic results, medical history you voluntarily provide; (d) Device data — IP address, device type, OS, app version; (e) Usage data — pages visited, features used, session duration; (f) Payment data — processed securely by our payment partners; we do not store card details.`,
  },
  {
    title: "3. How We Use Your Information",
    content: `Your information is used to: provide and improve our diagnostic services; deliver results to you and your designated physician; process payments; communicate service updates; comply with legal obligations; conduct anonymised research to improve our AI models (no personally identifiable information is used in model training without explicit consent); send you health tips and service notifications (opt-out available at any time).`,
  },
  {
    title: "4. Legal Basis for Processing",
    content: `We process your data under the following lawful bases: (a) Contractual necessity — to deliver services you have requested; (b) Legitimate interest — to improve and secure our platform; (c) Legal obligation — to comply with healthcare and financial regulations; (d) Explicit consent — for processing sensitive health data and marketing communications.`,
  },
  {
    title: "5. Sharing Your Information",
    content: `We share your data with: (a) CLIA-certified laboratory partners for sample analysis; (b) Licensed physicians for result review; (c) Payment processors for transaction handling; (d) Cloud infrastructure providers (data stored in Africa-region servers where available); (e) Regulatory authorities when required by law. We never sell your personal data to third parties.`,
  },
  {
    title: "6. Data Retention",
    content: `We retain your health records for a minimum of 7 years in compliance with Nigerian medical record-keeping regulations. Account data is retained for as long as your account is active. You may request deletion of non-health data at any time; health records may be retained longer where required by law.`,
  },
  {
    title: "7. Your Rights",
    content: `Under the NDPA 2023, you have the right to: access your personal data; correct inaccurate data; request deletion (subject to legal retention requirements); object to processing; data portability; withdraw consent at any time. To exercise any of these rights, contact privacy@hc24.app. We will respond within 30 days.`,
  },
  {
    title: "8. Security",
    content: `We implement industry-standard security measures including AES-256 encryption at rest, TLS 1.3 in transit, role-based access controls, regular third-party security audits, and HIPAA-compliant infrastructure. Despite these measures, no system is 100% secure. We will notify you promptly in the event of a data breach affecting your information.`,
  },
  {
    title: "9. Children's Privacy",
    content: `HC24 is not intended for use by persons under 18 without parental consent. If you are under 18, a parent or legal guardian must create and manage your account. We do not knowingly collect data from children under 13. If we become aware of such collection, we will delete the data immediately.`,
  },
  {
    title: "10. Cookies and Tracking",
    content: `Our website uses essential cookies for authentication and session management, analytics cookies (with consent) to understand usage, and no third-party advertising cookies. You may manage cookie preferences in your browser settings. Disabling essential cookies may affect platform functionality.`,
  },
  {
    title: "11. Changes to This Policy",
    content: `We may update this Privacy Policy periodically. Material changes will be communicated via email or in-app notification. The updated policy will indicate the revision date. Continued use of HC24 after changes constitutes acceptance.`,
  },
  {
    title: "12. Contact & Complaints",
    content: `For privacy concerns, contact our Data Protection Officer at dpo@hc24.app. If you believe your rights have been violated and we have not resolved your concern, you may lodge a complaint with the Nigeria Data Protection Commission (NDPC) at ndpc.gov.ng.`,
  },
];

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white font-outfit">
      <Navbar />
      <div className="pt-28 pb-20">
        <div className="bg-slate-950 py-16 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 bg-red-600/10 border border-red-600/20 text-red-400 text-xs font-medium px-3 py-1.5 rounded-full mb-6">
              <Lock className="w-3 h-3" /> Legal Document
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-outfit font-800 text-4xl md:text-5xl text-white mb-4">Privacy Policy</motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-slate-400 text-sm">Last updated: March 24, 2026 · Effective: March 24, 2026</motion.p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-6 md:px-10 mt-14 space-y-10">
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-slate-500 text-base leading-relaxed border-l-4 border-red-500 pl-5">
            Your health data is among the most sensitive information you can share. We treat it with the utmost care, transparency, and respect. This policy explains exactly what we collect, why, and how we protect it.
          </motion.p>

          {sections.map((s, i) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }}>
              <h2 className="font-outfit font-700 text-slate-900 text-lg mb-3">{s.title}</h2>
              <p className="text-slate-600 text-sm leading-relaxed">{s.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <FooterBar />
    </div>
  );
}