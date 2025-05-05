import React from "react";
import { motion } from "framer-motion";

const data = [
  {
    title: "YouTube Spam Detection",
    desc: "A machine learning model trained to detect spam in YouTube comments using natural language processing techniques. It classifies comments as spam or not based on text patterns, keywords, and sentiment features.",
  },
  {
    title: "ML Image Captioning",
    desc: "Python project that uses CNNs and LSTMs to describe images using deep learning.",
  },
  {
    title: "ASL Alphabet Recognition",
    desc: "A deep learning model built with PyTorch to recognize American Sign Language (ASL) alphabets from image data. It uses a Convolutional Neural Network (CNN) trained on grayscale hand gesture images to accurately classify letters in real time.",
  }
];

export default function Projects() {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: false, amount: 0.2 }}
      className="max-w-6xl mx-auto px-6 py-36"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
        className="text-3xl font-bold mb-10 text-purple-400"
      >
        Projects
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-10">
        {data.map((project, i) => (
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            key={i}
            className="bg-white/5 p-6 rounded-xl border border-white/10 shadow-lg transition"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.8 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <h3 className="text-xl font-semibold text-purple-300">{project.title}</h3>
            <p className="text-gray-300 mt-2">{project.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
