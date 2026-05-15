import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Automation Engine',
    category: 'Automation',
    description: 'Built a complete order-to-fulfillment automation pipeline connecting Shopify, inventory management, shipping providers, and customer communication channels.',
    challenge: 'Manual order processing was taking 4+ hours daily with frequent errors in inventory updates and customer notifications.',
    solution: 'Designed a multi-step workflow using custom Node.js middleware and Zapier integrations that handles order routing, inventory sync, shipping label generation, and automated customer updates.',
    results: [
      { metric: '95%', label: 'Reduction in processing time' },
      { metric: '4hrs → 12min', label: 'Daily order processing' },
      { metric: '0', label: 'Inventory sync errors' },
    ],
    stack: ['Shopify API', 'Node.js', 'Zapier', 'PostgreSQL', 'SendGrid'],
    image: '📦',
    color: 'amber',
  },
  {
    id: 2,
    title: 'Multi-Channel Marketing Platform',
    category: 'Marketing',
    description: 'Architected a unified marketing automation system orchestrating email, SMS, social media, and paid ads from a single control panel.',
    challenge: 'Marketing team was managing 6 separate platforms with no data synchronization, leading to inconsistent messaging and wasted ad spend.',
    solution: 'Built a custom React dashboard with HubSpot CRM integration, Meta Ads API, Google Ads API, and Twilio SMS — all synchronized through a central data pipeline.',
    results: [
      { metric: '340%', label: 'ROI improvement' },
      { metric: '60%', label: 'Reduction in ad waste' },
      { metric: '3x', label: 'Lead conversion rate' },
    ],
    stack: ['React', 'HubSpot API', 'Meta Ads API', 'Twilio', 'Python'],
    image: '📡',
    color: 'cyan',
  },
  {
    id: 3,
    title: 'CRM Migration & Optimization',
    category: 'Integration',
    description: 'Led the migration from a legacy CRM to HubSpot, including data cleansing, custom pipeline design, and automation of 40+ business processes.',
    challenge: 'Outdated CRM with 50K+ dirty records, no automation, and sales team spending 60% of time on data entry instead of selling.',
    solution: 'Executed phased migration with custom ETL pipeline, designed automated lead scoring and routing, built custom reporting dashboards, and trained the sales team.',
    results: [
      { metric: '50K+', label: 'Records migrated cleanly' },
      { metric: '60% → 15%', label: 'Time spent on data entry' },
      { metric: '45%', label: 'Increase in sales output' },
    ],
    stack: ['HubSpot', 'Python', 'ETL Pipeline', 'BigQuery', 'Looker'],
    image: '🔄',
    color: 'green',
  },
  {
    id: 4,
    title: 'Real-Time Analytics Dashboard',
    category: 'Data',
    description: 'Developed a live analytics platform aggregating data from 12+ marketing channels into unified, actionable dashboards for executive decision-making.',
    challenge: 'Executives needed 3 days to compile weekly reports from disparate sources, making real-time decision-making impossible.',
    solution: 'Built a real-time data pipeline using webhooks, API polling, and streaming architecture with a React frontend featuring customizable widgets and automated report generation.',
    results: [
      { metric: '3 days → 0s', label: 'Report generation time' },
      { metric: '12+', label: 'Data sources unified' },
      { metric: '25%', label: 'Faster decision cycles' },
    ],
    stack: ['Next.js', 'Node.js', 'WebSockets', 'Redis', 'D3.js'],
    image: '📊',
    color: 'amber',
  },
];

const colorMap = {
  amber: { text: 'text-amber-500', border: 'border-amber-500/30', bg: 'bg-amber-500/5', badge: 'bg-amber-500/10 text-amber-500' },
  cyan: { text: 'text-cyan-400', border: 'border-cyan-400/30', bg: 'bg-cyan-400/5', badge: 'bg-cyan-400/10 text-cyan-400' },
  green: { text: 'text-green-400', border: 'border-green-400/30', bg: 'bg-green-400/5', badge: 'bg-green-400/10 text-green-400' },
};

