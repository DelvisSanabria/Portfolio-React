import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const stats = [
  { label: 'Automations Deployed', value: 150, suffix: '+' },
  { label: 'Hours Saved Monthly', value: 2400, suffix: 'h' },
  { label: 'APIs Integrated', value: 45, suffix: '+' },
  { label: 'Client ROI Average', value: 340, suffix: '%' },
];

function AnimatedCounter({ target, suffix }) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.3 }
    );

    const el = document.getElementById(`counter-${target}-${suffix}`);
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, [hasStarted, target, suffix]);

  useEffect(() => {
    if (!hasStarted) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [hasStarted, target]);

  return (
    <span id={`counter-${target}-${suffix}`}>
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export function About() {
  return (
    <section id="about" className="relative py-24 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="font-mono text-xs text-amber-500 tracking-[0.3em] mb-3">
            // 001 — PROFILE
          </div>
          <h2 className="font-display text-5xl sm:text-6xl md:text-7xl text-white tracking-tight">
            ABOUT <span className="text-amber-500">ME</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="panel-border bg-[#111] p-8">
              <p className="text-[#ccc] leading-relaxed text-sm sm:text-base">
                I'm a fullstack developer who found my calling at the intersection of 
                <span className="text-amber-500"> software engineering</span> and 
                <span className="text-cyan-400"> marketing automation</span>. While many 
                developers build features, I build <span className="text-amber-500">systems</span> — 
                interconnected workflows that run autonomously, process data intelligently, and 
                scale businesses without proportional increases in headcount.
              </p>
            </div>

            <div className="panel-border bg-[#111] p-8">
              <p className="text-[#888] leading-relaxed text-sm sm:text-base">
                My approach combines deep technical expertise with a genuine understanding of 
                marketing operations. I don't just connect APIs — I architect data flows that 
                turn chaotic manual processes into elegant, self-correcting automation pipelines. 
                From CRM synchronization to multi-channel campaign orchestration, every system I 
                build is designed to <span className="text-green-400">run without me</span>.
              </p>
            </div>

            {/* Tech philosophy */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: '⚡', title: 'Speed First', desc: 'Rapid prototyping, iterative deployment' },
                { icon: '🔗', title: 'Integration Native', desc: 'Every system talks to every system' },
                { icon: '📊', title: 'Data Driven', desc: 'Decisions backed by real metrics' },
                { icon: '🔄', title: 'Self-Healing', desc: 'Systems that recover from failures' },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-[#111] border border-[#2a2a2a] p-5 hover:border-amber-500/30 transition-colors"
                >
                  <div className="text-xl mb-2">{item.icon}</div>
                  <div className="font-mono text-sm text-white mb-1">{item.title}</div>
                  <div className="font-mono text-xs text-[#666]">{item.desc}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="font-mono text-xs text-[#555] tracking-wider mb-4">
              SYSTEM METRICS
            </div>
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="panel-border bg-[#111] p-5"
              >
                <div className="font-display text-3xl sm:text-4xl text-amber-500 mb-1">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="font-mono text-xs text-[#888] tracking-wider">{stat.label}</div>
              </motion.div>
            ))}

            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="bg-[#111] border border-green-500/30 p-5 mt-6"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="status-dot active" />
                <span className="font-mono text-xs text-green-400 tracking-wider">AVAILABLE</span>
              </div>
              <p className="font-mono text-xs text-[#888]">
                Currently accepting new automation projects and consulting engagements.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
