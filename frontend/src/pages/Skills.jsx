import React from "react";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";

const categorizedSkills = {
  "Programming Languages": [
    { name: "C", icon: "💻" },
    { name: "C++", icon: "🧠" },
    { name: "Java", icon: "☕" },
    { name: "Python", icon: "🐍" },
    { name: "JavaScript", icon: "⚡" },
    { name: "TypeScript", icon: "🔷" },
    { name: "SQL", icon: "🗄️" },
    { name: "HTML", icon: "🌐" },
    { name: "CSS", icon: "🎨" },
  ],
  "Frontend Development": [
    { name: "React.js", icon: "⚛️" },
    { name: "Next.js", icon: "⏭️" },
    { name: "Tailwind CSS", icon: "💨" },
  ],
  "Backend Development": [
    { name: "Node.js", icon: "🌿" },
    { name: "Express.js", icon: "🚀" },
    { name: "REST APIs", icon: "🔗" },
    { name: "Socket.io", icon: "🔌" },
  ],
  "Databases": [
    { name: "MongoDB", icon: "🍃" },
    { name: "MySQL", icon: "🛢️" },
  ],
  "Tools & Platforms": [
    { name: "Git", icon: "🔧" },
    { name: "GitHub", icon: "🐙" },
    { name: "VS Code", icon: "🖊️" },
    { name: "Linux", icon: "🐧" },
    { name: "Postman", icon: "📮" },
  ],
  "Concepts": [
    { name: "Data Structures & Algorithms", icon: "📐" },
    { name: "OOP", icon: "🧩" },
    { name: "Operating Systems", icon: "💾" },
    { name: "DBMS", icon: "🗂️" },
    { name: "Computer Networks", icon: "🌍" },
    { name: "JWT Auth", icon: "🔐" },
    { name: "WebSockets", icon: "📡" },
  ],
};

function Skills() {
  return (
    <section className="w-full py-20 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Tech Stack & Skills
        </motion.h2>

        {Object.entries(categorizedSkills).map(([category, skills], index) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h3 className="text-xl font-semibold text-blue-400 mb-4">
              {category}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {skills.map((skill, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/10 border border-white/20 rounded-xl px-4 py-6 text-center hover:bg-white/20 transition"
                >
                  <div className="text-3xl mb-2">{skill.icon}</div>
                  <div className="text-md font-medium">{skill.name}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}

        {/* CTA Button */}
        <div className="text-center mt-10">
          <a
            href="/myresume.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition"
          >
            <FaDownload /> Download Full Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default Skills;
