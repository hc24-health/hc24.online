import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/landing/Navbar";
import FooterBar from "../components/landing/FooterBar";
import { FileText } from "lucide-react";

const sections = [
  {
    title: "1. Acceptance of Terms",
    content: `By downloading, accessing, or using the HC24 mobile application or website ("Platform"), you agree to be bound by these Terms and Conditions. If you do not agree, you must not use our Platform. These Terms apply to all users including patients, visitors, and partners.`,
  },
  {
    title: "2. Description of Services",
    content: `HC24 provides at-home diagnostic testing services including sample collection by certified phlebotomists, laboratory processing, AI-assisted result analysis, and physician-reviewed digital health reports. Our services are currently available in Lagos, Nigeria, with expansion underway across Africa.`,
  },
  {
    title: "3. Medical Disclaimer",
    content: `HC24 is a diagnostic platform and does not constitute the practice of medicine. Our AI-generated insights are always reviewed by licensed physicians before delivery; however, results should not replace in-person medical consultation. Always consult a qualified healthcare provider before making any medical decisions. In an emergency, contact local emergency services immediately.`,
  },
  {
    title: "4. User Responsibilities",
    content: `You agree to: (a) provide accurate personal and health information; (b) be 18 years or older, or have verifiable parental/guardian consent; (c) not share your account credentials; (d) use the Platform only for lawful purposes; (e) promptly update your information if it changes. You are solely responsible for the consequences of providing inaccurate information.`,
  },
  {
    title: "5. Account Registration",
    content: `Creating an account requires a valid email address and phone number. You are responsible for all activity under your account. HC24 reserves the right to suspend or terminate accounts that violate these Terms, engage in fraudulent activity, or pose a risk to other users or the integrity of our services.`,
  },
  {
    title: "6. Payments and Refunds",
    content: `All payments are processed securely through our payment partners. Prices are displayed in Nigerian Naira (NGN) and are subject to change with notice. Refunds are issued at HC24's discretion. If a sample collection visit cannot proceed due to our error, a full refund or rescheduling will be offered. Test results, once processed, are non-refundable.`,
  },
  {
    title: "7. Intellectual Property",
    content: `All content on the Platform — including text, graphics, logos, AI models, software, and reports — is the intellectual property of HC24 or its licensors. You may not reproduce, distribute, or create derivative works without express written permission from HC24.`,
  },
  {
    title: "8. Limitation of Liability",
    content: `To the fullest extent permitted by law, HC24 shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the Platform. Our total liability for any claim shall not exceed the amount you paid for the specific service giving rise to the claim in the six (6) months preceding the event.`,
  },
  {
    title: "9. Third-Party Services",
    content: `Our Platform may integrate with third-party services including payment processors and laboratory information systems. HC24 is not responsible for the practices or content of third-party services. Your interactions with them are governed by their own terms and privacy policies.`,
  },
  {
    title: "10. Governing Law",
    content: `These Terms are governed by the laws of the Federal Republic of Nigeria. Any disputes arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts of Lagos State, Nigeria.`,
  },
  {
    title: "11. Changes to Terms",
    content: `HC24 may update these Terms at any time. We will notify users of material changes via email or in-app notification at least 14 days before they take effect. Continued use of the Platform after changes take effect constitutes acceptance of the new Terms.`,
  },
  {
    title: "12. Contact Us",
    content: `For any questions about these Terms, please contact our legal team at legal@hc24.app or write to us at: HC24 Technologies Ltd, Victoria Island, Lagos, Nigeria.`,
  },
];

export default function Terms() {
  return (
    <div className="min-h-screen bg-white font-outfit">
      <Navbar />
      <div className="pt-28 pb-20">
        {/* Hero */}
        <div className="bg-slate-950 py-16 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 bg-red-600/10 border border-red-600/20 text-red-400 text-xs font-medium px-3 py-1.5 rounded-full mb-6">
              <FileText className="w-3 h-3" /> Legal Document
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-outfit font-800 text-4xl md:text-5xl text-white mb-4">Terms & Conditions</motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-slate-400 text-sm">Last updated: March 24, 2026 · Effective: March 24, 2026</motion.p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto px-6 md:px-10 mt-14 space-y-10">
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-slate-500 text-base leading-relaxed border-l-4 border-red-500 pl-5">
            Please read these Terms and Conditions carefully before using HC24. These govern your relationship with HC24 Technologies Ltd and set out your rights and obligations when using our services.
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