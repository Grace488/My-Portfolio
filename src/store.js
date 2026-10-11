import imgAbout from './assets/Foto Grace 2.webp';
import imgHero from './assets/Foto Grace.webp';
import imgUnilaCare from './assets/upabk mock up.webp';
import imgtravel from './assets/landscape banner.webp';
import imgcovertravel from './assets/Grace Travel Car Rental Promo.webp';
import imgPathTrick from './assets/PathTrick.webp';
import imglogoupabk from './assets/logo upa bk.webp';
import imglogorental from './assets/logo rental.webp';
import imgcoverPathTrick from './assets/pathtrick cover.png';
import logoPathTrick from './assets/logo pathtrick.webp';
import coverupa from './assets/cover upa.png';


export const projects = [
  {
    id: 1,
    title: 'Unila Care',
    category: 'Web Development',
    year: '2025',
    role: 'Fullstack Development',
    client: 'UPA BK Universitas Lampung',
    description: 'A full-stack web platform for counseling registration and psychological assessment at University of Lampung.',
    img: coverupa, // Cover di Landing Page & All Projects
    coverImg: imgUnilaCare, // Cover di halaman Detail Project
    logo: imglogoupabk, // Logo yang tampil saat cover di-hover
    linkLabel: 'View Website',
    linkUrl: 'https://upa-bk.unila.ac.id'
  },
  {
    id: 2,
    title: 'Grace Travel & Rent Car',
    category: 'Design Banner',
    year: '2025',
    role: 'Graphic Designer',
    client: 'Grace Travel & Rent Car, Palembang',
    description: 'A promotional poster design for a trusted car rental service in Palembang.',
    img: imgcovertravel, // Cover di Landing Page & All Projects
    coverImg: imgtravel, // Cover di halaman Detail Project
    logo: imglogorental, // Logo yang tampil saat cover di-hover
    linkLabel: 'View Instagram',
    linkUrl: 'https://www.instagram.com/gracerentaltravel?stkn=MTdqZG9qNTFxbm5jMA=='
  },
  {
    id: 3,
    title: 'PathTrick',
    category: 'Web3 Development',
    year: '2026',
    role: 'Full-Stack Development',
    client: 'Hackathon Project',
    description: 'A Web3 AI career coach that creates personalized education and career roadmaps and issues blockchain-verified skill credentials, without users needing to understand crypto.',
    img: imgcoverPathTrick, // Cover di Landing Page & All Projects
    coverImg: imgPathTrick, // Cover di halaman Detail Project
    logo: logoPathTrick, // Logo yang tampil saat cover di-hover
    linkLabel: 'View Website',
    linkUrl: 'https://pathtrick.vercel.app/'
  },
  {
    id: 4,
    title: 'Arc Form',
    category: 'Architecture Firm',
    year: '2024',
    role: 'Digital Designer',
    client: 'Arc Form',
    description: 'A portfolio for an architecture practice built around sweeping curves, scroll-driven plans and quiet confidence.',
    img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop',
    coverImg: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop',
    logo: null
  }
];

export const portfolioData = {
  name: "Grace Yoelanda Turnip",
  heroTitle: "Grace Turnip\nGraphic Designer & Digital Creative",
  aboutTitle: "Creative by Nature",
  aboutText1: "I'm Grace. A Graphic Designer & Digital Creative who finds beauty in simplicity and meaning in every visual choice. Crafting designs that feel right, look sharp, and tell a story.",
  aboutText2: "Design is more than aesthetics. It's how ideas find their shape. With a sharp eye for detail and a genuine love for visual communication, I craft experiences that are bold, clean, and built to resonate. I work across brand identity, UI/UX, and digital content, driven by curiosity and growing one project at a time.",
  email: "graceturnip48@gmail.com",
  linkedin: "https://www.linkedin.com/in/graceyoelandaturnip",
  instagram: "https://www.instagram.com/grace_yolanda12?igsh=MW1iNDRkNXN4OXQ1dg==",
  heroImg: imgHero,
  aboutImg: imgAbout,
  projects: projects
};
