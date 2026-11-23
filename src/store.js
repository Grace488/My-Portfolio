import imgAbout from './assets/Foto Grace 2.webp';
import imgHero from './assets/Foto Grace.webp';
import imgUnilaCare from './assets/unila-care/upabk mock up.webp';
import imgtravel from './assets/rental/landscape banner.webp';
import imgcovertravel from './assets/rental/Grace Travel Car Rental Promo.webp';
import imgPathTrick from './assets/pathtrick/PathTrick.webp';
import imglogoupabk from './assets/unila-care/logo upa bk.webp';
import imglogorental from './assets/rental/logo rental.webp';
import imgcoverPathTrick from './assets/pathtrick/pathtrick cover.png';
import logoPathTrick from './assets/pathtrick/logo pathtrick.webp';
import coverupa from './assets/unila-care/cover upa.png';
import landinglanyard from './assets/kkn-lanyard/landing page lanyard.png';
import mockuplanyard from './assets/kkn-lanyard/mockup lanyard.png';
import logokkn from './assets/kkn-lanyard/logo kkn unila.png';
import imgMicroMinds from './assets/microminds/beranda.png';
import logoMicroMinds from './assets/microminds/logo-cropped.png';


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
    linkUrl: 'https://upa-bk.unila.ac.id',
    techStack: [
      'React.js',
      'Laravel',
      'PHP',
      'Blade',
      'PostgreSQL',
      'Tailwind CSS',
      'JavaScript',
      'Figma',
      'Brevo',
      'Nginx',
      'GitHub',
      'VS Code',
      'Lighthouse',
      'UptimeRobot'
    ]
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
    linkUrl: 'https://www.instagram.com/gracerentaltravel?stkn=MTdqZG9qNTFxbm5jMA==',
    techStack: ['Affinity Designer', 'Canva Pro', 'Typography System', 'Print Layout']
  },
  {
    id: 3,
    title: 'PathTrick',
    category: 'Web3 Development',
    year: '2026',
    role: 'Full-Stack Development',
    client: 'Hackathon Project | Team Ketupat',
    description: 'A Web3 AI career coach that creates personalized education and career roadmaps and issues blockchain-verified skill credentials, without users needing to understand crypto.',
    img: imgcoverPathTrick, // Cover di Landing Page & All Projects
    coverImg: imgPathTrick, // Cover di halaman Detail Project
    logo: logoPathTrick, // Logo yang tampil saat cover di-hover
    linkLabel: 'View Website',
    linkUrl: 'https://pathtrick.vercel.app/',
    techStack: [
      'Next.js 16',
      'React 19',
      'TypeScript',
      'Tailwind CSS 4',
      'Phaser 3 (RPG Engine)',
      'Node.js',
      'Fastify 5',
      'Prisma',
      'PostgreSQL',
      'Zod',
      'Groq API (LLM)',
      'Cohere (Embeddings)',
      'Privy (Auth)',
      'Wagmi',
      'Viem',
      'Vercel',
      'Railway',
      'GitHub Actions (CI)'
    ]
  },
  {
    id: 5,
    title: 'MicroMinds',
    category: 'Web3 Development',
    year: '2026',
    role: 'Backend Engineer & AI Engineer',
    client: 'Metropolis Hackathon (Monad) | Team Ketupat',
    description: 'A micro-API marketplace where AI agents discover, call, and pay for APIs per use, with funds held in an escrow smart contract on Monad and released only when the response is valid.',
    img: imgMicroMinds,
    coverImg: imgMicroMinds,
    logo: logoMicroMinds,
    logoBackground: true,
    linkLabel: 'View Website',
    linkUrl: 'https://www.microminds.tech/',
    techStack: [
      'NestJS',
      'TypeScript',
      'PostgreSQL (Supabase)',
      'viem',
      'MCP SDK (TypeScript)',
      'Envio HyperIndex',
      'Zod / Ajv',
      'Alchemy RPC',
      'Monad Testnet',
      'Privy (Auth)',
      'Solidity + Foundry',
      'Next.js',
      'Railway / Render'
    ]
  },
  {
    id: 4,
    title: 'KKN Lanyard',
    category: 'Design Lanyard',
    year: '2024',
    role: 'Graphic Design',
    client: 'KKN group at Gunung Tapa Tengah Village',
    description: 'Designing a cohesive ID lanyard for the 2024 KKN in Gunung Tapa Tengah Village',
    img: landinglanyard,
    coverImg: mockuplanyard,
    logo: logokkn,
    linkLabel: 'View Instagram',
    linkUrl: 'https://www.instagram.com/kkn_gunungtapatengah24?utm_source=ig_web_button_share_sheet&dlrf=ZDNlZDc0MzIxNw==',
    techStack: ['CorelDRAW', 'Inkscape', 'Vector Illustration', 'Mockup Design']
  }
];

export const portfolioData = {
  name: "Grace Yoelanda Turnip",
  heroTitle: "Grace Turnip\nWeb Developer & Graphic Designer",
  aboutTitle: "Creative by Nature",
  projectsTitle: "Projects",
  aboutParagraphs: [
    "I'm Grace, a Web Developer and Graphic Designer based in Indonesia, open to remote work.",
    "I build websites and web apps that work well, and design the visuals that make them worth using. From brand identity and UI design to full-stack development, I like handling the whole journey, so the idea, the look, and the code all stay consistent.",
    "I design interfaces in Figma, then build them with React and Node.js, so nothing gets lost between what a product should look like and what actually ships. Along the way, I've also designed brand and marketing assets for local businesses.",
    "I'm currently finishing my Informatics Engineering degree at Universitas Lampung, where my thesis is a web-based counseling management system. Outside of class, I join hackathons and build Web3 projects with my team, always looking for the next thing to learn and ship."
  ],
  aboutText1: "I'm Grace, a Web Developer and Graphic Designer based in Indonesia, open to remote work.",
  aboutText2: "I build websites and web apps that work well, and design the visuals that make them worth using. From brand identity and UI design to full-stack development, I like handling the whole journey, so the idea, the look, and the code all stay consistent.",
  email: "graceturnip48@gmail.com",
  linkedin: "https://www.linkedin.com/in/graceyoelandaturnip",
  instagram: "https://www.instagram.com/grace_yolanda12?igsh=MW1iNDRkNXN4OXQ1dg==",
  heroImg: imgHero,
  aboutImg: imgAbout,
  projects: projects
};
