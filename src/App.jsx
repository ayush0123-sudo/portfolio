import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  Terminal, 
  Mail, 
  Github, 
  Linkedin, 
  ExternalLink, 
  ChevronRight, 
  Menu, 
  X,
  Server,
  Search,
  AlertTriangle,
  Cpu,
  Database,
  Briefcase,
  GraduationCap,
  Target,
  Globe
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Summary', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const skillCategories = [
    {
      title: "SIEM & Monitoring",
      skills: ["Splunk (L1/L2)", "Microsoft Sentinel", "Google Chronicle", "Log Correlation", "SPL/KQL Queries"]
    },
    {
      title: "Threat Defense",
      skills: ["Incident Response", "EDR / IDS / IPS", "Firewalls", "Malware Analysis", "MITRE ATT&CK Framework"]
    },
    {
      title: "Analysis & Tools",
      skills: ["Wireshark", "Nmap", "Vulnerability Management", "OWASP/NIST", "Python/Bash Scripting"]
    }
  ];

  const experiences = [
    {
      role: "Cyber Security And Ethical Hacker",
      company: "Cod tech IT Solutions",
      period: "04/2025 - 06/2025",
      points: [
        "Performed alert triage using Splunk and Google Chronicle.",
        "Conducted vulnerability assessments aligned with OWASP and NIST.",
        "Performed static and dynamic malware analysis and prepared investigation reports."
      ]
    },
    {
      role: "Soc Analyst",
      company: "Wipro",
      period: "06/2022 - 01/2024",
      points: [
        "Monitored and investigated security alerts using Splunk and Microsoft Sentinel.",
        "Created and optimized SPL and KQL queries for deep-dive log analysis.",
        "Performed L1/L2 triage, incident investigation, and coordinated containment.",
        "Developed Python/Bash scripts for alert automation."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 selection:bg-cyan-500/30 font-sans">
      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800 py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="p-2 bg-cyan-500/10 rounded-lg border border-cyan-500/20">
              <Shield className="w-6 h-6 text-cyan-400" />
            </div>
            <span className="text-xl font-bold tracking-tight">
              AYUSH<span className="text-cyan-400">UNIYAL</span>
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-sm font-medium text-slate-400 hover:text-cyan-400 transition-colors uppercase tracking-wider">
                {link.name}
              </a>
            ))}
            <a href="mailto:ayushuniyal6737@gmail.com" className="px-5 py-2 rounded-lg border border-cyan-500/30 text-cyan-400 font-semibold text-sm hover:bg-cyan-500/10 transition-all">
              Contact Me
            </a>
          </div>

          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-950 border-b border-slate-800 p-6 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-slate-400 hover:text-cyan-400 transition-colors uppercase tracking-wider text-sm" onClick={() => setIsMenuOpen(false)}>
                {link.name}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-44 pb-24 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span>SOC ANALYST • 1.7 YEARS EXP</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tight">
            I Hunt <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Threats</span>.
          </h1>
          
          <p className="text-xl text-slate-400 mb-10 leading-relaxed max-w-2xl font-light">
            Cyber Security Analyst specializing in 24×7 SOC operations. 
            Expert in <span className="text-white font-medium">Splunk</span> and <span className="text-white font-medium">Microsoft Sentinel</span> for real-time threat monitoring and incident response.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="px-8 py-4 rounded-xl bg-cyan-500 text-slate-950 font-bold hover:bg-cyan-400 transition-all flex items-center space-x-2">
              <span>View Projects</span>
              <ChevronRight className="w-5 h-5" />
            </a>
            <div className="flex items-center space-x-4 ml-4">
              <a href="https://linkedin.com/in/ayush-uniyal-27858b200/" className="p-3 rounded-full border border-slate-800 hover:border-cyan-500 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://tryhackme.com/p/ayushuniyal6737" className="p-3 rounded-full border border-slate-800 hover:border-cyan-500 transition-colors">
                <Target className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-16 flex items-center gap-4">
            <Briefcase className="text-cyan-400" /> Professional Experience
          </h2>
          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <div key={i} className="relative pl-8 border-l border-slate-800">
                <div className="absolute top-0 -left-[5px] w-2.5 h-2.5 rounded-full bg-cyan-500 shadow-[0_0_10px_#22d3ee]"></div>
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                    <p className="text-cyan-400 font-medium">{exp.company}</p>
                  </div>
                  <span className="text-slate-500 font-mono text-sm bg-slate-900 px-3 py-1 rounded-full border border-slate-800 mt-2 md:mt-0 self-start">
                    {exp.period}
                  </span>
                </div>
                <ul className="space-y-3">
                  {exp.points.map((p, j) => (
                    <li key={j} className="text-slate-400 text-sm flex items-start">
                      <ChevronRight className="w-4 h-4 text-cyan-500 mr-2 flex-shrink-0 mt-0.5" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Arsenal Section */}
      <section id="skills" className="py-24 bg-slate-900/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
                <Cpu className="text-cyan-400" /> Technical Arsenal
              </h2>
              <div className="grid gap-6">
                {skillCategories.map((cat, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800">
                    <h3 className="text-slate-300 font-bold mb-4 flex items-center gap-2">
                      <Database className="w-4 h-4 text-cyan-400" /> {cat.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {cat.skills.map((s, j) => (
                        <span key={j} className="px-3 py-1 rounded-lg bg-slate-800 text-slate-400 text-xs border border-slate-700">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative pt-12">
              <div className="rounded-2xl overflow-hidden border border-slate-800 bg-[#0a0f1e] p-6 shadow-2xl font-mono text-sm leading-relaxed">
                <div className="flex items-center space-x-2 mb-6 border-b border-slate-800 pb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/50"></div>
                  <span className="text-[10px] text-slate-500 ml-2 uppercase tracking-widest">SOC-Terminal</span>
                </div>
                <div className="space-y-4">
                  <p className="text-emerald-400">$ whoami</p>
                  <p className="text-slate-300">Ayush Uniyal. Cyber Security Analyst based in Dehradun. Skilled in incident triage & log correlation (Firewalls, EDR, Proxy).</p>
                  
                  <p className="text-emerald-400">$ cat education.txt</p>
                  <div className="text-slate-400 space-y-2">
                    <p>• Masters in Computer Application (Graphic Era Hill University)</p>
                    <p>• Masters in Cyber Security (Brillica Services)</p>
                    <p>• B.Sc in Information Technology (ITM Dehradun)</p>
                  </div>
                  
                  <p className="text-emerald-400">$ splunk --search "index=security | stats count by severity"</p>
                  <p className="text-cyan-400">Critical: 0 | High: 2 | Medium: 12</p>
                  
                  <p className="text-emerald-400 animate-pulse">$ _</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4 flex items-center gap-4">
              <Terminal className="text-cyan-400" /> Lab Simulations
            </h2>
            <p className="text-slate-400">Hands-on practice on TryHackMe and Google Chronicle labs.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-cyan-500/40 transition-all group">
              <div className="mb-6 p-3 bg-cyan-500/10 rounded-xl w-fit group-hover:bg-cyan-500/20 transition-colors">
                <Target className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">TryHackMe Labs</h3>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                Completed labs in SIEM/Google Chronicle-style alert analysis. Practiced reconnaissance and brute-force detection.
              </p>
              <div className="text-xs font-mono text-cyan-400">MITRE ATT&CK Mapping</div>
            </div>
            
            <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-emerald-500/40 transition-all group">
              <div className="mb-6 p-3 bg-emerald-500/10 rounded-xl w-fit">
                <Search className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Threat Investigation</h3>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                Investigated system misconfigurations and privilege escalation indicators. Prepared structured forensic reports.
              </p>
              <div className="text-xs font-mono text-emerald-400">Log Analysis</div>
            </div>

            <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-blue-500/40 transition-all group">
              <div className="mb-6 p-3 bg-blue-500/10 rounded-xl w-fit">
                <Server className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Automation Scripts</h3>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                Developed Python and Bash scripts at Wipro for alert automation and maintaining SOC documentation.
              </p>
              <div className="text-xs font-mono text-blue-400">Python / Bash</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 border-t border-slate-900 bg-slate-950">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white tracking-tight">Let's Secure the Future</h2>
          <p className="text-slate-400 mb-12 max-w-lg mx-auto">Available for SOC Analyst roles and Incident Response projects.</p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <a href="mailto:ayushuniyal6737@gmail.com" className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-cyan-500 transition-all group">
              <Mail className="w-6 h-6 text-cyan-400 mx-auto mb-4" />
              <div className="text-sm text-slate-300">ayushuniyal6737@gmail.com</div>
            </a>
            <a href="https://linkedin.com/in/ayush-uniyal-27858b200/" className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-cyan-500 transition-all group">
              <Linkedin className="w-6 h-6 text-cyan-400 mx-auto mb-4" />
              <div className="text-sm text-slate-300">Ayush Uniyal</div>
            </a>
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 group">
              <Globe className="w-6 h-6 text-cyan-400 mx-auto mb-4" />
              <div className="text-sm text-slate-300">Dehradun, India</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-900 text-center">
        <p className="text-slate-500 text-xs uppercase tracking-widest">
          © 2024 Ayush Uniyal • SOC Analyst • Professional Portfolio
        </p>
      </footer>
    </div>
  );
};

export default App;
