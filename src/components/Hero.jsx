import React from "react";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";

export default function Hero() {
  return (
    <motion.section
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen flex flex-col items-center justify-center px-6 bg-gradient-to-b from-purple-800 to-black text-white"
    >
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl font-bold mb-4 text-center"
      >
        Hi, I'm Bharath Kumar
      </motion.h1>

      <motion.p
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 1 }}
        className="text-xl md:text-2xl text-purple-200 text-center"
      >
        Full Stack Developer | ML Enthusiast
      </motion.p>

      <motion.a
        href="/resume.pdf"
        download
        target="_blank"
        rel="noreferrer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
        className="mt-6 inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded shadow-lg transition"
      >
        <FaDownload />
        Download Resume
      </motion.a>
    </motion.section>
  );
}
