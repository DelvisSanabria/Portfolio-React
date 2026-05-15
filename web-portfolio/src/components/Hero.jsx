import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const typingLines = [
  { prompt: '>', text: 'initializing portfolio...', delay: 0 },
  { prompt: '>', text: 'loading modules: [react, node, automation]', delay: 800 },
  { prompt: '>', text: 'connecting to marketing APIs...', delay: 1600 },
  { prompt: '>', text: 'workflows: ACTIVE | systems: ONLINE', delay: 2400 },
];

const roleTexts = [
  'Fullstack Developer',
  'Automation Engineer',
  'Marketing Systems Architect',
  'Workflow Specialist',
];

export function Hero() {
  const [currentLine, setCurrentLine] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [roleIndex, setRoleIndex] = useState(0);
  const [roleCharIndex, setRoleCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (currentLine < typingLines.length) {
      const line = typingLines[currentLine];
      const timeout = setTimeout(() => {
        if (displayedText.length < line.text.length) {
          setDisplayedText(line.text.slice(0, displayedText.length + 1));
        } else {
          setTimeout(() => {
            setCurrentLine(prev => prev + 1);
            setDisplayedText('');
          }, 400);
        }
      }, 40);
      return () => clearTimeout(timeout);
    } else {
      setIsTyping(false);
    }
  }, [currentLine, displayedText]);

  useEffect(() => {
    const currentRole = roleTexts[roleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (roleCharIndex < currentRole.length) {
          setRoleCharIndex(prev => prev + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (roleCharIndex > 0) {
          setRoleCharIndex(prev => prev - 1);
        } else {
          setIsDeleting(false);
          setRoleIndex(prev => (prev + 1) % roleTexts.length);
        }
      }
    }, isDeleting ? 50 : 100);
    return () => clearTimeout(timeout);
  }, [roleCharIndex, isDeleting, roleIndex]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-[128px]" />
      </div>

      {/* Corner decorations */}
      <div className="absolute top-20 right-20 font-mono text-[10px] text-[#333] hidden lg:block">
        <div>SYS.COORD: 40.7128 N, 74.0060 W</div>
        <div>SESSION: {Math.random().toString(36).substring(7).toUpperCase()}</div>
        <div>PROTOCOL: HTTPS/2.0</div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Terminal */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <div className="panel-border bg-[#111] p-6">
              {/* Terminal header */}
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#2a2a2a]">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                <span className="font-mono text-[10px] text-[#555] ml-2">terminal — portfolio</span>
              </div>

              {/* Terminal content */}
              <div className="font-mono text-sm space-y-2 min-h-[160px]">
                {typingLines.slice(0, currentLine).map((line, i) => (
                  <div key={i} className="flex gap-2">
                    <span className="text-amber-500">{line.prompt}</span>
                    <span className="text-[#ccc]">{line.text}</span>
                  </div>
                ))}
                {currentLine < typingLines.length && (
                  <div className="flex gap-2">
                    <span className="text-amber-500">{typingLines[currentLine].prompt}</span>
                    <span className="text-[#ccc]">
                      {displayedText}
                      <span className="animate-blink text-amber-500">_</span>
                    </span>
                  </div>
                )}
                {!isTyping && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="pt-4 mt-4 border-t border-[#2a2a2a]"
                  >
                    <div className="flex gap-2">
                      <span className="text-green-500">{`>`}</span>
                      <span className="text-green-400">All systems operational.</span>
                    </div>
                    <div className="flex gap-2 mt-1">
                      <span className="text-green-500">{`>`}</span>
                      <span className="text-[#888]">Ready for input...</span>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Right: Identity */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="order-1 lg:order-2"
          >
            <div className="space-y-6">
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="font-mono text-xs text-amber-500 tracking-[0.3em] mb-3"
                >
                  HELLO WORLD, I AM
                </motion.div>
                <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-white leading-[0.85] tracking-tight">
                  DELVIS
                  <br />
                  <span className="text-amber-500">SANABRIA</span>
                </h1>
              </div>

              <div className="h-8">
                <span className="font-mono text-lg text-[#888]">
                  {roleTexts[roleIndex].slice(0, roleCharIndex)}
                  <span className="animate-blink text-amber-500">|</span>
                </span>
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="text-[#888] text-sm leading-relaxed max-w-md"
              >
                I build intelligent systems that automate marketing workflows, 
                integrate complex APIs, and transform manual processes into 
                scalable, self-running operations.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="flex flex-wrap gap-3 pt-2"
              >
                <button
                  onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                  className="font-mono text-sm px-6 py-3 bg-amber-500 text-[#0a0a0a] hover:bg-amber-400 transition-colors tracking-wider"
                >
                  VIEW PROJECTS
                </button>
                <button
                  onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                  className="font-mono text-sm px-6 py-3 border border-[#2a2a2a] text-[#ccc] hover:border-amber-500/50 hover:text-amber-500 transition-colors tracking-wider"
                >
                  INITIATE CONTACT
                </button>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="font-mono text-[10px] text-[#555] tracking-widest">SCROLL</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-[1px] h-8 bg-gradient-to-b from-amber-500 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
