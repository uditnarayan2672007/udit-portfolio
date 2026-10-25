import React from 'react';
import { Shield, ChevronUp, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800/80 bg-slate-100/70 dark:bg-[#05070d]/75 backdrop-blur-md py-12 relative text-left transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-200 dark:border-slate-800/60">
          
          {/* Brand & Tagline */}
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="font-mono text-base font-bold text-slate-900 dark:text-white tracking-tight flex items-center">
                <span className="text-cyan-600 dark:text-cyan-400">udit</span>
                <span className="text-slate-400">@</span>
                <span className="text-emerald-600 dark:text-emerald-400">sec-ops</span>
                <span className="text-slate-400">:~$</span>
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
              2nd Year B.Tech CSE @ JISCE â€¢ Java DSA, Cyber Security &amp; AI/ML
            </p>
          </div>

          {/* Quick Nav Links & Social Icons */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-600 dark:text-slate-400">
            <a href="#about" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Contact</a>

            <div className="flex items-center gap-2 border-l border-slate-300 dark:border-slate-800 pl-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="p-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-cyan-500/40 transition-colors"
                title="GitHub: uditnarayan2672007"
              >
                <GithubIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-blue-500 hover:text-blue-600 dark:hover:text-white hover:border-cyan-500/40 transition-colors"
                title="LinkedIn Profile"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Scroll to top */}
          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/50 text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all flex items-center gap-1.5 font-mono text-xs cursor-pointer shadow-sm"
            title="Return to top"
          >
            <span>Top</span>
            <ChevronUp className="w-4 h-4" />
          </button>
        </div>

        {/* Ethical Disclaimer & Copyright */}
        <div className="pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[11px] font-mono text-slate-500">
          <p className="max-w-xl text-slate-500 dark:text-slate-400">
            Crafting innovative software systems, Data Structures in Java, and exploring AI/ML at JIS College Of Engineering, Kalyani.
          </p>
          <div className="flex items-center gap-1 text-slate-600 dark:text-slate-400">
            <span>Â© {new Date().getFullYear()} {personalInfo.name}. Built with React &amp; Tailwind CSS.</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
