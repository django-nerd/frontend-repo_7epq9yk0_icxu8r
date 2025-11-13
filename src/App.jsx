import { Megaphone, Search, Palette, Bot, BadgeCheck, Share2, Users } from "lucide-react";
import { motion } from "framer-motion";

const items = [
  { label: "Digital Marketing", Icon: Megaphone },
  { label: "SEO", Icon: Search },
  { label: "Graphic Design", Icon: Palette },
  { label: "AI Automations", Icon: Bot },
  { label: "Branding & Strategy", Icon: BadgeCheck },
  { label: "Social Media", Icon: Share2 },
  { label: "Influencer Marketing", Icon: Users },
];

function FloatingBadge({ label, Icon }) {
  return (
    <div className="backdrop-blur-xl bg-white/10 border border-white/20 text-white px-3 py-2 rounded-full flex items-center gap-2 shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
      <Icon className="w-4 h-4" />
      <span className="text-xs font-medium whitespace-nowrap">{label}</span>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden relative">
      {/* Glow background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-40 h-[50rem] w-[50rem] rounded-full bg-fuchsia-600/20 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-[50rem] w-[50rem] rounded-full bg-sky-500/20 blur-3xl" />
      </div>

      {/* Header */}
      <header className="px-6 sm:px-10 py-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 bg-gradient-to-br from-fuchsia-500 to-sky-500 rounded-full" />
          <span className="font-semibold tracking-tight">Nova Agency</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
          <a className="hover:text-white transition" href="#services">Services</a>
          <a className="hover:text-white transition" href="#work">Work</a>
          <a className="hover:text-white transition" href="#about">About</a>
          <a className="hover:text-white transition" href="#contact">Contact</a>
        </nav>
        <button className="ml-4 rounded-full bg-white text-slate-900 text-sm font-medium px-4 py-2 hover:opacity-90 transition">Get Proposal</button>
      </header>

      {/* Hero */}
      <section className="relative px-6 sm:px-10 pt-6 pb-24 md:pt-20 md:pb-32">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
              Grow faster with a full‑stack creative & growth partner
            </h1>
            <p className="mt-5 text-white/70 text-lg max-w-xl">
              We blend strategy, design, and AI‑powered execution to scale your brand across channels.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button className="rounded-full bg-fuchsia-500 hover:bg-fuchsia-600 text-white font-medium px-6 py-3 transition">Start a project</button>
              <button className="rounded-full border border-white/20 hover:border-white/40 text-white font-medium px-6 py-3 transition">See our work</button>
            </div>
          </div>

          {/* 3D Round with orbiting badges */}
          <div className="relative h-[420px] md:h-[520px]">
            {/* Orbital container rotates to create motion */}
            <motion.div
              className="absolute inset-0"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 28, ease: "linear" }}
            >
              {/* Orbit path visual */}
              <div className="absolute inset-0 rounded-full border border-white/10" />

              {/* Place badges at fixed angles around a circle */}
              {/* Using translate to push elements to orbit radius */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  {/* 7 badges around 360deg */}
                  <div className="absolute -left-1/2 -top-36">
                    <FloatingBadge label="Digital Marketing" Icon={Megaphone} />
                  </div>
                  <div className="absolute left-28 -top-20">
                    <FloatingBadge label="SEO" Icon={Search} />
                  </div>
                  <div className="absolute left-40 top-8">
                    <FloatingBadge label="Graphic Design" Icon={Palette} />
                  </div>
                  <div className="absolute left-24 top-36">
                    <FloatingBadge label="AI Automations" Icon={Bot} />
                  </div>
                  <div className="absolute -left-10 top-44">
                    <FloatingBadge label="Branding & Strategy" Icon={BadgeCheck} />
                  </div>
                  <div className="absolute -left-40 top-24">
                    <FloatingBadge label="Social Media" Icon={Share2} />
                  </div>
                  <div className="absolute -left-44 -top-8">
                    <FloatingBadge label="Influencer Marketing" Icon={Users} />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Central 3D sphere */}
            <motion.div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
            >
              <div className="relative h-64 w-64 md:h-80 md:w-80 rounded-full">
                {/* Core sphere with fake 3D lighting */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-fuchsia-400 via-indigo-500 to-sky-500" />
                <div className="absolute inset-0 rounded-full shadow-[inset_-30px_-40px_80px_rgba(0,0,0,0.35),inset_30px_40px_80px_rgba(255,255,255,0.25)]" />
                {/* Gloss highlight */}
                <div className="absolute -top-6 -left-6 h-40 w-40 rounded-full bg-white/20 blur-2xl" />
                <div className="absolute bottom-10 right-4 h-24 w-24 rounded-full bg-white/10 blur-xl" />
                {/* Ring accents */}
                <div className="absolute -inset-4 rounded-full border border-white/10" />
                <div className="absolute -inset-10 rounded-full border border-white/5" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mini services strip */}
      <section id="services" className="px-6 sm:px-10 pb-16">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {items.map(({ label, Icon }) => (
            <div key={label} className="rounded-2xl border border-white/10 bg-white/5 p-5 flex items-center gap-3 hover:bg-white/10 transition">
              <div className="h-9 w-9 rounded-full bg-gradient-to-br from-fuchsia-500 to-sky-500 flex items-center justify-center">
                <Icon className="w-4 h-4" />
              </div>
              <p className="text-sm text-white/90">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 sm:px-10 py-10 text-center text-white/60 text-sm">
        © {new Date().getFullYear()} Nova Agency. All rights reserved.
      </footer>
    </div>
  );
}
