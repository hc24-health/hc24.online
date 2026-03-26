import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/landing/Navbar";
import FooterBar from "../components/landing/FooterBar";
import { posts } from "../lib/blogData";

export default function Blog() {
  return (
    <div style={{ fontFamily: "'Outfit', sans-serif" }}>
      <Navbar />
      <section className="pt-36 pb-20 bg-slate-950 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/15 rounded-full blur-[120px]" />
        <div className="max-w-3xl mx-auto px-6 md:px-10 relative z-10 text-center">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-red-400 font-outfit font-medium text-sm tracking-widest uppercase mb-4">Blog</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-outfit font-800 text-5xl md:text-6xl text-white leading-tight mb-6">
            Health insights & <span className="text-red-400">updates</span>
          </motion.h1>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {posts.map((post, i) => (
              <motion.article key={post.id} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="group border border-slate-100 rounded-3xl overflow-hidden hover:shadow-lg transition-all">
                <Link to={`/blog/${post.id}`} className="block">
                  <div className="h-48 overflow-hidden">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-outfit font-medium bg-red-100 text-red-600 px-3 py-1 rounded-full">{post.tag}</span>
                      <span className="text-xs font-outfit text-slate-400">{post.readTime}</span>
                    </div>
                    <h2 className="font-outfit font-700 text-slate-900 text-lg leading-snug mb-2">{post.title}</h2>
                    <p className="font-outfit text-slate-500 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-outfit text-slate-400">{post.date}</span>
                      <span className="flex items-center gap-1 text-xs font-outfit font-medium text-red-600 group-hover:gap-2 transition-all">
                        Read more <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
      <FooterBar />
    </div>
  );
}