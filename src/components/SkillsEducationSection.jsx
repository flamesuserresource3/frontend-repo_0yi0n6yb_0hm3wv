import React from 'react';
import { Brain, Database, Wrench, GraduationCap, School, Award, Github, Globe, Mail } from 'lucide-react';

export default function SkillsEducationSection() {
  return (
    <section id="skills" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-14">
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="mb-4 font-display text-2xl font-semibold text-white md:text-3xl">Skills</h2>
          <div className="space-y-4">
            <div className="rounded-xl border border-white/10 bg-slate-900/50 p-5 text-slate-200">
              <div className="mb-2 flex items-center gap-2 text-white">
                <Brain className="h-5 w-5 text-teal-300" />
                <h3 className="font-semibold">Programming</h3>
              </div>
              <p className="text-sm">Java, Python, SQL, TypeScript</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-slate-900/50 p-5 text-slate-200">
              <div className="mb-2 flex items-center gap-2 text-white">
                <Wrench className="h-5 w-5 text-teal-300" />
                <h3 className="font-semibold">Frameworks & APIs</h3>
              </div>
              <p className="text-sm">Spring Boot, Spring Security, REST APIs, Angular, WebSockets</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-slate-900/50 p-5 text-slate-200">
              <div className="mb-2 flex items-center gap-2 text-white">
                <Database className="h-5 w-5 text-teal-300" />
                <h3 className="font-semibold">Databases</h3>
              </div>
              <p className="text-sm">MySQL, H2, PostgreSQL, Dockerized setups</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-slate-900/50 p-5 text-slate-200">
              <div className="mb-2 flex items-center gap-2 text-white">
                <Wrench className="h-5 w-5 text-teal-300" />
                <h3 className="font-semibold">Concepts & Tools</h3>
              </div>
              <p className="text-sm">Data Structures, Algorithms, Machine Learning, OOP, Agile/Scrum, Git, JUnit, Mockito, Swagger/OpenAPI, Postman</p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-slate-300">
            <a href="https://github.com/sohan2124" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 hover:bg-white/10">
              <Github className="h-4 w-4 text-teal-300" /> GitHub
            </a>
            <a href="https://sohanshashi.xyz" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 hover:bg-white/10">
              <Globe className="h-4 w-4 text-teal-300" /> Portfolio
            </a>
            <a href="mailto:sohan21ks@gmail.com" className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 hover:bg-white/10">
              <Mail className="h-4 w-4 text-teal-300" /> Email
            </a>
          </div>
        </div>

        <div>
          <h2 className="mb-4 font-display text-2xl font-semibold text-white md:text-3xl">Education & Certifications</h2>
          <div className="space-y-4">
            <div className="rounded-xl border border-white/10 bg-slate-900/50 p-5 text-slate-200">
              <div className="mb-1 flex items-center gap-2 text-white">
                <GraduationCap className="h-5 w-5 text-teal-300" />
                <h3 className="font-semibold">Sir M. Visvesvaraya Institute of Technology, Bengaluru</h3>
              </div>
              <p className="text-sm">B.E. in Information Science and Engineering, GPA: 8/10 (2022–2026)</p>
              <p className="mt-2 text-xs text-slate-400">Relevant Coursework: Data Structures, Machine Learning, Operating Systems, DBMS, Web Technologies, Computer Networks</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-slate-900/50 p-5 text-slate-200">
              <div className="mb-1 flex items-center gap-2 text-white">
                <School className="h-5 w-5 text-teal-300" />
                <h3 className="font-semibold">Deeksha PU College, Bengaluru</h3>
              </div>
              <p className="text-sm">Pre-University (Boards: 75%) — 2020–2022</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-slate-900/50 p-5 text-slate-200">
              <div className="mb-1 flex items-center gap-2 text-white">
                <School className="h-5 w-5 text-teal-300" />
                <h3 className="font-semibold">MES Kishore Kendra Public School, Bengaluru</h3>
              </div>
              <p className="text-sm">ICSE Boards: 90.4% — 2020</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-slate-900/50 p-5 text-slate-200">
              <div className="mb-1 flex items-center gap-2 text-white">
                <Award className="h-5 w-5 text-teal-300" />
                <h3 className="font-semibold">Certifications</h3>
              </div>
              <ul className="ml-4 list-disc space-y-1 text-sm">
                <li>Linux Fundamentals (Udemy)</li>
                <li>Python Programming (Udemy)</li>
                <li>Full Stack Web Development (Angela Yu, Udemy)</li>
                <li>Java Bootcamp (Udemy)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
