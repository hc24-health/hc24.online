import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Briefcase, ArrowRight, Loader2, MapPin, Clock, FileText, Upload } from "lucide-react";
import { db } from "../lib/firebase";
import { collection, getDocs, addDoc, serverTimestamp } from "firebase/firestore";

export default function Careers() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [applyingJob, setApplyingJob] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    resumeLink: '',
    coverLetter: '',
    certifications: ''
  });
  const [submitState, setSubmitState] = useState('idle'); // idle, loading, success, error

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "jobs"));
        const jobsData = [];
        querySnapshot.forEach((doc) => {
          jobsData.push({ id: doc.id, ...doc.data() });
        });
        // Sort active jobs first or by date if needed
        setJobs(jobsData.filter(j => j.status === 'active'));
      } catch (error) {
        console.error("Failed to load jobs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  const handleApplyClick = (job) => {
    setApplyingJob(job);
    setSubmitState('idle');
    setFormData({
      name: '',
      email: '',
      phone: '',
      resumeLink: '',
      coverLetter: '',
      certifications: ''
    });
    // Scroll to form smoothly
    setTimeout(() => {
      document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!applyingJob) return;

    setSubmitState('loading');
    try {
      await addDoc(collection(db, "job_applications"), {
        jobId: applyingJob.id,
        jobTitle: applyingJob.title,
        applicant: formData,
        status: 'pending',
        appliedAt: serverTimestamp()
      });
      setSubmitState('success');
      setTimeout(() => {
        setApplyingJob(null);
      }, 4000);
    } catch (e) {
      console.error(e);
      setSubmitState('error');
    }
  };

  return (
    <>
      <section className="pt-36 pb-20 bg-slate-950 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/15 rounded-full blur-[120px]" />
        <div className="max-w-3xl mx-auto px-6 md:px-10 relative z-10 text-center">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-red-400  font-medium text-sm tracking-widest uppercase mb-4">Join HC24</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className=" font-800 text-5xl md:text-6xl text-white leading-tight mb-6">
            Help us build the <span className="text-red-400">future</span> of logistics
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className=" text-slate-400 text-lg">
            We are looking for world-class phlebotomists, dispatch riders, engineers, and clinical experts to power our localized operations.
          </motion.p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-10 space-y-16">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-20">
              <Loader2 className="w-8 h-8 text-red-500 animate-spin mb-4" />
              <p className=" text-slate-500">Loading open roles...</p>
            </div>
          ) : (
            <>
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <Briefcase className="w-5 h-5 text-red-600" />
                  <h2 className=" font-700 text-2xl text-slate-900">Open Positions</h2>
                </div>
                {jobs.length === 0 ? (
                    <div className="bg-slate-50 border border-slate-100 rounded-2xl p-10 text-center">
                        <p className=" font-semibold text-slate-700 mt-2">No open positions at the moment.</p>
                        <p className=" text-slate-500 mt-1">Check back later or follow us on our social networks.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 gap-6">
                      {jobs.map((job, i) => (
                        <motion.div key={job.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                          className="border border-slate-200 rounded-2xl p-6 bg-white hover:shadow-lg transition-shadow duration-300">
                          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                            <div>
                              <h3 className=" font-700 text-slate-900 text-xl">{job.title}</h3>
                              <div className="flex flex-wrap items-center gap-4 mt-3">
                                <span className="flex items-center gap-1.5 text-sm  text-slate-500">
                                    <MapPin size={16} /> {job.location || 'Remote'}
                                </span>
                                <span className="flex items-center gap-1.5 text-sm  text-slate-500">
                                    <Clock size={16} /> {job.type || 'Full-time'}
                                </span>
                              </div>
                              <p className=" text-slate-600 mt-4 text-sm leading-relaxed max-w-2xl">
                                  {job.description}
                              </p>
                              {job.requirements && (
                                  <div className="mt-4">
                                      <p className=" font-semibold text-slate-800 text-sm mb-2">Requirements:</p>
                                      <p className=" text-slate-600 text-sm">{job.requirements}</p>
                                  </div>
                              )}
                            </div>
                            <div className="mt-4 md:mt-0">
                                <button 
                                    onClick={() => handleApplyClick(job)}
                                    className="px-6 py-2.5 bg-slate-900 text-white rounded-xl  font-medium text-sm hover:bg-slate-800 transition-colors w-full md:w-auto"
                                >
                                    Apply Now
                                </button>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                )}
              </div>
            </>
          )}

          {applyingJob && (
              <div id="application-form" className="mt-20 pt-16 border-t border-slate-200">
                  <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 md:p-12">
                      <div className="mb-8">
                          <h2 className=" font-700 text-3xl text-slate-900">Apply for: <span className="text-red-600">{applyingJob.title}</span></h2>
                          <p className=" text-slate-500 mt-2">Fill out the form below and our recruiting team will get back to you shortly.</p>
                      </div>

                      {submitState === 'success' ? (
                          <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                              <h3 className=" font-700 text-green-700 text-xl mb-2">Application Submitted!</h3>
                              <p className=" text-green-600">Thank you for applying. We have received your application and will review it shortly.</p>
                          </div>
                      ) : (
                          <form onSubmit={handleSubmit} className="space-y-6">
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                  <div className="space-y-2">
                                      <label className=" font-medium text-slate-700 text-sm">Full Name *</label>
                                      <input required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-red-500 " 
                                          value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} placeholder="John Doe" />
                                  </div>
                                  <div className="space-y-2">
                                      <label className=" font-medium text-slate-700 text-sm">Email Address *</label>
                                      <input required type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-red-500 " 
                                          value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} placeholder="john@example.com" />
                                  </div>
                                  <div className="space-y-2">
                                      <label className=" font-medium text-slate-700 text-sm">Phone Number *</label>
                                      <input required type="tel" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-red-500 " 
                                          value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} placeholder="+234..." />
                                  </div>
                                  <div className="space-y-2">
                                      <label className=" font-medium text-slate-700 text-sm">Resume/CV Link *</label>
                                      <input required type="url" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-red-500 " 
                                          value={formData.resumeLink} onChange={e => setFormData({...formData, resumeLink: e.target.value})} placeholder="Google Drive, Dropbox, LinkedIn profile, etc." />
                                  </div>
                              </div>
                              
                              {applyingJob.title.toLowerCase().includes('phlebotomist') && (
                                <div className="space-y-2">
                                    <label className=" font-medium text-slate-700 text-sm">Professional Medical Licensure/ID (Required for Phlebotomists) *</label>
                                    <input required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-red-500 " 
                                        value={formData.certifications} onChange={e => setFormData({...formData, certifications: e.target.value})} placeholder="e.g. Medical Council Registration Number" />
                                </div>
                              )}

                              <div className="space-y-2">
                                  <label className=" font-medium text-slate-700 text-sm">Cover Letter / Additional Note (Optional)</label>
                                  <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-red-500 " 
                                      value={formData.coverLetter} onChange={e => setFormData({...formData, coverLetter: e.target.value})} placeholder="Why are you a great fit?" />
                              </div>

                              {submitState === 'error' && (
                                  <p className="text-red-500  text-sm">Something went wrong. Please try again.</p>
                              )}

                              <button type="submit" disabled={submitState === 'loading'} className="w-full md:w-auto px-8 py-4 bg-red-600 text-white rounded-xl  font-bold hover:bg-red-700 transition-colors disabled:opacity-50 flex items-center justify-center gap-2">
                                  {submitState === 'loading' ? <Loader2 className="w-5 h-5 animate-spin" /> : <Upload className="w-5 h-5" />}
                                  Submit Application
                              </button>
                          </form>
                      )}
                  </div>
              </div>
          )}

        </div>
      </section>
    </>
  );
}