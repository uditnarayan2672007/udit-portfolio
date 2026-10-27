import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  Terminal, 
  Menu, 
  X, 
  Sun, 
  Moon, 
  Download, 
  ExternalLink,
  ChevronRight,
  Code2,
  FolderGit2,
  Mail,
  Sparkles
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about", color: "hover:text-cyan-500 dark:hover:text-cyan-400" },
    { name: "Skills", href: "#skills", color: "hover:text-purple-500 dark:hover:text-purple-400" },
    { name: "Projects", href: "#projects", color: "hover:text-emerald-500 dark:hover:text-emerald-400" },
    { name: "Contact", href: "#contact", color: "hover:text-pink-500 dark:hover:text-pink-400" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/90 dark:bg-[#07090e]/90 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 shadow-md dark:shadow-2xl dark:shadow-black/60 py-3' 
        : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Profile Avatar & Multi-Color Gradient Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-60 group-hover:opacity-100 blur-[2px] transition duration-300"></div>
              <img 
                src="/profile.jpg" 
                alt="Udit Narayan Ganguly" 
                className="relative w-10 h-10 rounded-xl object-cover object-top ring-2 ring-white dark:ring-slate-900 shadow-md group-hover:scale-105 duration-300"
              />
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 border-2 border-white dark:border-[#07090e] rounded-full z-10 animate-pulse"></span>
            </div>
            <div className="flex flex-col text-left">
              <span className="text-sm sm:text-base font-extrabold tracking-tight flex items-center gap-1 font-display">
                <span className="bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 dark:from-cyan-400 dark:via-purple-300 dark:to-pink-400 bg-clip-text text-transparent">
                  Udit Narayan
                </span>
                <span className="px-1.5 py-0.2 rounded-md bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 border border-purple-500/30 text-[10px] font-mono text-purple-600 dark:text-purple-300 font-bold">
                  .dev
                </span>
              </span>
              <span className="text-[11px] text-slate-500 dark:text-slate-400 font-sans hidden sm:inline">
                Aspiring Cyber Security Specialist & Ethical Hacker with Software Developer
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`px-3.5 py-1.5 text-xs lg:text-sm font-semibold text-slate-700 dark:text-slate-300 ${link.color} hover:bg-slate-100 dark:hover:bg-slate-800/60 rounded-xl transition-all font-mono`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Area */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Social Profile Quick Links */}
            <div className="flex items-center gap-1.5 border-l border-slate-200 dark:border-slate-800 pl-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-purple-500/40 hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all"
                title="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-white hover:border-blue-500/40 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>

            {/* Light / Dark Mode Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-amber-500 dark:hover:text-amber-400 hover:border-amber-500/40 hover:shadow-[0_0_15px_rgba(245,158,11,0.3)] transition-all cursor-pointer"
              title={theme === 'dark' ? "Switch to Light Mode" : "Switch to Dark Mode"}
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400 hover:rotate-45 transition-transform" />
              ) : (
                <Moon className="w-4 h-4 text-indigo-600 hover:-rotate-12 transition-transform" />
              )}
            </button>

            {/* Direct Connect CTA with Radiant Multi-Color Gradient */}
            <a
              href="#contact"
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-bold font-mono text-xs flex items-center gap-1.5 shadow-[0_0_20px_rgba(6,182,212,0.35)] hover:shadow-[0_0_25px_rgba(168,85,247,0.5)] transition-all hover:scale-105"
            >
              <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
              <span>Connect</span>
            </a>
          </div>

          {/* Mobile Right Action */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-indigo-600" />
              )}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-cyan-500"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-white/95 dark:bg-[#0a0d14]/98 backdrop-blur-md border-b border-slate-200 dark:border-purple-500/20 px-4 pt-3 pb-6 space-y-2 mt-2 text-left shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-mono text-slate-700 dark:text-slate-300 hover:text-cyan-500 hover:bg-slate-100 dark:hover:bg-slate-800/60 rounded-xl"
            >
              <span className="text-cyan-500/80 mr-2">&gt;</span>
              {link.name}
            </a>
          ))}
          <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-xl bg-slate-100 dark:bg-slate-900 text-blue-600 dark:text-blue-400"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-xs font-mono font-bold text-white bg-gradient-to-r from-cyan-500 to-purple-600 px-4 py-2 rounded-xl shadow-md"
            >
              Contact Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
