import React, { useState } from 'react';
import { 
  Shield, 
  Terminal, 
  Code2, 
  Cpu, 
  Database, 
  Search, 
  CheckCircle2, 
  Sparkles, 
  Coffee,
  Layers,
  Rocket,
  Zap,
  Brain,
  Boxes
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const getSkillConfig = (name) => {
    switch (name) {
      case 'DSA in Java':
        return {
          icon: Code2,
          color: 'text-purple-600 dark:text-purple-300',
          boxBg: 'bg-white/90 dark:bg-gradient-to-b dark:from-purple-950/50 dark:via-[#120e26] dark:to-[#07090e]',
          cardBorder: 'border-purple-500/25 dark:border-purple-500/40 hover:border-purple-400',
          glow: 'shadow-sm dark:shadow-[0_0_25px_rgba(168,85,247,0.2)] hover:shadow-[0_0_35px_rgba(168,85,247,0.35)]',
          gradient: 'from-purple-500 via-indigo-500 to-pink-500',
          iconBg: 'bg-purple-500/20 text-purple-600 dark:text-purple-300 border border-purple-500/40 shadow-sm',
          tagBg: 'bg-purple-500/15 text-purple-700 dark:text-purple-300 border-purple-500/40'
        };
      case 'Java':
        return {
          icon: Coffee,
          color: 'text-amber-600 dark:text-amber-300',
          boxBg: 'bg-white/90 dark:bg-gradient-to-b dark:from-amber-950/50 dark:via-[#161009] dark:to-[#07090e]',
          cardBorder: 'border-amber-500/25 dark:border-amber-500/40 hover:border-amber-400',
          glow: 'shadow-sm dark:shadow-[0_0_25px_rgba(245,158,11,0.2)] hover:shadow-[0_0_35px_rgba(245,158,11,0.35)]',
          gradient: 'from-amber-500 via-orange-500 to-yellow-400',
          iconBg: 'bg-amber-500/20 text-amber-600 dark:text-amber-300 border border-amber-500/40 shadow-sm',
          tagBg: 'bg-amber-500/15 text-amber-700 dark:text-amber-300 border-amber-500/40'
        };
      case 'Python':
        return {
          icon: Terminal,
          color: 'text-sky-600 dark:text-sky-300',
          boxBg: 'bg-white/90 dark:bg-gradient-to-b dark:from-sky-950/50 dark:via-[#09141f] dark:to-[#07090e]',
          cardBorder: 'border-sky-500/25 dark:border-sky-500/40 hover:border-sky-400',
          glow: 'shadow-sm dark:shadow-[0_0_25px_rgba(14,165,233,0.2)] hover:shadow-[0_0_35px_rgba(14,165,233,0.35)]',
          gradient: 'from-sky-500 via-blue-500 to-cyan-400',
          iconBg: 'bg-sky-500/20 text-sky-600 dark:text-sky-300 border border-sky-500/40 shadow-sm',
          tagBg: 'bg-sky-500/15 text-sky-700 dark:text-sky-300 border-sky-500/40'
        };
      case 'C':
        return {
          icon: Cpu,
          color: 'text-teal-600 dark:text-teal-300',
          boxBg: 'bg-white/90 dark:bg-gradient-to-b dark:from-teal-950/50 dark:via-[#081816] dark:to-[#07090e]',
          cardBorder: 'border-teal-500/25 dark:border-teal-500/40 hover:border-teal-400',
          glow: 'shadow-sm dark:shadow-[0_0_25px_rgba(20,184,166,0.2)] hover:shadow-[0_0_35px_rgba(20,184,166,0.35)]',
          gradient: 'from-teal-400 via-cyan-500 to-emerald-400',
          iconBg: 'bg-teal-500/20 text-teal-600 dark:text-teal-300 border border-teal-500/40 shadow-sm',
          tagBg: 'bg-teal-500/15 text-teal-700 dark:text-teal-300 border-teal-500/40'
        };
      case 'C++':
        return {
          icon: Layers,
          color: 'text-indigo-600 dark:text-indigo-300',
          boxBg: 'bg-white/90 dark:bg-gradient-to-b dark:from-indigo-950/50 dark:via-[#0d0f26] dark:to-[#07090e]',
          cardBorder: 'border-indigo-500/25 dark:border-indigo-500/40 hover:border-indigo-400',
          glow: 'shadow-sm dark:shadow-[0_0_25px_rgba(99,102,241,0.2)] hover:shadow-[0_0_35px_rgba(99,102,241,0.35)]',
          gradient: 'from-indigo-500 via-purple-500 to-pink-400',
          iconBg: 'bg-indigo-500/20 text-indigo-600 dark:text-indigo-300 border border-indigo-500/40 shadow-sm',
          tagBg: 'bg-indigo-500/15 text-indigo-700 dark:text-indigo-300 border-indigo-500/40'
        };
      case 'SQL':
        return {
          icon: Database,
          color: 'text-emerald-600 dark:text-emerald-300',
          boxBg: 'bg-white/90 dark:bg-gradient-to-b dark:from-emerald-950/50 dark:via-[#081813] dark:to-[#07090e]',
          cardBorder: 'border-emerald-500/25 dark:border-emerald-500/40 hover:border-emerald-400',
          glow: 'shadow-sm dark:shadow-[0_0_25px_rgba(16,185,129,0.2)] hover:shadow-[0_0_35px_rgba(16,185,129,0.35)]',
          gradient: 'from-emerald-500 via-teal-500 to-cyan-400',
          iconBg: 'bg-emerald-500/20 text-emerald-600 dark:text-emerald-300 border border-emerald-500/40 shadow-sm',
          tagBg: 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border-emerald-500/40'
        };
      case 'Cybersecurity & Ethical Hacking Learner':
        return {
          icon: Shield,
          color: 'text-rose-600 dark:text-rose-300',
          boxBg: 'bg-white/90 dark:bg-gradient-to-b dark:from-rose-950/55 dark:via-[#1e0a16] dark:to-[#07090e]',
          cardBorder: 'border-rose-500/30 dark:border-rose-500/45 hover:border-rose-400',
          glow: 'shadow-sm dark:shadow-[0_0_25px_rgba(244,63,94,0.25)] hover:shadow-[0_0_35px_rgba(244,63,94,0.4)]',
          gradient: 'from-rose-500 via-red-500 to-orange-400',
          iconBg: 'bg-rose-500/20 text-rose-600 dark:text-rose-300 border border-rose-500/40 shadow-sm',
          tagBg: 'bg-rose-500/15 text-rose-700 dark:text-rose-300 border-rose-500/40'
        };
      case 'AI ML Learner':
        return {
          icon: Brain,
          color: 'text-fuchsia-600 dark:text-fuchsia-300',
          boxBg: 'bg-white/90 dark:bg-gradient-to-b dark:from-fuchsia-950/50 dark:via-[#1a0a20] dark:to-[#07090e]',
          cardBorder: 'border-fuchsia-500/25 dark:border-fuchsia-500/40 hover:border-fuchsia-400',
          glow: 'shadow-sm dark:shadow-[0_0_25px_rgba(217,70,239,0.2)] hover:shadow-[0_0_35px_rgba(217,70,239,0.35)]',
          gradient: 'from-fuchsia-500 via-purple-500 to-pink-500',
          iconBg: 'bg-fuchsia-500/20 text-fuchsia-600 dark:text-fuchsia-300 border border-fuchsia-500/40 shadow-sm',
          tagBg: 'bg-fuchsia-500/15 text-fuchsia-700 dark:text-fuchsia-300 border-fuchsia-500/40'
        };
      case 'Software Project Builder':
        return {
          icon: Rocket,
          color: 'text-lime-600 dark:text-lime-300',
          boxBg: 'bg-white/90 dark:bg-gradient-to-b dark:from-lime-950/50 dark:via-[#0e180a] dark:to-[#07090e]',
          cardBorder: 'border-lime-500/25 dark:border-lime-500/40 hover:border-lime-400',
          glow: 'shadow-sm dark:shadow-[0_0_25px_rgba(132,204,22,0.2)] hover:shadow-[0_0_35px_rgba(132,204,22,0.35)]',
          gradient: 'from-lime-400 via-emerald-500 to-cyan-500',
          iconBg: 'bg-lime-500/20 text-lime-600 dark:text-lime-300 border border-lime-500/40 shadow-sm',
          tagBg: 'bg-lime-500/15 text-lime-700 dark:text-lime-300 border-lime-500/40'
        };
      case 'Quick Learner':
        return {
          icon: Zap,
          color: 'text-yellow-600 dark:text-yellow-300',
          boxBg: 'bg-white/90 dark:bg-gradient-to-b dark:from-yellow-950/50 dark:via-[#181308] dark:to-[#07090e]',
          cardBorder: 'border-yellow-500/25 dark:border-yellow-500/40 hover:border-yellow-400',
          glow: 'shadow-sm dark:shadow-[0_0_25px_rgba(234,179,8,0.2)] hover:shadow-[0_0_35px_rgba(234,179,8,0.35)]',
          gradient: 'from-yellow-400 via-amber-500 to-orange-500',
          iconBg: 'bg-yellow-500/20 text-yellow-600 dark:text-yellow-300 border border-yellow-500/40 shadow-sm',
          tagBg: 'bg-yellow-500/15 text-yellow-700 dark:text-yellow-300 border-yellow-500/40'
        };
      default:
        return {
          icon: Sparkles,
          color: 'text-cyan-600 dark:text-cyan-300',
          boxBg: 'bg-white/90 dark:bg-gradient-to-b dark:from-cyan-950/50 dark:via-[#09151e] dark:to-[#07090e]',
          cardBorder: 'border-cyan-500/25 dark:border-cyan-500/40 hover:border-cyan-400',
          glow: 'shadow-sm dark:shadow-[0_0_25px_rgba(6,182,212,0.2)] hover:shadow-[0_0_35px_rgba(6,182,212,0.35)]',
          gradient: 'from-cyan-500 to-blue-500',
          iconBg: 'bg-cyan-500/20 text-cyan-600 dark:text-cyan-300 border border-cyan-500/40 shadow-sm',
          tagBg: 'bg-cyan-500/15 text-cyan-700 dark:text-cyan-300 border-cyan-500/40'
        };
    }
  };

  const allSkills = skillCategories.flatMap(cat => 
    cat.skills.map(s => ({ ...s, categoryName: cat.name, categoryId: cat.id }))
  );

  const filteredSkills = allSkills.filter(skill => {
    const matchesTab = activeTab === 'all' || skill.categoryId === activeTab;
    const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          skill.tag.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const tabs = [
    { id: 'all', label: 'All Skills (10)', activeClass: 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-[0_0_20px_rgba(6,182,212,0.4)]' },
    { id: 'languages', label: 'Languages & DSA', activeClass: 'bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-[0_0_20px_rgba(168,85,247,0.4)]' },
    { id: 'tracks', label: 'Specializations & Tracks', activeClass: 'bg-gradient-to-r from-rose-500 to-pink-600 text-white shadow-[0_0_20px_rgba(244,63,94,0.4)]' },
    { id: 'engineering', label: 'Applied Strengths', activeClass: 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-[0_0_20px_rgba(16,185,129,0.4)]' },
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-transparent transition-colors duration-300">
      
      {/* Background Multi-Color Glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-purple-500/8 dark:bg-purple-500/15 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-cyan-500/8 dark:bg-cyan-500/15 blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/3 w-80 h-80 rounded-full bg-emerald-500/6 dark:bg-emerald-500/12 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading with Vibrant Multi-Color Gradient */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 text-left">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-cyan-600 dark:text-cyan-400 uppercase tracking-widest mb-2 font-semibold">
              <span className="text-cyan-500/60">// 02</span>
              <span>TECHNICAL ARSENAL</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-display tracking-tight">
              Skills, Languages <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-amber-300 bg-clip-text text-transparent">&amp; Mindset</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm font-sans mt-2">
              Core competencies spanning DSA in Java, multi-language foundations, cybersecurity, AI/ML, and practical software engineering.
            </p>
            <div className="w-24 h-1.5 bg-gradient-to-r from-purple-500 via-pink-500 to-amber-400 mt-3 rounded-full"></div>
          </div>

          {/* Search Input with Radiant Focus */}
          <div className="mt-6 md:mt-0 relative w-full sm:w-72">
            <Search className="w-4 h-4 text-purple-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skills (e.g. Java, Python, C)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-white/90 dark:bg-slate-900/90 border border-slate-300 dark:border-slate-800 text-xs font-mono text-slate-800 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-purple-500 dark:focus:border-purple-400 focus:ring-2 focus:ring-purple-500/20 transition-all shadow-sm"
            />
          </div>
        </div>

        {/* Category Tabs with Vivid Active States */}
        <div className="flex flex-wrap gap-2.5 mb-10 pb-3 border-b border-slate-200/80 dark:border-slate-800/80">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-2xl font-mono text-xs transition-all duration-300 cursor-pointer font-bold ${
                activeTab === tab.id
                  ? `${tab.activeClass} scale-105`
                  : 'bg-white/80 dark:bg-slate-900/60 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Skills Grid - Every Box Has A Rich Colorful Dark Mode Fill & Glow */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSkills.map((skill, index) => {
            const config = getSkillConfig(skill.name);
            const Icon = config.icon;

            return (
              <div
                key={index}
                className={`group relative p-5 sm:p-6 rounded-3xl ${config.boxBg} border ${config.cardBorder} ${config.glow} transition-all duration-300 text-left overflow-hidden hover:-translate-y-2 flex flex-col justify-between`}
              >
                {/* Radiant top multi-color gradient line */}
                <div 
                  className={`absolute top-0 left-0 h-[3px] bg-gradient-to-r ${config.gradient} opacity-85 group-hover:opacity-100 transition-opacity`}
                  style={{ width: `${skill.level}%` }}
                ></div>

                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-2xl flex items-center justify-center border ${config.iconBg} group-hover:scale-110 transition-transform`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className={`text-[10px] font-mono px-3 py-0.5 rounded-full border font-bold ${config.tagBg}`}>
                        {skill.tag}
                      </span>
                    </div>
                    <span className={`text-xs font-mono font-extrabold ${config.color}`}>
                      {skill.level}%
                    </span>
                  </div>

                  <h3 className="text-base font-bold font-mono text-slate-900 dark:text-white group-hover:text-cyan-400 transition-colors mb-2">
                    {skill.name}
                  </h3>

                  {skill.desc && (
                    <p className="text-slate-600 dark:text-slate-300/90 text-xs font-sans leading-relaxed mb-4">
                      {skill.desc}
                    </p>
                  )}
                </div>

                {/* Animated Gradient Progress bar */}
                <div className="w-full bg-slate-200/60 dark:bg-slate-800/80 rounded-full h-2 overflow-hidden p-[1px] mt-2">
                  <div
                    className={`bg-gradient-to-r ${config.gradient} h-full rounded-full transition-all duration-1000 ease-out group-hover:brightness-125`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredSkills.length === 0 && (
          <div className="p-12 text-center rounded-3xl bg-white/80 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 font-mono text-sm">
            No matching capabilities found for "{searchQuery}".
          </div>
        )}

        {/* Bottom Feature Badges - Colorful Dark Mode Boxes */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="flex items-center gap-3.5 text-left p-5 rounded-3xl bg-purple-50/60 dark:bg-gradient-to-b dark:from-purple-950/45 dark:via-[#110e24] dark:to-[#07090e] border border-purple-500/25 dark:border-purple-500/40 shadow-sm dark:shadow-[0_0_25px_rgba(168,85,247,0.15)] hover:-translate-y-1 transition-all">
            <div className="w-11 h-11 rounded-2xl bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-600 dark:text-purple-300 shrink-0 shadow-sm">
              <Code2 className="w-5 h-5" />
            </div>
            <div className="font-mono text-xs">
              <span className="text-purple-700 dark:text-purple-300 font-bold block text-sm">DSA in Java &amp; Languages</span>
              <span className="text-slate-500 dark:text-slate-400">Java, Python, C, C++, SQL</span>
            </div>
          </div>

          <div className="flex items-center gap-3.5 text-left p-5 rounded-3xl bg-rose-50/60 dark:bg-gradient-to-b dark:from-rose-950/45 dark:via-[#1e0a16] dark:to-[#07090e] border border-rose-500/25 dark:border-rose-500/40 shadow-sm dark:shadow-[0_0_25px_rgba(244,63,94,0.15)] hover:-translate-y-1 transition-all">
            <div className="w-11 h-11 rounded-2xl bg-rose-500/20 border border-rose-500/40 flex items-center justify-center text-rose-600 dark:text-rose-300 shrink-0 shadow-sm">
              <Shield className="w-5 h-5" />
            </div>
            <div className="font-mono text-xs">
              <span className="text-rose-700 dark:text-rose-300 font-bold block text-sm">Security &amp; AI Learner</span>
              <span className="text-slate-500 dark:text-slate-400">Ethical Hacking &amp; AI/ML Track</span>
            </div>
          </div>

          <div className="flex items-center gap-3.5 text-left p-5 rounded-3xl bg-emerald-50/60 dark:bg-gradient-to-b dark:from-emerald-950/45 dark:via-[#081813] dark:to-[#07090e] border border-emerald-500/25 dark:border-emerald-500/40 shadow-sm dark:shadow-[0_0_25px_rgba(16,185,129,0.15)] hover:-translate-y-1 transition-all">
            <div className="w-11 h-11 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-600 dark:text-emerald-300 shrink-0 shadow-sm">
              <Rocket className="w-5 h-5" />
            </div>
            <div className="font-mono text-xs">
              <span className="text-emerald-700 dark:text-emerald-300 font-bold block text-sm">Builder &amp; Quick Learner</span>
              <span className="text-slate-500 dark:text-slate-400">Software Project Builder &amp; Adaptability</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
