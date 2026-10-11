import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';
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
  const [currentProj, setCurrentProj] = useState(0);
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
                  onClick={() => setCurrentProj(idx)}
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
    <div style={{ minHeight: '100vh', background: 'var(--bg)' }}>
      <div className="pad">
      <header style={{ position: 'relative', padding: '0 0 40px 0', mixBlendMode: 'normal', color: 'var(--ink)' }}>
        <Link className="lg" to="/">GT</Link>
      </header>

      <Link to="/" className="back-btn">← Back to Home</Link>

      <h1 style={{ fontFamily: 'var(--serif)', fontSize: '4rem', color: 'var(--ink)' }}>All Projects</h1>

      <div className="all-projects-grid">
        {data.projects.map((proj) => (
          <motion.div
            key={proj.id}
            className="project-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link to={`/project/${proj.id}`}>
              <ProgressiveImage src={proj.img} alt={proj.title} style={{ aspectRatio: '16 / 10' }} />
              <div className="project-card-info">
                <span className="lb">{proj.category} — {proj.year}</span>
                <h4>{proj.title}</h4>
                <p>{proj.description}</p>
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
  const project = data.projects.find(p => p.id.toString() === id);

  if (!project) {
    return <div className="pad">Project not found. <Link to="/">Go Home</Link></div>;
  }

  const blocks = project.blocks && project.blocks.length > 0 ? project.blocks : getProjectBlocks(project.id);

  return (
    <div style={{ background: 'var(--bg)', color: 'var(--ink)', minHeight: '100vh' }}>
      <header style={{ position: 'relative', background: 'transparent', padding: '18px clamp(20px, 5vw, 80px)', color: 'var(--ink)', textShadow: 'none' }}>
        <Link className="lg" to="/">GT</Link>
        <nav>
          <a href="/#projects">Projects</a>
          <a href="/#about">About</a>
          <a href="/#services">Services</a>
          <a href="/#contact">Contact</a>
        </nav>
      </header>

      <div className="pad" style={{ paddingTop: '20px', paddingBottom: '40px' }}>

        {/* Main Cover Image at the top, just below header like in the screenshot */}
        <div className="detail-cover">
          <ProgressiveImage src={project.coverImg || project.img} alt={project.title} priority={true} />
        </div>

        <div className="detail-meta">
          <div>
            <span className="lb">Role</span>
            <p>{project.role || 'UI/UX Designer'}</p>
          </div>
          <div>
            <span className="lb">Services</span>
            <p>{project.category}</p>
          </div>
          <div>
            <span className="lb">Client</span>
            <p>{project.client || 'Internal'}</p>
          </div>
          <div>
            <span className="lb">Year</span>
            <p>{project.year}</p>
          </div>
          {project.linkLabel && project.linkUrl && (
            <div>
              <span className="lb">Link</span>
              <p><a href={project.linkUrl} target="_blank" rel="noreferrer" style={{ textDecoration: 'underline', textUnderlineOffset: '4px' }}>{project.linkLabel}</a></p>
            </div>
          )}
        </div>

        {/* Dynamic Blocks */}
        <div className="detail-blocks-container">
          {blocks.map(block => {
            if (block.type === 'text') {
              return (
                <div key={block.id} className="detail-section">
                  <h3>{block.heading}</h3>
                  <p style={{ whiteSpace: 'pre-line' }}>{block.content}</p>
                </div>
              );
            }
            if (block.type === 'image') {
              return (
                <div key={block.id} className="detail-grid-item">
                  <ProgressiveImage src={block.src} alt="Detail view" />
                </div>
              );
            }
            if (block.type === 'video') {
              return (
                <div key={block.id} className="detail-grid-item">
                  <video src={block.src} autoPlay loop muted playsInline />
                </div>
              );
            }
            return null;
          })}
        </div>

        <div style={{ textAlign: 'center', marginTop: '60px' }}>
          <button onClick={() => navigate(-1)} style={{ background: 'var(--ink)', color: 'var(--bg)', padding: '12px 30px', fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            Back to Home ➔
          </button>
        </div>
      </div>

      <ContactSection data={data} />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home data={portfolioData} />} />
      <Route path="/projects" element={<ProjectsPage data={portfolioData} />} />
      <Route path="/project/:id" element={<ProjectDetail data={portfolioData} />} />
    </Routes>
  );
}

export default App;
