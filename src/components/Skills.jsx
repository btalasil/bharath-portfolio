import React from "react";
import { motion } from "framer-motion";

// Icons
import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiMysql,
  SiMongodb,
  SiExpress,
} from "react-icons/si";

import { TbApi } from "react-icons/tb";

// Skill List
const skills = [
  { name: "React", icon: <FaReact className="text-cyan-500" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-700" /> },
  { name: "REST APIs", icon: <TbApi className="text-emerald-600" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-400" /> },
  { name: "Java", icon: <FaJava className="text-yellow-400" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
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
      className="relative px-4 sm:px-6 py-20 sm:py-28 overflow-hidden"
    >
      {/* Gradient Background Layer */}
      <div
        className="absolute inset-0 bg-gradient-to-b 
        from-[#E8EEF1] via-[#C8D5E0] to-[#90A4AE]"
      ></div>

      {/* Content Wrapper */}
      <div className="relative max-w-4xl mx-auto">

        {/* Title With Animated Icon */}
        <div className="flex flex-col items-center mb-16">
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl text-[#2F3E46]"
          >
            <FaReact className="animate-spin-slow" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl sm:text-4xl font-semibold text-[#2F3E46] text-center mt-4"
          >
            Skills
          </motion.h2>
        </div>

        {/* Skill Grid */}
        <div
          className="
          grid 
          grid-cols-2 
          sm:grid-cols-3 
          md:grid-cols-4 
          gap-4 sm:gap-6 
          justify-items-center
        "
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.7, y: 30 }}
              whileInView={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              whileHover={{
                scale: 1.12,
                y: -6,
                rotate: 1.5,
                boxShadow: "0px 12px 25px rgba(82, 121, 111, 0.25)",
              }}
              className="
                bg-white 
                p-4 sm:p-5 
                rounded-xl 
                shadow-md 
                border border-[#84A98C]/40 
                text-center 
                w-28 sm:w-32 
                transition cursor-pointer
              "
            >
              <motion.div
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.2 }}
                className="text-3xl sm:text-4xl mb-2"
              >
                {skill.icon}
              </motion.div>

              <p className="text-[#354F52] font-medium text-xs sm:text-sm">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
