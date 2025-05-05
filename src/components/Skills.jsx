import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import { SiTailwindcss, SiMysql } from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Python", icon: <FaPython className="text-yellow-300" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-300" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-400" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
  { name: "HTML", icon: <FaHtml5 className="text-orange-400" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-300" /> },
];

export default function Skills() {
  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="max-w-4xl mx-auto px-6 py-36"
    >
      <h2 className="text-3xl font-bold mb-10 text-purple-400 text-center">Skills</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            className="bg-purple-700/20 hover:bg-purple-700/30 p-4 rounded-lg flex flex-col items-center justify-center transition duration-300"
          >
            <div className="text-3xl mb-2">{skill.icon}</div>
            <p className="text-sm text-white font-medium">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
