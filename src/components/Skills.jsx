import React from "react";
import { motion } from "framer-motion";

// Icons
import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaGitAlt,
  FaAngular,
  FaAws,
  FaDocker,
  FaCloud,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiMysql,
  SiMongodb,
  SiExpress,
  SiTypescript,
  SiJavascript,
  SiSpringboot,
  SiRedis,
  SiKubernetes,
  SiGithubactions,
} from "react-icons/si";

import { TbApi } from "react-icons/tb";
import { MdOutlineHub } from "react-icons/md";
import { RiShieldKeyholeLine } from "react-icons/ri";

// Skill List
const skills = [
  { name: "React", icon: <FaReact className="text-cyan-500" /> },
  { name: "Angular", icon: <FaAngular className="text-red-500" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "Java", icon: <FaJava className="text-orange-500" /> },
  { name: "Spring Boot", icon: <SiSpringboot className="text-green-600" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-700" /> },
  { name: "REST APIs", icon: <TbApi className="text-emerald-600" /> },
  { name: "Microservices", icon: <MdOutlineHub className="text-purple-500" /> },
  { name: "JWT / OAuth2", icon: <RiShieldKeyholeLine className="text-indigo-500" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-400" /> },
  { name: "Redis", icon: <SiRedis className="text-red-500" /> },
  { name: "Azure", icon: <FaCloud className="text-blue-500" /> },
  { name: "AWS", icon: <FaAws className="text-yellow-500" /> },
  { name: "Docker", icon: <FaDocker className="text-blue-400" /> },
  { name: "Kubernetes", icon: <SiKubernetes className="text-blue-600" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
  { name: "GitHub Actions", icon: <SiGithubactions className="text-gray-800" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
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
      <div
        className="absolute inset-0 bg-gradient-to-b 
        from-[#E8EEF1] via-[#C8D5E0] to-[#90A4AE]"
      ></div>

      <div className="relative max-w-6xl mx-auto">
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

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15 }}
            className="text-[#354F52] text-sm sm:text-base text-center mt-3 max-w-2xl"
          >
            Full stack development, cloud engineering, APIs, and scalable backend systems.
          </motion.p>
        </div>

        <div
          className="
            grid
            grid-cols-2
            sm:grid-cols-3
            md:grid-cols-4
            lg:grid-cols-5
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
                delay: index * 0.06,
                ease: "easeOut",
              }}
              whileHover={{
                scale: 1.1,
                y: -6,
                rotate: 1.5,
                boxShadow: "0px 12px 25px rgba(82, 121, 111, 0.25)",
              }}
              className="
                bg-white/95
                backdrop-blur-sm
                p-4 sm:p-5
                rounded-xl
                shadow-md
                border border-[#84A98C]/40
                text-center
                w-28 sm:w-32 md:w-36
                transition cursor-pointer
              "
            >
              <motion.div
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.2 }}
                className="text-3xl sm:text-4xl mb-2 flex justify-center"
              >
                {skill.icon}
              </motion.div>

              <p className="text-[#354F52] font-medium text-xs sm:text-sm leading-tight">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}