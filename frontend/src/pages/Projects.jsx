import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Sorting Algorithm Visualizer",
    description:
      "Interactive visual tool built with JavaScript and p5.js to demonstrate sorting algorithms in real time. Improved learning outcomes by 50% in peer surveys and optimized animations with p5.js.",
    github: "https://github.com/PiyushRathore29/Sorting-Algorithm-Visualizer-",
    live: "https://sorting-algorithm-visualizer-beryl.vercel.app/",
  },
  {
    title: "Digital Library Management System (Full Stack)",
    description:
      "MERN-based platform enabling 24/7 access to digital catalogs, book reservations, and returns. Integrated JWT authentication, role-based dashboards, and Express + MongoDB APIs for security and scalability.",
    github: "https://github.com/PiyushRathore29/Digital-Library-System",
    live: "https://digital-library-system.vercel.app/",
  },
  {
    title: "ChatPilot (Full Stack)",
    description:
      "Real-time messaging platform supporting 1,000+ concurrent users with WebSocket (Socket.io). Features include secure JWT auth, encrypted sessions, live status indicators, and 99.9% uptime.",
    github: "https://github.com/PiyushRathore29/ChatPilot",
    live: "https://chatpilot.vercel.app/",
  },
];

function Projects() {
  return (
    <section className="min-h-screen py-20 px-6 bg-[#0f0f0f] text-white">
      <motion.h2
        className="text-4xl font-bold text-center mb-14"
        initial={{ y: -40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        My Projects
      </motion.h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-[#1a1a1a] border border-gray-800 rounded-xl p-6 hover:border-teal-400 transition duration-300 shadow-md"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-3 text-teal-300">{project.title}</h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-5">
              {project.description}
            </p>

            <div className="flex gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 text-sm border border-gray-600 rounded-md hover:border-white transition"
              >
                <FaGithub /> GitHub
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 text-sm bg-teal-600 text-white rounded-md hover:bg-teal-700 transition"
              >
                <FaExternalLinkAlt /> Live Demo
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
