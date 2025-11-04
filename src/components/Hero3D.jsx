import React from 'react';
import Spline from '@splinetool/react-spline';
import { Github, Mail, MapPin, Phone, Globe, Rocket } from 'lucide-react';

export default function Hero3D() {
  return (
    <section id="home" className="relative min-h-[80vh] w-full overflow-hidden rounded-2xl bg-slate-900/60">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays that don't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/20 to-slate-950" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-slate-950/70 to-transparent" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 pb-16 pt-24 text-white md:pt-28 lg:pt-36">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur">
          <Rocket className="h-3.5 w-3.5 text-teal-300" />
          <span>Full Stack Developer • AI/ML Enthusiast</span>
        </div>

        <h1 className="font-display text-4xl font-bold leading-tight tracking-tight md:text-6xl">
          Sohan K Shashidhar
        </h1>
        <p className="max-w-2xl text-sm/relaxed text-slate-200 md:text-base">
          Full stack developer crafting robust web apps and ML-driven solutions. I love shipping
          clean, modular systems that scale — from REST APIs and secure backends to responsive,
          interactive frontends.
        </p>

        <div className="mt-2 grid w-full grid-cols-1 gap-3 text-sm text-slate-200 sm:grid-cols-2 lg:w-auto lg:grid-cols-4">
          <div className="flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2 backdrop-blur">
            <MapPin className="h-4 w-4 text-teal-300" />
            <span>Bengaluru, India</span>
          </div>
          <a
            href="mailto:sohan21ks@gmail.com"
            className="flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2 backdrop-blur hover:bg-white/15"
          >
            <Mail className="h-4 w-4 text-teal-300" />
            <span>sohan21ks@gmail.com</span>
          </a>
          <a
            href="tel:+916364162225"
            className="flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2 backdrop-blur hover:bg-white/15"
          >
            <Phone className="h-4 w-4 text-teal-300" />
            <span>+91 63641 62225</span>
          </a>
          <div className="flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2 backdrop-blur">
            <Globe className="h-4 w-4 text-teal-300" />
            <a href="https://sohanshashi.xyz" target="_blank" rel="noreferrer" className="hover:underline">
              sohanshashi.xyz
            </a>
          </div>
        </div>

        <div className="mt-3 flex items-center gap-3">
          <a
            href="https://github.com/sohan2124"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-teal-400 px-4 py-2 font-medium text-slate-900 hover:bg-teal-300"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-4 py-2 font-medium text-white backdrop-blur hover:bg-white/15"
          >
            View Projects
          </a>
        </div>
      </div>
    </section>
  );
}
