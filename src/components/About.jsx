import React from 'react';
import { 
  Shield, 
  Cpu, 
  Code2, 
  Sparkles, 
  GraduationCap, 
  MapPin, 
  Award, 
  CheckCircle2, 
  ArrowUpRight,
  BookOpen,
  Terminal,
  Layers,
  HeartHandshake
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  const pillars = [
    {
      icon: Code2,
      title: "Java DSA Journey",
      tag: "CORE ALGORITHMS",
      color: "text-purple-600 dark:text-purple-300",
      cardBg: "bg-purple-50/60 dark:bg-gradient-to-b dark:from-purple-950/50 dark:via-[#100d24] dark:to-[#07090e]",
      iconBg: "bg-purple-500/20 text-purple-600 dark:text-purple-300 border border-purple-500/40 shadow-sm",
      tagBg: "bg-purple-500/15 text-purple-700 dark:text-purple-300 border border-purple-500/40",
      borderColor: "border-purple-500/25 dark:border-purple-500/45 hover:border-purple-400",
      glowColor: "hover:shadow-[0_0_35px_rgba(168,85,247,0.35)] shadow-sm dark:shadow-[0_0_25px_rgba(168,85,247,0.15)]",
      bgGradient: "from-purple-500/15 via-indigo-500/10 to-transparent",
      description: "Strengthening core Data Structures & Algorithms in Java. Rigorous practice in arrays, linked lists, binary trees, recursion, and algorithmic efficiency for competitive problem-solving."
    },
    {
      icon: Shield,
      title: "Cyber Security & Ethical Hacking",
      tag: "ACTIVE TRAINING",
      color: "text-rose-600 dark:text-rose-300",
      cardBg: "bg-rose-50/60 dark:bg-gradient-to-b dark:from-rose-950/50 dark:via-[#1c0a16] dark:to-[#07090e]",
      iconBg: "bg-rose-500/20 text-rose-600 dark:text-rose-300 border border-rose-500/40 shadow-sm",
      tagBg: "bg-rose-500/15 text-rose-700 dark:text-rose-300 border border-rose-500/40",
      borderColor: "border-rose-500/25 dark:border-rose-500/45 hover:border-rose-400",
      glowColor: "hover:shadow-[0_0_35px_rgba(244,63,94,0.35)] shadow-sm dark:shadow-[0_0_25px_rgba(244,63,94,0.15)]",
      bgGradient: "from-rose-500/15 via-pink-500/10 to-transparent",
      description: "Pursuing specialized coursework in offensive & defensive security, network reconnaissance (Nmap, Wireshark), Linux security environments, and web vulnerability auditing."
    },
    {
      icon: Sparkles,
      title: "AI, ML & Smart Systems",
      tag: "EMERGING TECH",
      color: "text-emerald-600 dark:text-emerald-300",
      cardBg: "bg-emerald-50/60 dark:bg-gradient-to-b dark:from-emerald-950/50 dark:via-[#091712] dark:to-[#07090e]",
      iconBg: "bg-emerald-500/20 text-emerald-600 dark:text-emerald-300 border border-emerald-500/40 shadow-sm",
      tagBg: "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/40",
      borderColor: "border-emerald-500/25 dark:border-emerald-500/45 hover:border-emerald-400",
      glowColor: "hover:shadow-[0_0_35px_rgba(16,185,129,0.35)] shadow-sm dark:shadow-[0_0_25px_rgba(16,185,129,0.15)]",
      bgGradient: "from-emerald-500/15 via-teal-500/10 to-transparent",
      description: "Expanding into Artificial Intelligence & Machine Learning with Python. Exploring automated decision models, predictive analytics, and smart governance architectures."
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-transparent">
      
      {/* Subtle Background Multi-Color Glows */}
      <div className="absolute top-1/2 -left-20 w-80 h-80 rounded-full bg-cyan-500/8 dark:bg-cyan-500/12 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-0 w-80 h-80 rounded-full bg-purple-500/8 dark:bg-purple-500/14 blur-3xl pointer-events-none"></div>
      <div className="absolute top-10 right-1/3 w-64 h-64 rounded-full bg-pink-500/6 dark:bg-pink-500/10 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading with Multi-Color Gradient */}
        <div className="mb-14 text-left">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-purple-600 dark:text-purple-400 uppercase tracking-widest mb-2 font-semibold">
            <span className="text-purple-500/60">// 01</span>
            <span>BIOGRAPHY &amp; ENGINEERING FOCUS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-display tracking-tight">
            About <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 bg-clip-text text-transparent">Myself</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 mt-3 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Narrative & 3 Core Focus Pillars */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="space-y-4 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                I am <span className="text-slate-900 dark:text-white font-bold">Udit Narayan Ganguly</span>, 
                a passionate 2nd-year B.Tech student in Computer Science &amp; Engineering at{" "}
                <span className="text-cyan-600 dark:text-cyan-400 font-semibold">{personalInfo.college}</span>. 
                My development journey is anchored by solid foundations in{" "}
                <span className="text-amber-600 dark:text-amber-300 font-semibold">Java</span>,{" "}
                <span className="text-blue-600 dark:text-sky-400 font-semibold">Python</span>,{" "}
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold">SQL</span>, and{" "}
                <span className="text-orange-600 dark:text-orange-400 font-semibold">modern web tech</span>.
              </p>
              <p>
                I have a strong drive for competitive problem-solving and software architecture. My flagship project,{" "}
                <strong className="text-emerald-600 dark:text-emerald-400 font-bold underline decoration-emerald-500/50 decoration-2">MaatiKatha</strong>, 
                blends regional cultural heritage with digital empowerment. I am actively expanding my horizon into{" "}
                <span className="text-purple-600 dark:text-purple-400 font-semibold">advanced Java DSA</span>, hands-on{" "}
                <span className="text-rose-600 dark:text-rose-400 font-semibold">Ethical Hacking coursework</span>, and emerging{" "}
                <span className="text-fuchsia-600 dark:text-fuchsia-400 font-semibold">AI/ML frameworks</span>.
              </p>
              
              {/* Highlighted Quote Box with Multi-Color Border */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-purple-500/5 via-cyan-500/5 to-emerald-500/5 border-l-4 border-gradient-to-b border-purple-500 border border-slate-200/60 dark:border-slate-800/60 text-slate-700 dark:text-slate-300 text-xs sm:text-sm italic">
                &ldquo;Driven by curiosity: from algorithmic mastery in Java to safeguarding systems through ethical hacking, and building software with real human impact.&rdquo;
              </div>
            </div>

            {/* Core Pillars - Distinct Vibrant Themes */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={idx}
                    className={`group relative p-5 sm:p-6 rounded-3xl ${pillar.cardBg} border ${pillar.borderColor} ${pillar.glowColor} transition-all duration-300 hover:-translate-y-2 overflow-hidden`}
                  >
                    <div className={`absolute top-0 right-0 w-28 h-28 bg-gradient-to-bl ${pillar.bgGradient} rounded-bl-full pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity`}></div>
                    
                    <div className="flex items-center justify-between mb-3.5">
                      <div className={`p-2.5 rounded-2xl ${pillar.iconBg} group-hover:scale-110 transition-transform shadow-sm`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className={`text-[9px] font-mono font-bold tracking-wider px-2.5 py-0.5 rounded-full ${pillar.tagBg}`}>
                        {pillar.tag}
                      </span>
                    </div>

                    <h3 className={`text-slate-900 dark:text-white font-mono font-bold text-xs mb-2 transition-colors ${pillar.color}`}>
                      {pillar.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-[11px] leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Visual Academic & Developer Card */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl overflow-hidden bg-white/90 dark:bg-gradient-to-b dark:from-[#120e26] dark:via-[#0c091c] dark:to-[#07090e] border border-slate-200 dark:border-purple-500/40 hover:border-purple-400 shadow-xl dark:shadow-[0_0_40px_rgba(168,85,247,0.2)] transition-all duration-500 text-left group">
              
              {/* Campus Innovation Visual Banner */}
              <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-slate-950">
                <img 
                  src="/projects/campus_tech.jpg" 
                  alt="JIS College of Engineering Innovation Lab" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090d1c] via-[#090d1c]/40 to-transparent"></div>
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="text-[10px] font-mono font-bold px-3 py-1 rounded-full bg-black/75 text-cyan-300 border border-cyan-500/40 backdrop-blur-md shadow-md">
                    CAMPUS INNOVATION
                  </span>
                </div>
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-white font-mono text-xs font-semibold">
                    <GraduationCap className="w-4 h-4 text-cyan-400" />
                    <span>JIS College of Engineering</span>
                  </div>
                  <span className="text-[11px] font-mono text-emerald-300 font-bold bg-emerald-950/85 px-2.5 py-0.5 rounded-full border border-emerald-500/40 shadow-sm">
                    2nd Year B.Tech
                  </span>
                </div>
              </div>

              {/* Student & Developer Body */}
              <div className="p-6 space-y-4">
                
                {/* Profile Avatar Bar with Multi-Color Ring */}
                <div className="flex items-center gap-4 pb-4 border-b border-slate-200 dark:border-slate-800/70">
                  <div className="relative w-16 h-16 sm:w-18 sm:h-18 shrink-0 rounded-2xl overflow-hidden ring-2 ring-gradient-to-r from-cyan-400 to-purple-500 p-0.5 shadow-lg bg-gradient-to-tr from-cyan-500 to-purple-500">
                    <img 
                      src="/profile.jpg" 
                      alt="Udit Narayan Ganguly" 
                      className="w-full h-full object-cover object-top block rounded-2xl"
                    />
                    <span className="absolute bottom-1 right-1 w-3 h-3 bg-emerald-500 border-2 border-white dark:border-[#090d16] rounded-full"></span>
                  </div>
                  <div className="min-w-0">
                    <div className="text-slate-900 dark:text-white font-bold text-lg leading-tight truncate">
                      {personalInfo.name}
                    </div>
                    <div className="text-transparent bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-xs font-mono font-bold truncate mt-0.5">
                      Aspiring Cyber Security Specialist &amp; Ethical Hacker with Software Developer
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 text-[11px] mt-1 font-mono">
                      <MapPin className="w-3.5 h-3.5 text-rose-500" />
                      <span>Kalyani, West Bengal</span>
                    </div>
                  </div>
                </div>

                {/* Academic & Skill Highlights with Color Coding */}
                <div className="space-y-2.5 text-xs font-mono">
                  <div className="flex justify-between py-1 border-b border-slate-100 dark:border-slate-800/40">
                    <span className="text-slate-400 dark:text-slate-500">INSTITUTION:</span>
                    <span className="text-cyan-700 dark:text-cyan-300 font-semibold text-right">{personalInfo.college}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100 dark:border-slate-800/40">
                    <span className="text-slate-400 dark:text-slate-500">DEGREE / BATCH:</span>
                    <span className="text-emerald-700 dark:text-emerald-300 font-semibold text-right">B.Tech CSE (2023 - 2027)</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100 dark:border-slate-800/40">
                    <span className="text-slate-400 dark:text-slate-500">PRIMARY DSA:</span>
                    <span className="text-purple-700 dark:text-purple-300 font-bold text-right">Java (Core Mastery)</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100 dark:border-slate-800/40">
                    <span className="text-slate-400 dark:text-slate-500">FOUNDATIONS:</span>
                    <span className="text-amber-700 dark:text-amber-300 font-semibold text-right">Java, Python, SQL, HTML</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100 dark:border-slate-800/40">
                    <span className="text-slate-400 dark:text-slate-500">FLAGSHIP BUILD:</span>
                    <span className="text-emerald-700 dark:text-emerald-300 font-bold text-right">MaatiKatha Platform</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-slate-400 dark:text-slate-500">SPECIAL INTERESTS:</span>
                    <span className="text-rose-600 dark:text-rose-400 font-semibold text-right">Ethical Hacking, AI/ML</span>
                  </div>
                </div>

                {/* Animated Interactive Tag Badges with Distinct Colors */}
                <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex flex-wrap gap-1.5">
                  <span className="px-2.5 py-1 rounded-xl bg-cyan-50 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 text-[10px] font-mono border border-cyan-200 dark:border-cyan-500/30 font-bold hover:scale-105 transition-transform">
                    #JISCE_CSE
                  </span>
                  <span className="px-2.5 py-1 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 text-[10px] font-mono border border-emerald-200 dark:border-emerald-500/30 font-bold hover:scale-105 transition-transform">
                    #MaatiKatha
                  </span>
                  <span className="px-2.5 py-1 rounded-xl bg-purple-50 dark:bg-purple-500/10 text-purple-700 dark:text-purple-300 text-[10px] font-mono border border-purple-200 dark:border-purple-500/30 font-bold hover:scale-105 transition-transform">
                    #Java_DSA
                  </span>
                  <span className="px-2.5 py-1 rounded-xl bg-rose-50 dark:bg-rose-500/10 text-rose-700 dark:text-rose-300 text-[10px] font-mono border border-rose-200 dark:border-rose-500/30 font-bold hover:scale-105 transition-transform">
                    #CyberSecurity
                  </span>
                  <span className="px-2.5 py-1 rounded-xl bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400 text-[10px] font-mono border border-amber-200 dark:border-amber-500/30 font-bold hover:scale-105 transition-transform">
                    #AI_ML
                  </span>
                  <span className="px-2.5 py-1 rounded-xl bg-fuchsia-50 dark:bg-fuchsia-500/10 text-fuchsia-700 dark:text-fuchsia-300 text-[10px] font-mono border border-fuchsia-200 dark:border-fuchsia-500/30 font-bold hover:scale-105 transition-transform">
                    #Hackathons
                  </span>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
