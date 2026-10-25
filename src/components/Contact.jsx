import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Send, 
  Phone, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  MessageSquare, 
  ArrowRight,
  Sparkles,
  PhoneCall,
  ExternalLink
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [currentTime, setCurrentTime] = useState('');
  const [copiedPhone, setCopiedPhone] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString('en-US', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true
        }) + ' IST'
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1200);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-transparent">
      
      {/* Background Animated Glows */}
      <div className="absolute top-1/2 right-1/4 w-80 h-80 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none animate-blob"></div>
      <div className="absolute bottom-10 left-1/4 w-80 h-80 rounded-full bg-purple-500/10 blur-3xl pointer-events-none animate-blob-delayed"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="mb-14 text-left">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-cyan-600 dark:text-cyan-400 uppercase tracking-widest mb-2 font-semibold">
            <span className="text-cyan-500/60">// 04</span>
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-display tracking-tight">
            Let&apos;s Build <span className="bg-gradient-to-r from-cyan-500 to-emerald-400 bg-clip-text text-transparent">Together</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm font-sans mt-2">
            Interested in collaboration, internship opportunities, or discussing tech projects? Reach out directly anytime.
          </p>
          <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-500 to-transparent mt-3 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 text-left">
          
          {/* Left Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl p-6 sm:p-8 bg-white dark:bg-[#0a0e1c] border border-slate-200 dark:border-slate-800/90 shadow-xl dark:shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-emerald-400"></div>

              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-cyan-500" />
                  <span>DIRECT INQUIRY CHANNEL</span>
                </span>
                <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-0.5 rounded-full border border-emerald-500/30 font-semibold">
                  ACTIVE INBOX
                </span>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto ring-4 ring-emerald-500/30">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white font-display">
                    Message Dispatched Successfully!
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 font-mono max-w-sm mx-auto">
                    Thank you for reaching out, Udit will get back to your inquiry promptly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-slate-600 dark:text-slate-400 block font-semibold">YOUR NAME *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-slate-800 dark:text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-slate-600 dark:text-slate-400 block font-semibold">YOUR EMAIL *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-slate-800 dark:text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-slate-600 dark:text-slate-400 block font-semibold">SUBJECT *</label>
                    <input
                      type="text"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Summer Internship / Project Discussion"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-slate-800 dark:text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-slate-600 dark:text-slate-400 block font-semibold">MESSAGE *</label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Hi Udit, I saw your work on MaatiKatha and would like to connect regarding..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-slate-800 dark:text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(6,182,212,0.35)] transition-all cursor-pointer hover:scale-[1.01]"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                        <span>Transmitting Message...</span>
                      </span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Direct Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Direct Channels & Instant Connect */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Phone & Direct Contact */}
            <div className="p-6 rounded-3xl bg-white dark:bg-[#0a0e1c] border border-slate-200 dark:border-slate-800/90 shadow-xl space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <Phone className="w-4 h-4 text-emerald-500" />
                  <span>DIRECT PHONE &amp; WHATSAPP</span>
                </span>
                <span className="text-[10px] font-mono text-cyan-600 dark:text-cyan-400">INSTANT</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 font-sans leading-relaxed">
                Available for calls, project briefings, and WhatsApp messages:
              </p>
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 font-mono text-xs">
                <span className="font-bold text-slate-900 dark:text-white">{personalInfo.phone}</span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopyPhone}
                    className="px-2.5 py-1 rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-all text-[11px] cursor-pointer"
                  >
                    {copiedPhone ? "Copied!" : "Copy"}
                  </button>
                  <a
                    href="https://wa.me/919064470858"
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-[11px] flex items-center gap-1.5 transition-all shadow-sm"
                  >
                    <MessageSquare className="w-3 h-3" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Email Quick Action Card */}
            <div className="p-6 rounded-3xl bg-white dark:bg-[#0a0e1c] border border-slate-200 dark:border-slate-800/90 shadow-xl space-y-3">
              <span className="text-xs font-mono font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Mail className="w-4 h-4 text-cyan-500" />
                <span>OFFICIAL EMAIL</span>
              </span>
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 font-mono text-xs">
                <span className="font-bold text-slate-900 dark:text-white truncate mr-2">{personalInfo.email}</span>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="px-3 py-1 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-[11px] flex items-center gap-1 shrink-0 transition-all shadow-sm"
                >
                  <Send className="w-3 h-3" />
                  <span>Mail</span>
                </a>
              </div>
            </div>

            {/* Location & Timezone Card */}
            <div className="p-6 rounded-3xl bg-white dark:bg-[#0a0e1c] border border-slate-200 dark:border-slate-800/90 shadow-xl space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between text-slate-600 dark:text-slate-400">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-rose-500" />
                  <span>LOCATION:</span>
                </span>
                <span className="text-slate-900 dark:text-white font-bold">{personalInfo.location}</span>
              </div>
              <div className="flex items-center justify-between text-slate-600 dark:text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-cyan-500" />
                  <span>LOCAL TIME:</span>
                </span>
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">{currentTime || "Loading..."}</span>
              </div>
              <div className="flex items-center justify-between text-slate-600 dark:text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-purple-500" />
                  <span>STATUS:</span>
                </span>
                <span className="text-cyan-700 dark:text-cyan-300 font-bold">Open for Internships &amp; Hackathons</span>
              </div>
            </div>

            {/* Social Grid */}
            <div className="grid grid-cols-2 gap-3 font-mono text-xs">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="p-3.5 rounded-2xl bg-white dark:bg-[#0a0e1c] border border-slate-200 dark:border-slate-800 hover:border-cyan-500/50 hover:text-cyan-600 dark:hover:text-cyan-300 flex items-center gap-2.5 text-slate-700 dark:text-slate-300 transition-all shadow-sm hover:-translate-y-0.5"
              >
                <GithubIcon className="w-4 h-4 text-slate-700 dark:text-slate-300" />
                <span className="font-semibold">GitHub Profile</span>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-3.5 rounded-2xl bg-white dark:bg-[#0a0e1c] border border-slate-200 dark:border-slate-800 hover:border-cyan-500/50 hover:text-cyan-600 dark:hover:text-cyan-300 flex items-center gap-2.5 text-slate-700 dark:text-slate-300 transition-all shadow-sm hover:-translate-y-0.5"
              >
                <LinkedinIcon className="w-4 h-4 text-blue-500" />
                <span className="font-semibold">LinkedIn Profile</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