export function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('All');

  const filters = ['All', 'Automation', 'Marketing', 'Integration', 'Data'];
  const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="font-mono text-xs text-amber-500 tracking-[0.3em] mb-3">
            // 004 — CASE STUDIES
          </div>
          <h2 className="font-display text-5xl sm:text-6xl md:text-7xl text-white tracking-tight">
            SELECTED <span className="text-amber-500">WORK</span>
          </h2>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-2 mb-12"
        >
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`font-mono text-xs px-4 py-2 border transition-all duration-200 ${
                filter === f
                  ? 'border-amber-500 text-amber-500 bg-amber-500/5'
                  : 'border-[#2a2a2a] text-[#666] hover:border-[#444]'
              }`}
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* Project cards */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => {
              const colors = colorMap[project.color];
              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setSelectedProject(project)}
                  className={`panel-border bg-[#111] p-8 cursor-pointer transition-all duration-300 hover:${colors.border} group`}
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <span className={`font-mono text-[10px] px-2 py-0.5 ${colors.badge} border ${colors.border}`}>
                        {project.category.toUpperCase()}
                      </span>
                      <h3 className="font-display text-2xl text-white tracking-wide mt-3 group-hover:text-amber-500 transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    <div className="text-3xl opacity-50 group-hover:opacity-100 transition-opacity">
                      {project.image}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-[#888] text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Results preview */}
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    {project.results.map((result, j) => (
                      <div key={j} className="text-center">
                        <div className={`font-display text-xl ${colors.text}`}>{result.metric}</div>
                        <div className="font-mono text-[9px] text-[#666] mt-0.5">{result.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Stack */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#2a2a2a]">
                    {project.stack.slice(0, 4).map((tech, j) => (
                      <span key={j} className="font-mono text-[10px] text-[#666] bg-[#1a1a1a] px-2 py-0.5">
                        {tech}
                      </span>
                    ))}
                    {project.stack.length > 4 && (
                      <span className="font-mono text-[10px] text-[#555]">+{project.stack.length - 4}</span>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Expanded project modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            >
              <motion.div
                layoutId={`project-${selectedProject.id}`}
                onClick={(e) => e.stopPropagation()}
                className="panel-border bg-[#111] max-w-3xl w-full max-h-[90vh] overflow-y-auto p-8"
              >
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <span className={`font-mono text-[10px] px-2 py-0.5 ${colorMap[selectedProject.color].badge} border ${colorMap[selectedProject.color].border}`}>
                      {selectedProject.category.toUpperCase()}
                    </span>
                    <h3 className="font-display text-4xl text-white tracking-wide mt-3">
                      {selectedProject.title}
                    </h3>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="font-mono text-[#666] hover:text-white transition-colors text-xl"
                  >
                    x
                  </button>
                </div>

                <div className="space-y-6">
                  <div>
                    <div className="font-mono text-xs text-amber-500 mb-2">CHALLENGE</div>
                    <p className="text-[#aaa] text-sm leading-relaxed">{selectedProject.challenge}</p>
                  </div>
                  <div>
                    <div className="font-mono text-xs text-cyan-400 mb-2">SOLUTION</div>
                    <p className="text-[#aaa] text-sm leading-relaxed">{selectedProject.solution}</p>
                  </div>
                  <div>
                    <div className="font-mono text-xs text-green-400 mb-3">RESULTS</div>
                    <div className="grid grid-cols-3 gap-4">
                      {selectedProject.results.map((result, j) => (
                        <div key={j} className="panel-border bg-[#0a0a0a] p-4 text-center">
                          <div className={`font-display text-3xl ${colorMap[selectedProject.color].text}`}>
                            {result.metric}
                          </div>
                          <div className="font-mono text-[10px] text-[#888] mt-1">{result.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="font-mono text-xs text-[#555] mb-2">TECH STACK</div>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.stack.map((tech, j) => (
                        <span key={j} className="font-mono text-xs text-[#ccc] bg-[#1a1a1a] border border-[#2a2a2a] px-3 py-1">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
