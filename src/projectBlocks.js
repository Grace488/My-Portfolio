import imgManfaat from './assets/unila-care/manfaat menjadi member.webp';
import imgMobile from './assets/unila-care/mobile unila care.webp';
import imgMulai from './assets/unila-care/mulai asesemen unila care.webp';
import imgArtikel from './assets/unila-care/artikel unila care.webp';
import imgTravelInsta from './assets/rental/Grace Travel & Rent Car (4).webp';
import imgtravel from './assets/rental/landscape banner.webp';
import imgPathTrick1 from './assets/pathtrick/imgPathTrick 1.webp';
import imgPathTrick2 from './assets/pathtrick/pathrick2.png';
import videoPathTrick from './assets/pathtrick/PathTrick - Discover Your Path, Build Your Future.mp4';
import imglandyard1 from './assets/kkn-lanyard/lanyard3 (2).png';
import imglandyard2 from './assets/kkn-lanyard/foto pemakaian lanyard.png';
import imglandyard3 from './assets/kkn-lanyard/mockup lanyard 2.png';
import landinglanyard from './assets/kkn-lanyard/landing page lanyard.png';


export const projectBlocksMap = {
  1: [
    { id: 'b1', type: 'text', heading: 'The Problem', content: 'University of Lampung had no digital platform for counseling services. Students, lecturers, and staff had no accessible way to register for counseling sessions, assess their psychological well-being, or find relevant mental health resources, all of which are critical needs in a university environment.' },
    { id: 'b2', type: 'text', heading: 'What We Did', content: 'I built the platform from the ground up, handling UI/UX design, front-end development with ReactJS, back-end development with Laravel, and PostgreSQL as the database. The team collaborated via GitHub, used Postman for API testing, and integrated Brevo for email notifications. Back-end development was shared with one collaborator, where I focused on the web platform while my partner handled the mobile version.' },
    { id: 'b3', type: 'text', heading: 'The Solution', content: 'A full-stack web platform where users can register for counseling sessions and complete a psychological assessment that measures their well-being across 6 psychological dimensions. After completing the assessment, users receive a detailed breakdown of each dimension, showing which areas need improvement. They can then read curated articles organized per dimension to help improve their mental health. If their overall score is low, the platform strongly recommends booking a session with a psychologist available at University of Lampung.' },
    { id: 'b4', type: 'text', heading: 'Outcome', content: 'The platform is fully deployed and publicly accessible at upa-bk.unila.ac.id, serving the entire University of Lampung community including students, lecturers, and staff with an integrated system for psychological assessment, counseling registration, and mental health education.' },
    { id: 'b5', type: 'image', src: imgManfaat },
    { id: 'b6', type: 'image', src: imgMobile },
    { id: 'b7', type: 'image', src: imgMulai },
    { id: 'b8', type: 'image', src: imgArtikel }
  ],
  2: [
    { id: 'b1', type: 'text', heading: 'The Problem', content: 'Grace Travel and Rent Car is a car rental business in Palembang that needed a promotional visual to attract customers. The design had to show the available vehicles, the starting price, and how to book, all in a single poster that works on social media and in print. The challenge was fitting a lot of information into one layout without making it feel crowded.' },
    { id: 'b2', type: 'text', heading: 'What I Did', content: 'I designed the poster from scratch, from the visual concept and layout to the color palette and typography. I chose red, black, and white to convey confidence and reliability, and used a dark brick-wall texture as the background so the vehicles stand out. Each car (Pajero Sport, Xpander, Avanza, and Innova) sits in an alternating white and red card with its model name in large type behind it, making every option easy to tell apart. I also created a billboard mockup to show how the design looks in a real public space.' },
    { id: 'b3', type: 'text', heading: 'The Solution', content: 'The final poster guides the reader clearly from top to bottom:\n- Headline and tagline at the top to establish the brand.\n- Four vehicle options in a consistent, repeating layout.\n- A gold "Start from 350K/day" sticker to highlight the price.\n- A "Book Now" button as a clear call to action.\n- Contact details (Instagram, phone, address) at the bottom so customers can reach out right away.' },
    { id: 'b4', type: 'text', heading: 'Outcome', content: 'The poster became the main promotional material for Grace Travel and Rent Car, ready for both social media and print use.' },
    { id: 'b7', type: 'image', src: imgTravelInsta },
    { id: 'b8', type: 'image', src: imgtravel }
  ],
  3: [
    { id: 'b1', type: 'text', heading: 'The Problem', content: 'Indonesian students face a broken education-to-career pipeline with no personalized guidance. High school students are overwhelmed by universities, majors, and scholarships, while university students often discover their skill gaps only when applying for jobs. Meanwhile, course certificates are easy to fake, and existing platforms offer generic advice or demand complex Web3 tools like wallets and gas fees.' },
    { id: 'b2', type: 'text', heading: 'What We Did', content: 'PathTrick was built by Team Ketupat, a team of four. I was the full-stack developer: I built the REST API (Fastify, TypeScript, PostgreSQL, Prisma), the 3-agent AI system (LLaMA 3.3 via Groq, with RAG and guardrails), and the gasless SBT minting flow. On the front-end, I built the gamified UI with Next.js and Phaser.js. I also helped design the world map and produce the project video.' },
    { id: 'b3', type: 'text', heading: 'The Solution', content: 'PathTrick is a Web3 AI Career Coach built on the principle "crypto invisible, value visible." Its AI analyzes each user\'s interests, grades, and CV to generate a personalized roadmap of universities, scholarships, and courses in under 10 seconds. Users then progress through a 12-stage world map, earning XP through quizzes, coding labs, and mini projects. Every passed course mints a Soulbound Token on BSC Testnet as tamper-proof proof of skill, with gas fees covered by the platform.' },
    { id: 'b4', type: 'text', heading: 'Outcome', content: 'Our team shipped the full-stack platform within the hackathon timeline. All three AI agents run with guardrails, the gasless SBT pipeline was tested end-to-end on BSC Testnet, and the back-end exposes 15+ REST endpoints. Users sign in with just an email and receive blockchain credentials without any crypto knowledge.' },
    { id: 'b5', type: 'image', src: imgPathTrick1 },
    { id: 'b6', type: 'image', src: imgPathTrick2 },
    { id: 'b7', type: 'video', src: videoPathTrick }
  ],
  4: [
    { id: 'b1', type: 'text', heading: 'The Problem', content: 'During their community service program in Gunung Tapak Tengah Village, the KKN team needed a distinctive visual identity that was functional, memorable, and easily recognizable by local villagers. Standard ID cards lacked character, so the challenge was creating a custom lanyard and card system that fostered team solidarity while presenting an approachable, professional image to the community.' },
    { id: 'b2', type: 'text', heading: 'What I Did', content: 'Working as the solo graphic designer, I conceptualized and crafted vector assets in Inkscape, developing an owl mascot as the central motif to symbolize wisdom and dedication. I explored 4 distinct color palettes—ranging from bold, grounded tones to warm natural hues—giving the team flexible aesthetic options tailored to different field environments.' },
    { id: 'b3', type: 'text', heading: 'The Solution', content: 'A cohesive visual identity system centered around a custom owl mascot, unified typography, and four versatile color palettes. The deliverable included ready-to-print strap patterns, matching ID card layouts, and realistic mockups of both straps and cardholders to ensure seamless production and visualize the final wearable look.' },
    { id: 'b4', type: 'text', heading: 'Outcome', content: 'The selected design was successfully printed and worn by all KKN members throughout the 2024 program in Gunung Tapak Tengah Village. It served not only as practical identification in the field, but also as a memorable keepsake that reinforced team unity and community connection.' },
    { id: 'b5', type: 'image', src: imglandyard1},
    { id: 'b6', type: 'image', src: imglandyard2},
    { id: 'b7', type: 'image', src: imglandyard3},
    { id: 'b8', type: 'image', src: landinglanyard},
  ],
};

export function getProjectBlocks(id) {
  return projectBlocksMap[id] || [];
}
