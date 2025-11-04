import React from 'react';
import Hero3D from './components/Hero3D';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsEducationSection from './components/SkillsEducationSection';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <a href="#home" className="font-display text-lg font-semibold tracking-tight">Sohan KS</a>
          <nav className="hidden gap-6 text-sm text-slate-300 md:flex">
            <a href="#experience" className="hover:text-white">Experience</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#skills" className="hover:text-white">Skills & Education</a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl space-y-12 px-3 py-6 md:space-y-16 md:px-6 md:py-10">
        <Hero3D />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsEducationSection />
      </main>

      <footer className="border-t border-white/10 bg-slate-950/70">
        <div className="mx-auto max-w-6xl px-6 py-6 text-center text-sm text-slate-400">
          © {new Date().getFullYear()} Sohan K Shashidhar. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
