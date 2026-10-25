import React, { useState, useEffect } from 'react';
import { 
  ShieldAlert, 
  Mail, 
  Code, 
  Download, 
  ArrowRight, 
  ChevronRight, 
  Lock, 
  CheckCircle2, 
  Activity,
  Award,
  Flag,
  ShieldCheck,
  GraduationCap,
  Sparkles,
  Terminal,
  Cpu,
  Layers
} from 'lucide-react';
import { personalInfo, stats } from '../data/portfolioData';

export default function Hero() {
  const [subtitleIndex, setSubtitleIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const currentRole = personalInfo.subtitles[subtitleIndex];

  // Typing effect
  useEffect(() => {
    const typingSpeed = isDeleting ? 25 : 55;
    const timeout = setTimeout(() => {
      if (!isDeleting && typedText === currentRole) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && typedText === "") {
        setIsDeleting(false);
        setSubtitleIndex((prev) => (prev + 1) % personalInfo.subtitles.length);
      } else {
        setTypedText(
          currentRole.substring(0, typedText.length + (isDeleting ? -1 : 1))
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, currentRole]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      
      {/* Background Animated Gradient Blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/4 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-cyan-500/10 dark:bg-cyan-500/15 blur-3xl animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-purple-500/10 dark:bg-purple-500/15 blur-3xl animate-blob-delayed"></div>
        <div className="absolute -bottom-10 left-1/3 w-64 sm:w-80 h-64 sm:h-80 rounded-full bg-emerald-500/10 dark:bg-emerald-500/10 blur-3xl animate-blob"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Intro */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-cyan-500/30 text-xs font-mono text-slate-800 dark:text-cyan-300 backdrop-blur-md shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for Summer Internships &amp; Collabs</span>
            </div>

            {/* Main Greeting */}
            <div className="space-y-2">
              <p className="font-mono text-cyan-600 dark:text-cyan-400 text-sm sm:text-base font-semibold tracking-wider uppercase">
                Hello world, myself
              </p>
              <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight font-display leading-[1.1]">
                <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 dark:from-white dark:via-slate-100 dark:to-slate-300 bg-clip-text text-transparent">
                  {personalInfo.name}
                </span>
                <span className="text-cyan-500 dark:text-cyan-400">.</span>
              </h1>
            </div>

            {/* Dynamic Typing Subtitle */}
            <div className="min-h-12 flex items-center font-mono text-base sm:text-xl text-cyan-600 dark:text-cyan-300">
              <span className="text-slate-400 dark:text-slate-500 mr-2">&gt;</span>
              <span className="text-slate-800 dark:text-white font-semibold">I am</span>
              <span className="ml-2 bg-gradient-to-r from-cyan-600 via-emerald-600 to-purple-600 dark:from-cyan-400 dark:via-emerald-400 dark:to-purple-400 bg-clip-text text-transparent font-bold">
                {typedText}
              </span>
              <span className="w-2.5 h-5 bg-cyan-500 dark:bg-cyan-400 ml-1 inline-block animate-pulse"></span>
            </div>

            {/* Bio Description */}
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl font-sans">
              Second-year Computer Science &amp; Engineering student at{" "}
              <span className="text-slate-900 dark:text-white font-semibold">{personalInfo.college}</span>. 
              Foundations in <span className="text-amber-700 dark:text-yellow-300 font-semibold">Java, Python, SQL, and HTML</span>. 
              Currently strengthening my <span className="text-purple-700 dark:text-purple-300 font-semibold">DSA journey through Java</span>, 
              actively pursuing coursework in <span className="text-cyan-700 dark:text-cyan-300 font-semibold">Cyber Security &amp; Ethical Hacking</span>, 
              and exploring <span className="text-emerald-700 dark:text-emerald-300 font-semibold">AI &amp; Machine Learning</span>. 
              Proud creator of <span className="text-emerald-700 dark:text-emerald-300 font-bold underline decoration-emerald-500/50 underline-offset-4">MaatiKatha</span> and 
              hackathon problem-solver!
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="group relative px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 hover:from-cyan-500 hover:via-blue-500 hover:to-indigo-500 text-white font-bold font-mono text-sm flex items-center gap-2 shadow-[0_0_25px_rgba(6,182,212,0.35)] hover:shadow-[0_0_35px_rgba(6,182,212,0.6)] transition-all duration-300 transform hover:-translate-y-0.5 overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/15 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="relative z-10">Explore MaatiKatha &amp; Projects</span>
                <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="px-5 py-3 rounded-xl bg-white/90 dark:bg-slate-900/90 border border-slate-300 dark:border-cyan-500/40 hover:border-cyan-500 text-slate-800 dark:text-cyan-300 hover:text-cyan-600 dark:hover:text-white font-mono text-sm flex items-center gap-2.5 backdrop-blur-md hover:bg-slate-50 dark:hover:bg-cyan-500/10 transition-all cursor-pointer shadow-sm dark:shadow-none hover:-translate-y-0.5"
              >
                <Mail className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                <span>Get in Touch</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="px-4 py-3 rounded-xl bg-white/80 dark:bg-slate-900/60 border border-slate-300 dark:border-slate-700/80 hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white font-mono text-xs flex items-center gap-2 transition-all cursor-pointer shadow-sm dark:shadow-none hover:-translate-y-0.5"
                title="Copy email to clipboard"
              >
                <CheckCircle2 className={`w-3.5 h-3.5 ${copiedEmail ? 'text-emerald-500 dark:text-emerald-400' : 'text-slate-400'}`} />
                <span>{copiedEmail ? "Email Copied!" : "Copy Contact"}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Clean, Modern Circular Portrait with Dynamic Rotating Aura & Floating Badges */}
          <div className="lg:col-span-5 flex justify-center items-center py-6">
            <div className="relative group">
              
              {/* Outer Pulsing Ambient Blur Glow */}
              <div className="absolute -inset-6 rounded-full bg-gradient-to-tr from-cyan-500 via-emerald-400 to-purple-600 blur-3xl opacity-50 group-hover:opacity-80 transition duration-700 animate-pulse-glow"></div>

              {/* Slow Rotating Gradient Ring */}
              <div className="absolute -inset-2 rounded-full p-[3px] bg-gradient-to-r from-cyan-500 via-emerald-400 to-purple-500 animate-spin-slow opacity-90 blur-[1px]"></div>

              {/* Main Circular Portrait Container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-92 lg:h-92 rounded-full p-2.5 bg-gradient-to-tr from-cyan-500 via-emerald-400 to-purple-600 shadow-[0_0_50px_rgba(6,182,212,0.35)] dark:shadow-[0_0_60px_rgba(6,182,212,0.3)]">
                <div className="w-full h-full rounded-full overflow-hidden bg-slate-950 p-1 border-2 border-white/20 dark:border-slate-800">
                  <img 
                    src="/profile.jpg" 
                    alt={personalInfo.name} 
                    className="w-full h-full object-cover object-top rounded-full filter brightness-100 contrast-105 group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
              </div>

              {/* Floating Badge 1 (Top Left) - Java & DSA */}
              <div className="hidden sm:flex absolute -top-3 -left-4 px-3.5 py-1.5 rounded-full bg-white/95 dark:bg-[#0b101b]/95 backdrop-blur-md border border-purple-200 dark:border-purple-500/40 text-purple-700 dark:text-purple-300 font-mono text-xs items-center gap-2 shadow-xl animate-float-slow">
                <Code className="w-3.5 h-3.5 text-purple-500" />
                <span className="font-semibold">Java &amp; DSA</span>
              </div>

              {/* Floating Badge 2 (Top Right) - Tech Enthusiast */}
              <div className="hidden sm:flex absolute -top-2 -right-4 px-3.5 py-1.5 rounded-full bg-white/95 dark:bg-[#0b101b]/95 backdrop-blur-md border border-cyan-200 dark:border-cyan-500/40 text-cyan-700 dark:text-cyan-300 font-mono text-xs items-center gap-1.5 shadow-xl animate-float-reverse">
                <Sparkles className="w-3.5 h-3.5 text-cyan-500" />
                <span className="font-semibold">Tech Explorer</span>
              </div>

              {/* Floating Badge 3 (Bottom Right) - MaatiKatha Flagship */}
              <div className="hidden sm:flex absolute -bottom-3 -right-2 px-3.5 py-1.5 rounded-full bg-white/95 dark:bg-[#0b101b]/95 backdrop-blur-md border border-emerald-200 dark:border-emerald-500/40 text-emerald-700 dark:text-emerald-300 font-mono text-xs items-center gap-1.5 shadow-xl animate-float-slow">
                <Layers className="w-3.5 h-3.5 text-emerald-500" />
                <span className="font-semibold">MaatiKatha Dev</span>
              </div>

              {/* Floating Status Pill (Bottom Center) */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-white/95 dark:bg-[#0b101b]/95 backdrop-blur-md border border-slate-200 dark:border-cyan-500/50 text-slate-800 dark:text-cyan-300 font-mono text-xs flex items-center gap-2 shadow-2xl whitespace-nowrap">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="font-bold">B.Tech CSE @ JISCE '27</span>
              </div>

            </div>
          </div>
        </div>

        {/* Live Metrics Strip */}
        <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon === "Flag" ? Flag :
                         stat.icon === "ShieldCheck" ? ShieldCheck :
                         stat.icon === "Award" ? GraduationCap : Code;
            return (
              <div
                key={idx}
                className="p-4 rounded-xl bg-white/80 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800/70 hover:border-cyan-500/50 hover:bg-slate-50 dark:hover:bg-slate-900/80 transition-all duration-300 group text-left shadow-sm hover:shadow-lg dark:shadow-none hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xl sm:text-2xl font-extrabold font-mono text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    {stat.value}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800/90 flex items-center justify-center text-cyan-600 dark:text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500/10 transition-all">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
                <div className="text-xs font-mono text-slate-500 dark:text-slate-400 tracking-wide font-medium">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
