import { motion } from 'framer-motion';

const specializations = [
  {
    id: 'workflow',
    icon: '⚙',
    title: 'Workflow Automation',
    color: 'amber',
    description: 'End-to-end automation of repetitive business processes using Zapier, Make, n8n, and custom-built solutions.',
    capabilities: [
      'Multi-step workflow design',
      'Conditional logic & branching',
      'Error handling & retry logic',
      'Scheduled & event-triggered flows',
    ],
    tools: ['Zapier', 'Make', 'n8n', 'Custom Scripts'],
  },
  {
    id: 'crm',
    icon: '◈',
    title: 'CRM & Marketing Stack',
    color: 'cyan',
    description: 'Deep integration and customization of CRM platforms, marketing automation tools, and analytics systems.',
    capabilities: [
      'HubSpot / Salesforce integration',
      'Lead scoring & routing',
      'Email campaign automation',
      'Pipeline optimization',
    ],
    tools: ['HubSpot', 'Salesforce', 'ActiveCampaign', 'Pipedrive'],
  },
  {
    id: 'api',
    icon: '⬡',
    title: 'API Architecture',
    color: 'green',
    description: 'Designing and building custom APIs, webhooks, and middleware that connect disparate systems seamlessly.',
    capabilities: [
      'RESTful API development',
      'Webhook orchestration',
      'Data transformation pipelines',
      'Third-party integrations',
    ],
    tools: ['Node.js', 'Express', 'Python', 'GraphQL'],
  },
  {
    id: 'data',
    icon: '◉',
    title: 'Data & Analytics',
    color: 'amber',
    description: 'Building data pipelines, dashboards, and reporting systems that turn raw data into actionable insights.',
    capabilities: [
      'Real-time dashboards',
      'Cross-platform attribution',
      'Custom reporting engines',
      'Data warehouse design',
    ],
    tools: ['Google Analytics', 'Looker', 'Metabase', 'BigQuery'],
  },
];

const colorMap = {
  amber: { text: 'text-amber-500', border: 'border-amber-500/30', bg: 'bg-amber-500/5', hover: 'hover:border-amber-500/50' },
  cyan: { text: 'text-cyan-400', border: 'border-cyan-400/30', bg: 'bg-cyan-400/5', hover: 'hover:border-cyan-400/50' },
  green: { text: 'text-green-400', border: 'border-green-400/30', bg: 'bg-green-400/5', hover: 'hover:border-green-400/50' },
};

export function Specialization() {
  return (
    <section id="specialization" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="font-mono text-xs text-amber-500 tracking-[0.3em] mb-3">
            // 002 — SPECIALIZATION
          </div>
          <h2 className="font-display text-5xl sm:text-6xl md:text-7xl text-white tracking-tight">
            WHAT I <span className="text-amber-500">DO</span>
          </h2>
          <p className="font-mono text-sm text-[#888] mt-4 max-w-xl">
            Four core pillars of expertise that converge to deliver complete automation solutions.
          </p>
        </motion.div>

        {/* Specialization cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {specializations.map((spec, i) => {
            const colors = colorMap[spec.color];
            return (
              <motion.div
                key={spec.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`panel-border bg-[#111] p-8 transition-all duration-300 ${colors.hover} group`}
              >
                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className={`w-12 h-12 border ${colors.border} ${colors.bg} flex items-center justify-center text-xl`}>
                    {spec.icon}
                  </div>
                  <div>
                    <h3 className={`font-display text-2xl tracking-wide ${colors.text}`}>
                      {spec.title.toUpperCase()}
                    </h3>
                    <p className="font-mono text-xs text-[#666] mt-1">
                      {spec.capabilities.length} core capabilities
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-[#aaa] text-sm leading-relaxed mb-6">
                  {spec.description}
                </p>

                {/* Capabilities */}
                <div className="space-y-2 mb-6">
                  {spec.capabilities.map((cap, j) => (
                    <div key={j} className="flex items-center gap-2 font-mono text-xs text-[#888]">
                      <span className={colors.text}>{`>`}</span>
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>

                {/* Tools */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-[#2a2a2a]">
                  {spec.tools.map((tool, j) => (
                    <span
                      key={j}
                      className={`font-mono text-[10px] px-2 py-1 ${colors.bg} ${colors.text} border ${colors.border}`}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Process flow */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="font-mono text-xs text-[#555] tracking-wider mb-6">MY PROCESS</div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { step: '01', title: 'DISCOVER', desc: 'Audit existing systems & identify automation opportunities' },
              { step: '02', title: 'ARCHITECT', desc: 'Design data flows, API connections, and workflow logic' },
              { step: '03', title: 'DEPLOY', desc: 'Build, test, and launch with monitoring & error handling' },
              { step: '04', title: 'OPTIMIZE', desc: 'Analyze performance, iterate, and scale successful patterns' },
            ].map((item, i) => (
              <div key={item.step} className="relative">
                <div className="font-display text-4xl text-[#222] mb-2">{item.step}</div>
                <div className="font-mono text-sm text-amber-500 mb-1">{item.title}</div>
                <div className="font-mono text-[10px] text-[#666] leading-relaxed">{item.desc}</div>
                {i < 3 && (
                  <div className="hidden md:block absolute top-4 -right-2 text-[#333]">→</div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
