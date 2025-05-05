import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      className="max-w-4xl mx-auto px-6 py-36"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl font-bold mb-6 text-purple-400"
      >
        About Me
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 1 }}
        className="text-gray-300 leading-7"
      >
        I'm a Computer Science graduate student at Auburn University at Montgomery (AUM),
        driven by a passion for full-stack web development and machine learning. I thrive
        on building responsive, elegant, and high-performance applications that solve
        real-world challenges.
        <br /><br />
        My journey spans front-end technologies like React and TailwindCSS to backend
        frameworks including Node.js and Python. I've also explored deploying deep learning
        models and automating workflows using modern cloud tools.
        <br /><br />
        Whether it's developing user-centric interfaces or engineering robust backend systems,
        I enjoy turning ideas into impactful solutions. I'm always excited to learn,
        collaborate, and push the boundaries of what's possible with code.
      </motion.p>
    </motion.section>
  );
}
