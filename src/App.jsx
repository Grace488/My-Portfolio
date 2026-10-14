import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Routes, Route, Link, useParams, useNavigate, useLocation } from 'react-router-dom';
import { portfolioData } from './store';
import { getProjectBlocks } from './projectBlocks';

function ImageLightbox({ src, alt, onClose }) {
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        className="lightbox-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        onClick={onClose}
      >
        <motion.div
          className="lightbox-content"
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.85, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          onClick={(e) => e.stopPropagation()}
        >
          <img src={src} alt={alt || 'Project visual'} className="lightbox-img" />
          <button className="lightbox-close" onClick={onClose} aria-label="Close image">
            ✕
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

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
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Project Inquiry from ${name || 'Portfolio Visitor'}`);
    const body = encodeURIComponent(
      `Hi ${data.name},\n\nMy name is ${name || '[Your Name]'}.\n\nMessage:\n${message}\n\n---\nSent from ${window.location.origin}`
    );
    // Langsung buka Gmail Web di tab baru
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(data.email)}&su=${subject}&body=${body}`;
    window.open(gmailUrl, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
    setName('');
    setMessage('');
  };

  return (
    <section id="contact" className="pad">
      <span className="lb">Get in touch</span>
      <h2 className="cta">Let’s create<br /><em>something beautiful.</em></h2>
      <div className="cg">
        <div>
          {submitted && (
            <div className="contact-success-banner">
              <span className="success-icon">✓</span>
              <div>
                <strong>Tab Gmail telah dibuka!</strong>
                <p>Silakan klik tombol <em>Send</em> di Gmail Anda untuk mengirim pesan ke <em>{data.email}</em>.</p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                if (submitted) setSubmitted(false);
              }}
              required
            />
            <textarea
              rows="3"
              placeholder="Tell me about your project"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
                if (submitted) setSubmitted(false);
              }}
              required
            ></textarea>
            <button type="submit" className="go">Send message</button>
          </form>
        </div>
        <div>
          <h3 style={{ fontFamily: 'var(--serif)', fontSize: '2rem', marginBottom: '20px' }}>{data.name}</h3>
          <div className="social-links">
            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(data.email)}`}
              target="_blank"
              rel="noreferrer"
            >
              {data.email}
            </a>
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

  const { scrollY } = useScroll();
  const yHero = useTransform(scrollY, [0, 1000], [0, 300]);
  const projects = data.projects;

  const bentoServices = [
    {
      num: '01',
      category: 'UI & PRODUCT DESIGN',
      title: 'UI/UX & Product Design',
      desc: 'Crafting intuitive digital interfaces, structured design systems, and seamless user experiences across web and mobile platforms.',
      badge: 'Interactive & User-Centric',
      capabilities: [
        'Wireframing & Interactive Prototyping',
        'Mobile & Web Interface Design',
        'Design Tokens & Scalable Systems',
        'User Flow & Usability Analysis'
      ],
      tools: [
        {
          name: 'Figma',
          icon: (
            <svg viewBox="0 0 38 57" width="16" height="16" fill="none">
              <path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" fill="#1ABCFE" />
              <path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z" fill="#0ACF83" />
              <path d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" fill="#FF7262" />
              <path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" fill="#F24E1E" />
              <path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" fill="#A259FF" />
            </svg>
          )
        },
        {
          name: 'Framer',
          icon: (
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
              <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" />
            </svg>
          )
        }
      ]
    },
    {
      num: '02',
      category: 'VISUAL IDENTITY',
      title: 'Brand & Graphic Design',
      desc: 'Developing cohesive visual identities, printed collateral, editorial layouts, and marketing assets that command attention.',
      badge: 'Unified Visual Voice',
      capabilities: [
        'Visual Identity & Logo Systems',
        'Typography, Editorial & Color Guidelines',
        'Marketing Collateral & Promotional Assets',
        'Physical Merchandise & Lanyard Design'
      ],
      tools: [
        {
          name: 'Affinity Designer',
          icon: (
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
              <polyline points="2 17 12 22 22 17"></polyline>
              <polyline points="2 12 12 17 22 12"></polyline>
            </svg>
          )
        },
        {
          name: 'CorelDRAW',
          icon: (
            <svg viewBox="0 0 24 24" width="16" height="16" fill="#00A550">
              <path d="M12 2C7 2 3 6.5 3 11.5c0 4 2.8 7.3 6.7 8.2-.2-.8-.4-1.8-.4-2.7 0-3.3 2.5-6 5.8-6 .6 0 1.2.1 1.7.3.7-2.6 3.1-4.5 6-4.5.3 0 .7 0 1 .1C22.2 4.2 17.5 2 12 2zm1 11.5c-2 0-3.5 1.6-3.5 3.5 0 2 1.6 3.5 3.5 3.5 2 0 3.5-1.6 3.5-3.5 0-2-1.6-3.5-3.5-3.5z" />
            </svg>
          )
        },
        {
          name: 'Inkscape',
          icon: (
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
              <path d="M12 2L4 14l3.5 2 4.5-5 4.5 5 3.5-2L12 2zm0 11.5l-3 3.5h6l-3-3.5zM3 18l3.5 2h11l3.5-2-2-1H5l-2 1z" />
            </svg>
          )
        },
        {
          name: 'Canva Pro',
          icon: (
            <svg viewBox="0 0 24 24" width="16" height="16" fill="#00C4CC">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
              <path d="M12 7c-2.8 0-5 2.2-5 5s2.2 5 5 5 3.5-1.3 4.3-3.2" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
            </svg>
          )
        }
      ]
    },
    {
      num: '03',
      category: 'ENGINEERING',
      title: 'Full-Stack Web Development',
      desc: 'Building responsive, scalable web applications with clean component architecture, reliable APIs, database systems, and modern toolchains.',
      badge: 'Performant & Scalable',
      capabilities: [
        'Modern React & Next.js Front-End Ecosystem',
        'Robust Back-End APIs with Laravel, Nest.js & Node.js',
        'Relational Databases & ORM (PostgreSQL, Prisma)',
        'Cloud Deployment & Web3 Integrations (Railway, Privy)'
      ],
      tools: [
        {
          name: 'React',
          icon: (
            <svg viewBox="0 0 24 24" width="16" height="16" fill="#61DAFB">
              <ellipse cx="12" cy="12" rx="10" ry="4.2" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(30 12 12)" />
              <ellipse cx="12" cy="12" rx="10" ry="4.2" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(90 12 12)" />
              <ellipse cx="12" cy="12" rx="10" ry="4.2" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(150 12 12)" />
              <circle cx="12" cy="12" r="1.8" fill="currentColor" />
            </svg>
          )
        },
        {
          name: 'Next.js',
          icon: (
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
              <path d="M11.5 2C6.25 2 2 6.25 2 11.5S6.25 21 11.5 21c2.4 0 4.6-.9 6.25-2.4L9.2 8.1v8.5H7.5V6.8h1.8l9.7 12.1C20.3 17.2 21 14.5 21 11.5 21 6.25 16.75 2 11.5 2z" />
            </svg>
          )
        },
        {
          name: 'TypeScript',
          icon: (
            <svg viewBox="0 0 24 24" width="16" height="16" fill="#3178C6">
              <rect width="24" height="24" rx="4" fill="#3178C6" />
              <path d="M4 11h6v2H7.2v7H4.8v-7H2v-2h2zm8.8 6.5c.6.7 1.6 1.2 2.7 1.2 1.3 0 2-.6 2-1.5 0-1-.8-1.4-2.1-1.9-1.8-.7-3-1.6-3-3.3 0-1.8 1.4-3.1 3.5-3.1 1.4 0 2.5.5 3.3 1.3l-1.3 1.5c-.6-.5-1.3-.9-2-.9-1 0-1.6.5-1.6 1.2 0 .8.6 1.2 1.8 1.6 2 .8 3.3 1.6 3.3 3.6 0 2.1-1.6 3.3-3.8 3.3-1.7 0-3-.6-3.9-1.6l1.4-1.5z" fill="#ffffff" />
            </svg>
          )
        },
        {
          name: 'JavaScript',
          icon: (
            <svg viewBox="0 0 24 24" width="16" height="16" fill="#F7DF1E">
              <rect width="24" height="24" rx="4" fill="#F7DF1E" />
              <path d="M6.5 18.5c.8.5 1.7.8 2.6.8 1.6 0 2.6-.8 2.6-2.2V11H9.8v6.2c0 .6-.4.9-1 .9-.5 0-.9-.2-1.3-.5l-1 1.4zm6.8-.1c.9.6 2 .9 3.2.9 2 0 3.2-1 3.2-2.6 0-1.5-.9-2.3-2.5-3-.9-.4-1.5-.7-1.5-1.2 0-.4.3-.8 1-.8.7 0 1.4.3 2 .7l.8-1.5c-.8-.5-1.8-.8-2.8-.8-2 0-3.1 1.1-3.1 2.5 0 1.4.9 2.2 2.3 2.8.9.4 1.6.8 1.6 1.4 0 .5-.5.9-1.2.9-.9 0-1.7-.4-2.3-1l-.7 1.7z" fill="#000000" />
            </svg>
          )
        },
        {
          name: 'Laravel',
          icon: (
            <svg viewBox="0 0 24 24" width="16" height="16" fill="#FF2D20">
              <path d="M7.7 4.5l6.9-4 6.9 4v8l-6.9 4-6.9-4v-8zm2.5 9.7l4.4 2.5v-5l-4.4-2.5v5zm6.4-6.2l-4.4-2.5-4.4 2.5 4.4 2.5 4.4-2.5zm.5 1.2v5l4.4-2.5v-5l-4.4 2.5zM2.5 9.8l4.4-2.5v5l-4.4 2.5v-5z" />
            </svg>
          )
        },
        {
          name: 'PHP',
          icon: (
            <svg viewBox="0 0 24 24" width="16" height="16" fill="#777BB4">
              <path d="M12 3C6.5 3 2 7 2 12s4.5 9 10 9 10-4 10-9-4.5-9-10-9zm-6.2 12l1.2-6h2.2c1.4 0 2.2.6 2 1.7-.2 1.2-1.3 1.9-2.5 1.9h-1l-.6 2.4H5.8zm7.3 0l1.2-6h1.7l-.5 2.2h1.6c1.3 0 2.1.6 1.9 1.7-.3 1.2-1.3 2.1-2.6 2.1h-3.3zm-5.4-3.6h.8c.6 0 1.1-.3 1.2-.8.1-.5-.2-.8-.8-.8h-.8l-.4 1.6zm7.4 0h.8c.6 0 1.1-.3 1.2-.8.1-.5-.2-.8-.8-.8h-.8l-.4 1.6z" />
            </svg>
          )
        },
        {
          name: 'Nest.js',
          icon: (
            <svg viewBox="0 0 24 24" width="16" height="16" fill="#E0234E">
              <path d="M11.6 1.8c-.3-.2-.7-.2-1 0L1.7 7.2c-.4.2-.6.7-.6 1.1v10.3c0 .5.3.9.7 1.1l8.8 5.1c.4.2.8.2 1.2 0l8.9-5.1c.4-.2.7-.7.7-1.1V8.3c0-.5-.3-.9-.7-1.1L11.6 1.8zm3.2 8.4c.5 1.3 0 2.7-1.3 3.3-1.4.5-3-.2-3.5-1.6-.5-1.4.1-2.9 1.5-3.4 1.4-.6 2.8.2 3.3 1.7z" />
            </svg>
          )
        },
        {
          name: 'Node.js',
          icon: (
            <svg viewBox="0 0 24 24" width="16" height="16" fill="#5FA04E">
              <path d="M12 2l9 5.2v10.4L12 22.8 3 17.6V7.2L12 2zm0 2.3L4.8 8.5v7.1L12 19.7l7.2-4.1V8.5L12 4.3z" />
            </svg>
          )
        },
        {
          name: 'PostgreSQL',
          icon: (
            <svg viewBox="0 0 24 24" width="16" height="16" fill="#4169E1">
              <path d="M12 2C6.5 2 2 6.5 2 12c0 4 2.4 7.5 5.8 9 .2-.6.5-1.4.7-2.1-.5-.4-.9-.8-1.2-1.4-.4-.7-.6-1.5-.6-2.5 0-2.8 2.2-5 5.3-5 1.5 0 2.8.5 3.8 1.4.9-.8 1.5-2 1.5-3.4 0-2.2-1.8-4-4-4-1.2 0-2.3.5-3 1.3L9 3.8C10 2.7 11.4 2 12 2zm3.8 11.5c-.8 0-1.5.3-2 .8-.6.5-.9 1.3-.9 2.2 0 1.8 1.3 3.2 3 3.2.7 0 1.4-.3 1.9-.8.5-.5.8-1.2.8-2 0-1.9-1.2-3.4-2.8-3.4z" />
            </svg>
          )
        },
        {
          name: 'Prisma',
          icon: (
            <svg viewBox="0 0 24 24" width="16" height="16" fill="#2D3748">
              <path d="M18.8 18.5L12.5 2.8c-.3-.7-1.3-.7-1.6 0L4.7 18c-.3.7.2 1.5 1 1.5h12.3c.7 0 1.2-.6.8-1zm-6.8-12l4.4 11H7.6l4.4-11z" />
            </svg>
          )
        },
        {
          name: 'Tailwind CSS',
          icon: (
            <svg viewBox="0 0 24 24" width="16" height="16" fill="#06B6D4">
              <path d="M12 6c-2.4 0-3.9 1.2-4.5 3.6 1-.9 2.1-1.3 3.3-1.1 1 .2 1.7.9 2.5 1.7 1.3 1.3 2.7 2.8 5.7 2.8 2.4 0 3.9-1.2 4.5-3.6-1 .9-2.1 1.3-3.3 1.1-1-.2-1.7-.9-2.5-1.7C16.4 7.5 15 6 12 6zm-7.5 6C2.1 12 .6 13.2 0 15.6c1-.9 2.1-1.3 3.3-1.1 1 .2 1.7.9 2.5 1.7 1.3 1.3 2.7 2.8 5.7 2.8 2.4 0 3.9-1.2 4.5-3.6-1 .9-2.1 1.3-3.3 1.1-1-.2-1.7-.9-2.5-1.7C8.9 13.5 7.5 12 4.5 12z" />
            </svg>
          )
        },
        {
          name: 'Railway',
          icon: (
            <svg viewBox="0 0 24 24" width="16" height="16" fill="#0B0D0E">
              <path d="M3 8.5C3 5.5 5.5 3 8.5 3h7C18.5 3 21 5.5 21 8.5v7c0 3-2.5 5.5-5.5 5.5h-7C5.5 21 3 18.5 3 15.5v-7zm5.5-3C6.6 5.5 5 7.1 5 9.1v5.8c0 2 1.6 3.6 3.5 3.6h7c1.9 0 3.5-1.6 3.5-3.6V9.1c0-2-1.6-3.6-3.5-3.6h-7zm2.5 4h2v5h-2v-5z" />
            </svg>
          )
        },
        {
          name: 'Privy',
          icon: (
            <svg viewBox="0 0 24 24" width="16" height="16" fill="#3B82F6">
              <path d="M12 2L4 6v6c0 5.5 3.4 10.7 8 12 4.6-1.3 8-6.5 8-12V6l-8-4zm0 4a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm4 11H8v-1.5c0-1.7 2.7-2.5 4-2.5s4 .8 4 2.5V17z" />
            </svg>
          )
        },
        {
          name: 'GitHub',
          icon: (
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
              <path d="M12 2C6.47 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
            </svg>
          )
        },
        {
          name: 'Brevo',
          icon: (
            <svg viewBox="0 0 24 24" width="16" height="16" fill="#0B996F">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z" />
            </svg>
          )
        },
        {
          name: 'VS Code',
          icon: (
            <svg viewBox="0 0 24 24" width="16" height="16" fill="#007ACC">
              <path d="M17.58 2.05L6.85 10.29 2.5 6.94.75 8.16l3.52 3.84L.75 15.84l1.75 1.22 4.35-3.35 10.73 8.24 4.92-2.37V4.42l-4.92-2.37zm1.42 16.28l-8.58-6.33 8.58-6.33v12.66z" />
            </svg>
          )
        }
      ]
    },
    {
      num: '04',
      category: 'MEDIA CREATIVE',
      title: 'Digital Content & Motion',
      desc: 'Producing dynamic multimedia content, engaging short-form video reels, and visual concepts tailored for social reach.',
      badge: 'Dynamic Storytelling',
      capabilities: [
        'Reels & High-Impact Short Video',
        'Content Planning & Storyboarding',
        'Motion Flow & Audio Syncing',
        'Campaign Social Visuals'
      ],
      tools: [
        {
          name: 'CapCut',
          icon: (
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
              <path d="M19.5 4h-4.3c-.4 0-.8.2-1 .6L12 8 9.8 4.6c-.2-.4-.6-.6-1-.6H4.5C3.1 4 2 5.1 2 6.5v11C2 18.9 3.1 20 4.5 20h4.3c.4 0 .8-.2 1-.6L12 16l2.2 3.4c.2.4.6.6 1 .6h4.3c1.4 0 2.5-1.1 2.5-2.5v-11C22 5.1 20.9 4 19.5 4zM8 14.3L6 17.5H4.5c-.3 0-.5-.2-.5-.5V7c0-.3.2-.5.5-.5H6l3.5 5.5L8 14.3zm12 2.7c0 .3-.2.5-.5.5H18l-3.5-5.5 1.5-2.3 2-3.2h1.5c.3 0 .5.2.5.5v10z" />
            </svg>
          )
        }
      ]
    }
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
            className="hero-title"
          >
            {data.heroTitle.split('\n').map((line, idx) => (
              <span key={idx} className={`hero-title-line line-${idx}`}>
                {line}
              </span>
            ))}
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
            {data.aboutParagraphs && data.aboutParagraphs.length > 0 ? (
              data.aboutParagraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))
            ) : (
              <>
                <p>{data.aboutText1}</p>
                <p>{data.aboutText2}</p>
              </>
            )}
          </div>
        </div>
      </section>

      <section id="projects" className="projects-section">
        {/* Section Header */}
        <div className="projects-head-wrap">
          <div className="projects-head-tag">// PROJECTS</div>
          <div className="projects-head-title-row">
            <h2 className="projects-headline">
              {data.projectsTitle || 'Projects'}
            </h2>
            <p className="projects-subheadline">
              A curated showcase of full-stack web applications, UI/UX designs, and brand identities.
            </p>
          </div>
        </div>

        <div className="stk">
          <div className="inf">
            <div className="c">PROJECT 0{currentProj + 1} / 0{projects.length}</div>
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
              {projects.map((_, idx) => (
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

      <section id="services" className="pad services-bento-section">
        {/* Section Header */}
        <div className="bento-head-wrap">
          <div className="bento-head-tag">// SERVICES & EXPERTISE</div>
          <div className="bento-head-title-row">
            <h2 className="bento-headline">
              Crafting intuitive digital experiences, distinct identities, & robust code.
            </h2>
            <p className="bento-subheadline">
              An integrated blend of product design, visual identity, and modern engineering to build memorable digital products.
            </p>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="bento-grid">
          {bentoServices.map((service, i) => (
            <motion.div
              key={service.num}
              className="bento-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              {/* Card Header */}
              <div className="bento-card-header">
                <div className="bento-card-meta">
                  <span className="bento-num">{service.num}</span>
                  <span className="bento-cat">{service.category}</span>
                </div>
                <span className="bento-badge">{service.badge}</span>
              </div>

              {/* Title & Desc */}
              <div className="bento-card-body">
                <h3 className="bento-card-title">{service.title}</h3>
                <p className="bento-card-desc">{service.desc}</p>
              </div>

              {/* Capabilities List */}
              <div className="bento-capabilities-block">
                <div className="bento-section-label">Core Capabilities</div>
                <ul className="bento-caps-list">
                  {service.capabilities.map((cap, j) => (
                    <li key={j} className="bento-cap-item">
                      <span className="bento-bullet">✦</span>
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tools Chips in Footer */}
              <div className="bento-tools-block">
                <div className="bento-section-label">Stack & Tools</div>
                <div className="bento-tools-wrap">
                  {service.tools.map((tool, k) => (
                    <div key={k} className="bento-tool-chip">
                      <span className="bento-tool-icon">{tool.icon}</span>
                      <span className="bento-tool-name">{tool.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
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
  const [lightboxSrc, setLightboxSrc] = useState(null);
  const openLightbox = useCallback((src) => setLightboxSrc(src), []);
  const closeLightbox = useCallback(() => setLightboxSrc(null), []);
  const { id } = useParams();
  const navigate = useNavigate();
  const projectIndex = data.projects.findIndex(p => p.id.toString() === id);
  const project = data.projects[projectIndex];

  useEffect(() => {
    if (projectIndex >= 0) {
      sessionStorage.setItem('active_project_index', projectIndex);
    }
  }, [projectIndex]);

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

  const handleBack = () => {
    navigate('/#projects');
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
          {project.techStack && project.techStack.length > 0 && (
            <div className="meta-item meta-item-tools">
              <span className="meta-label">Tools & Technologies</span>
              <div className="meta-tools-chips">
                {project.techStack.map((tech, idx) => (
                  <span key={idx} className="meta-tech-badge">{tech}</span>
                ))}
              </div>
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
                <div
                  key={block.id}
                  className="detail-media-card zoomable"
                  onClick={() => openLightbox(block.src)}
                  title="Click to zoom"
                >
                  <ProgressiveImage src={block.src} alt="Project visual" />
                  <div className="zoom-hint">🔍 Click to zoom</div>
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

      {lightboxSrc && (
        <ImageLightbox src={lightboxSrc} alt="Project visual" onClose={closeLightbox} />
      )}
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
