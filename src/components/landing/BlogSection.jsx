import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Clock, User } from "lucide-react";
import { Link } from "react-router-dom";
import { db } from "../../lib/firebase";
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";

export default function BlogSection() {
  const [latestPosts, setLatestPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLatest = async () => {
      try {
        const q = query(collection(db, "blogs"), orderBy("createdAt", "desc"), limit(3));
        const snap = await getDocs(q);
        setLatestPosts(snap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      } catch (err) {
        console.error("Error fetching latest blogs:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchLatest();
  }, []);

  if (!loading && latestPosts.length === 0) return null;

  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-red-600/10 rounded-full blur-[100px] -translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-red-400 font-outfit font-medium text-sm tracking-widest uppercase mb-4"
            >
              Clinical Intelligence
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-outfit font-800 text-4xl md:text-5xl text-white leading-tight"
            >
              Latest healthcare <span className="text-red-400">insights</span> & innovations
            </motion.h2>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link 
              to="/blog" 
              className="group flex items-center gap-2 bg-white/5 border border-white/10 hover:border-red-600/50 text-white px-6 py-3 rounded-xl font-outfit font-600 text-sm transition-all"
            >
              View all posts
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {loading ? (
            [1, 2, 3].map((i) => (
              <div key={i} className="animate-pulse flex flex-col gap-4">
                <div className="h-56 bg-white/5 rounded-2xl" />
                <div className="h-4 w-1/3 bg-white/5 rounded" />
                <div className="h-8 bg-white/5 rounded" />
                <div className="h-4 bg-white/5 rounded" />
              </div>
            ))
          ) : (
            latestPosts.map((post, i) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group flex flex-col bg-slate-900/50 border border-white/5 hover:border-red-600/30 rounded-2xl overflow-hidden transition-all duration-300"
              >
                <Link to={`/blog/${post.id}`} className="block overflow-hidden h-56">
                  <img
                    src={post.image || "https://images.unsplash.com/photo-1576091160550-217359f4ecf8?auto=format&fit=crop&q=80&w=800"}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                  />
                </Link>
                
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[10px] font-outfit font-bold uppercase tracking-wider bg-red-600/10 text-red-400 px-2.5 py-1 rounded-md border border-red-600/20">
                      {post.tag || "General"}
                    </span>
                    <span className="text-[10px] font-outfit text-slate-500 font-medium flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {post.readTime || "5 min read"}
                    </span>
                  </div>

                  <Link to={`/blog/${post.id}`} className="block mb-3">
                    <h3 className="font-outfit font-700 text-xl text-white group-hover:text-red-400 transition-colors leading-snug line-clamp-2">
                      {post.title}
                    </h3>
                  </Link>

                  <p className="font-outfit text-slate-400 text-sm leading-relaxed mb-6 line-clamp-2">
                    {post.excerpt}
                  </p>

                  <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-red-600/20 border border-red-600/30 flex items-center justify-center">
                        <User className="w-3 h-3 text-red-400" />
                      </div>
                      <span className="text-[11px] font-outfit font-600 text-slate-300">
                        {post.author}
                      </span>
                    </div>
                    <span className="text-[10px] font-outfit font-medium text-slate-500 uppercase tracking-widest">
                      {post.date}
                    </span>
                  </div>
                </div>
              </motion.article>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
