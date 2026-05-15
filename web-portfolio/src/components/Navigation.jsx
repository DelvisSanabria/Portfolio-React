import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const sections = [
  { id: 'hero', label: 'INIT', icon: '>' },
  { id: 'about', label: 'PROFILE', icon: '#' },
  { id: 'specialization', label: 'SPECIALTY', icon: '*' },
  { id: 'skills', label: 'STACK', icon: '+' },
  { id: 'projects', label: 'WORKS', icon: '$' },
  { id: 'experience', label: 'LOG', icon: '~' },
  { id: 'contact', label: 'SIGNAL', icon: '@' },
];

export function Navigation() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isOpen, setIsOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);

      const sectionIds = sections.map(s => s.id);
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 z-[100] h-[2px] bg-[#1a1a1a]">
        <motion.div
          className="h-full bg-amber-500"
          style={{ width: `${scrollProgress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      {/* Toggle button */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 left-6 z-[90] w-10 h-10 border border-[#2a2a2a] bg-[#0a0a0a]/90 backdrop-blur-sm flex items-center justify-center font-mono text-amber-500 text-sm hover:border-amber-500/50 transition-colors"
      >
        {isOpen ? 'x' : '///'}
      </motion.button>

      {/* Side panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed top-0 left-0 bottom-0 w-72 bg-[#0a0a0a]/95 backdrop-blur-md border-r border-[#2a2a2a] z-[80] pt-16 px-6"
          >
            <div className="font-mono text-xs text-[#888] mb-8 tracking-wider">
              <span className="text-amber-500">sys</span>::nav_panel v2.0
            </div>

            <nav className="space-y-1">
              {sections.map((section, i) => (
                <motion.button
                  key={section.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                  onClick={() => scrollTo(section.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 font-mono text-sm tracking-wider transition-all duration-200 group ${
                    activeSection === section.id
                      ? 'text-amber-500 bg-amber-500/5'
                      : 'text-[#888] hover:text-[#ccc] hover:bg-[#1a1a1a]'
                  }`}
                >
                  <span className="text-xs opacity-50">{section.icon}</span>
                  <span className="flex-1 text-left">{section.label}</span>
                  {activeSection === section.id && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="w-1.5 h-1.5 bg-amber-500 rounded-full"
                    />
                  )}
                </motion.button>
              ))}
            </nav>

            <div className="absolute bottom-8 left-6 right-6">
              <div className="font-mono text-[10px] text-[#555] space-y-1">
                <div>STATUS: <span className="text-green-500">ONLINE</span></div>
                <div>LATENCY: 12ms</div>
                <div>UPTIME: 99.9%</div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/50 z-[70]"
          />
        )}
      </AnimatePresence>
    </>
  );
}
