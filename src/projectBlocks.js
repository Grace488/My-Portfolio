import imgManfaat from './assets/manfaat menjadi member.webp';
import imgMobile from './assets/mobile unila care.webp';
import imgMulai from './assets/mulai asesemen unila care.webp';
import imgArtikel from './assets/artikel unila care.webp';
import imgTravelInsta from './assets/Grace Travel & Rent Car (4).webp';
import imgtravel from './assets/landscape banner.webp';
import imgPathTrick1 from './assets/imgPathTrick 1.webp';

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
    { id: 'b1', type: 'text', heading: 'The Problem', content: 'Indonesian students face a broken education-to-career pipeline with no personalized guidance. High school students are overwhelmed by the number of universities, majors, and scattered scholarship information, with no tailored advice on which path fits them. University students and fresh graduates often discover their skill gaps only when applying for jobs, which is far too late. On top of that, traditional course certificates are easily falsified, so recruiters have no reliable way to trust a candidate\'s credentials. Existing platforms either give generic advice, require complex Web3 tools like wallets and gas fees, or fail to provide verifiable proof of skill completion.' },
    { id: 'b2', type: 'text', heading: 'What We Did', content: 'I worked as the full-stack developer, building both the user-facing interfaces and the server-side AI and blockchain integration. On the back-end, I built a modular REST API with Fastify v5, TypeScript, PostgreSQL, and Prisma, secured with Privy server-side auth and JWT sessions. I implemented a 3-agent AI system powered by LLaMA 3.3 70B via Groq: Chaser creates roadmaps for high school students, Scholar analyzes CVs and portfolios for career gaps, and a Course Generator uses RAG with OpenAI embeddings and pgvector. A guardrail engine with Zod validation and deterministic fallback keeps AI responses valid, while BullMQ and Redis handle heavy AI jobs asynchronously. I also engineered the gasless SBT minting flow using EIP-712 signing with Viem. On the front-end, I built the gamified UI with Next.js, TypeScript, and Tailwind CSS, including an interactive Phaser.js world map, a Bento Grid dashboard managed with Zustand, and the full onboarding flow from RIASEC assessment to AI roadmap.' },
    { id: 'b3', type: 'text', heading: 'The Solution', content: 'PathTrick is a Web 2.5 AI Career Coach that follows the principle "crypto invisible, value visible." Its multi-agent AI analyzes each user\'s interests, grades, skills, and CV to generate a personalized roadmap of universities, scholarships, and courses in under 10 seconds. Users then progress through a 12-stage world map, completing reading, quizzes, live coding labs, and AI-reviewed mini projects to earn XP and unlock the next stage. When a course is passed, the platform mints a Soulbound Token (BEP-1155 on BSC Testnet) to the user\'s embedded wallet as permanent, tamper-proof proof of skill. The backend treasury covers all gas fees, so users simply experience it as earning a certificate. Course content is kept relevant through vector search over a curated knowledge base instead of static material.' },
    { id: 'b4', type: 'text', heading: 'Outcome', content: 'The full-stack AI and Web3 platform was successfully shipped within the hackathon timeline. All three AI agents are fully operational with guardrails ensuring valid structured responses, and the gasless SBT pipeline was tested end-to-end on BSC Testnet, from EIP-712 signing to on-chain mint to database confirmation. The back-end exposes 15+ REST endpoints covering authentication, assessment, AI roadmap, course progression, gamification, and certificate issuance, while the Phaser.js world map ties 12 unlockable stages to real course completion. Users log in with just an email via Privy and receive blockchain credentials without any crypto knowledge, and the concept was validated across two user personas: high school and university students.' },
    { id: 'b5', type: 'image', src: imgPathTrick1 },
    { id: 'b6', type: 'image', src: imgPathTrick1 }
  ],
  4: []
};

export function getProjectBlocks(id) {
  return projectBlocksMap[id] || [];
}
