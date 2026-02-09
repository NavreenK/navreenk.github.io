import React, { useState, useEffect, useRef } from 'react';
import { Mail, Github, Linkedin, ArrowUpRight } from 'lucide-react';

function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll('.reveal').forEach(child => child.classList.add('visible'));
          observer.unobserve(el);
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

const Portfolio = () => {
  const [scrolled, setScrolled] = useState(false);
  const workRef = useReveal();
  const aboutRef = useReveal();
  const contactRef = useReveal();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: "Pathfinder",
      subtitle: "T-Mobile",
      description: "Internal tool for T-Mobile employees to explore career opportunities. Streamlined career pathway discovery across the organization. Integrated with SharePoint for seamless data management.",
      tech: ["PowerApps", "SharePoint", "Figma"],
      link: "https://navreenkaur.notion.site/Pathfinder-T-Mobile-293322d2d0da4c34ac2d27ba7ea3be8c?pvs=74"
    },
    {
      title: "Literacy Pathways",
      subtitle: "AI + Education",
      description: "AI-powered app analyzing shared reading sessions in real-time. Built mobile-first UI with data visualizations for literacy metrics. Automated progress tracking without manual user input.",
      tech: ["React Native", "JavaScript", "Firebase"],
      link: "https://navreenkaur.notion.site/Literacy-Pathways-2c9907981abb8093bcb1d9e674b937f6"
    },
    {
      title: "NEO Explorer",
      subtitle: "Data Visualization",
      description: "3D visualization of Near-Earth Object orbits around the Sun. Integrated NASA API with orbital mechanics calculations. Interactive scene with 50+ asteroids and accurate trajectories.",
      tech: ["Python", "Three.js", "Flask"],
      link: "https://navreenkaur.notion.site/NEO-Explorer-2c6907981abb80e7a213e7910f963851"
    },
    {
      title: "Distributed RAG Pipeline",
      subtitle: "AI",
      description: "Built a Retrieval-Augmented Generation (RAG) system that transforms a 362-page calculus book into an interactive Q&A tool by extracting text, creating semantic embeddings, and using vector search with Claude AI to answer natural language questions.",
      tech: ["Python", "ChromaDB", "Claude AI"],
      link: "https://navreenkaur.notion.site/Distributed-RAG-Pipeline-2c9907981abb80d89f82de73c04cf836"
    }
  ];

  return (
    <div className="min-h-screen">

      {/* ─── Navigation ─── */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-white/90 backdrop-blur-md' : ''
      }`}>
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 flex justify-between items-center h-20">
          <a href="#home" className="text-[15px] font-medium tracking-[-0.01em] text-[var(--text)]">
            Navreen Kaur
          </a>
          <div className="hidden sm:flex items-center gap-10 text-[13px] text-[var(--text-secondary)]">
            <a href="#work" className="hover:text-[var(--text)] transition-colors duration-300">Work</a>
            <a href="#about" className="hover:text-[var(--text)] transition-colors duration-300">About</a>
            <a href="#contact" className="hover:text-[var(--text)] transition-colors duration-300">Contact</a>
          </div>
        </div>
      </nav>

      {/* ─── Hero ─── */}
      <section id="home" className="pt-36 md:pt-44 pb-20 md:pb-28 px-6 md:px-10">
        <div className="max-w-[1200px] mx-auto">
          <h1 className="hero-reveal hero-delay-1 font-helvetica text-[clamp(3.5rem,9vw,8.5rem)] font-medium leading-[0.92] tracking-[-0.04em] text-[var(--text)]">
            Navreen
            <br />
            Kaur
          </h1>
          <div className="hero-reveal hero-delay-2 mt-12 md:mt-16 flex flex-col md:flex-row gap-6 md:gap-20">
            <p className="text-[12px] uppercase tracking-[0.2em] text-[var(--text-muted)] leading-relaxed md:w-48 shrink-0">
              Software Engineer
              <br />
              &amp; Designer
            </p>
            <p className="text-[var(--text-secondary)] text-lg leading-relaxed max-w-md">
              7+ years crafting scalable applications and intuitive experiences for startups and enterprise teams.
            </p>
          </div>
          <div className="hero-reveal hero-delay-3 mt-10 flex items-center gap-6">
            <a
              href="#work"
              className="text-[13px] font-medium text-[var(--text)] hover:text-[var(--accent)] transition-colors duration-300"
            >
              View work &darr;
            </a>
            <a
              href="https://navreenkaur.notion.site/navreenkaur/Navreen-s-Work-edbb3866c86f44a392b8bb4fb15fbc42"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors duration-300"
            >
              Full portfolio
            </a>
          </div>
        </div>
      </section>

      {/* ─── Work ─── */}
      <section id="work" ref={workRef} className="py-20 md:py-28 px-6 md:px-10 border-t border-[var(--border)]">
        <div className="max-w-[1200px] mx-auto">
          <p className="reveal text-[12px] uppercase tracking-[0.2em] text-[var(--text-muted)] mb-14 md:mb-20">
            Selected Work
          </p>

          <div>
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`reveal reveal-delay-${Math.min(index + 1, 4)} project-row group block border-t border-[var(--border)] py-8 md:py-10 -mx-4 px-4 md:-mx-6 md:px-6 rounded-sm`}
              >
                <div className="grid md:grid-cols-12 gap-3 md:gap-6 items-start">
                  <div className="md:col-span-1 hidden md:block">
                    <span className="text-[13px] text-[var(--text-muted)] tabular-nums">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <div className="md:col-span-4">
                    <h3 className="text-2xl md:text-[1.75rem] font-medium tracking-[-0.02em] group-hover:text-[var(--accent)] transition-colors duration-300 mb-1">
                      {project.title}
                    </h3>
                    <p className="text-[12px] uppercase tracking-[0.15em] text-[var(--text-muted)]">
                      {project.subtitle}
                    </p>
                  </div>
                  <div className="md:col-span-6 mt-2 md:mt-0">
                    <p className="text-[var(--text-secondary)] text-[15px] leading-relaxed mb-3">
                      {project.description}
                    </p>
                    <p className="text-[12px] text-[var(--text-muted)]">
                      {project.tech.join(' · ')}
                    </p>
                  </div>
                  <div className="md:col-span-1 hidden md:flex justify-end items-start pt-1">
                    <ArrowUpRight
                      size={18}
                      className="text-[var(--text-muted)] opacity-0 group-hover:opacity-100 group-hover:text-[var(--accent)] transition-all duration-300"
                    />
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="reveal border-t border-[var(--border)] pt-8">
            <a
              href="https://navreenkaur.notion.site/navreenkaur/Navreen-s-Work-edbb3866c86f44a392b8bb4fb15fbc42"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[13px] text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors duration-300"
            >
              View full portfolio <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* ─── About ─── */}
      <section id="about" ref={aboutRef} className="py-20 md:py-28 px-6 md:px-10 border-t border-[var(--border)]">
        <div className="max-w-[1200px] mx-auto">
          <p className="reveal text-[12px] uppercase tracking-[0.2em] text-[var(--text-muted)] mb-14 md:mb-20">
            About
          </p>

          <div className="grid md:grid-cols-12 gap-12 md:gap-20">
            <div className="reveal reveal-delay-1 md:col-span-7 space-y-6 text-[var(--text-secondary)] text-[16px] leading-[1.8]">
              <p>
                I'm a mission-driven Software Engineer with 6+ years of experience building products for startups and enterprise clients.
                I am passionate about creating intuitive user experiences that clearly communicate complex ideas and leave a lasting impact on users.
                I love combining my knowledge in engineering with my interest for design.
              </p>
              <p>
                When I'm not coding, I'm endlessly curious and creative, from writing and photography to exploring how technology can shape human experiences.
                At the core, I care about using software to tell stories, connect people, and make everyday interactions simpler and more meaningful. You can find me exploring new technologies, contributing
                to open-source projects, or sharing knowledge with the developer community.
              </p>
              <p>
                Currently available for consulting engagements and full-time opportunities. I'm passionate about leveraging technology to solve real problems.
                Let's build something meaningful together.
              </p>
            </div>

            <div className="reveal reveal-delay-2 md:col-span-5 space-y-12">
              <div>
                <h3 className="text-[12px] uppercase tracking-[0.2em] text-[var(--text-muted)] mb-5">Services</h3>
                <ul className="space-y-3 text-[15px] text-[var(--text)]">
                  <li>Full-Stack Development</li>
                  <li>Frontend Engineering</li>
                  <li>UI/UX Design &amp; Prototyping</li>
                  <li>Technical Consulting</li>
                </ul>
              </div>
              <div>
                <h3 className="text-[12px] uppercase tracking-[0.2em] text-[var(--text-muted)] mb-5">Technologies</h3>
                <p className="text-[15px] text-[var(--text-secondary)] leading-relaxed">
                  React · Angular · TypeScript · Node.js · Tailwind CSS · Python · Java · MongoDB · AWS · Docker · Kubernetes
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Contact ─── */}
      <section id="contact" ref={contactRef} className="py-20 md:py-28 px-6 md:px-10 border-t border-[var(--border)]">
        <div className="max-w-[1200px] mx-auto">
          <div className="reveal grid md:grid-cols-12 gap-12 md:gap-20">
            <div className="md:col-span-7">
              <p className="text-[12px] uppercase tracking-[0.2em] text-[var(--text-muted)] mb-8">
                Get in Touch
              </p>
              <h2 className="font-helvetica text-[clamp(2rem,4vw,3.5rem)] font-medium tracking-[-0.03em] leading-[1.1] mb-6">
                Let's build something
                <br />
                great together.
              </h2>
              <p className="text-[var(--text-secondary)] text-[16px] leading-relaxed max-w-md">
                Open to consulting projects, contract work, and full-time opportunities. Whether you're a startup looking to build your MVP or an enterprise team needing additional engineering support, let's discuss how I can help.
              </p>
            </div>
            <div className="reveal reveal-delay-1 md:col-span-5 flex flex-col justify-end space-y-6">
              <div>
                <p className="text-[12px] uppercase tracking-[0.2em] text-[var(--text-muted)] mb-3">Email</p>
                <a
                  href="mailto:navreenkaur1@gmail.com"
                  className="group inline-flex items-center gap-2 text-[16px] text-[var(--text)] hover:text-[var(--accent)] transition-colors duration-300"
                >
                  navreenkaur1@gmail.com
                  <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              </div>
              <div>
                <p className="text-[12px] uppercase tracking-[0.2em] text-[var(--text-muted)] mb-3">Social</p>
                <div className="flex gap-6 text-[15px]">
                  <a
                    href="https://github.com/navreenk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--text)] hover:text-[var(--accent)] transition-colors duration-300"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/navreen-kaur-8b3098a3/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--text)] hover:text-[var(--accent)] transition-colors duration-300"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="py-8 px-6 md:px-10 border-t border-[var(--border)]">
        <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[12px] text-[var(--text-muted)]">
            &copy; 2026 Navreen Kaur
          </p>
          <div className="flex items-center gap-8 text-[12px] text-[var(--text-muted)]">
            <a href="#work" className="hover:text-[var(--text)] transition-colors duration-300">Work</a>
            <a href="#about" className="hover:text-[var(--text)] transition-colors duration-300">About</a>
            <a href="#contact" className="hover:text-[var(--text)] transition-colors duration-300">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
