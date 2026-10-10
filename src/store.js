import imgAbout from './assets/Foto Grace 2.png';
import imgHero from './assets/Foto Grace.png';
import imgManfaat from './assets/manfaat menjadi member.png';
import imgMobile from './assets/mobile unila care.png';
import imgMulai from './assets/mulai asesemen unila care.png';
import imgArtikel from './assets/artikel unila care.png';
import imgUnilaCare from './assets/upabk mock up.png';
import imgtravel from './assets/landscape banner.png';
import imgTravelInsta from './assets/Grace Travel & Rent Car (4).png';
import imgPathTrick from './assets/PathTrick.png';

export const projects = [
  {
    id: 1,
    title: 'Unila Care',
    category: 'Web Development',
    year: '2025',
    role: 'Fullstack Development',
    client: 'UPA BK Universitas Lampung',
    description: 'A full-stack web platform for counseling registration and psychological assessment at University of Lampung.',
    img: imgUnilaCare,
    linkLabel: 'View Website',
    linkUrl: 'https://upa-bk.unila.ac.id',
    blocks: [
      { id: 'b1', type: 'text', heading: 'The Problem', content: 'University of Lampung had no digital platform for counseling services. Students, lecturers, and staff had no accessible way to register for counseling sessions, assess their psychological well-being, or find relevant mental health resources, all of which are critical needs in a university environment.' },
      { id: 'b2', type: 'text', heading: 'What We Did', content: 'I built the platform from the ground up, handling UI/UX design, front-end development with ReactJS, back-end development with Laravel, and PostgreSQL as the database. The team collaborated via GitHub, used Postman for API testing, and integrated Brevo for email notifications. Back-end development was shared with one collaborator, where I focused on the web platform while my partner handled the mobile version.' },
      { id: 'b3', type: 'text', heading: 'The Solution', content: 'A full-stack web platform where users can register for counseling sessions and complete a psychological assessment that measures their well-being across 6 psychological dimensions. After completing the assessment, users receive a detailed breakdown of each dimension, showing which areas need improvement. They can then read curated articles organized per dimension to help improve their mental health. If their overall score is low, the platform strongly recommends booking a session with a psychologist available at University of Lampung.' },
      { id: 'b4', type: 'text', heading: 'Outcome', content: 'The platform is fully deployed and publicly accessible at upa-bk.unila.ac.id, serving the entire University of Lampung community including students, lecturers, and staff with an integrated system for psychological assessment, counseling registration, and mental health education.' },
      { id: 'b5', type: 'image', src: imgManfaat },
      { id: 'b6', type: 'image', src: imgMobile },
      { id: 'b7', type: 'image', src: imgMulai },
      { id: 'b8', type: 'image', src: imgArtikel }
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
    img: imgtravel,
    linkLabel: 'View Instagram',
    linkUrl: 'https://www.instagram.com/gracerentaltravel?stkn=MTdqZG9qNTFxbm5jMA==',
    blocks: [
      { id: 'b1', type: 'text', heading: 'The Problem', content: 'Grace Travel and Rent Car is a car rental business in Palembang that needed a promotional visual to attract customers. The design had to show the available vehicles, the starting price, and how to book, all in a single poster that works on social media and in print. The challenge was fitting a lot of information into one layout without making it feel crowded.' },
      { id: 'b2', type: 'text', heading: 'What I Did', content: 'I designed the poster from scratch, from the visual concept and layout to the color palette and typography. I chose red, black, and white to convey confidence and reliability, and used a dark brick-wall texture as the background so the vehicles stand out. Each car (Pajero Sport, Xpander, Avanza, and Innova) sits in an alternating white and red card with its model name in large type behind it, making every option easy to tell apart. I also created a billboard mockup to show how the design looks in a real public space.' },
      { id: 'b3', type: 'text', heading: 'The Solution', content: 'The final poster guides the reader clearly from top to bottom:\n- Headline and tagline at the top to establish the brand.\n- Four vehicle options in a consistent, repeating layout.\n- A gold "Start from 350K/day" sticker to highlight the price.\n- A "Book Now" button as a clear call to action.\n- Contact details (Instagram, phone, address) at the bottom so customers can reach out right away.' },
      { id: 'b4', type: 'text', heading: 'Outcome', content: 'The poster became the main promotional material for Grace Travel and Rent Car, ready for both social media and print use.' },
      { id: 'b7', type: 'image', src: imgTravelInsta },
      { id: 'b8', type: 'image', src: imgtravel }
    ]
  },
  {
    id: 3,
    title: 'PathTrick',
    category: 'Web3 Dev',
    year: '2026',
    role: 'Backend and Frontend',
    client: 'Hackathon',
    description: 'A sensory restaurant experience: moody imagery, reservation flow in two taps, and menus that reveal course by course.',
    img: imgPathTrick,
    blocks: []
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
    blocks: []
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
