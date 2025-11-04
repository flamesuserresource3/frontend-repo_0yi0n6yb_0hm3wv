import React from 'react';
import { Code2 } from 'lucide-react';

const projects = [
  {
    title: 'Enterprise Banking Application',
    bullets: [
      'Implemented role-based access control (Spring Security) with admin/user separation.',
      'Built double-entry bookkeeping and EMI calculator with account status workflows.',
      'Designed Angular frontend with sortable history, dashboards, and validation forms.',
      'Containerized MySQL with Docker; schema preloaded with sample data.',
      'Wrote controller/service tests (JUnit, Mockito) achieving 70% coverage.',
      'Documented APIs with Swagger/OpenAPI; delivered Postman collection.',
    ],
    tags: ['Spring Boot', 'Spring Security', 'Angular', 'Docker', 'MySQL'],
  },
  {
    title: 'Smart Financial Advisor (Major Project)',
    bullets: [
      'Built ML-based advisor that evaluates income, expenses, loans, and risk profile.',
      'Recommended diversified portfolios tailored to user goals with explainability.',
      'Applied ML algorithms to optimize allocations and deliver insights.',
      'Conversational interface to capture details and suggest strategies.',
    ],
    tags: ['Python', 'TensorFlow', 'ML', 'NLP'],
  },
  {
    title: 'Real-time Chat Application',
    bullets: [
      'Engineered chat platform with Spring Boot and WebSockets (STOMP).',
      'Low-latency, scalable messaging with secure auth and session management.',
      'Features: group chat, message persistence, typing indicators.',
      'Responsive frontend for real-time interaction with efficient events.',
    ],
    tags: ['Spring Boot', 'WebSockets', 'STOMP', 'Frontend'],
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-14">
      <h2 className="mb-8 font-display text-2xl font-semibold text-white md:text-3xl">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((proj, idx) => (
          <article key={idx} className="group rounded-xl border border-white/10 bg-slate-900/50 p-6 text-slate-200 shadow-lg shadow-slate-950/40">
            <div className="mb-3 flex items-center gap-2 text-white">
              <Code2 className="h-5 w-5 text-teal-300" />
              <h3 className="text-lg font-semibold">{proj.title}</h3>
            </div>
            <ul className="ml-4 list-disc space-y-2 text-sm">
              {proj.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              {proj.tags.map((t) => (
                <span key={t} className="rounded-full border border-teal-400/30 bg-teal-400/10 px-2.5 py-1 text-xs text-teal-200">
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
