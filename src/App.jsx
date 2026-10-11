import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Routes, Route, Link, useParams, useNavigate, useLocation } from 'react-router-dom';
import { portfolioData } from './store';
import { getProjectBlocks } from './projectBlocks';

function ProgressiveImage({ src, alt, className = '', imgClassName = '', style = {}, imgStyle = {}, priority = false, ...props }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`img-skeleton-container ${className}`} style={style}>
      {!loaded && <div className="skeleton-placeholder" />}
      <img
        src={src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        fetchPriority={priority ? 'high' : 'auto'}
        onLoad={() => setLoaded(true)}
        className={`progressive-img ${loaded ? 'is-loaded' : 'is-loading'} ${imgClassName}`}
        style={imgStyle}
        {...props}
      />
    </div>
  );
}

function ContactSection({ data }) {
  return (
    <section id="contact" className="pad">
      <span className="lb">Get in touch</span>
      <h2 className="cta">Let’s create<br /><em>something beautiful.</em></h2>
      <div className="cg">
        <div>
          <input placeholder="Your name" />
          <textarea rows="3" placeholder="Tell me about your project"></textarea>
          <button className="go">Send message</button>
        </div>
        <div>
          <h3 style={{ fontFamily: 'var(--serif)', fontSize: '2rem', marginBottom: '20px' }}>{data.name}</h3>
          <div className="social-links">
            <a href={`mailto:${data.email}`}>{data.email}</a>
            <a href={data.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={data.instagram} target="_blank" rel="noreferrer">Instagram</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Home({ data }) {
  const [currentProj, setCurrentProj] = useState(() => {
    const saved = sessionStorage.getItem('active_project_index');
    return saved !== null && !isNaN(Number(saved)) ? Number(saved) : 0;
  });

  const selectProject = (idx) => {
    setCurrentProj(idx);
    sessionStorage.setItem('active_project_index', idx);
  };

  const [openService, setOpenService] = useState(0);
  const { scrollY } = useScroll();
  const yHero = useTransform(scrollY, [0, 1000], [0, 300]);

  const projects = data.projects;

  const services = [
    { title: 'Web Design', desc: 'Custom, fully responsive websites crafted with precision — from concept and layout to polished interaction.' },
    { title: 'UI / UX Design', desc: 'Intuitive interfaces and flows, grounded in research and refined through testing.' },
    { title: 'Brand Experience', desc: 'Visual systems that tell your story consistently across every touchpoint.' },
    { title: 'Design Strategy', desc: 'From first idea to measurable impact: positioning, structure and roadmap.' }
  ];

  const skills = [
    { name: 'Figma', val: 96 },
    { name: 'Framer', val: 90 },
    { name: 'Webflow', val: 78 },
    { name: 'Motion', val: 84 },
    { name: 'HTML / CSS', val: 88 },
    { name: 'Blender 3D', val: 68 }
  ];

  return (
    <>
      <header>
        <Link className="lg" to="/">GT</Link>
        <nav>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="hero" className="new-hero">
        <motion.div
          style={{ y: yHero }}
          className="hero-bg"
        >
          <ProgressiveImage src={data.heroImg} alt="Hero Background" priority={true} />
          <div className="hero-overlay"></div>
        </motion.div>

        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ whiteSpace: 'pre-line' }}
          >
            {data.heroTitle}
          </motion.h1>
        </div>
      </section>

      <section id="about" className="new-about pad">
        <div className="about-header">
          <h2 className="about-title">{data.aboutTitle}</h2>
          <span className="about-label">//About</span>
        </div>
        <div className="about-grid">
          <div className="about-img-wrapper">
            <ProgressiveImage src={data.aboutImg} alt={data.name} />
          </div>
          <div className="about-text">
            <p>{data.aboutText1}</p>
            <p>{data.aboutText2}</p>
          </div>
        </div>
      </section>

      <section id="projects">
        <div className="stk">
          <div className="inf">
            <div className="c">0{currentProj + 1} / 0{projects.length}</div>
            <motion.h3
              key={projects[currentProj].title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {projects[currentProj].title}
            </motion.h3>
            <div className="c" style={{ marginBottom: '12px', color: 'rgba(18,16,14,.6)' }}>
              {projects[currentProj].category} — {projects[currentProj].year}
            </div>
            <motion.p
              key={projects[currentProj].description}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {projects[currentProj].description}
            </motion.p>

            <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
              {projects.slice(0, 3).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => selectProject(idx)}
                  style={{
                    width: '30px', height: '30px', borderRadius: '50%',
                    border: '1px solid rgba(18,16,14,.3)',
                    background: idx === currentProj ? 'var(--gold)' : 'transparent',
                    color: idx === currentProj ? '#f2ebe0' : 'inherit'
                  }}
                >
                  {idx + 1}
                </button>
              ))}
            </div>

            <div style={{ marginTop: '40px', display: 'flex', gap: '20px' }}>
              <Link to={`/project/${projects[currentProj].id}`} style={{ borderBottom: '1px solid var(--ink)', fontSize: '1.1rem' }}>
                View Project Details →
              </Link>
            </div>
            <div style={{ marginTop: '20px' }}>
              <Link to="/projects" style={{ borderBottom: '1px solid var(--gold)', fontSize: '1.1rem', color: 'var(--mut)' }}>
                View All Projects
              </Link>
            </div>
          </div>

          <div className="stg">
            <Link to={`/project/${projects[currentProj].id}`} className="stg-link">
              <motion.img
                key={projects[currentProj].img}
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
                src={projects[currentProj].img}
                alt={projects[currentProj].title}
                className="stg-img"
                decoding="async"
              />
              <div className="stg-overlay">
                {projects[currentProj].logo ? (
                  <img
                    src={projects[currentProj].logo}
                    alt={`${projects[currentProj].title} Logo`}
                    className="stg-logo"
                  />
                ) : (
                  <div className="stg-logo-badge">
                    <span>{projects[currentProj].title}</span>
                  </div>
                )}
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section id="services" className="pad" style={{ background: 'var(--dk)', color: 'var(--cr)' }}>
        <span className="lb">Services & Skills</span>
        <div className="sv" style={{ marginTop: '36px' }}>
          {services.map((svc, i) => (
            <div key={i}>
              <button
                onClick={() => setOpenService(openService === i ? null : i)}
                className={openService === i ? 'o' : ''}
              >
                <span className="n">0{i + 1}</span>
                <span className="t">{svc.title}</span>
                <span className="pl">{openService === i ? '×' : '+'}</span>
              </button>
              <div className="b" style={{ gridTemplateRows: openService === i ? '1fr' : '0fr' }}>
                <div>
                  <p>{svc.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="sk">
          {skills.map((sk, i) => (
            <div key={i}>
              <span>{sk.name} <b style={{ fontWeight: 400, color: 'var(--gold)' }}>{sk.val}</b></span>
              <motion.i
                initial={{ width: 0 }}
                whileInView={{ width: `${sk.val}%` }}
                transition={{ duration: 1.4, ease: "easeOut" }}
                viewport={{ once: true }}
              ></motion.i>
            </div>
          ))}
        </div>
      </section>

      <ContactSection data={data} />
    </>
  );
}

function ProjectsPage({ data }) {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', color: 'var(--ink)' }}>
      {/* Complete Header with Navigation */}
      <header className="page-header">
        <Link className="lg" to="/">GT</Link>
        <nav>
          <Link to="/">Home</Link>
          <a href="/#about">About</a>
          <Link to="/projects" className="active">Projects</Link>
          <a href="/#services">Services</a>
          <a href="/#contact">Contact</a>
        </nav>
      </header>

      <div className="pad" style={{ paddingTop: '32px', paddingBottom: '80px' }}>
        {/* Top bar with back button & project count badge */}
        <div className="page-topbar">
          <Link to="/" className="back-btn-pill">
            <span className="arrow">←</span> Back to Home
          </Link>
          <span className="page-count-badge">{data.projects.length} Selected Works</span>
        </div>

        <div className="page-intro">
          <h1 className="page-title">All Projects</h1>
          <p className="page-subtitle">A curated collection of design, full-stack development, and digital experiences.</p>
        </div>

        <div className="all-projects-grid">
          {data.projects.map((proj) => (
            <motion.div
              key={proj.id}
              className="project-card"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35 }}
            >
              <Link to={`/project/${proj.id}`} className="project-card-link">
                <div className="project-card-media">
                  <ProgressiveImage src={proj.img} alt={proj.title} style={{ aspectRatio: '16 / 10' }} />
                  <div className="project-card-badge">{proj.category}</div>
                </div>
                <div className="project-card-info">
                  <div className="project-card-meta">
                    <span className="lb">{proj.year}</span>
                    <span className="project-card-role">{proj.role || 'Design & Code'}</span>
                  </div>
                  <h4>{proj.title}</h4>
                  <p>{proj.description}</p>
                  <div className="project-card-action">
                    <span>View Case Study</span>
                    <span className="arrow">→</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      <ContactSection data={data} />
    </div>
  );
}

function ProjectDetail({ data }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const projectIndex = data.projects.findIndex(p => p.id.toString() === id);
  const project = data.projects[projectIndex];

  if (!project) {
    return (
      <div className="pad" style={{ textAlign: 'center', minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <h2 style={{ fontFamily: 'var(--serif)', fontSize: '2.5rem', marginBottom: '16px' }}>Project Not Found</h2>
        <p style={{ color: 'var(--mut)', marginBottom: '24px' }}>The case study you are looking for does not exist or has been moved.</p>
        <Link to="/" className="back-btn-pill">← Back to Home</Link>
      </div>
    );
  }

  const prevProject = projectIndex > 0 ? data.projects[projectIndex - 1] : null;
  const nextProject = projectIndex < data.projects.length - 1 ? data.projects[projectIndex + 1] : null;
  const blocks = project.blocks && project.blocks.length > 0 ? project.blocks : getProjectBlocks(project.id);

  useEffect(() => {
    if (projectIndex >= 0) {
      sessionStorage.setItem('active_project_index', projectIndex);
    }
  }, [projectIndex]);

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate('/#projects');
    }
  };

  return (
    <div className="detail-page-wrapper">
      {/* Complete Header with Navigation */}
      <header className="page-header">
        <Link className="lg" to="/">GT</Link>
        <nav>
          <Link to="/">Home</Link>
          <a href="/#about">About</a>
          <Link to="/#projects">Projects</Link>
          <a href="/#services">Services</a>
          <a href="/#contact">Contact</a>
        </nav>
      </header>

      <div className="detail-container">
        
        {/* Top Bar with Back Button & Breadcrumbs & Live Link */}
        <div className="detail-top-nav">
          <button onClick={handleBack} className="detail-back-button" aria-label="Go back to projects">
            <span className="arrow">←</span> Back
          </button>
          
          <div className="detail-breadcrumbs">
            <Link to="/#projects">Home</Link>
            <span className="sep">/</span>
            <Link to="/#projects">Projects</Link>
            <span className="sep">/</span>
            <span className="current">{project.title}</span>
          </div>

          {project.linkUrl && (
            <a 
              href={project.linkUrl} 
              target="_blank" 
              rel="noreferrer" 
              className="detail-live-link"
            >
              <span>{project.linkLabel || 'Visit Website'}</span>
              <span className="arrow">↗</span>
            </a>
          )}
        </div>

        {/* Hero Title & Tagline */}
        <div className="detail-hero-intro">
          <div className="detail-tag-pill">
            <span>{project.category}</span>
            <span className="dot">•</span>
            <span>{project.year}</span>
          </div>
          <h1 className="detail-title">{project.title}</h1>
          <p className="detail-tagline">{project.description}</p>
        </div>

        {/* Main Featured Showcase (Cover) */}
        <div className="detail-cover-showcase">
          <div className="detail-cover-frame">
            <ProgressiveImage src={project.coverImg || project.img} alt={project.title} priority={true} />
          </div>
        </div>

        {/* Structured Metadata Card */}
        <div className="detail-meta-card">
          <div className="meta-item">
            <span className="meta-label">Role</span>
            <p className="meta-val">{project.role || 'UI/UX & Development'}</p>
          </div>
          <div className="meta-item">
            <span className="meta-label">Client</span>
            <p className="meta-val">{project.client || 'Featured Work'}</p>
          </div>
          <div className="meta-item">
            <span className="meta-label">Category</span>
            <p className="meta-val">{project.category}</p>
          </div>
          <div className="meta-item">
            <span className="meta-label">Year</span>
            <p className="meta-val">{project.year}</p>
          </div>
          {project.linkUrl && (
            <div className="meta-item meta-item-link">
              <span className="meta-label">External</span>
              <a href={project.linkUrl} target="_blank" rel="noreferrer" className="meta-val-link">
                {project.linkLabel || 'Live Demo'} ↗
              </a>
            </div>
          )}
        </div>

        {/* Dynamic Blocks with Editorial Case Study Layout */}
        <div className="detail-content-flow">
          {blocks.map((block, idx) => {
            if (block.type === 'text') {
              const sectionNumber = String(idx + 1).padStart(2, '0');
              return (
                <div key={block.id} className="detail-editorial-section">
                  <div className="section-header-col">
                    <span className="section-badge">{sectionNumber}</span>
                    <h3 className="section-heading">{block.heading}</h3>
                  </div>
                  <div className="section-body-col">
                    <p className="section-text">{block.content}</p>
                  </div>
                </div>
              );
            }
            if (block.type === 'image') {
              return (
                <div key={block.id} className="detail-media-card">
                  <ProgressiveImage src={block.src} alt="Project visual" />
                </div>
              );
            }
            if (block.type === 'video') {
              return (
                <div key={block.id} className="detail-media-card video-card">
                  <div className="video-header-chip">
                    <span className="pulse-dot"></span>
                    <span>Interactive Product Walkthrough</span>
                  </div>
                  <video src={block.src} autoPlay loop muted playsInline controls />
                </div>
              );
            }
            return null;
          })}
        </div>

        {/* Project Pagination (Prev & Next project) */}
        <div className="detail-pagination">
          {prevProject ? (
            <Link to={`/project/${prevProject.id}`} className="pagination-card prev">
              <span className="pag-label">← Previous Project</span>
              <span className="pag-title">{prevProject.title}</span>
            </Link>
          ) : (
            <div className="pagination-card disabled" style={{ visibility: 'hidden' }} />
          )}

          <Link to="/projects" className="pagination-all-btn">
            All Projects
          </Link>

          {nextProject ? (
            <Link to={`/project/${nextProject.id}`} className="pagination-card next">
              <span className="pag-label">Next Project →</span>
              <span className="pag-title">{nextProject.title}</span>
            </Link>
          ) : (
            <div className="pagination-card disabled" style={{ visibility: 'hidden' }} />
          )}
        </div>

      </div>

      <ContactSection data={data} />
    </div>
  );
}

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const prevPathRef = useRef(pathname);

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  useEffect(() => {
    const prevPath = prevPathRef.current;
    prevPathRef.current = pathname;

    // Jika kembali dari detail project (/project/..) ke Home ('/'), tetap di section #projects
    const isReturningFromProjectToHome = prevPath && prevPath.startsWith('/project/') && pathname === '/';

    if (isReturningFromProjectToHome || hash === '#projects') {
      const scrollToProjects = () => {
        const el = document.getElementById('projects');
        if (el) {
          document.documentElement.style.scrollBehavior = 'auto';
          el.scrollIntoView();
          requestAnimationFrame(() => {
            document.documentElement.style.scrollBehavior = '';
          });
          return true;
        }
        return false;
      };

      if (!scrollToProjects()) {
        const timer = setTimeout(scrollToProjects, 40);
        return () => clearTimeout(timer);
      }
      return;
    }

    if (!hash) {
      document.documentElement.style.scrollBehavior = 'auto';
      window.scrollTo(0, 0);
      requestAnimationFrame(() => {
        document.documentElement.style.scrollBehavior = '';
      });
    } else {
      const el = document.getElementById(hash.replace('#', ''));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [pathname, hash]);

  return null;
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home data={portfolioData} />} />
        <Route path="/projects" element={<ProjectsPage data={portfolioData} />} />
        <Route path="/project/:id" element={<ProjectDetail data={portfolioData} />} />
      </Routes>
    </>
  );
}

export default App;
