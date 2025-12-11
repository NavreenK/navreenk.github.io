import React, { useState, useEffect, useRef } from 'react';
import { Mail, Github, Linkedin, ArrowRight } from 'lucide-react';

const Portfolio = () => {
  const [scrolled, setScrolled] = useState(false);
  const canvasRef = useRef(null);
  const codeCanvasRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animated gradient orbs
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const orbs = [
      { x: canvas.width * 0.3, y: canvas.height * 0.4, vx: 0.5, vy: 0.3, radius: 200, color: 'rgba(16, 185, 129, 0.12)' },
      { x: canvas.width * 0.7, y: canvas.height * 0.6, vx: -0.3, vy: 0.5, radius: 250, color: 'rgba(251, 191, 36, 0.08)' },
      { x: canvas.width * 0.5, y: canvas.height * 0.5, vx: 0.4, vy: -0.4, radius: 180, color: 'rgba(16, 185, 129, 0.1)' }
    ];

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      orbs.forEach(orb => {
        orb.x += orb.vx;
        orb.y += orb.vy;

        if (orb.x < 0 || orb.x > canvas.width) orb.vx *= -1;
        if (orb.y < 0 || orb.y > canvas.height) orb.vy *= -1;

        const gradient = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orb.radius);
        gradient.addColorStop(0, orb.color);
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(orb.x, orb.y, orb.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Matrix-style code rain effect
  useEffect(() => {
    const canvas = codeCanvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const chars = 'const=>function{}[];return</>import(){}.map()filter';
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array(columns).fill(1);

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#10b981';
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 50);
    return () => clearInterval(interval);
  }, []);

  const projects = [
    {
      title: "Pathfinder (T-Mobile)",
      description: "Internal tool used by T-Mobile employees to explore career opportunities within T-Mobile organization",
      tech: ["PowerApps", "SharePoint", "Figma"],
      link: "https://navreenkaur.notion.site/Pathfinder-T-Mobile-293322d2d0da4c34ac2d27ba7ea3be8c?pvs=74",
      visual: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
      icon: "{ }"
    },
    {
      title: "NEO Explorer",
      description: "Data visualization platform for NEO orbits around the Sun",
      tech: ["Python", "Three.js",],
      link: "https://navreenkaur.notion.site/NEO-Explorer-2c6907981abb80e7a213e7910f963851",
      visual: "linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)",
      icon: "[ ]"
    },
    {
      title: "Navi’s Cookbook",
      description: "Mobile-first progressive web application",
      tech: ["React", "JavaScript", "MongoDB"],
      link: "https://navreenkaur.notion.site/Navreen-s-Work-edbb3866c86f44a392b8bb4fb15fbc42?p=100c5da6f87b4f5bbbdf5275a8b58946&pm=c",
      visual: "linear-gradient(135deg, #10b981 0%, #fbbf24 100%)",
      icon: "< />"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
        }`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-light tracking-wider">NK</div>
          <div className="flex gap-8 text-sm">
            <a href="#home" className="hover:text-gray-400 transition-colors">Home</a>
            <a href="#work" className="hover:text-gray-400 transition-colors">Work</a>
            <a href="#about" className="hover:text-gray-400 transition-colors">About</a>
            <a href="#contact" className="hover:text-gray-400 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section with Animated Background */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 z-0"
          style={{ filter: 'blur(60px)' }}
        />

        {/* Geometric shapes */}
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 border-2 border-emerald-500/30 rounded-lg rotate-12 animate-pulse"
            style={{ animationDuration: '3s' }} />
          <div className="absolute bottom-1/3 right-1/4 w-48 h-48 border-2 border-yellow-500/30 rotate-45 animate-pulse"
            style={{ animationDuration: '4s', animationDelay: '1s' }} />
          <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-full animate-pulse"
            style={{ animationDuration: '5s', animationDelay: '2s' }} />
        </div>

        <div className="relative z-10 max-w-6xl w-full">
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 border border-white/20 text-xs tracking-widest mb-4 font-mono">
              AVAILABLE FOR OPPORTUNITIES
            </div>
            <h1 className="text-7xl md:text-9xl font-light tracking-tight leading-none">
              Navreen<br />
              <span className="text-7xl md:text-9xl font-light tracking-tight">
                Kaur
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-2xl font-light">
              Software Engineer & Designer crafting elegant solutions at the intersection of technology and creativity
            </p>
            <div className="flex gap-4 pt-4">
              <a href="#contact" className="px-6 py-3 bg-emerald-500 text-black hover:bg-emerald-400 transition-colors text-sm tracking-wide font-medium">
                Get in touch
              </a>
              <a href="https://navreenkaur.notion.site/navreenkaur/Navreen-s-Work-edbb3866c86f44a392b8bb4fb15fbc42" className="px-6 py-3 border border-white/20 hover:border-emerald-500/50 transition-colors text-sm tracking-wide">
                View Portfolio Archive
              </a>
            </div>
          </div>
        </div>

      </section>

      {/* Work Section with Enhanced Visuals */}
      <section id="work" className="min-h-screen py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-20">
            <div className="text-4xl font-mono text-emerald-500">//</div>
            <h2 className="text-5xl md:text-7xl font-light tracking-tight">Selected Work</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden border border-white/10 hover:border-emerald-500/50 transition-all duration-500 hover:shadow-lg hover:shadow-emerald-500/20 block"
              >
                {/* Visual Header */}
                <div
                  className="h-48 relative flex items-center justify-center"
                  style={{ background: project.visual }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  <div className="relative z-10 text-6xl font-mono text-white/80 group-hover:scale-110 transition-transform duration-500">
                    {project.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4 bg-zinc-950/50">
                  <h3 className="text-2xl font-light group-hover:text-emerald-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs border border-white/20 text-gray-400 font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Code Rain Section */}
      <section className="py-32 px-6 bg-zinc-950 relative overflow-hidden">
        <canvas
          ref={codeCanvasRef}
          className="absolute inset-0 opacity-20"
          style={{ width: '100%', height: '100%' }}
        />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="text-3xl font-mono text-emerald-500 mb-4">console.log()</div>
              <h3 className="text-4xl md:text-5xl font-light tracking-tight">
                Building with<br />
                <span className="text-emerald-400">Modern Tech</span>
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                Creating high-performance systems with cutting-edge technologies.
                From responsive frontends to scalable backend architectures.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="border border-emerald-500/20 p-4 bg-black/40">
                  <div className="text-2xl font-light mb-1 text-emerald-400">500+</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">Commits</div>
                </div>
                <div className="border border-yellow-500/20 p-4 bg-black/40">
                  <div className="text-2xl font-light mb-1 text-yellow-400">10+</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">Projects</div>
                </div>
              </div>
            </div>

            {/* Enhanced Radar Visualization */}
            <div className="relative h-96 flex items-center justify-center">
              <svg viewBox="0 0 400 400" className="w-full h-full">
                <defs>
                  <radialGradient id="radarGlow" cx="50%" cy="50%">
                    <stop offset="0%" style={{ stopColor: '#10b981', stopOpacity: 0.3 }} />
                    <stop offset="100%" style={{ stopColor: '#10b981', stopOpacity: 0 }} />
                  </radialGradient>
                </defs>

                {/* Glowing background */}
                <circle cx="200" cy="200" r="175" fill="url(#radarGlow)" opacity="0.5" />

                {/* Concentric circles */}
                {[1, 2, 3, 4, 5].map((ring) => (
                  <circle
                    key={ring}
                    cx="200"
                    cy="200"
                    r={ring * 35}
                    fill="none"
                    stroke={ring === 3 ? "rgba(16, 185, 129, 0.3)" : "rgba(255,255,255,0.1)"}
                    strokeWidth="1"
                  />
                ))}

                {/* Radial lines */}
                {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
                  <line
                    key={angle}
                    x1="200"
                    y1="200"
                    x2={200 + Math.cos((angle * Math.PI) / 180) * 175}
                    y2={200 + Math.sin((angle * Math.PI) / 180) * 175}
                    stroke="rgba(16, 185, 129, 0.2)"
                    strokeWidth="1"
                  />
                ))}

                {/* Tech stack points */}
                {[
                  { label: 'React', angle: 0, r: 140, color: '#10b981' },
                  { label: 'Python', angle: 45, r: 120, color: '#fbbf24' },
                  { label: 'Node.js', angle: 90, r: 150, color: '#10b981' },
                  { label: 'TS', angle: 135, r: 110, color: '#fbbf24' },
                  { label: 'AWS', angle: 180, r: 130, color: '#10b981' },
                  { label: 'Angular', angle: 225, r: 140, color: '#fbbf24' },
                  { label: 'SQL', angle: 270, r: 120, color: '#10b981' },
                  { label: 'JavaScript', angle: 315, r: 100, color: '#fbbf24' }
                ].map((tech, i) => (
                  <g key={i}>
                    <circle
                      cx={200 + Math.cos((tech.angle * Math.PI) / 180) * tech.r}
                      cy={200 + Math.sin((tech.angle * Math.PI) / 180) * tech.r}
                      r="4"
                      fill={tech.color}
                      className="animate-pulse"
                      style={{ animationDelay: `${i * 0.2}s` }}
                    />
                    <circle
                      cx={200 + Math.cos((tech.angle * Math.PI) / 180) * tech.r}
                      cy={200 + Math.sin((tech.angle * Math.PI) / 180) * tech.r}
                      r="8"
                      fill="none"
                      stroke={tech.color}
                      strokeWidth="1"
                      opacity="0.3"
                    />
                    <text
                      x={200 + Math.cos((tech.angle * Math.PI) / 180) * (tech.r + 20)}
                      y={200 + Math.sin((tech.angle * Math.PI) / 180) * (tech.r + 20)}
                      fill="rgba(255,255,255,0.7)"
                      fontSize="10"
                      textAnchor="middle"
                      className="font-mono"
                    >
                      {tech.label}
                    </text>
                  </g>
                ))}

                {/* Center pulse */}
                <circle cx="200" cy="200" r="4" fill="#10b981">
                  <animate
                    attributeName="r"
                    values="4;8;4"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    values="1;0.3;1"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                </circle>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-20">
            <div className="text-4xl font-mono text-emerald-500">//</div>
            <h2 className="text-5xl md:text-7xl font-light tracking-tight">About</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-6 text-gray-400 text-lg font-light leading-relaxed">
              <p>
                I’m a mission-driven Software Engineer with 6+ years of experience.
                I am passionate about creating intuitive user experiences that clearly communicate complex ideas and leave a lasting impact on users.
                I love combining my knowledge in engineering with my interest for design.
              </p>
              <p>
                With expertise in full-stack development, I specialize in building scalable
                applications that solve real-world problems while maintaining a focus on
                user experience and performance.
              </p>
              <p>
                When I'm not coding, I’m endlessly curious and creative, from writing and photography to exploring how technology can shape human experiences.
                At the core, I care about using software to tell stories, connect people, and make everyday interactions simpler and more meaningful. You can find me exploring new technologies, contributing
                to open-source projects, or sharing knowledge with the developer community.
              </p>
            </div>
            <div className="space-y-8">
              <div className="border-l-2 border-emerald-500 pl-6">
                <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-4 font-mono">Expertise</h3>
                <div className="space-y-2 text-gray-400">
                  <p>Full-Stack Development</p>
                  <p>UI/UX Design</p>
                  <p>Cloud Architecture</p>
                  <p>Data Engineering</p>
                </div>
              </div>
              <div className="border-l-2 border-yellow-500 pl-6">
                <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-4 font-mono">Technologies</h3>
                <div className="space-y-2 text-gray-400 font-mono text-sm">
                  <p>React, Angular, TypeScript, Node.js, Tailwind CSS</p>
                  <p>Python, Java, MongoDB</p>
                  <p>AWS, Docker, Kubernetes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center px-6 bg-zinc-950">
        <div className="max-w-6xl w-full">
          <div className="flex items-center gap-4 mb-12">
            <div className="text-4xl font-mono text-emerald-500">//</div>
            <h2 className="text-5xl md:text-7xl font-light tracking-tight">Let's Connect</h2>
          </div>

          <p className="text-xl text-gray-400 mb-12 max-w-2xl font-light">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <div className="flex flex-col md:flex-row gap-6">
            <a
              href="mailto:navreenkaur1@gmail.com"
              className="flex items-center gap-3 px-6 py-4 border border-white/20 hover:border-emerald-500/50 hover:bg-emerald-500/5 transition-all group"
            >
              <Mail size={20} className="text-emerald-400" />
              <span className="text-lg">navreenkaur1@gmail.com</span>
            </a>
            <a
              href="https://github.com/navreenk"
              className="flex items-center gap-3 px-6 py-4 border border-white/20 hover:border-white/40 hover:bg-white/5 transition-all group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={20} />
              <span className="text-lg">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/navreen-kaur-8b3098a3/"
              className="flex items-center gap-3 px-6 py-4 border border-white/20 hover:border-white/40 hover:bg-white/5 transition-all group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={20} />
              <span className="text-lg">LinkedIn</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500 font-mono">© 2025 Navreen Kaur</p>
          <p className="text-sm text-gray-500 font-mono">&lt;coded with 💚/&gt;</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;