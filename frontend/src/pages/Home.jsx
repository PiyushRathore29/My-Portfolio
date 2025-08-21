import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaDownload } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";

function Home() {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white overflow-hidden">
      {/* 3D Background Canvas */}
      <Canvas className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <ambientLight intensity={0.6} />
        <directionalLight position={[4, 5, 2]} />
        <mesh rotation={[Math.PI / 4, Math.PI / 4, 0]}>
          <primitive object={new THREE.TorusKnotGeometry(1, 0.4, 200, 32)} />
          <meshStandardMaterial color="#3b82f6" wireframe />
        </mesh>
      </Canvas>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center px-4 pt-28 pb-12 max-w-4xl mx-auto">
        <motion.h1
          className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hi, I'm <span className="text-blue-500">Piyush Raj</span>
        </motion.h1>

        <motion.div
          className="text-lg sm:text-xl font-medium text-gray-300 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <TypeAnimation
            sequence={[
              "Full Stack Developer 🚀",
              1500,
              "MERN Stack Engineer 💻",
              1500,
              "DSA & Problem-Solving Enthusiast 🧠",
              1500,
              "Tech Explorer & Team Leader 🔍",
              1500,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </motion.div>

        <motion.p
          className="max-w-xl text-sm sm:text-base text-gray-400 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          Full-Stack Developer with MERN expertise, C++, JavaScript & SQL. Passionate about
          building scalable web applications, REST APIs, and cloud-native solutions.
          Currently pursuing B.Tech in IT at IIIT Sonepat (CGPA: 8/10).
        </motion.p>

        {/* Social Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <a
            href="mailto:rathorepiyush221@gmail.com"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full flex items-center gap-2 transition"
            aria-label="Email"
          >
            <FaEnvelope /> Email
          </a>
          <a
            href="tel:+918210071294"
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full flex items-center gap-2 transition"
            aria-label="Call"
          >
            <FaPhone /> Call
          </a>
          <a
            href="https://github.com/PiyushRathore29"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-full flex items-center gap-2 transition"
            aria-label="GitHub"
          >
            <FaGithub /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/piyush-raj-577a36323/" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-full flex items-center gap-2 transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin /> LinkedIn
          </a>
        </motion.div>

        {/* Resume Download */}
        <motion.a
          href="/Piyush_Resume.pdf" // put your resume inside "public/" folder
          download
          className="inline-flex items-center gap-2 px-6 py-3 border border-blue-500 text-blue-500 rounded-full hover:bg-blue-600 hover:text-white transition"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <FaDownload /> Download Resume
        </motion.a>
      </div>
    </section>
  );
}

export default Home;
