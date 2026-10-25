import React from 'react';
import { X, ExternalLink, Shield, CheckCircle2, Terminal, Code2, AlertCircle, Layers, Sparkles } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto rounded-3xl bg-white dark:bg-[#0a0e19] border border-slate-200 dark:border-cyan-500/40 shadow-2xl dark:shadow-[0_0_60px_rgba(6,182,212,0.3)] text-left font-sans"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Cover Image Banner */}
        {project.image ? (
          <div className="relative h-56 sm:h-72 w-full overflow-hidden bg-slate-950">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e19] via-[#0a0e19]/50 to-transparent"></div>
            
            {/* Close Button on image banner */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-md border border-white/20 transition-all hover:scale-105 cursor-pointer z-10"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Badges on image */}
            <div className="absolute bottom-4 left-6 right-6 flex flex-wrap items-center justify-between gap-3">
              <span className="font-mono text-xs text-cyan-300 font-semibold tracking-wider uppercase px-3 py-1 rounded-full bg-black/70 border border-cyan-500/40 backdrop-blur-md">
                {project.badge || 'PROJECT DOSSIER'}
              </span>
              <span className="font-mono text-xs font-semibold px-3 py-1 rounded-full bg-cyan-950/80 text-cyan-200 border border-cyan-500/30 backdrop-blur-md">
                {project.category}
              </span>
            </div>
          </div>
        ) : (
          /* Header Bar fallback if no image */
          <div className="sticky top-0 z-10 px-6 py-4 bg-slate-50/95 dark:bg-[#0d121f]/95 backdrop-blur border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-500 animate-ping"></span>
              <span className="font-mono text-xs text-cyan-700 dark:text-cyan-300 font-semibold tracking-wider uppercase">
                {project.badge || 'PROJECT DOSSIER'}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        )}

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Title */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-display leading-tight">
              {project.title}
            </h3>
          </div>

          {/* Detailed Summary */}
          <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800/80 text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
            {project.longDescription || project.description}
          </div>

          {/* Key Features & Architecture Specifications */}
          {project.features && (
            <div className="space-y-3">
              <h4 className="text-xs font-mono text-cyan-700 dark:text-cyan-400 uppercase tracking-wider flex items-center gap-2 font-bold">
                <Shield className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                <span>Architecture &amp; Key Implementation Features</span>
              </h4>
              <div className="grid grid-cols-1 gap-2.5">
                {project.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-2.5 rounded-xl bg-slate-50/80 dark:bg-slate-900/30 border border-slate-100 dark:border-slate-800/60 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider flex items-center gap-2 font-semibold">
              <Code2 className="w-4 h-4 text-purple-500" />
              <span>Technologies &amp; Tools Used</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 text-cyan-800 dark:text-cyan-300 font-mono text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="pt-4 border-t border-slate-200 dark:border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 text-white font-mono text-xs flex items-center gap-2 border border-slate-700 transition-all hover:scale-105 shadow-md"
              >
                <GithubIcon className="w-4 h-4" />
                <span>View on GitHub</span>
              </a>
              {project.demo && (
                <a
                  href={project.demo}
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold font-mono text-xs flex items-center gap-2 shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all hover:scale-105"
                >
                  <ExternalLink className="w-4 h-4 text-slate-950" />
                  <span>Explore Demo</span>
                </a>
              )}
            </div>
            <button
              onClick={onClose}
              className="text-xs font-mono text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white cursor-pointer px-3 py-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              Close Dossier
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
