import React, { useState, useEffect } from 'react';
import { ShieldCheck, Key, Hash, Network, Copy, Check, AlertTriangle, Cpu, Terminal } from 'lucide-react';

export default function SecurityToolsWidget() {
  const [activeTool, setActiveTool] = useState('entropy');

  // --- Tool 1: Password Entropy State ---
  const [password, setPassword] = useState("Secur3P@ssw0rd!2024");
  const [entropy, setEntropy] = useState(0);
  const [crackTimeGpu, setCrackTimeGpu] = useState("");
  const [crackTimeOnline, setCrackTimeOnline] = useState("");
  const [passwordStats, setPasswordStats] = useState({
    length: 0,
    hasLower: false,
    hasUpper: false,
    hasNumber: false,
    hasSymbol: false,
  });

  useEffect(() => {
    calculatePasswordEntropy(password);
  }, [password]);

  const calculatePasswordEntropy = (pass) => {
    const len = pass.length;
    let poolSize = 0;
    const hasLower = /[a-z]/.test(pass);
    const hasUpper = /[A-Z]/.test(pass);
    const hasNumber = /[0-9]/.test(pass);
    const hasSymbol = /[^a-zA-Z0-9]/.test(pass);

    if (hasLower) poolSize += 26;
    if (hasUpper) poolSize += 26;
    if (hasNumber) poolSize += 10;
    if (hasSymbol) poolSize += 33;

    setPasswordStats({
      length: len,
      hasLower,
      hasUpper,
      hasNumber,
      hasSymbol,
    });

    if (len === 0 || poolSize === 0) {
      setEntropy(0);
      setCrackTimeGpu("Instant");
      setCrackTimeOnline("Instant");
      return;
    }

    const calculatedEntropy = Math.round(len * Math.log2(poolSize));
    setEntropy(calculatedEntropy);

    // Combinations = poolSize ^ len
    const combinations = Math.pow(poolSize, len);

    // 8x RTX 4090 ~ 100,000,000,000 hashes/sec for NTLM / Fast Hash
    const gpuRate = 1e11;
    const secondsGpu = combinations / gpuRate;
    setCrackTimeGpu(formatDuration(secondsGpu));

    // Online throttled ~ 100 guesses/sec
    const onlineRate = 100;
    const secondsOnline = combinations / onlineRate;
    setCrackTimeOnline(formatDuration(secondsOnline));
  };

  const formatDuration = (seconds) => {
    if (seconds <= 0.001) return "Instant (< 1 ms)";
    if (seconds < 1) return "< 1 second";
    if (seconds < 60) return `${Math.round(seconds)} seconds`;
    if (seconds < 3600) return `${Math.round(seconds / 60)} minutes`;
    if (seconds < 86400) return `${Math.round(seconds / 3600)} hours`;
    if (seconds < 31536000) return `${Math.round(seconds / 86400)} days`;
    if (seconds < 31536000 * 100) return `${Math.round(seconds / 31536000)} years`;
    if (seconds < 31536000 * 1000000) return `${(seconds / 31536000).toExponential(2)} years`;
    return "Centuries (Computationally Infeasible)";
  };

  const getStrengthMeta = () => {
    if (entropy < 35) return { label: "Very Weak", color: "text-rose-400", bg: "bg-rose-500", width: "20%" };
    if (entropy < 55) return { label: "Moderate", color: "text-amber-400", bg: "bg-amber-500", width: "45%" };
    if (entropy < 75) return { label: "Strong", color: "text-cyan-400", bg: "bg-cyan-500", width: "75%" };
    return { label: "Military-Grade / Bulletproof", color: "text-emerald-400", bg: "bg-emerald-500", width: "100%" };
  };

  // --- Tool 2: Cryptographic Hasher State ---
  const [hashInput, setHashInput] = useState("ethical-hacking-and-defense");
  const [sha256Hash, setSha256Hash] = useState("");
  const [sha1Hash, setSha1Hash] = useState("");
  const [base64Encoded, setBase64Encoded] = useState("");
  const [copiedHash, setCopiedHash] = useState("");

  useEffect(() => {
    computeHashes(hashInput);
  }, [hashInput]);

  const computeHashes = async (text) => {
    if (!text) {
      setSha256Hash("");
      setSha1Hash("");
      setBase64Encoded("");
      return;
    }

    // SHA-256
    try {
      const msgBuffer = new TextEncoder().encode(text);
      const hashBuffer256 = await crypto.subtle.digest('SHA-256', msgBuffer);
      const hashArray256 = Array.from(new Uint8Array(hashBuffer256));
      const hashHex256 = hashArray256.map(b => b.toString(16).padStart(2, '0')).join('');
      setSha256Hash(hashHex256);

      // SHA-1
      const hashBuffer1 = await crypto.subtle.digest('SHA-1', msgBuffer);
      const hashArray1 = Array.from(new Uint8Array(hashBuffer1));
      const hashHex1 = hashArray1.map(b => b.toString(16).padStart(2, '0')).join('');
      setSha1Hash(hashHex1);

      // Base64
      setBase64Encoded(btoa(unescape(encodeURIComponent(text))));
    } catch (e) {
      console.error(e);
    }
  };

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedHash(id);
    setTimeout(() => setCopiedHash(""), 2000);
  };

  // --- Tool 3: Subnet Calculator State ---
  const [ipAddress, setIpAddress] = useState("192.168.1.15");
  const [cidrPrefix, setCidrPrefix] = useState(24);

  const calculateSubnet = () => {
    const parts = ipAddress.split('.').map(Number);
    if (parts.length !== 4 || parts.some(p => isNaN(p) || p < 0 || p > 255)) {
      return null;
    }

    const prefix = Number(cidrPrefix);
    const maskNum = prefix === 0 ? 0 : (~0 << (32 - prefix)) >>> 0;
    const ipNum = ((parts[0] << 24) | (parts[1] << 16) | (parts[2] << 8) | parts[3]) >>> 0;

    const netNum = (ipNum & maskNum) >>> 0;
    const bcastNum = (netNum | (~maskNum >>> 0)) >>> 0;

    const numToIp = (n) => [(n >>> 24) & 255, (n >>> 16) & 255, (n >>> 8) & 255, n & 255].join('.');

    const netMask = numToIp(maskNum);
    const wildcard = numToIp(~maskNum >>> 0);
    const networkId = numToIp(netNum);
    const broadcast = numToIp(bcastNum);

    const totalHosts = prefix >= 31 ? (prefix === 31 ? 2 : 1) : Math.pow(2, 32 - prefix);
    const usableHosts = prefix >= 31 ? 0 : totalHosts - 2;

    const firstUsable = prefix >= 31 ? "N/A (Point-to-Point)" : numToIp(netNum + 1);
    const lastUsable = prefix >= 31 ? "N/A" : numToIp(bcastNum - 1);

    const isPrivate = 
      (parts[0] === 10) || 
      (parts[0] === 172 && parts[1] >= 16 && parts[1] <= 31) || 
      (parts[0] === 192 && parts[1] === 168);

    return {
      netMask,
      wildcard,
      networkId,
      broadcast,
      totalHosts,
      usableHosts,
      usableRange: prefix >= 31 ? "N/A" : `${firstUsable} - ${lastUsable}`,
      type: isPrivate ? "RFC 1918 Private IP" : "Public Routable IP"
    };
  };

  const subnetResult = calculateSubnet();
  const strength = getStrengthMeta();

  return (
    <section id="security-lab" className="py-20 relative bg-slate-50 dark:bg-[#07090e] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-left mb-12">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-cyan-600 dark:text-cyan-400 uppercase tracking-widest mb-2">
            <span className="text-cyan-500/60">// 03</span>
            <span>INTERACTIVE SECURITY LAB</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-display tracking-tight">
            Live Cyber Playground <span className="text-cyan-600 dark:text-cyan-400">&amp;</span> Calculators
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base font-sans mt-2 max-w-2xl">
            Test and interact with real cryptographic and security algorithms running natively in your browser.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-transparent mt-3"></div>
        </div>

        {/* Outer Cyber Box */}
        <div className="rounded-2xl bg-white dark:bg-[#090d16] border border-slate-200 dark:border-cyan-500/30 overflow-hidden shadow-xl dark:shadow-2xl">
          
          {/* Tool Selector Tabs */}
          <div className="flex border-b border-slate-200 dark:border-slate-800 bg-slate-100/80 dark:bg-[#0d121e] overflow-x-auto">
            <button
              onClick={() => setActiveTool('entropy')}
              className={`flex items-center gap-2 px-6 py-4 font-mono text-xs font-semibold whitespace-nowrap transition-all border-b-2 ${
                activeTool === 'entropy'
                  ? 'border-cyan-500 text-cyan-600 dark:text-cyan-400 bg-white dark:bg-cyan-950/20'
                  : 'border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-200/50 dark:hover:bg-slate-800/40'
              }`}
            >
              <Key className="w-4 h-4" />
              <span>Password Entropy &amp; Crack Estimator</span>
            </button>

            <button
              onClick={() => setActiveTool('hash')}
              className={`flex items-center gap-2 px-6 py-4 font-mono text-xs font-semibold whitespace-nowrap transition-all border-b-2 ${
                activeTool === 'hash'
                  ? 'border-cyan-500 text-cyan-600 dark:text-cyan-400 bg-white dark:bg-cyan-950/20'
                  : 'border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-200/50 dark:hover:bg-slate-800/40'
              }`}
            >
              <Hash className="w-4 h-4" />
              <span>Cryptographic Hash Inspector</span>
            </button>

            <button
              onClick={() => setActiveTool('subnet')}
              className={`flex items-center gap-2 px-6 py-4 font-mono text-xs font-semibold whitespace-nowrap transition-all border-b-2 ${
                activeTool === 'subnet'
                  ? 'border-cyan-500 text-cyan-600 dark:text-cyan-400 bg-white dark:bg-cyan-950/20'
                  : 'border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-200/50 dark:hover:bg-slate-800/40'
              }`}
            >
              <Network className="w-4 h-4" />
              <span>CIDR Subnet &amp; IP Analyzer</span>
            </button>
          </div>

          {/* Tool Container */}
          <div className="p-6 sm:p-8 text-left">
            
            {/* TOOL 1: ENTROPY */}
            {activeTool === 'entropy' && (
              <div className="space-y-6">
                <div>
                  <label className="block text-xs font-mono text-slate-600 dark:text-slate-400 mb-2">
                    INPUT TEST PASSPHRASE:
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter a secret password to audit..."
                      className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-900/90 border border-slate-300 dark:border-slate-700 font-mono text-sm sm:text-base text-slate-900 dark:text-cyan-300 focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(6,182,212,0.25)] transition-all"
                    />
                    <button
                      onClick={() => setPassword("K@li#L!nux_2024$Secure$Hash")}
                      className="absolute right-3 top-1/2 -translate-y-1/2 px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800 text-[11px] font-mono text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border border-slate-300 dark:border-slate-700 transition-colors"
                    >
                      Try Complex
                    </button>
                  </div>
                </div>

                {/* Entropy & Strength Visual Meter */}
                <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/80 space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <span className="text-xs font-mono text-slate-500 dark:text-slate-400 block">INFORMATION ENTROPY</span>
                      <div className="text-2xl sm:text-3xl font-extrabold font-mono text-slate-900 dark:text-white flex items-center gap-2">
                        <span>{entropy}</span>
                        <span className="text-xs text-cyan-600 dark:text-cyan-400 font-normal">bits of entropy</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-mono text-slate-500 dark:text-slate-400 block">SECURITY CLASSIFICATION</span>
                      <span className={`text-sm sm:text-base font-bold font-mono ${strength.color}`}>
                        {strength.label}
                      </span>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full bg-slate-200 dark:bg-slate-800 rounded-full h-2 overflow-hidden">
                    <div
                      className={`h-2 transition-all duration-500 rounded-full ${strength.bg}`}
                      style={{ width: strength.width }}
                    ></div>
                  </div>

                  {/* Checks list */}
                  <div className="flex flex-wrap gap-2 pt-2 text-[11px] font-mono">
                    <span className={`px-2 py-1 rounded border ${passwordStats.length >= 12 ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-600 dark:text-emerald-400' : 'bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-500'}`}>
                      Length: {passwordStats.length} {passwordStats.length >= 12 ? '✓ (>=12)' : '✗ (<12)'}
                    </span>
                    <span className={`px-2 py-1 rounded border ${passwordStats.hasUpper ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-600 dark:text-emerald-400' : 'bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-500'}`}>
                      Uppercase {passwordStats.hasUpper ? '✓' : '✗'}
                    </span>
                    <span className={`px-2 py-1 rounded border ${passwordStats.hasLower ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-600 dark:text-emerald-400' : 'bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-500'}`}>
                      Lowercase {passwordStats.hasLower ? '✓' : '✗'}
                    </span>
                    <span className={`px-2 py-1 rounded border ${passwordStats.hasNumber ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-600 dark:text-emerald-400' : 'bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-500'}`}>
                      Numbers {passwordStats.hasNumber ? '✓' : '✗'}
                    </span>
                    <span className={`px-2 py-1 rounded border ${passwordStats.hasSymbol ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-600 dark:text-emerald-400' : 'bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-500'}`}>
                      Symbols {passwordStats.hasSymbol ? '✓' : '✗'}
                    </span>
                  </div>
                </div>

                {/* Brute-force Scenario Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-left space-y-1.5">
                    <div className="flex items-center gap-2 text-rose-600 dark:text-rose-400 font-mono text-xs font-semibold">
                      <Cpu className="w-4 h-4" />
                      <span>OFFLINE 8x RTX 4090 GPU CLUSTER (100 GH/s)</span>
                    </div>
                    <div className="text-xl font-bold font-mono text-slate-900 dark:text-white">
                      {crackTimeGpu}
                    </div>
                    <p className="text-[11px] text-slate-600 dark:text-slate-400 font-sans">
                      Simulates offline hash cracking using Hashcat against leaked NTLM/MD5 password hashes.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-left space-y-1.5">
                    <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-mono text-xs font-semibold">
                      <Network className="w-4 h-4" />
                      <span>ONLINE RATE-LIMITED ATTACK (100 guesses/s)</span>
                    </div>
                    <div className="text-xl font-bold font-mono text-slate-900 dark:text-white">
                      {crackTimeOnline}
                    </div>
                    <p className="text-[11px] text-slate-600 dark:text-slate-400 font-sans">
                      Simulates web login brute-force across hydra/burp intruder with fail2ban protection.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* TOOL 2: HASH INSPECTOR */}
            {activeTool === 'hash' && (
              <div className="space-y-6">
                <div>
                  <label className="block text-xs font-mono text-slate-600 dark:text-slate-400 mb-2">
                    PLAINTEXT MESSAGE TO DIGEST:
                  </label>
                  <input
                    type="text"
                    value={hashInput}
                    onChange={(e) => setHashInput(e.target.value)}
                    placeholder="Enter string to hash..."
                    className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-900/90 border border-slate-300 dark:border-slate-700 font-mono text-sm text-slate-900 dark:text-cyan-300 focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-400 transition-all"
                  />
                </div>

                {/* Hashes Output List */}
                <div className="space-y-4">
                  {/* SHA-256 */}
                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 space-y-1">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-emerald-600 dark:text-emerald-400 font-semibold">SHA-256 (256-bit Digest / Standard):</span>
                      <button
                        onClick={() => copyToClipboard(sha256Hash, 'sha256')}
                        className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white flex items-center gap-1 transition-colors"
                      >
                        {copiedHash === 'sha256' ? <Check className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copiedHash === 'sha256' ? "Copied" : "Copy"}</span>
                      </button>
                    </div>
                    <div className="font-mono text-xs sm:text-sm text-slate-800 dark:text-slate-200 break-all bg-slate-100 dark:bg-black/40 p-2.5 rounded border border-slate-200 dark:border-slate-800">
                      {sha256Hash || '...'}
                    </div>
                  </div>

                  {/* SHA-1 */}
                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 space-y-1">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-amber-600 dark:text-amber-400 font-semibold">SHA-1 (160-bit Legacy Digest):</span>
                      <button
                        onClick={() => copyToClipboard(sha1Hash, 'sha1')}
                        className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white flex items-center gap-1 transition-colors"
                      >
                        {copiedHash === 'sha1' ? <Check className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copiedHash === 'sha1' ? "Copied" : "Copy"}</span>
                      </button>
                    </div>
                    <div className="font-mono text-xs sm:text-sm text-slate-800 dark:text-slate-300 break-all bg-slate-100 dark:bg-black/40 p-2.5 rounded border border-slate-200 dark:border-slate-800">
                      {sha1Hash || '...'}
                    </div>
                  </div>

                  {/* Base64 */}
                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 space-y-1">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-purple-600 dark:text-purple-400 font-semibold">Base64 Encoding:</span>
                      <button
                        onClick={() => copyToClipboard(base64Encoded, 'base64')}
                        className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white flex items-center gap-1 transition-colors"
                      >
                        {copiedHash === 'base64' ? <Check className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copiedHash === 'base64' ? "Copied" : "Copy"}</span>
                      </button>
                    </div>
                    <div className="font-mono text-xs sm:text-sm text-slate-800 dark:text-slate-300 break-all bg-slate-100 dark:bg-black/40 p-2.5 rounded border border-slate-200 dark:border-slate-800">
                      {base64Encoded || '...'}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TOOL 3: SUBNET CALCULATOR */}
            {activeTool === 'subnet' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-600 dark:text-slate-400 mb-2">
                      HOST IP ADDRESS:
                    </label>
                    <input
                      type="text"
                      value={ipAddress}
                      onChange={(e) => setIpAddress(e.target.value)}
                      placeholder="e.g. 192.168.1.1"
                      className="w-full px-4 py-2.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 font-mono text-sm text-slate-900 dark:text-cyan-300 focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-slate-600 dark:text-slate-400 mb-2">
                      CIDR PREFIX (/{cidrPrefix}):
                    </label>
                    <select
                      value={cidrPrefix}
                      onChange={(e) => setCidrPrefix(Number(e.target.value))}
                      className="w-full px-4 py-2.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 font-mono text-sm text-slate-900 dark:text-cyan-300 focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-400"
                    >
                      {Array.from({ length: 32 }, (_, i) => i + 1).map((p) => (
                        <option key={p} value={p}>
                          /{p} {p === 24 ? '(Class C default 255.255.255.0)' : p === 16 ? '(Class B default)' : p === 8 ? '(Class A default)' : ''}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {subnetResult ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 font-mono text-xs">
                    <div className="p-3.5 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                      <span className="text-slate-500 block mb-1">NETWORK ADDRESS:</span>
                      <span className="text-cyan-700 dark:text-cyan-300 font-bold text-sm">{subnetResult.networkId}</span>
                    </div>
                    <div className="p-3.5 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                      <span className="text-slate-500 block mb-1">SUBNET MASK:</span>
                      <span className="text-emerald-700 dark:text-emerald-300 font-bold text-sm">{subnetResult.netMask}</span>
                    </div>
                    <div className="p-3.5 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                      <span className="text-slate-500 block mb-1">BROADCAST ADDRESS:</span>
                      <span className="text-rose-700 dark:text-rose-300 font-bold text-sm">{subnetResult.broadcast}</span>
                    </div>
                    <div className="p-3.5 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                      <span className="text-slate-500 block mb-1">USABLE HOST RANGE:</span>
                      <span className="text-purple-700 dark:text-purple-300 font-semibold">{subnetResult.usableRange}</span>
                    </div>
                    <div className="p-3.5 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                      <span className="text-slate-500 block mb-1">USABLE HOST COUNT:</span>
                      <span className="text-amber-700 dark:text-yellow-300 font-bold text-sm">{subnetResult.usableHosts.toLocaleString()} hosts</span>
                    </div>
                    <div className="p-3.5 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                      <span className="text-slate-500 block mb-1">ROUTING CLASSIFICATION:</span>
                      <span className="text-slate-700 dark:text-slate-200 font-semibold">{subnetResult.type}</span>
                    </div>
                  </div>
                ) : (
                  <div className="p-4 rounded bg-rose-50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-800 text-rose-600 dark:text-rose-400 font-mono text-xs">
                    Invalid IP address format. Please enter four octets separated by dots (e.g. 192.168.1.10).
                  </div>
                )}
              </div>
            )}

          </div>

          {/* Footer note */}
          <div className="px-6 py-3 bg-slate-100 dark:bg-[#070b13] border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-500">
            <span>Client-side WebCrypto &amp; Bitwise Computation</span>
            <span className="text-cyan-600 dark:text-cyan-400/80">Zero network telemetry sent</span>
          </div>

        </div>

      </div>
    </section>
  );
}
