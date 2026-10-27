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
  Layers,
  Rocket,
  Compass
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

  const statThemes = [
    {
      cardBg: "bg-cyan-50/50 dark:bg-gradient-to-b dark:from-cyan-950/40 dark:via-[#08121c] dark:to-[#07090e]",
      cardBorder: "border-cyan-500/25 dark:border-cyan-500/35 hover:border-cyan-400",
      iconBg: "bg-cyan-500/15 text-cyan-500 dark:text-cyan-300 border border-cyan-500/30",
      valueColor: "text-cyan-600 dark:text-cyan-300",
      glowColor: "hover:shadow-[0_0_30px_rgba(6,182,212,0.25)]"
    },
    {
      cardBg: "bg-emerald-50/50 dark:bg-gradient-to-b dark:from-emerald-950/40 dark:via-[#081611] dark:to-[#07090e]",
      cardBorder: "border-emerald-500/25 dark:border-emerald-500/35 hover:border-emerald-400",
      iconBg: "bg-emerald-500/15 text-emerald-500 dark:text-emerald-300 border border-emerald-500/30",
      valueColor: "text-emerald-600 dark:text-emerald-300",
      glowColor: "hover:shadow-[0_0_30px_rgba(16,185,129,0.25)]"
    },
    {
      cardBg: "bg-purple-50/50 dark:bg-gradient-to-b dark:from-purple-950/40 dark:via-[#0f0b1c] dark:to-[#07090e]",
      cardBorder: "border-purple-500/25 dark:border-purple-500/35 hover:border-purple-400",
      iconBg: "bg-purple-500/15 text-purple-500 dark:text-purple-300 border border-purple-500/30",
      valueColor: "text-purple-600 dark:text-purple-300",
      glowColor: "hover:shadow-[0_0_30px_rgba(168,85,247,0.25)]"
    },
    {
      cardBg: "bg-amber-50/50 dark:bg-gradient-to-b dark:from-amber-950/40 dark:via-[#161008] dark:to-[#07090e]",
      cardBorder: "border-amber-500/25 dark:border-amber-500/35 hover:border-amber-400",
      iconBg: "bg-amber-500/15 text-amber-500 dark:text-amber-300 border border-amber-500/30",
      valueColor: "text-amber-600 dark:text-amber-300",
      glowColor: "hover:shadow-[0_0_30px_rgba(245,158,11,0.25)]"
    }
  ];

  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      
      {/* Vibrant Multi-Color Background Blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/4 w-80 sm:w-96 h-80 sm:h-96 rounded-full bg-cyan-500/12 dark:bg-cyan-500/18 blur-3xl animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-80 sm:w-96 h-80 sm:h-96 rounded-full bg-purple-500/12 dark:bg-purple-500/18 blur-3xl animate-blob-delayed"></div>
        <div className="absolute -bottom-10 left-1/3 w-72 sm:w-88 h-72 sm:h-88 rounded-full bg-emerald-500/12 dark:bg-emerald-500/15 blur-3xl animate-blob"></div>
        <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-pink-500/10 dark:bg-pink-500/12 blur-3xl animate-blob-delayed"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Intro */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Main Greeting with Vibrant Multi-Color Gradient */}
            <div className="space-y-2.5">
              <p className="font-mono text-transparent bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 bg-clip-text text-sm sm:text-base font-bold tracking-wider uppercase">
                Hello world, myself
              </p>
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight font-display leading-[1.1]">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 via-pink-400 to-amber-300 dark:from-cyan-300 dark:via-fuchsia-300 dark:via-purple-300 dark:to-emerald-300 bg-clip-text text-transparent">
                  {personalInfo.name}
                </span>
                <span className="text-pink-500 dark:text-pink-400 animate-pulse">.</span>
              </h1>
              {/* Directly below the name: Aspiring Cyber Security Specialist and Ethical Hacker with Software Developer */}
              <div className="pt-1">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-2xl bg-gradient-to-r from-rose-500/15 via-purple-500/15 to-cyan-500/15 border border-purple-500/30 text-sm sm:text-lg font-bold font-display shadow-sm">
                  <span className="bg-gradient-to-r from-rose-500 via-purple-500 to-cyan-500 dark:from-rose-400 dark:via-purple-300 dark:to-cyan-300 bg-clip-text text-transparent">
                    Aspiring Cyber Security Specialist &amp; Ethical Hacker with Software Developer
                  </span>
                </span>
              </div>
            </div>

            {/* Dynamic Typing Subtitle */}
            <div className="min-h-12 flex items-center font-mono text-base sm:text-xl">
              <span className="text-purple-500 mr-2 font-bold">&gt;</span>
              <span className="text-slate-800 dark:text-white font-semibold">I am</span>
              <span className="ml-2 bg-gradient-to-r from-cyan-500 via-emerald-400 via-purple-400 to-pink-500 bg-clip-text text-transparent font-bold">
                {typedText}
              </span>
              <span className="w-2.5 h-5 bg-gradient-to-b from-cyan-400 to-purple-500 ml-1 inline-block animate-pulse rounded-sm"></span>
            </div>

            {/* Bio Description with Colorful Highlights */}
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl font-sans">
              Second-year Computer Science &amp; Engineering student at{" "}
              <span className="text-slate-900 dark:text-white font-bold">{personalInfo.college}</span>. 
              Foundations in{" "}
              <span className="text-amber-600 dark:text-amber-400 font-semibold">Java</span>,{" "}
              <span className="text-blue-600 dark:text-sky-400 font-semibold">Python</span>,{" "}
              <span className="text-emerald-600 dark:text-emerald-400 font-semibold">SQL</span>, and{" "}
              <span className="text-orange-600 dark:text-orange-400 font-semibold">HTML</span>. 
              Currently strengthening my{" "}
              <span className="text-purple-600 dark:text-purple-400 font-bold bg-purple-500/10 px-1.5 py-0.5 rounded border border-purple-500/20">DSA journey through Java</span>, 
              actively pursuing coursework in{" "}
              <span className="text-rose-600 dark:text-rose-400 font-bold bg-rose-500/10 px-1.5 py-0.5 rounded border border-rose-500/20">Cyber Security &amp; Ethical Hacking</span>, 
              and exploring{" "}
              <span className="text-fuchsia-600 dark:text-fuchsia-400 font-bold bg-fuchsia-500/10 px-1.5 py-0.5 rounded border border-fuchsia-500/20">AI &amp; Machine Learning</span>. 
              Proud creator of{" "}
              <span className="text-emerald-600 dark:text-emerald-400 font-extrabold underline decoration-emerald-500 decoration-2 underline-offset-4">MaatiKatha</span> and 
              hackathon problem-solver!
            </p>

            {/* CTAs with Multi-Color Radiant Styles */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="group relative px-6 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:via-blue-500 hover:to-purple-500 text-white font-bold font-mono text-sm flex items-center gap-2 shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:shadow-[0_0_35px_rgba(168,85,247,0.6)] transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="relative z-10">Explore MaatiKatha &amp; Projects</span>
                <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="px-5 py-3.5 rounded-2xl bg-white/90 dark:bg-slate-900/90 border border-emerald-500/40 hover:border-emerald-500 text-slate-800 dark:text-emerald-300 hover:text-emerald-600 dark:hover:text-white font-mono text-sm flex items-center gap-2.5 backdrop-blur-md hover:bg-emerald-500/10 hover:shadow-[0_0_25px_rgba(16,185,129,0.25)] transition-all cursor-pointer shadow-sm hover:-translate-y-1"
              >
                <Mail className="w-4 h-4 text-emerald-500" />
                <span>Get in Touch</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="px-4 py-3.5 rounded-2xl bg-white/80 dark:bg-slate-900/60 border border-amber-500/30 hover:border-amber-500 text-slate-700 dark:text-slate-300 hover:text-amber-500 dark:hover:text-amber-300 font-mono text-xs flex items-center gap-2 transition-all cursor-pointer shadow-sm hover:-translate-y-1"
                title="Copy email to clipboard"
              >
                <CheckCircle2 className={`w-4 h-4 ${copiedEmail ? 'text-emerald-500' : 'text-amber-500'}`} />
                <span>{copiedEmail ? "Email Copied!" : "Copy Contact"}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Circular Portrait with Multi-Color Rotating Gradient Aura & Floating Badges */}
          <div className="lg:col-span-5 flex justify-center items-center py-6">
            <div className="relative group">
              
              {/* Outer Pulsing Multi-Color Ambient Blur Glow */}
              <div className="absolute -inset-8 rounded-full bg-gradient-to-tr from-cyan-500 via-purple-500 via-pink-500 to-emerald-400 blur-3xl opacity-50 group-hover:opacity-85 transition duration-700 animate-pulse-glow"></div>

              {/* Multi-Color Slow Rotating Gradient Ring */}
              <div className="absolute -inset-2.5 rounded-full p-[3px] bg-gradient-to-r from-cyan-400 via-purple-500 via-pink-500 via-amber-400 to-emerald-400 animate-spin-slow opacity-95 blur-[1px]"></div>

              {/* Main Circular Portrait Container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-92 lg:h-92 rounded-full p-2.5 bg-gradient-to-tr from-cyan-400 via-purple-500 to-pink-500 shadow-[0_0_50px_rgba(168,85,247,0.35)]">
                <div className="w-full h-full rounded-full overflow-hidden bg-slate-950 p-1 border-2 border-white/20 dark:border-slate-800">
                  <img 
                    src="/profile.jpg" 
                    alt={personalInfo.name} 
                    className="w-full h-full object-cover object-top rounded-full filter brightness-100 contrast-105 group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
              </div>

              {/* Floating Badge 1 (Top Left) - Java & DSA (Purple Theme) */}
              <div className="hidden sm:flex absolute -top-3 -left-4 px-3.5 py-1.5 rounded-full bg-white/95 dark:bg-[#0c0d1e]/95 backdrop-blur-md border border-purple-500/50 text-purple-700 dark:text-purple-300 font-mono text-xs items-center gap-2 shadow-xl animate-float-slow hover:scale-105 transition-transform">
                <Code className="w-3.5 h-3.5 text-purple-500" />
                <span className="font-bold">Java &amp; DSA</span>
              </div>

              {/* Floating Badge 2 (Top Right) - Tech Explorer (Cyan Theme) */}
              <div className="hidden sm:flex absolute -top-2 -right-4 px-3.5 py-1.5 rounded-full bg-white/95 dark:bg-[#08121d]/95 backdrop-blur-md border border-cyan-500/50 text-cyan-700 dark:text-cyan-300 font-mono text-xs items-center gap-1.5 shadow-xl animate-float-reverse hover:scale-105 transition-transform">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span className="font-bold">Tech Explorer</span>
              </div>

              {/* Floating Badge 3 (Bottom Right) - MaatiKatha Flagship (Emerald Theme) */}
              <div className="hidden sm:flex absolute -bottom-3 -right-2 px-3.5 py-1.5 rounded-full bg-white/95 dark:bg-[#091a14]/95 backdrop-blur-md border border-emerald-500/50 text-emerald-700 dark:text-emerald-300 font-mono text-xs items-center gap-1.5 shadow-xl animate-float-slow hover:scale-105 transition-transform">
                <Layers className="w-3.5 h-3.5 text-emerald-400" />
                <span className="font-bold">MaatiKatha Dev</span>
              </div>

              {/* Floating Status Pill (Bottom Center) - Amber Theme */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-white/95 dark:bg-[#15120c]/95 backdrop-blur-md border border-amber-500/50 text-slate-800 dark:text-amber-300 font-mono text-xs flex items-center gap-2 shadow-2xl whitespace-nowrap">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500"></span>
                </span>
                <span className="font-bold">B.Tech CSE @ JISCE &apos;27</span>
              </div>

            </div>
          </div>
        </div>

        {/* Live Metrics Strip - Each with Distinct Vivid Colors */}
        <div className="mt-16 pt-8 border-t border-slate-200/80 dark:border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon === "Flag" ? Flag :
                         stat.icon === "ShieldCheck" ? ShieldCheck :
                         stat.icon === "Award" ? GraduationCap : Code;
            const theme = statThemes[idx % statThemes.length];
            return (
              <div
                key={idx}
                className={`p-4 sm:p-5 rounded-3xl ${theme.cardBg} border ${theme.cardBorder} transition-all duration-300 group text-left shadow-sm ${theme.glowColor} hover:-translate-y-1.5`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xl sm:text-2xl font-extrabold font-mono ${theme.valueColor} transition-colors`}>
                    {stat.value}
                  </span>
                  <div className={`w-9 h-9 rounded-xl ${theme.iconBg} flex items-center justify-center group-hover:scale-110 transition-all shadow-sm`}>
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
