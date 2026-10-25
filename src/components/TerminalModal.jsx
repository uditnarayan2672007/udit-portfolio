import React, { useState, useEffect, useRef } from 'react';
import { X, Maximize2, Minimize2, Terminal, Shield, CornerDownLeft } from 'lucide-react';
import { personalInfo, skillCategories, projects } from '../data/portfolioData';

export default function TerminalModal({ isOpen, onClose }) {
  const [inputVal, setInputVal] = useState("");
  const [history, setHistory] = useState([
    { type: 'system', text: 'UDIT_OS Kernel v6.8.9-zen // Cybersecurity Terminal' },
    { type: 'system', text: 'Type "help" to view available security commands and Easter eggs.' },
    { type: 'system', text: '-----------------------------------------------------------' }
  ]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [commandHistory, setCommandHistory] = useState([]);
  const [matrixActive, setMatrixActive] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);

  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (cmd) => {
    const trimmed = cmd.trim();
    if (!trimmed) return;

    setCommandHistory(prev => [...prev, trimmed]);
    setHistoryIndex(-1);

    const parts = trimmed.split(" ");
    const mainCmd = parts[0].toLowerCase();
    const arg = parts.slice(1).join(" ");

    // Add user echo
    const newHistory = [...history, { type: 'user', text: `udit@security:~$ ${trimmed}` }];

    switch (mainCmd) {
      case 'help':
        newHistory.push({
          type: 'output',
          text: `AVAILABLE COMMANDS:
  help            - List all available terminal commands
  whoami          - Display bio, specialization & current mission
  skills          - Print technical arsenal & cybersecurity tools
  projects        - List featured development & pentesting projects
  nmap [target]   - Simulate network port scan (e.g. nmap localhost)
  matrix          - Toggle matrix digital rain mode
  cat [file]      - Read files (e.g. cat flag.txt, cat resume.txt)
  social          - Show GitHub, LinkedIn, TryHackMe handles
  clear           - Clear terminal screen
  exit            - Close this terminal window`
        });
        break;

      case 'whoami':
        newHistory.push({
          type: 'output',
          text: `IDENTITY: ${personalInfo.name}
COLLEGE: ${personalInfo.college}
DEGREE: 2nd Year B.Tech in Computer Science & Engineering (2023 - 2027)
FOUNDATIONS: Java, Python, SQL, HTML
DSA JOURNEY: Strengthening Data Structures & Algorithms through Java
SPECIALIZATION: Cyber Security & Ethical Hacking (Active Coursework), Exploring AI & ML
FLAGSHIP PROJECTS: MaatiKatha (Best Project) & Smart Governance for Coal Mines
HACKATHONS: Participated in multiple hackathons with rich teamwork experience.`
        });
        break;

      case 'skills':
        let skillText = "=== CYBERSECURITY & TECHNICAL ARSENAL ===\n";
        skillCategories.forEach(cat => {
          skillText += `\n[ ${cat.name.toUpperCase()} ]\n`;
          cat.skills.forEach(s => {
            skillText += `  • ${s.name.padEnd(30, ' ')} [${s.tag}]\n`;
          });
        });
        newHistory.push({ type: 'output', text: skillText });
        break;

      case 'projects':
        let projText = "=== FEATURED PROJECTS & RESEARCH ===\n\n";
        projects.forEach((p, idx) => {
          projText += `[0${idx+1}] ${p.title}\n    Tech: ${p.tags.join(', ')}\n    Desc: ${p.description}\n\n`;
        });
        newHistory.push({ type: 'output', text: projText });
        break;

      case 'nmap':
        newHistory.push({
          type: 'output',
          text: `Starting Nmap 7.94 scan on ${arg || '127.0.0.1'}...
Initiating SYN Stealth Scan at 19:30 UTC
Scanning ${arg || '127.0.0.1'} [1000 ports]
Discovered open port 22/tcp on 127.0.0.1: OpenSSH 9.6p1
Discovered open port 80/tcp on 127.0.0.1: HTTP (React Vite DevServer)
Discovered open port 443/tcp on 127.0.0.1: HTTPS TLSv1.3
Discovered open port 1337/tcp on 127.0.0.1: CTF_DAEMON (Status: Listening)
Nmap scan completed: 1 IP address (1 host up) scanned in 0.42 seconds.`
        });
        break;

      case 'matrix':
        setMatrixActive(!matrixActive);
        newHistory.push({
          type: 'output',
          text: matrixActive ? "Matrix rain deactivated." : "Matrix rain activated! Wake up, Neo..."
        });
        break;

      case 'cat':
        if (arg === 'flag.txt') {
          newHistory.push({
            type: 'output',
            text: `[+] CONGRATULATIONS! YOU DISCOVERED THE CTF FLAG:
======================================================
FLAG{UD1T_NARAYAN_GANGULY_CYB3R_W4RR10R}
======================================================
Mention this in our conversation or email for a high-priority response!`
          });
        } else if (arg === 'resume.txt') {
          newHistory.push({
            type: 'output',
            text: `[+] RESUME QUICK SUMMARY:
Name: ${personalInfo.name}
College: ${personalInfo.college} (2nd Year B.Tech CSE)
Core Foundations: Java (DSA Strengthening), Python, SQL, HTML
Interests: Cyber Security & Ethical Hacking (Course in Progress), AI & ML
Flagship Projects: MaatiKatha (Best Project) & Smart Coal Mine Governance System
Hackathons: Multiple Competitions Participant
Email: ${personalInfo.email}`
          });
        } else {
          newHistory.push({
            type: 'error',
            text: `cat: ${arg || 'file'}: No such file or directory. Try 'cat flag.txt' or 'cat resume.txt'`
          });
        }
        break;

      case 'social':
        newHistory.push({
          type: 'output',
          text: `GITHUB:      ${personalInfo.github}
LINKEDIN:    ${personalInfo.linkedin}
TRYHACKME:   ${personalInfo.tryhackme}
EMAIL:       ${personalInfo.email}`
        });
        break;

      case 'sudo':
        newHistory.push({
          type: 'error',
          text: `[!] USER 'visitor' is not in the sudoers file. This incident will be reported to /var/log/audit.log`
        });
        break;

      case 'clear':
        setHistory([]);
        return;

      case 'exit':
      case 'quit':
        onClose();
        return;

      default:
        newHistory.push({
          type: 'error',
          text: `Command not found: "${mainCmd}". Type "help" for a list of available commands.`
        });
        break;
    }

    setHistory(newHistory);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommand(inputVal);
      setInputVal("");
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const nextIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(nextIndex);
        setInputVal(commandHistory[nextIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex !== -1) {
        const nextIndex = historyIndex + 1;
        if (nextIndex < commandHistory.length) {
          setHistoryIndex(nextIndex);
          setInputVal(commandHistory[nextIndex]);
        } else {
          setHistoryIndex(-1);
          setInputVal("");
        }
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md">
      {/* Terminal Container */}
      <div className={`w-full transition-all duration-200 flex flex-col rounded-xl overflow-hidden border border-cyan-500/40 shadow-[0_0_50px_rgba(6,182,212,0.25)] bg-[#070a12] ${
        isMaximized ? 'h-[96vh] max-w-[98vw]' : 'h-[620px] max-w-4xl'
      }`}>
        
        {/* Window Bar */}
        <div className="px-4 py-3 bg-[#0d131f] border-b border-slate-800 flex items-center justify-between select-none">
          <div className="flex items-center gap-2">
            <button 
              onClick={onClose} 
              className="w-3.5 h-3.5 rounded-full bg-rose-500 hover:bg-rose-600 transition-colors flex items-center justify-center text-[9px] text-black font-bold"
              title="Close"
            >
              ×
            </button>
            <button 
              onClick={() => setIsMaximized(!isMaximized)} 
              className="w-3.5 h-3.5 rounded-full bg-amber-500 hover:bg-amber-600 transition-colors flex items-center justify-center text-[9px] text-black font-bold"
              title="Toggle size"
            >
              •
            </button>
            <button 
              onClick={() => setMatrixActive(!matrixActive)} 
              className={`w-3.5 h-3.5 rounded-full transition-colors ${matrixActive ? 'bg-emerald-400 animate-pulse' : 'bg-emerald-600 hover:bg-emerald-500'}`}
              title="Toggle Matrix Mode"
            >
            </button>
            <span className="ml-3 font-mono text-xs text-slate-300 flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              <span>udit@security-box:~ (bash)</span>
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="hidden sm:inline text-[11px] font-mono text-slate-400">
              Try: <span className="text-cyan-400 font-semibold">help</span>, <span className="text-emerald-400 font-semibold">cat flag.txt</span>
            </span>
            <button
              onClick={() => setIsMaximized(!isMaximized)}
              className="p-1 rounded text-slate-400 hover:text-white"
            >
              {isMaximized ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>
            <button
              onClick={onClose}
              className="p-1 rounded text-slate-400 hover:text-rose-400"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Terminal Screen / Body */}
        <div 
          onClick={() => inputRef.current?.focus()}
          className={`flex-1 p-4 overflow-y-auto font-mono text-xs sm:text-sm text-left relative ${
            matrixActive ? 'bg-[#031109] text-emerald-400' : 'bg-[#070a12] text-slate-200'
          }`}
        >
          {/* Subtle CRT Scanline */}
          <div className="pointer-events-none absolute inset-0 opacity-15 bg-[radial-gradient(#06b6d4_1px,transparent_1px)] [background-size:16px_16px]"></div>

          <div className="space-y-2 relative z-10">
            {history.map((line, idx) => (
              <div key={idx} className="leading-relaxed">
                {line.type === 'system' && (
                  <p className="text-slate-400 font-semibold">{line.text}</p>
                )}
                {line.type === 'user' && (
                  <p className="text-cyan-400 font-semibold">{line.text}</p>
                )}
                {line.type === 'output' && (
                  <pre className="whitespace-pre-wrap text-slate-300 font-mono text-xs sm:text-sm">
                    {line.text}
                  </pre>
                )}
                {line.type === 'error' && (
                  <p className="text-rose-400 font-mono">{line.text}</p>
                )}
              </div>
            ))}

            {/* Input Line */}
            <div className="flex items-center gap-2 pt-1">
              <span className="text-cyan-400 font-bold whitespace-nowrap">
                udit@security:~$
              </span>
              <input
                ref={inputRef}
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 bg-transparent outline-none border-none text-white font-mono text-xs sm:text-sm caret-cyan-400"
                autoFocus
                placeholder="type a command... (e.g. help, nmap localhost)"
              />
              <CornerDownLeft className="w-3.5 h-3.5 text-slate-600 hidden sm:block" />
            </div>
            <div ref={bottomRef} />
          </div>
        </div>

        {/* Terminal Footer Bar */}
        <div className="px-4 py-2 bg-[#090d16] border-t border-slate-800 flex items-center justify-between font-mono text-[11px] text-slate-400">
          <div className="flex items-center gap-3">
            <span>STATUS: <span className="text-emerald-400 font-semibold">CONNECTED</span></span>
            <span className="hidden sm:inline">PORT: <span className="text-cyan-400">1337/tcp</span></span>
            <span className="hidden sm:inline">ENC: <span className="text-purple-400">TLS_AES_256</span></span>
          </div>
          <div className="flex items-center gap-2">
            <span>Esc / 'exit' to quit</span>
          </div>
        </div>

      </div>
    </div>
  );
}
