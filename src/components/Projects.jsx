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

  const categories = ['All', 'Full-Stack', 'Cybersecurity', 'Tools & Scripts'];

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      
      {/* Background Decorative Blur */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-cyan-500/5 dark:bg-cyan-500/10 blur-[120px] pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 text-left">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-cyan-600 dark:text-cyan-400 uppercase tracking-widest mb-2 font-semibold">
              <span className="text-cyan-500/60">// 03</span>
              <span>ENGINEERED ARTIFACTS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-display tracking-tight">
              Featured <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">Innovations</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm font-sans mt-2">
              Highlighting <strong className="text-emerald-600 dark:text-emerald-400">MaatiKatha</strong> (Flagship Cultural Platform), Smart Coal Mine Governance, Java DSA, and Security Systems.
            </p>
            <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-transparent mt-3 rounded-full"></div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 mt-6 md:mt-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-xl font-mono text-xs transition-all duration-300 cursor-pointer ${
                  filter === cat
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-[0_0_20px_rgba(6,182,212,0.4)] scale-105'
                    : 'bg-white dark:bg-slate-900/60 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredProjects.map((project) => {
            const isCyan = project.accentColor === 'cyan';
            const isEmerald = project.accentColor === 'emerald';
            const isPurple = project.accentColor === 'purple';

            const badgeStyle = isCyan ? 'border-cyan-500/40 text-cyan-300 bg-cyan-950/80' :
                               isEmerald ? 'border-emerald-500/40 text-emerald-300 bg-emerald-950/80' :
                               isPurple ? 'border-purple-500/40 text-purple-300 bg-purple-950/80' :
                               'border-rose-500/40 text-rose-300 bg-rose-950/80';

            return (
              <div
                key={project.id}
                className="group relative rounded-3xl bg-white dark:bg-[#0a0e1a] border border-slate-200 dark:border-slate-800/90 hover:border-cyan-500/50 transition-all duration-500 flex flex-col justify-between overflow-hidden shadow-md dark:shadow-none hover:shadow-2xl dark:hover:shadow-[0_0_40px_rgba(6,182,212,0.2)] hover:-translate-y-2 text-left"
              >
                {/* Glowing Top Line */}
                <div className="h-1.5 w-full bg-gradient-to-r from-cyan-500 via-emerald-400 to-purple-600 opacity-60 group-hover:opacity-100 transition-opacity"></div>

                {/* Project Image Banner */}
                {project.image && (
                  <div className="relative h-52 w-full overflow-hidden bg-slate-950 border-b border-slate-200 dark:border-slate-800/80">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a] via-[#0a0e1a]/30 to-transparent"></div>
                    
                    {/* Top Floating Badge */}
                    <div className="absolute top-3.5 left-3.5">
                      <span className={`text-[10px] font-mono px-3 py-1 rounded-full border backdrop-blur-md shadow-lg font-semibold ${badgeStyle}`}>
                        {project.badge}
                      </span>
                    </div>

                    {/* Bottom Category Tag */}
                    <div className="absolute bottom-3 right-3 text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-black/80 text-cyan-300 backdrop-blur-md border border-cyan-500/30">
                      {project.category}
                    </div>
                  </div>
                )}

                <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                  <div>
                    {/* Title */}
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors font-display line-clamp-2 mb-2">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-3">
                    {project.tags.slice(0, 4).map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-0.5 rounded-lg bg-slate-100 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/60 text-slate-700 dark:text-slate-300 font-mono text-[10px] font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="px-1.5 py-0.5 text-slate-500 font-mono text-[10px]">
                        +{project.tags.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="px-6 py-4 bg-slate-50 dark:bg-[#0c111e] border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between">
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
                        className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-600 dark:text-cyan-400 hover:bg-cyan-500/20 transition-all hover:scale-105"
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
