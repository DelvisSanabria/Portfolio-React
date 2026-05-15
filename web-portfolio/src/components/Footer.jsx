export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-[#2a2a2a] py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="font-display text-3xl text-white tracking-tight mb-2">
              DELVIS<span className="text-amber-500">.</span>
            </div>
            <p className="font-mono text-xs text-[#666] leading-relaxed">
              Fullstack Developer & Automation Engineer.<br />
              Building systems that run themselves.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <div className="font-mono text-xs text-[#555] tracking-wider mb-3">NAVIGATE</div>
            <div className="grid grid-cols-2 gap-2">
              {[
                { label: 'Profile', id: 'about' },
                { label: 'Specialty', id: 'specialization' },
                { label: 'Stack', id: 'skills' },
                { label: 'Works', id: 'projects' },
                { label: 'Log', id: 'experience' },
                { label: 'Signal', id: 'contact' },
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' })}
                  className="font-mono text-xs text-[#888] hover:text-amber-500 transition-colors text-left"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <div className="font-mono text-xs text-[#555] tracking-wider mb-3">CONNECT</div>
            <div className="space-y-2">
              {[
                { label: 'GitHub', url: '#' },
                { label: 'LinkedIn', url: '#' },
                { label: 'Twitter/X', url: '#' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  className="font-mono text-xs text-[#888] hover:text-amber-500 transition-colors block"
                >
                  {social.label} ↗
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-[#2a2a2a] gap-4">
          <div className="font-mono text-[10px] text-[#444]">
            © {currentYear} DELVIS SANABRIA — ALL SYSTEMS OPERATIONAL
          </div>
          <div className="flex items-center gap-2">
            <span className="status-dot active" />
            <span className="font-mono text-[10px] text-green-400">STATUS: ONLINE</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
