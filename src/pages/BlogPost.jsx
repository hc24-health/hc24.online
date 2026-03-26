import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Heart, MessageSquare, Share2, Twitter, Facebook, Linkedin, Link2, Send, Clock, Tag } from "lucide-react";
import { base44 } from "@/api/base44Client";
import Navbar from "../components/landing/Navbar";
import FooterBar from "../components/landing/FooterBar";
import ReactMarkdown from "react-markdown";
import { posts } from "../lib/blogData";

function getSessionId() {
  let id = localStorage.getItem("hc24_session");
  if (!id) {
    id = Math.random().toString(36).slice(2) + Date.now();
    localStorage.setItem("hc24_session", id);
  }
  return id;
}

export default function BlogPost() {
  const { id } = useParams();
  const post = posts.find((p) => p.id === id);

  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);
  const [comments, setComments] = useState([]);
  const [form, setForm] = useState({ author_name: "", author_email: "", content: "" });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const sessionId = getSessionId();
  const pageUrl = window.location.href;

  useEffect(() => {
    if (!post) return;
    // Load likes count
    base44.entities.BlogLike.filter({ post_id: post.id }).then((data) => {
      setLikes(data.length);
      setLiked(data.some((l) => l.session_id === sessionId));
    });
    // Load comments
    base44.entities.BlogComment.filter({ post_id: post.id }, "-created_date").then(setComments);
  }, [post?.id]);

  const handleLike = async () => {
    if (liked) return;
    await base44.entities.BlogLike.create({ post_id: post.id, session_id: sessionId });
    setLikes((l) => l + 1);
    setLiked(true);
  };

  const handleComment = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    await base44.entities.BlogComment.create({ ...form, post_id: post.id });
    setSubmitted(true);
    setSubmitting(false);
    setForm({ author_name: "", author_email: "", content: "" });
    // Refresh comments
    base44.entities.BlogComment.filter({ post_id: post.id }, "-created_date").then(setComments);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(pageUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!post) {
    return (
      <div style={{ fontFamily: "'Outfit', sans-serif" }}>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <p className="text-slate-500 text-lg mb-4">Post not found.</p>
            <Link to="/blog" className="text-red-600 font-outfit font-medium hover:underline">← Back to Blog</Link>
          </div>
        </div>
        <FooterBar />
      </div>
    );
  }

  return (
    <div style={{ fontFamily: "'Outfit', sans-serif" }}>
      <Navbar />

      {/* Hero */}
      <div className="relative pt-20">
        <div className="h-72 md:h-96 w-full overflow-hidden">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 max-w-3xl mx-auto px-6 md:px-10 pb-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Link to="/blog" className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white text-sm font-outfit mb-4 transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to Blog
            </Link>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-outfit font-medium bg-red-600/20 text-red-400 px-3 py-1 rounded-full flex items-center gap-1">
                <Tag className="w-3 h-3" />{post.tag}
              </span>
              <span className="text-slate-400 text-xs font-outfit flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
            </div>
            <h1 className="font-outfit font-800 text-3xl md:text-4xl text-white leading-tight">{post.title}</h1>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="bg-white">
        <div className="max-w-3xl mx-auto px-6 md:px-10 py-12">

          {/* Author + date */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}
            className="flex items-center gap-4 pb-8 border-b border-slate-100 mb-10">
            <div className="w-11 h-11 rounded-full bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center text-white font-outfit font-700 text-base">
              {post.author[0]}
            </div>
            <div>
              <p className="font-outfit font-700 text-slate-900 text-sm">{post.author}</p>
              <p className="font-outfit text-slate-500 text-xs">{post.authorRole} · {post.date}</p>
            </div>
          </motion.div>

          {/* Article body */}
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
            <ReactMarkdown
              className="prose prose-slate max-w-none prose-headings:font-outfit prose-headings:font-700 prose-p:font-outfit prose-p:text-slate-600 prose-p:leading-relaxed prose-strong:text-slate-900 prose-li:font-outfit prose-li:text-slate-600"
            >
              {post.content}
            </ReactMarkdown>
          </motion.div>

          {/* Like & Share */}
          <div className="mt-14 pt-8 border-t border-slate-100">
            <div className="flex flex-wrap items-center justify-between gap-4">
              {/* Like */}
              <button onClick={handleLike}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-outfit font-medium text-sm border transition-all ${liked ? "bg-red-50 border-red-200 text-red-600" : "bg-white border-slate-200 text-slate-600 hover:border-red-200 hover:text-red-600"}`}>
                <Heart className={`w-4 h-4 ${liked ? "fill-red-500 text-red-500" : ""}`} />
                {liked ? "Liked" : "Like this"} · {likes}
              </button>

              {/* Share */}
              <div className="flex items-center gap-2">
                <span className="text-slate-500 font-outfit text-sm flex items-center gap-1.5"><Share2 className="w-4 h-4" />Share:</span>
                <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(pageUrl)}`} target="_blank" rel="noopener noreferrer"
                  className="w-9 h-9 bg-slate-100 hover:bg-[#1DA1F2] hover:text-white text-slate-600 rounded-lg flex items-center justify-center transition-all">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`} target="_blank" rel="noopener noreferrer"
                  className="w-9 h-9 bg-slate-100 hover:bg-[#1877F2] hover:text-white text-slate-600 rounded-lg flex items-center justify-center transition-all">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(pageUrl)}`} target="_blank" rel="noopener noreferrer"
                  className="w-9 h-9 bg-slate-100 hover:bg-[#0A66C2] hover:text-white text-slate-600 rounded-lg flex items-center justify-center transition-all">
                  <Linkedin className="w-4 h-4" />
                </a>
                <button onClick={handleCopy}
                  className="w-9 h-9 bg-slate-100 hover:bg-slate-800 hover:text-white text-slate-600 rounded-lg flex items-center justify-center transition-all">
                  <Link2 className="w-4 h-4" />
                </button>
                {copied && <span className="text-xs text-green-600 font-outfit">Copied!</span>}
              </div>
            </div>
          </div>

          {/* Comments */}
          <div className="mt-14">
            <h2 className="font-outfit font-700 text-slate-900 text-xl mb-2 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-red-500" /> Comments ({comments.length})
            </h2>
            <p className="text-slate-500 font-outfit text-sm mb-8">Join the conversation — your comment is public.</p>

            {/* Comment form */}
            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-2xl p-6 mb-8 text-center">
                <p className="font-outfit font-700 text-green-700 text-base mb-1">Thanks for your comment!</p>
                <p className="font-outfit text-green-600 text-sm">It's now visible to everyone.</p>
                <button onClick={() => setSubmitted(false)} className="mt-3 text-sm font-outfit text-green-700 underline">Add another</button>
              </div>
            ) : (
              <form onSubmit={handleComment} className="bg-slate-50 rounded-2xl p-6 mb-10 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-outfit font-medium text-slate-700 text-sm mb-1">Your Name *</label>
                    <input required value={form.author_name} onChange={(e) => setForm({ ...form, author_name: e.target.value })}
                      placeholder="Chidi Okonkwo"
                      className="w-full border border-slate-200 rounded-xl px-4 py-2.5 font-outfit text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500/30 focus:border-red-400 bg-white" />
                  </div>
                  <div>
                    <label className="block font-outfit font-medium text-slate-700 text-sm mb-1">Email (optional)</label>
                    <input value={form.author_email} onChange={(e) => setForm({ ...form, author_email: e.target.value })}
                      placeholder="chidi@email.com" type="email"
                      className="w-full border border-slate-200 rounded-xl px-4 py-2.5 font-outfit text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500/30 focus:border-red-400 bg-white" />
                  </div>
                </div>
                <div>
                  <label className="block font-outfit font-medium text-slate-700 text-sm mb-1">Comment *</label>
                  <textarea required rows={4} value={form.content} onChange={(e) => setForm({ ...form, content: e.target.value })}
                    placeholder="Share your thoughts..."
                    className="w-full border border-slate-200 rounded-xl px-4 py-2.5 font-outfit text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500/30 focus:border-red-400 bg-white resize-none" />
                </div>
                <button type="submit" disabled={submitting}
                  className="flex items-center gap-2 bg-red-600 hover:bg-red-700 disabled:opacity-60 text-white px-6 py-2.5 rounded-xl font-outfit font-medium text-sm transition-all">
                  {submitting ? "Posting..." : <><Send className="w-4 h-4" /> Post Comment</>}
                </button>
              </form>
            )}

            {/* Comments list */}
            <div className="space-y-5">
              {comments.length === 0 && (
                <p className="text-slate-400 font-outfit text-sm text-center py-8">No comments yet. Be the first to share your thoughts!</p>
              )}
              {comments.map((c) => (
                <motion.div key={c.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                  className="bg-white border border-slate-100 rounded-2xl p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-slate-400 to-slate-600 flex items-center justify-center text-white font-outfit font-700 text-sm">
                      {c.author_name[0]?.toUpperCase()}
                    </div>
                    <div>
                      <p className="font-outfit font-700 text-slate-900 text-sm">{c.author_name}</p>
                      <p className="font-outfit text-slate-400 text-xs">{new Date(c.created_date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}</p>
                    </div>
                  </div>
                  <p className="font-outfit text-slate-600 text-sm leading-relaxed">{c.content}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <FooterBar />
    </div>
  );
}