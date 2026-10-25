import React, { useState } from 'react';
import { Award, Flag, GraduationCap, CheckCircle2, ChevronRight, Terminal, Shield, ExternalLink } from 'lucide-react';
import { ctfWriteups, certificationsAndEducation } from '../data/portfolioData';

export default function Certifications() {
  const [activeTab, setActiveTab] = useState('ctf');

  return (
    <section id="certifications" className="py-20 relative bg-slate-50 dark:bg-[#07090e] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 text-left">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-cyan-600 dark:text-cyan-400 uppercase tracking-widest mb-2">
              <span className="text-cyan-500/60">// 05</span>
              <span>VERIFIED MILESTONES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-display tracking-tight">
              CTF Writeups <span className="text-cyan-600 dark:text-cyan-400">&amp;</span> Education
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-transparent mt-3"></div>
          </div>

          {/* Tab Selector */}
          <div className="flex gap-2 mt-6 md:mt-0">
            <button
              onClick={() => setActiveTab('ctf')}
              className={`px-4 py-2 rounded-lg font-mono text-xs transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === 'ctf'
                  ? 'bg-cyan-500/10 dark:bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 border border-cyan-500/50 shadow-sm'
                  : 'bg-slate-100 dark:bg-slate-900/40 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Flag className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
              <span>CTF Challenges &amp; Labs</span>
            </button>
            <button
              onClick={() => setActiveTab('certs')}
              className={`px-4 py-2 rounded-lg font-mono text-xs transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === 'certs'
                  ? 'bg-cyan-500/10 dark:bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 border border-cyan-500/50 shadow-sm'
                  : 'bg-slate-100 dark:bg-slate-900/40 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <GraduationCap className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>Degree &amp; Certifications</span>
            </button>
          </div>
        </div>

        {/* TAB 1: CTF CHALLENGES & LAB WRITEUPS */}
        {activeTab === 'ctf' && (
          <div className="space-y-6 text-left">
            {/* TryHackMe Rank Callout Banner */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-cyan-50 to-slate-100 dark:from-[#0d1527] dark:to-[#120f26] border border-cyan-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm dark:shadow-none">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-600 dark:text-cyan-400">
                  <Award className="w-6 h-6 animate-pulse" />
                </div>
                <div>
                  <h3 className="text-slate-900 dark:text-white font-bold text-sm sm:text-base font-display flex items-center gap-2">
                    <span>TryHackMe Rank: Top 8% Globally</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30 font-semibold">
                      ACTIVE STREAK
                    </span>
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 font-mono mt-0.5">
                    Hands-on penetration testing rooms solved: Linux Privilege Escalation, Web Fundamentals, Network Services.
                  </p>
                </div>
              </div>
              <a
                href="https://tryhackme.com"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-lg bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-xs font-mono text-cyan-700 dark:text-cyan-300 flex items-center gap-1.5 self-start sm:self-auto border border-slate-300 dark:border-slate-700 transition-colors"
              >
                <span>View THM Profile</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* CTF Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {ctfWriteups.map((ctf, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 hover:bg-slate-50 dark:hover:bg-slate-900/80 transition-all space-y-3 group shadow-sm dark:shadow-none"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-cyan-700 dark:text-cyan-400 border border-cyan-500/20">
                      {ctf.platform}
                    </span>
                    <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
                      {ctf.difficulty}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors font-display">
                    {ctf.title}
                  </h4>

                  <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {ctf.summary}
                  </p>

                  <div className="pt-2 border-t border-slate-200 dark:border-slate-800/80 flex flex-wrap items-center justify-between gap-2">
                    <div className="flex flex-wrap gap-1.5">
                      {ctf.tools.map((tool, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-mono text-[10px]"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                    <span className="text-[10px] font-mono text-slate-500">
                      {ctf.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 2: DEGREE & CERTIFICATIONS TIMELINE */}
        {activeTab === 'certs' && (
          <div className="space-y-6 text-left">
            <div className="relative border-l-2 border-cyan-500/30 ml-4 sm:ml-6 space-y-8 py-2">
              {certificationsAndEducation.map((item, idx) => (
                <div key={idx} className="relative pl-6 sm:pl-8 group">
                  {/* Glowing Node on Timeline */}
                  <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-slate-950 border-2 border-cyan-500 dark:border-cyan-400 group-hover:scale-125 group-hover:shadow-[0_0_12px_rgba(6,182,212,0.8)] transition-all"></div>

                  <div className="p-5 rounded-xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 group-hover:border-cyan-500/40 transition-all space-y-2 shadow-sm dark:shadow-none">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-xs font-mono text-cyan-700 dark:text-cyan-400 font-semibold">
                        {item.institution}
                      </span>
                      <span className="text-[11px] font-mono text-slate-600 dark:text-slate-500 px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                        {item.period}
                      </span>
                    </div>

                    <h4 className="text-lg font-bold text-slate-900 dark:text-white font-display group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                      {item.title}
                    </h4>

                    <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                      {item.details}
                    </p>

                    <div className="pt-2 flex items-center gap-2 text-xs font-mono text-emerald-600 dark:text-emerald-400">
                      <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                      <span>{item.highlight}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
