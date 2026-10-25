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
  Layers
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  const pillars = [
    {
      icon: Code2,
      title: "Java DSA Journey",
      tag: "CORE ALGORITHMS",
      color: "text-purple-600 dark:text-purple-400",
      bgGradient: "from-purple-500/10 to-transparent",
      borderColor: "hover:border-purple-500/50",
      description: "Strengthening core Data Structures & Algorithms in Java. Rigorous practice in arrays, linked lists, binary trees, recursion, and algorithmic efficiency for competitive problem-solving."
    },
    {
      icon: Shield,
      title: "Cyber Security & Ethical Hacking",
      tag: "ACTIVE TRAINING",
      color: "text-cyan-600 dark:text-cyan-400",
      bgGradient: "from-cyan-500/10 to-transparent",
      borderColor: "hover:border-cyan-500/50",
      description: "Pursuing specialized coursework in offensive & defensive security, network reconnaissance (Nmap, Wireshark), Linux security environments, and web vulnerability auditing."
    },
    {
      icon: Sparkles,
      title: "AI, ML & Smart Systems",
      tag: "EMERGING TECH",
      color: "text-emerald-600 dark:text-emerald-400",
      bgGradient: "from-emerald-500/10 to-transparent",
      borderColor: "hover:border-emerald-500/50",
      description: "Expanding into Artificial Intelligence & Machine Learning with Python. Exploring automated decision models, predictive analytics, and smart governance architectures."
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      
      {/* Subtle Background Glows */}
      <div className="absolute top-1/2 -left-20 w-80 h-80 rounded-full bg-cyan-500/5 dark:bg-cyan-500/10 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-0 w-80 h-80 rounded-full bg-purple-500/5 dark:bg-purple-500/10 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="mb-14 text-left">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-cyan-600 dark:text-cyan-400 uppercase tracking-widest mb-2 font-semibold">
            <span className="text-cyan-500/60">// 01</span>
            <span>BIOGRAPHY &amp; ENGINEERING FOCUS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-display tracking-tight">
            About <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">Myself</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-500 via-emerald-400 to-transparent mt-3 rounded-full"></div>
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
                <span className="text-slate-900 dark:text-white font-semibold">Java, Python, SQL, and modern web technologies</span>.
              </p>
              <p>
                I have a strong drive for competitive problem-solving and software architecture. My flagship project,{" "}
                <strong className="text-emerald-600 dark:text-emerald-400 font-bold underline decoration-emerald-500/40">MaatiKatha</strong>, 
                blends regional cultural heritage with digital empowerment. I am actively expanding my horizon into{" "}
                <span className="text-purple-600 dark:text-purple-400 font-semibold">advanced Java DSA</span>, hands-on{" "}
                <span className="text-cyan-600 dark:text-cyan-400 font-semibold">Ethical Hacking coursework</span>, and emerging{" "}
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold">AI/ML frameworks</span>.
              </p>
              <div className="p-4 rounded-xl bg-slate-100/70 dark:bg-slate-900/40 border-l-4 border-cyan-500 text-slate-700 dark:text-slate-300 text-xs sm:text-sm italic">
                &ldquo;Driven by curiosity: from algorithmic mastery in Java to safeguarding systems through ethical hacking, and building software with real human impact.&rdquo;
              </div>
            </div>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={idx}
                    className={`group relative p-5 rounded-2xl bg-white dark:bg-[#0a0e1a] border border-slate-200 dark:border-slate-800/80 ${pillar.borderColor} transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden`}
                  >
                    <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl ${pillar.bgGradient} rounded-bl-full pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity`}></div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 group-hover:scale-110 transition-transform">
                        <Icon className={`w-5 h-5 ${pillar.color}`} />
                      </div>
                      <span className="text-[9px] font-mono font-bold tracking-wider px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
                        {pillar.tag}
                      </span>
                    </div>
                    <h3 className="text-slate-900 dark:text-white font-mono font-bold text-xs mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
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
            <div className="rounded-3xl overflow-hidden bg-white dark:bg-[#090d18] border border-slate-200 dark:border-slate-800/90 hover:border-cyan-500/40 transition-all duration-500 shadow-xl dark:shadow-2xl text-left group">
              
              {/* Campus Innovation Visual Banner */}
              <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-slate-950">
                <img 
                  src="/projects/campus_tech.jpg" 
                  alt="JIS College of Engineering Innovation Lab" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090d18] via-[#090d18]/40 to-transparent"></div>
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="text-[10px] font-mono font-semibold px-2.5 py-1 rounded-full bg-black/70 text-cyan-300 border border-cyan-500/30 backdrop-blur-md">
                    CAMPUS INNOVATION
                  </span>
                </div>
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-white font-mono text-xs font-semibold">
                    <GraduationCap className="w-4 h-4 text-cyan-400" />
                    <span>JIS College of Engineering</span>
                  </div>
                  <span className="text-[11px] font-mono text-emerald-400 font-bold bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/30">
                    2nd Year B.Tech
                  </span>
                </div>
              </div>

              {/* Student & Developer Body */}
              <div className="p-6 space-y-4">
                
                {/* Profile Avatar Bar */}
                <div className="flex items-center gap-4 pb-4 border-b border-slate-200 dark:border-slate-800/70">
                  <div className="relative w-16 h-16 sm:w-18 sm:h-18 shrink-0 rounded-2xl overflow-hidden ring-2 ring-cyan-500/50 shadow-lg bg-slate-900">
                    <img 
                      src="/profile.jpg" 
                      alt="Udit Narayan Ganguly" 
                      className="w-full h-full object-cover object-top block"
                    />
                    <span className="absolute bottom-1 right-1 w-3 h-3 bg-emerald-500 border-2 border-white dark:border-[#090d16] rounded-full"></span>
                  </div>
                  <div className="min-w-0">
                    <div className="text-slate-900 dark:text-white font-bold text-lg leading-tight truncate">
                      {personalInfo.name}
                    </div>
                    <div className="text-cyan-600 dark:text-cyan-400 text-xs font-mono font-medium truncate mt-0.5">
                      Software Developer &amp; CSE Undergraduate
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 text-[11px] mt-1 font-mono">
                      <MapPin className="w-3 h-3 text-rose-500" />
                      <span>Kalyani, West Bengal</span>
                    </div>
                  </div>
                </div>

                {/* Academic & Skill Highlights */}
                <div className="space-y-2.5 text-xs font-mono">
                  <div className="flex justify-between py-1 border-b border-slate-100 dark:border-slate-800/40">
                    <span className="text-slate-400 dark:text-slate-500">INSTITUTION:</span>
                    <span className="text-cyan-700 dark:text-cyan-300 font-medium text-right">{personalInfo.college}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100 dark:border-slate-800/40">
                    <span className="text-slate-400 dark:text-slate-500">DEGREE / BATCH:</span>
                    <span className="text-emerald-700 dark:text-emerald-300 font-medium text-right">B.Tech CSE (2023 - 2027)</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100 dark:border-slate-800/40">
                    <span className="text-slate-400 dark:text-slate-500">PRIMARY DSA:</span>
                    <span className="text-purple-700 dark:text-purple-300 font-semibold text-right">Java (Core Mastery)</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100 dark:border-slate-800/40">
                    <span className="text-slate-400 dark:text-slate-500">FOUNDATIONS:</span>
                    <span className="text-amber-700 dark:text-yellow-300 font-medium text-right">Java, Python, SQL, HTML</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100 dark:border-slate-800/40">
                    <span className="text-slate-400 dark:text-slate-500">FLAGSHIP BUILD:</span>
                    <span className="text-emerald-700 dark:text-emerald-300 font-bold text-right">MaatiKatha Platform</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-slate-400 dark:text-slate-500">SPECIAL INTERESTS:</span>
                    <span className="text-cyan-700 dark:text-cyan-300 font-medium text-right">Ethical Hacking, AI/ML</span>
                  </div>
                </div>

                {/* Animated Interactive Tag Badges */}
                <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex flex-wrap gap-1.5">
                  <span className="px-2.5 py-1 rounded-lg bg-cyan-50 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 text-[10px] font-mono border border-cyan-200 dark:border-cyan-500/20 font-semibold hover:scale-105 transition-transform">
                    #JISCE_CSE
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 text-[10px] font-mono border border-emerald-200 dark:border-emerald-500/20 font-semibold hover:scale-105 transition-transform">
                    #MaatiKatha
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-purple-50 dark:bg-purple-500/10 text-purple-700 dark:text-purple-300 text-[10px] font-mono border border-purple-200 dark:border-purple-500/20 font-semibold hover:scale-105 transition-transform">
                    #Java_DSA
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-rose-50 dark:bg-rose-500/10 text-rose-700 dark:text-rose-300 text-[10px] font-mono border border-rose-200 dark:border-rose-500/20 font-semibold hover:scale-105 transition-transform">
                    #CyberSecurity
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400 text-[10px] font-mono border border-amber-200 dark:border-amber-500/20 font-semibold hover:scale-105 transition-transform">
                    #AI_ML
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
