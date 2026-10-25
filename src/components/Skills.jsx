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
          color: 'text-purple-600 dark:text-purple-400',
          bg: 'bg-purple-500/10 border-purple-500/30',
          gradient: 'from-purple-500 via-indigo-500 to-cyan-400'
        };
      case 'Java':
        return {
          icon: Coffee,
          color: 'text-amber-600 dark:text-amber-400',
          bg: 'bg-amber-500/10 border-amber-500/30',
          gradient: 'from-amber-500 via-orange-500 to-yellow-400'
        };
      case 'Python':
        return {
          icon: Terminal,
          color: 'text-blue-600 dark:text-blue-400',
          bg: 'bg-blue-500/10 border-blue-500/30',
          gradient: 'from-blue-500 via-cyan-500 to-teal-400'
        };
      case 'C':
        return {
          icon: Cpu,
          color: 'text-cyan-600 dark:text-cyan-400',
          bg: 'bg-cyan-500/10 border-cyan-500/30',
          gradient: 'from-cyan-500 via-teal-500 to-emerald-400'
        };
      case 'C++':
        return {
          icon: Layers,
          color: 'text-indigo-600 dark:text-indigo-400',
          bg: 'bg-indigo-500/10 border-indigo-500/30',
          gradient: 'from-indigo-500 via-purple-500 to-pink-400'
        };
      case 'SQL':
        return {
          icon: Database,
          color: 'text-emerald-600 dark:text-emerald-400',
          bg: 'bg-emerald-500/10 border-emerald-500/30',
          gradient: 'from-emerald-500 via-teal-500 to-cyan-400'
        };
      case 'Cybersecurity & Ethical Hacking Learner':
        return {
          icon: Shield,
          color: 'text-rose-600 dark:text-rose-400',
          bg: 'bg-rose-500/10 border-rose-500/30',
          gradient: 'from-rose-500 via-red-500 to-orange-400'
        };
      case 'AI ML Learner':
        return {
          icon: Brain,
          color: 'text-purple-600 dark:text-purple-400',
          bg: 'bg-purple-500/10 border-purple-500/30',
          gradient: 'from-purple-500 via-pink-500 to-indigo-400'
        };
      case 'Software Project Builder':
        return {
          icon: Rocket,
          color: 'text-emerald-600 dark:text-emerald-400',
          bg: 'bg-emerald-500/10 border-emerald-500/30',
          gradient: 'from-emerald-500 via-cyan-500 to-blue-500'
        };
      case 'Quick Learner':
        return {
          icon: Zap,
          color: 'text-yellow-600 dark:text-yellow-400',
          bg: 'bg-yellow-500/10 border-yellow-500/30',
          gradient: 'from-yellow-400 via-amber-500 to-orange-500'
        };
      default:
        return {
          icon: Sparkles,
          color: 'text-cyan-600 dark:text-cyan-400',
          bg: 'bg-cyan-500/10 border-cyan-500/30',
          gradient: 'from-cyan-500 to-blue-500'
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
    { id: 'all', label: 'All Skills (10)' },
    { id: 'languages', label: 'Languages & DSA' },
    { id: 'tracks', label: 'Specializations & Tracks' },
    { id: 'engineering', label: 'Applied Strengths' },
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-transparent transition-colors duration-300">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-cyan-500/5 dark:bg-cyan-500/10 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-purple-500/5 dark:bg-purple-500/10 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 text-left">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-cyan-600 dark:text-cyan-400 uppercase tracking-widest mb-2 font-semibold">
              <span className="text-cyan-500/60">// 02</span>
              <span>TECHNICAL ARSENAL</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-display tracking-tight">
              Skills, Languages <span className="bg-gradient-to-r from-cyan-500 to-emerald-400 bg-clip-text text-transparent">&amp; Mindset</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm font-sans mt-2">
              Core competencies spanning DSA in Java, multi-language foundations, cybersecurity, AI/ML, and practical software engineering.
            </p>
            <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-500 via-emerald-400 to-transparent mt-3 rounded-full"></div>
          </div>

          {/* Search Input */}
          <div className="mt-6 md:mt-0 relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 dark:text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skills (e.g. Java, Python, C)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white dark:bg-slate-900/90 border border-slate-300 dark:border-slate-800 text-xs font-mono text-slate-800 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-400 transition-all shadow-sm"
            />
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-10 pb-3 border-b border-slate-200 dark:border-slate-800/80">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-xl font-mono text-xs transition-all duration-300 cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-[0_0_20px_rgba(6,182,212,0.4)] scale-105'
                  : 'bg-white dark:bg-slate-900/60 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSkills.map((skill, index) => {
            const config = getSkillConfig(skill.name);
            const Icon = config.icon;

            return (
              <div
                key={index}
                className="group relative p-5 rounded-3xl bg-white dark:bg-[#0a0e1c] border border-slate-200 dark:border-slate-800/90 hover:border-cyan-500/50 hover:bg-slate-50 dark:hover:bg-[#0d1224] transition-all duration-300 text-left overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 flex flex-col justify-between"
              >
                {/* Radiant top indicator */}
                <div 
                  className={`absolute top-0 left-0 h-[2.5px] bg-gradient-to-r ${config.gradient} opacity-70 group-hover:opacity-100 transition-opacity`}
                  style={{ width: `${skill.level}%` }}
                ></div>

                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-2xl flex items-center justify-center border ${config.bg} ${config.color} group-hover:scale-110 transition-transform shadow-sm`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700/60 font-semibold">
                        {skill.tag}
                      </span>
                    </div>
                    <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400 font-bold">
                      {skill.level}%
                    </span>
                  </div>

                  <h3 className="text-base font-bold font-mono text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors mb-2">
                    {skill.name}
                  </h3>

                  {skill.desc && (
                    <p className="text-slate-600 dark:text-slate-400 text-xs font-sans leading-relaxed mb-4">
                      {skill.desc}
                    </p>
                  )}
                </div>

                {/* Animated Progress bar */}
                <div className="w-full bg-slate-100 dark:bg-slate-800/80 rounded-full h-2 overflow-hidden p-[1px] mt-2">
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
          <div className="p-12 text-center rounded-2xl bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 font-mono text-sm">
            No matching capabilities found for "{searchQuery}".
          </div>
        )}

        {/* Bottom Feature Badges */}
        <div className="mt-14 p-6 rounded-3xl bg-white dark:bg-[#0a0e1c] border border-slate-200 dark:border-slate-800/90 grid grid-cols-1 sm:grid-cols-3 gap-6 shadow-md dark:shadow-none">
          <div className="flex items-center gap-3.5 text-left">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-600 dark:text-purple-400 shrink-0">
              <Code2 className="w-5 h-5" />
            </div>
            <div className="font-mono text-xs">
              <span className="text-slate-900 dark:text-white font-bold block text-sm">DSA in Java &amp; Core Languages</span>
              <span className="text-slate-500 dark:text-slate-400">Java, Python, C, C++, SQL</span>
            </div>
          </div>

          <div className="flex items-center gap-3.5 text-left">
            <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-600 dark:text-rose-400 shrink-0">
              <Shield className="w-5 h-5" />
            </div>
            <div className="font-mono text-xs">
              <span className="text-slate-900 dark:text-white font-bold block text-sm">Security &amp; AI Learner</span>
              <span className="text-slate-500 dark:text-slate-400">Cybersecurity &amp; Ethical Hacking, AI/ML</span>
            </div>
          </div>

          <div className="flex items-center gap-3.5 text-left">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0">
              <Rocket className="w-5 h-5" />
            </div>
            <div className="font-mono text-xs">
              <span className="text-slate-900 dark:text-white font-bold block text-sm">Builder &amp; Quick Learner</span>
              <span className="text-slate-500 dark:text-slate-400">Software Project Builder, Quick Learner</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
