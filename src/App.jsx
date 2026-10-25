import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#07090e] text-slate-800 dark:text-slate-100 font-sans relative selection:bg-cyan-500/30 selection:text-cyan-700 dark:selection:text-cyan-200 transition-colors duration-300">
      
      {/* Background Cyber Grid */}
      <div className="fixed inset-0 bg-grid-pattern pointer-events-none z-0"></div>

      {/* Ambient Radial Lights */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-radial-gradient pointer-events-none -z-10"></div>
      <div className="fixed bottom-0 right-0 w-[500px] h-[500px] bg-radial-secondary pointer-events-none -z-10"></div>

      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}

export default App;
