import { motion } from 'framer-motion';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    projectType: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', company: '', message: '', projectType: '' });
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const contactMethods = [
    { icon: '📧', label: 'Email', value: 'hello@delvissanabria.dev', action: 'mailto:hello@delvissanabria.dev' },
    { icon: '💬', label: 'LinkedIn', value: '/in/delvissanabria', action: '#' },
    { icon: '🐙', label: 'GitHub', value: '@delvissanabria', action: '#' },
    { icon: '📍', label: 'Location', value: 'Remote / Worldwide', action: null },
  ];

  return (
    <section id="contact" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="font-mono text-xs text-amber-500 tracking-[0.3em] mb-3">
            // 006 — INITIATE CONTACT
          </div>
          <h2 className="font-display text-5xl sm:text-6xl md:text-7xl text-white tracking-tight">
            SEND <span className="text-amber-500">SIGNAL</span>
          </h2>
          <p className="font-mono text-sm text-[#888] mt-4 max-w-xl">
            Have a project in mind? Let's discuss how automation can transform your operations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="panel-border bg-[#111] p-8">
              {/* Terminal header */}
              <div className="flex items-center gap-2 mb-6 pb-3 border-b border-[#2a2a2a]">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                <span className="font-mono text-[10px] text-[#555] ml-2">contact_form.sh</span>
              </div>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center"
                >
                  <div className="text-4xl mb-4">✓</div>
                  <div className="font-mono text-green-400 text-lg mb-2">TRANSMISSION RECEIVED</div>
                  <div className="font-mono text-[#888] text-sm">
                    Message sent successfully. I'll respond within 24 hours.
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="font-mono text-xs text-[#666] mb-1.5 block tracking-wider">NAME *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="w-full font-mono text-sm bg-[#0a0a0a] border border-[#2a2a2a] text-[#ccc] px-4 py-3 focus:outline-none focus:border-amber-500/50 transition-colors placeholder:text-[#444]"
                      />
                    </div>
                    <div>
                      <label className="font-mono text-xs text-[#666] mb-1.5 block tracking-wider">EMAIL *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@company.com"
                        className="w-full font-mono text-sm bg-[#0a0a0a] border border-[#2a2a2a] text-[#ccc] px-4 py-3 focus:outline-none focus:border-amber-500/50 transition-colors placeholder:text-[#444]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="font-mono text-xs text-[#666] mb-1.5 block tracking-wider">COMPANY</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Company Inc."
                        className="w-full font-mono text-sm bg-[#0a0a0a] border border-[#2a2a2a] text-[#ccc] px-4 py-3 focus:outline-none focus:border-amber-500/50 transition-colors placeholder:text-[#444]"
                      />
                    </div>
                    <div>
                      <label className="font-mono text-xs text-[#666] mb-1.5 block tracking-wider">PROJECT TYPE</label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full font-mono text-sm bg-[#0a0a0a] border border-[#2a2a2a] text-[#ccc] px-4 py-3 focus:outline-none focus:border-amber-500/50 transition-colors appearance-none"
                      >
                        <option value="">Select type...</option>
                        <option value="automation">Workflow Automation</option>
                        <option value="crm">CRM Integration</option>
                        <option value="marketing">Marketing Platform</option>
                        <option value="analytics">Analytics Dashboard</option>
                        <option value="consulting">Consulting</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="font-mono text-xs text-[#666] mb-1.5 block tracking-wider">MESSAGE *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      placeholder="Describe your project, challenges, and goals..."
                      className="w-full font-mono text-sm bg-[#0a0a0a] border border-[#2a2a2a] text-[#ccc] px-4 py-3 focus:outline-none focus:border-amber-500/50 transition-colors resize-none placeholder:text-[#444]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="font-mono text-sm px-8 py-3 bg-amber-500 text-[#0a0a0a] hover:bg-amber-400 transition-colors tracking-wider disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto"
                  >
                    {isSubmitting ? 'TRANSMITTING...' : 'TRANSMIT MESSAGE →'}
                  </button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Contact methods */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="font-mono text-xs text-[#555] tracking-wider mb-4">DIRECT CHANNELS</div>
            {contactMethods.map((method, i) => (
              <motion.a
                key={i}
                href={method.action || undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`panel-border bg-[#111] p-5 block transition-all duration-200 hover:border-amber-500/30 ${method.action ? 'cursor-pointer' : 'cursor-default'}`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-lg">{method.icon}</span>
                  <div>
                    <div className="font-mono text-xs text-[#666]">{method.label}</div>
                    <div className="font-mono text-sm text-[#ccc]">{method.value}</div>
                  </div>
                </div>
              </motion.a>
            ))}

            {/* Response time */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="panel-border bg-[#111] p-5 mt-6"
            >
              <div className="font-mono text-xs text-[#555] mb-2">RESPONSE TIME</div>
              <div className="font-display text-2xl text-amber-500">&lt; 24h</div>
              <div className="font-mono text-xs text-[#888] mt-1">
                Average response time for new inquiries
              </div>
            </motion.div>

            {/* Calendly CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="bg-[#111] border border-amber-500/30 p-5"
            >
              <div className="font-mono text-xs text-amber-500 mb-2">PREFER A CALL?</div>
              <p className="font-mono text-xs text-[#888] mb-3">
                Book a free 30-minute discovery call to discuss your automation needs.
              </p>
              <button className="font-mono text-xs px-4 py-2 bg-amber-500/10 text-amber-500 border border-amber-500/30 hover:bg-amber-500/20 transition-colors">
                SCHEDULE CALL →
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
