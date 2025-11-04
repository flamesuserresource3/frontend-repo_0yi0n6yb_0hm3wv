import React from 'react';
import { Building2, Calendar } from 'lucide-react';

const experiences = [
  {
    role: 'Full Stack Developer Intern',
    company: 'Credokey Softech Pvt. Ltd.',
    period: 'Summer 2024',
    bullets: [
      'Contributed to ERP system for professional colleges using Spring Boot and Angular.',
      'Implemented RESTful APIs, participated in Agile sprints, and collaborated with cross-functional teams.',
      'Delivered modular frontend components ensuring seamless integration with backend services.',
    ],
  },
  {
    role: 'Freelance Developer (AI/ML)',
    company: 'Self-employed',
    period: '2024',
    bullets: [
      'Designed ensemble neural networks (CNN, GRU, LSTM) for financial time-series prediction.',
      'Integrated live NSE trading data via GlobalDataFeeds API and executed paper trading with Interactive Brokers.',
      'Built pipelines for preprocessing and evaluation using TensorFlow and Python.',
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-14">
      <h2 className="mb-8 font-display text-2xl font-semibold text-white md:text-3xl">Experience</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {experiences.map((exp, idx) => (
          <div key={idx} className="rounded-xl border border-white/10 bg-slate-900/50 p-6 text-slate-200 shadow-lg shadow-slate-950/40">
            <div className="mb-3 flex items-center justify-between">
              <div className="flex items-center gap-2 text-white">
                <Building2 className="h-5 w-5 text-teal-300" />
                <span className="font-medium">{exp.company}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Calendar className="h-4 w-4 text-teal-300" />
                <span className="text-sm">{exp.period}</span>
              </div>
            </div>
            <h3 className="mb-3 text-lg font-semibold text-white">{exp.role}</h3>
            <ul className="ml-4 list-disc space-y-2 text-sm">
              {exp.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
