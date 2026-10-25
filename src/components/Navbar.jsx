import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Code, Cpu, Mail, Sun, Moon } from 'lucide-react';
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
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 dark:bg-[#07090e]/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-lg dark:shadow-black/50 py-3' 
        : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Profile Avatar & Modern Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative">
              <img 
                src="/profile.jpg" 
                alt="Udit Narayan Ganguly" 
                className="w-10 h-10 rounded-xl object-cover object-top ring-2 ring-cyan-500/50 group-hover:ring-cyan-400 transition-all shadow-md group-hover:scale-105 duration-300"
              />
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 border-2 border-white dark:border-[#07090e] rounded-full"></span>
            </div>
            <div className="flex flex-col text-left">
              <span className="text-sm sm:text-base font-extrabold tracking-tight text-slate-900 dark:text-white flex items-center gap-1 font-display">
                Udit Narayan <span className="text-cyan-500 font-mono">.dev</span>
              </span>
              <span className="text-[11px] text-slate-500 dark:text-slate-400 font-sans hidden sm:inline">
                Software Developer • JISCE CSE
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 text-xs lg:text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-slate-800/60 rounded-lg transition-all font-mono"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Area */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Status Pill */}
            <div className="px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-mono text-xs flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-ping"></span>
              <span>Open for Internships</span>
            </div>

            {/* Social Profile Quick Links */}
            <div className="flex items-center gap-1.5 border-l border-slate-200 dark:border-slate-800 pl-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-cyan-500/40 transition-colors"
                title="GitHub: uditnarayan2672007"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-white hover:border-cyan-500/40 transition-colors"
                title="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>

            {/* Light / Dark Mode Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
              title={theme === 'dark' ? "Switch to Light Mode" : "Switch to Dark Mode"}
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400 hover:rotate-45 transition-transform" />
              ) : (
                <Moon className="w-4 h-4 text-indigo-600 hover:-rotate-12 transition-transform" />
              )}
            </button>

            {/* Direct Connect CTA */}
            <a
              href="#contact"
              className="px-3.5 py-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/40 text-cyan-700 dark:text-cyan-300 hover:text-cyan-900 dark:hover:text-white hover:bg-cyan-500/20 font-mono text-xs flex items-center gap-1.5 transition-all"
            >
              <Mail className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
              <span>Connect</span>
            </a>
          </div>

          {/* Mobile Right Action (Theme Toggle + Menu Button) */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300"
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
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-cyan-500"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-white dark:bg-[#0a0d14]/98 border-b border-slate-200 dark:border-cyan-500/20 px-4 pt-3 pb-6 space-y-2 mt-2 text-left shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-mono text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-cyan-500/10 rounded-md"
            >
              <span className="text-cyan-500/60 mr-2">&gt;</span>
              {link.name}
            </a>
          ))}
          <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-900 text-blue-600 dark:text-blue-400"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-xs font-mono text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-500/10 px-3.5 py-1.5 rounded border border-cyan-500/30"
            >
              Contact Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
