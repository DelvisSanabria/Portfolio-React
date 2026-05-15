import { motion } from 'framer-motion';

const experiences = [
  {
    year: '2024 — Present',
    role: 'Senior Automation Engineer',
    company: 'Freelance / Consulting',
    description: 'Leading end-to-end automation projects for mid-market companies. Specializing in marketing operations, CRM optimization, and custom API integrations.',
    highlights: [
      'Architected 15+ automation systems saving 2000+ hours/month',
      'Built custom marketing dashboards for 8 clients',
      'Average client ROI: 340% within first quarter',
    ],
    status: 'active',
  },
  {
    year: '2022 — 2024',
    role: 'Fullstack Developer & Marketing Technologist',
    company: 'Digital Agency',
    description: 'Developed custom web applications and marketing automation solutions for clients across e-commerce, SaaS, and professional services.',
    highlights: [
      'Led migration of 3 enterprise clients to HubSpot',
      'Built React-based analytics platform used by 12+ clients',
      'Reduced manual reporting time by 90% across all accounts',
    ],
    status: 'completed',
  },
  {
    year: '2020 — 2022',
    role: 'Frontend Developer',
    company: 'Tech Startup',
    description: 'Built responsive web applications with React, focusing on user experience, performance optimization, and integration with backend services.',
    highlights: [
      'Shipped 20+ features for SaaS platform with 10K+ users',
      'Improved page load performance by 60%',
      'Implemented first automation workflows for internal ops',
    ],
    status: 'completed',
  },
  {
    year: '2019 — 2020',
    role: 'Junior Web Developer',
    company: 'Web Studio',
    description: 'Started professional journey building websites and learning the fundamentals of web development, JavaScript, and client communication.',
    highlights: [
      'Delivered 30+ client websites',
      'Self-taught React and Node.js',
      'Discovered passion for automation and systems thinking',
    ],
    status: 'completed',
  },
];

const certifications = [
  { name: 'HubSpot Solutions Partner', year: '2024' },
  { name: 'Zapier Expert Certified', year: '2023' },
  { name: 'Google Analytics Certified', year: '2023' },
  { name: 'Meta Blueprint Certified', year: '2022' },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="font-mono text-xs text-amber-500 tracking-[0.3em] mb-3">
            // 005 — SYSTEM LOG
          </div>
          <h2 className="font-display text-5xl sm:text-6xl md:text-7xl text-white tracking-tight">
            EXPERIENCE <span className="text-amber-500">LOG</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Timeline */}
          <div className="lg:col-span-2 space-y-0">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative pl-8 pb-12 last:pb-0 border-l border-[#2a2a2a]"
              >
                {/* Timeline dot */}
                <div className={`absolute left-[-5px] top-1 w-2.5 h-2.5 rounded-full ${
                  exp.status === 'active' ? 'bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]' : 'bg-[#444]'
                }`} />

                {/* Year */}
                <div className="font-mono text-xs text-amber-500 mb-2">{exp.year}</div>

                {/* Content */}
                <div className="panel-border bg-[#111] p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-display text-xl text-white tracking-wide">{exp.role}</h3>
                      <div className="font-mono text-sm text-[#888]">{exp.company}</div>
                    </div>
                    {exp.status === 'active' && (
                      <span className="font-mono text-[10px] text-green-400 bg-green-400/10 px-2 py-0.5 border border-green-400/30">
                        CURRENT
                      </span>
                    )}
                  </div>

                  <p className="text-[#888] text-sm leading-relaxed mb-4">{exp.description}</p>

                  <div className="space-y-1.5">
                    {exp.highlights.map((highlight, j) => (
                      <div key={j} className="flex items-start gap-2 font-mono text-xs text-[#aaa]">
                        <span className="text-amber-500 mt-0.5">{`>`}</span>
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="font-mono text-xs text-[#555] tracking-wider mb-4">CERTIFICATIONS</div>
              <div className="space-y-3">
                {certifications.map((cert, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="panel-border bg-[#111] p-4 flex items-center justify-between"
                  >
                    <div>
                      <div className="font-mono text-sm text-[#ccc]">{cert.name}</div>
                    </div>
                    <div className="font-mono text-xs text-amber-500">{cert.year}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="font-mono text-xs text-[#555] tracking-wider mb-4">EDUCATION</div>
              <div className="panel-border bg-[#111] p-5">
                <div className="font-mono text-sm text-[#ccc] mb-1">Self-Taught Developer</div>
                <div className="font-mono text-xs text-[#666]">Continuous learning through documentation, courses, and building real-world systems since 2019.</div>
              </div>
            </motion.div>

            {/* Languages */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <div className="font-mono text-xs text-[#555] tracking-wider mb-4">LANGUAGES</div>
              <div className="space-y-2">
                {[
                  { lang: 'Spanish', level: 'Native' },
                  { lang: 'English', level: 'Professional' },
                ].map((l, i) => (
                  <div key={i} className="flex justify-between items-center font-mono text-sm">
                    <span className="text-[#ccc]">{l.lang}</span>
                    <span className="text-[#666] text-xs">{l.level}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
