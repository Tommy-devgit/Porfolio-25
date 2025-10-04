import React from "react";
import { motion, type Variants } from "framer-motion";
import Tilt from "react-parallax-tilt"; // better maintained than react-tilt
import { Github } from "lucide-react";

import projectImage1 from "../assets/projectImg/Befa-Empower-Your-Finances-Simplify-Your-Success-09-08-2025_05_58_PM.png"
import projectImage2 from "../assets/projectImg/Blogger-09-08-2025_06_06_PM.png"
import projectImage3 from "../assets/projectImg/CRUD-App-09-08-2025_04_19_PM.png"
import projectImage4 from "../assets/projectImg/CineTrack-09-08-2025_04_28_PM.png"
import projectImage5 from "../assets/projectImg/Design-Pattern-Catalog-09-08-2025_04_47_PM.png"
import projectImage6 from "../assets/projectImg/Dr-Paulos-09-08-2025_06_25_PM.png"
import projectImage7 from "../assets/projectImg/Oromia-Land-Bureau-Home-09-08-2025_04_41_PM.png"
import projectImage8 from "../assets/projectImg/Phone-Plaza-09-08-2025_06_21_PM.png"
import { CgVercel } from "react-icons/cg";
// Example project data
const projects = [
  {
    name: "Befa",
    description:
      "Empower your finances with Befa. A modern platform to simplify money management and track success.",
    image: projectImage1,
    source_code_link: "https://github.com/tomasmelesse/befa",
    vercel: "https://befa.vercel.app",
    tags: [
      { name: "React", color: "text-sky-400" },
      { name: "TypeScript", color: "text-blue-500" },
      { name: "Tailwind", color: "text-teal-300" },
    ],
  },
  {
    name: "Blogger",
    description:
      "A full-featured blogging platform with authentication, content management, and responsive UI.",
    image: projectImage2,
    source_code_link: "https://github.com/tomasmelesse/blogger",
    vercel: "https://blogger.vercel.app",
    tags: [
      { name: "React", color: "text-sky-400" },
      { name: "Firebase", color: "text-yellow-300" },
      { name: "Chakra UI", color: "text-teal-400" },
    ],
  },
  {
    name: "Task Manager",
    description:
      "Minimal task management app with Firestore backend and responsive design.",
    image: projectImage3,
    source_code_link: "https://github.com/tomasmelesse/taskmanager",
    vercel: "https://taskmanager.vercel.app",
    tags: [
      { name: "React", color: "text-sky-400" },
      { name: "Firestore", color: "text-yellow-300" },
      { name: "Tailwind", color: "text-teal-300" },
    ],
  },
  {
    name: "CineTrack",
    description:
      "Movie management and borrowing system with Chakra UI & Firestore. Smooth navigation with sidebar-based layout.",
    image: projectImage4,
    source_code_link: "https://github.com/tomasmelesse/cinetrack",
    vercel: "https://cinetrack.vercel.app",
    tags: [
      { name: "Chakra UI", color: "text-teal-400" },
      { name: "Firestore", color: "text-yellow-300" },
      { name: "React", color: "text-sky-400" },
    ],
  },
  {
    name: "Design Pattern Catalog",
    description:
      "An interactive catalog of design patterns with practical examples for developers.",
    image: projectImage5,
    source_code_link: "https://github.com/tomasmelesse/design-pattern-catalog",
    vercel: "https://designpatterncatalog.vercel.app",
    tags: [
      { name: "React", color: "text-sky-400" },
      { name: "TypeScript", color: "text-blue-500" },
      { name: "Tailwind", color: "text-teal-300" },
    ],
  },
  {
    name: "Dr Paulos",
    description:
      "A professional website for Dr Paulos with modern UI, appointment booking, and service sections.",
    image: projectImage6,
    source_code_link: "https://github.com/tomasmelesse/drpaulos",
    vercel: "https://drpaulos.vercel.app",
    tags: [
      { name: "React", color: "text-sky-400" },
      { name: "Tailwind", color: "text-teal-300" },
      { name: "Vite", color: "text-purple-400" },
    ],
  },
  {
    name: "Oromia Land Bureau",
    description:
      "Government project site for Oromia Land Bureau. Provides services, resources, and digital forms.",
    image: projectImage7,
    source_code_link: "https://github.com/tomasmelesse/oromia-land-bureau",
    vercel: "https://oromialandbureau.vercel.app",
    tags: [
      { name: "React", color: "text-sky-400" },
      { name: "TypeScript", color: "text-blue-500" },
      { name: "Tailwind", color: "text-teal-300" },
    ],
  },
  {
    name: "Phone Plaza",
    description:
      "An e-commerce platform for buying and browsing phones with a sleek dark theme.",
    image: projectImage8,
    source_code_link: "https://github.com/tomasmelesse/phone-plaza",
    vercel: "https://phoneplaza.vercel.app",
    tags: [
      { name: "React", color: "text-sky-400" },
      { name: "Firebase", color: "text-yellow-300" },
      { name: "Tailwind", color: "text-teal-300" },
    ],
  },
];



// Define types for tags and project props
interface Tag {
  name: string;
  color: string;
}

interface Project {
  name: string;
  description: string;
  tags: Tag[];
  image: string;
  source_code_link: string;
}

interface ProjectCardProps extends Project {
  index: number;
}


// Animation variants
const fadeIn: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, delay: i * 0.2 },
  }),
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => (
  <motion.div
    custom={index}
    variants={fadeIn}
    initial="hidden"
    animate="show"
    className="sm:w-[360px] w-full"
  >
    <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} className="bg-[#111] p-5 rounded-2xl shadow-lg">
      <div className="relative w-full h-[230px]">
        <img src={image} alt={name} className="w-full h-full object-cover rounded-2xl" />
        <div className="absolute inset-0 flex justify-end m-3 gap-1">
          <button
            onClick={() => window.open(source_code_link, "_blank")}
            className="bg-black/70 w-10 h-10 rounded-full flex justify-center items-center hover:bg-blue-500/80 transition"
          >
            <Github size={18} className="text-white" />
          </button>
          <button
            onClick={() => window.open(source_code_link, "_blank")}
            className="bg-black/70 w-10 h-10 rounded-full flex justify-center items-center hover:bg-blue-500/80 transition"
          >
            <CgVercel size={18} className="text-white" />
          </button>
        </div>
      </div>

      <div className="mt-5">
        <h3 className="text-white font-bold text-[20px]">{name}</h3>
        <p className="mt-2 text-gray-400 text-[14px]">{description}</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span key={tag.name} className={`text-[13px] ${tag.color}`}>
            #{tag.name}
          </span>
        ))}
      </div>
    </Tilt>
  </motion.div>
);

const Works: React.FC = () => (
  <section className="py-20 max-w-8xl mx-auto px-6">
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", delay: 0.2 }}
      className="text-center mb-12"
    >
      <p className="text-gray-400 uppercase tracking-widest">My Work</p>
      <h2 className="text-4xl font-bold text-white">Projects</h2>
    </motion.div>

    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
      className="text-gray-400 text-center max-w-3xl mx-auto"
    >
      Here are some projects that highlight my skills in frontend and backend
      development. Each one comes with its source code for deeper exploration.
    </motion.p>

    <div className="mt-16 flex flex-wrap justify-around gap-8">
      {projects.map((project, index) => (
        <ProjectCard key={index} index={index} {...project} />
      ))}
    </div>
  </section>
);

export default Works;
