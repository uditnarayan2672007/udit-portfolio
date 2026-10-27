import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Eye, 
  Filter, 
  Code2, 
  Terminal, 
  Cpu, 
  Shield, 
  ArrowRight,
  Layers,
  Sparkles
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { projects } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = [
    { name: 'All', active: 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-[0_0_20px_rgba(6,182,212,0.4)]' },
    { name: 'Full-Stack', active: 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-[0_0_20px_rgba(16,185,129,0.4)]' },
    { name: 'Cybersecurity', active: 'bg-gradient-to-r from-rose-500 to-red-600 text-white shadow-[0_0_20px_rgba(244,63,94,0.4)]' },
    { name: 'Tools & Scripts', active: 'bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-[0_0_20px_rgba(168,85,247,0.4)]' },
  ];

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(p => p.category === filter);

  const getProjectTheme = (id) => {
    switch (id) {
      case 'maatikatha':
        return {
          boxBg: 'bg-white/90 dark:bg-gradient-to-b dark:from-[#0d1e17] dark:via-[#091510] dark:to-[#07090e]',
          topGradient: 'from-amber-400 via-orange-500 to-emerald-400',
          border: 'border-emerald-500/25 dark:border-emerald-500/40 hover:border-emerald-400',
          glow: 'shadow-sm dark:shadow-[0_0_30px_rgba(16,185,129,0.2)] hover:shadow-[0_0_40px_rgba(16,185,129,0.35)]',
          badgeStyle: 'border-emerald-500/40 text-emerald-300 bg-emerald-950/85',
          tagStyle: 'text-emerald-300 bg-emerald-500/15 border-emerald-500/30',
          titleHover: 'group-hover:text-emerald-400'
        };
      case 'coal-mine-monitoring':
        return {
          boxBg: 'bg-white/90 dark:bg-gradient-to-b dark:from-[#091a24] dark:via-[#07131a] dark:to-[#07090e]',
          topGradient: 'from-cyan-400 via-teal-400 to-amber-400',
          border: 'border-cyan-500/25 dark:border-cyan-500/40 hover:border-cyan-400',
          glow: 'shadow-sm dark:shadow-[0_0_30px_rgba(6,182,212,0.2)] hover:shadow-[0_0_40px_rgba(6,182,212,0.35)]',
          badgeStyle: 'border-cyan-500/40 text-cyan-300 bg-cyan-950/85',
          tagStyle: 'text-cyan-300 bg-cyan-500/15 border-cyan-500/30',
          titleHover: 'group-hover:text-cyan-400'
        };
      case 'java-dsa-suite':
        return {
          boxBg: 'bg-white/90 dark:bg-gradient-to-b dark:from-[#140e28] dark:via-[#0d091a] dark:to-[#07090e]',
          topGradient: 'from-purple-500 via-indigo-500 to-pink-500',
          border: 'border-purple-500/25 dark:border-purple-500/40 hover:border-purple-400',
          glow: 'shadow-sm dark:shadow-[0_0_30px_rgba(168,85,247,0.2)] hover:shadow-[0_0_40px_rgba(168,85,247,0.35)]',
          badgeStyle: 'border-purple-500/40 text-purple-300 bg-purple-950/85',
          tagStyle: 'text-purple-300 bg-purple-500/15 border-purple-500/30',
          titleHover: 'group-hover:text-purple-400'
        };
      case 'cyber-security-lab':
        return {
          boxBg: 'bg-white/90 dark:bg-gradient-to-b dark:from-[#220c18] dark:via-[#140810] dark:to-[#07090e]',
          topGradient: 'from-rose-500 via-pink-500 to-cyan-400',
          border: 'border-rose-500/25 dark:border-rose-500/40 hover:border-rose-400',
          glow: 'shadow-sm dark:shadow-[0_0_30px_rgba(244,63,94,0.2)] hover:shadow-[0_0_40px_rgba(244,63,94,0.35)]',
          badgeStyle: 'border-rose-500/40 text-rose-300 bg-rose-950/85',
          tagStyle: 'text-rose-300 bg-rose-500/15 border-rose-500/30',
          titleHover: 'group-hover:text-rose-400'
        };
      case 'ai-ml-exploratory':
        return {
          boxBg: 'bg-white/90 dark:bg-gradient-to-b dark:from-[#1d0b22] dark:via-[#120716] dark:to-[#07090e]',
          topGradient: 'from-fuchsia-500 via-purple-500 to-sky-400',
          border: 'border-fuchsia-500/25 dark:border-fuchsia-500/40 hover:border-fuchsia-400',
          glow: 'shadow-sm dark:shadow-[0_0_30px_rgba(217,70,239,0.2)] hover:shadow-[0_0_40px_rgba(217,70,239,0.35)]',
          badgeStyle: 'border-fuchsia-500/40 text-fuchsia-300 bg-fuchsia-950/85',
          tagStyle: 'text-fuchsia-300 bg-fuchsia-500/15 border-fuchsia-500/30',
          titleHover: 'group-hover:text-fuchsia-400'
        };
      default:
        return {
          boxBg: 'bg-white/90 dark:bg-gradient-to-b dark:from-[#0c1020] dark:to-[#07090e]',
          topGradient: 'from-cyan-500 via-blue-500 to-purple-600',
          border: 'border-cyan-500/25 dark:border-cyan-500/40 hover:border-cyan-400',
          glow: 'shadow-sm dark:shadow-[0_0_30px_rgba(6,182,212,0.2)] hover:shadow-[0_0_40px_rgba(6,182,212,0.35)]',
          badgeStyle: 'border-cyan-500/40 text-cyan-300 bg-cyan-950/85',
          tagStyle: 'text-cyan-300 bg-cyan-500/15 border-cyan-500/30',
          titleHover: 'group-hover:text-cyan-400'
        };
    }
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-transparent">
      
      {/* Background Decorative Blur */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[650px] h-[450px] bg-gradient-to-r from-cyan-500/8 via-purple-500/8 to-pink-500/8 blur-[120px] pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading with Vibrant Multi-Color Gradient */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 text-left">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-emerald-600 dark:text-emerald-400 uppercase tracking-widest mb-2 font-semibold">
              <span className="text-emerald-500/60">// 03</span>
              <span>ENGINEERED ARTIFACTS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-display tracking-tight">
              Featured <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">Innovations</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm font-sans mt-2">
              Highlighting <strong className="text-emerald-600 dark:text-emerald-400">MaatiKatha</strong> (Flagship Cultural Platform), Smart Coal Mine Governance, Java DSA, and Security Systems.
            </p>
            <div className="w-24 h-1.5 bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-400 mt-3 rounded-full"></div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2.5 mt-6 md:mt-0">
            {categories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setFilter(cat.name)}
                className={`px-4 py-2 rounded-2xl font-mono text-xs transition-all duration-300 cursor-pointer font-bold ${
                  filter === cat.name
                    ? `${cat.active} scale-105`
                    : 'bg-white/80 dark:bg-slate-900/60 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredProjects.map((project) => {
            const theme = getProjectTheme(project.id);

            return (
              <div
                key={project.id}
                className={`group relative rounded-3xl ${theme.boxBg} border ${theme.border} transition-all duration-500 flex flex-col justify-between overflow-hidden shadow-md hover:shadow-2xl ${theme.glow} hover:-translate-y-2 text-left`}
              >
                {/* Glowing Top Multi-Color Line */}
                <div className={`h-1.5 w-full bg-gradient-to-r ${theme.topGradient} opacity-75 group-hover:opacity-100 transition-opacity`}></div>

                {/* Project Image Banner */}
                {project.image && (
                  <div className="relative h-52 w-full overflow-hidden bg-slate-950 border-b border-slate-200 dark:border-slate-800/80">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e20] via-[#0a0e20]/30 to-transparent"></div>
                    
                    {/* Top Floating Badge */}
                    <div className="absolute top-3.5 left-3.5">
                      <span className={`text-[10px] font-mono px-3 py-1 rounded-full border backdrop-blur-md shadow-lg font-bold ${theme.badgeStyle}`}>
                        {project.badge}
                      </span>
                    </div>

                    {/* Bottom Category Tag */}
                    <div className="absolute bottom-3 right-3 text-[11px] font-mono font-bold px-3 py-0.5 rounded-full bg-black/80 text-white backdrop-blur-md border border-white/20">
                      {project.category}
                    </div>
                  </div>
                )}

                <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                  <div>
                    {/* Title */}
                    <h3 className={`text-lg font-bold text-slate-900 dark:text-white ${theme.titleHover} transition-colors font-display line-clamp-2 mb-2`}>
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Tags with Vibrant Colors */}
                  <div className="flex flex-wrap gap-1.5 pt-3">
                    {project.tags.slice(0, 4).map((tag, idx) => (
                      <span
                        key={idx}
                        className={`px-2.5 py-0.5 rounded-xl border font-mono text-[10px] font-semibold ${theme.tagStyle}`}
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="px-2 py-0.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 font-mono text-[10px] font-bold">
                        +{project.tags.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="px-6 py-4 bg-slate-50/80 dark:bg-[#0c1122] border-t border-slate-200/80 dark:border-slate-800/80 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-mono text-cyan-600 hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-300 flex items-center gap-1.5 group/btn font-bold cursor-pointer"
                  >
                    <Eye className="w-4 h-4" />
                    <span>Deep Dive</span>
                  </button>

                  <div className="flex items-center gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-300 dark:hover:bg-slate-700 transition-all hover:scale-105"
                      title="View GitHub Repository"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        className="p-2 rounded-xl bg-cyan-500/15 border border-cyan-500/40 text-cyan-600 dark:text-cyan-300 hover:bg-cyan-500/25 transition-all hover:scale-105"
                        title="Live Demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Deep-dive Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
