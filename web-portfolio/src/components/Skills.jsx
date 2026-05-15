import { motion } from 'framer-motion';
import { useState } from 'react';

const skillCategories = [
  {
    name: 'Frontend',
    icon: '</>',
    skills: [
      { name: 'React', level: 95 },
      { name: 'Next.js', level: 88 },
      { name: 'TypeScript', level: 90 },
      { name: 'Tailwind CSS', level: 92 },
      { name: 'Framer Motion', level: 85 },
    ],
  },
  {
    name: 'Backend',
    icon: '{ }',
    skills: [
      { name: 'Node.js', level: 92 },
      { name: 'Express', level: 90 },
      { name: 'Python', level: 82 },
      { name: 'FastAPI', level: 78 },
      { name: 'GraphQL', level: 80 },
    ],
  },
  {
    name: 'Database',
    icon: '[ ]',
    skills: [
      { name: 'PostgreSQL', level: 88 },
      { name: 'MongoDB', level: 85 },
      { name: 'Redis', level: 78 },
      { name: 'Supabase', level: 82 },
    ],
  },
  {
    name: 'Automation',
    icon: '⚙',
    skills: [
      { name: 'Zapier', level: 95 },
      { name: 'Make.com', level: 92 },
      { name: 'n8n', level: 88 },
      { name: 'Webhooks', level: 95 },
      { name: 'Custom Scripts', level: 90 },
    ],
  },
  {
    name: 'Marketing Tech',
    icon: '◈',
    skills: [
      { name: 'HubSpot', level: 92 },
      { name: 'Salesforce', level: 85 },
      { name: 'Google Analytics', level: 90 },
      { name: 'Meta Ads API', level: 82 },
      { name: 'Mailchimp/Klaviyo', level: 88 },
    ],
  },
  {
    name: 'DevOps',
    icon: '▲',
    skills: [
      { name: 'Docker', level: 82 },
      { name: 'AWS', level: 78 },
      { name: 'Vercel', level: 92 },
      { name: 'GitHub Actions', level: 85 },
      { name: 'CI/CD', level: 80 },
    ],
  },
];

const levelColors = {
  95: 'bg-amber-500',
  92: 'bg-amber-500',
  90: 'bg-amber-500',
  88: 'bg-amber-400',
  85: 'bg-amber-400',
  82: 'bg-amber-300',
  80: 'bg-amber-300',
  78: 'bg-amber-300/80',
};

export function Skills() {
  const [activeCategory, setActiveCategory] = useState('Automation');

  return (
    <section id="skills" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="font-mono text-xs text-amber-500 tracking-[0.3em] mb-3">
            // 003 — TECH STACK
          </div>
          <h2 className="font-display text-5xl sm:text-6xl md:text-7xl text-white tracking-tight">
            SKILL <span className="text-amber-500">MATRIX</span>
          </h2>
        </motion.div>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-2 mb-12"
        >
          {skillCategories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(cat.name)}
              className={`font-mono text-xs px-4 py-2 border transition-all duration-200 ${
                activeCategory === cat.name
                  ? 'border-amber-500 text-amber-500 bg-amber-500/5'
                  : 'border-[#2a2a2a] text-[#666] hover:border-[#444] hover:text-[#aaa]'
              }`}
            >
              <span className="mr-1">{cat.icon}</span>
              {cat.name}
            </button>
          ))}
        </motion.div>

        {/* Skills display */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories
            .filter((cat) => activeCategory === cat.name || activeCategory === null)
            .map((category) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="panel-border bg-[#111] p-8"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-display text-2xl text-white tracking-wide">
                    {category.name.toUpperCase()}
                  </h3>
                  <span className="font-mono text-xs text-[#555]">
                    {category.skills.length} technologies
                  </span>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, i) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                    >
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="font-mono text-sm text-[#ccc]">{skill.name}</span>
                        <span className="font-mono text-xs text-amber-500">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 bg-[#1a1a1a] rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full rounded-full ${levelColors[skill.level] || 'bg-amber-500'}`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, delay: i * 0.1 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
        </div>

        {/* Integration ecosystem */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="font-mono text-xs text-[#555] tracking-wider mb-6">
            INTEGRATION ECOSYSTEM
          </div>
          <div className="panel-border bg-[#111] p-8">
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
              {[
                'Stripe', 'Slack', 'Twilio', 'SendGrid', 'Notion',
                'Airtable', 'Shopify', 'WordPress', 'Webflow', 'Calendly',
                'Google Sheets', 'Zoho', 'Intercom', 'Segment', 'Mixpanel',
                'Hotjar',
              ].map((tool, i) => (
                <motion.div
                  key={tool}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.03 }}
                  whileHover={{ scale: 1.05 }}
                  className="font-mono text-[10px] text-[#888] bg-[#1a1a1a] border border-[#2a2a2a] px-3 py-2 text-center hover:border-amber-500/30 hover:text-amber-500 transition-colors cursor-default"
                >
                  {tool}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
