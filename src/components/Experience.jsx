import React from "react";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <motion.section id="experience" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="max-w-4xl mx-auto px-6 py-36">
      <h2 className="text-3xl font-bold mb-6 text-purple-400">Experience</h2>
      <div className="bg-white/5 border border-white/10 p-6 rounded-xl shadow-md">
        <h3 className="text-xl font-semibold text-purple-300">Software Engineering Intern – Virtusa</h3>
        <p className="text-gray-300 text-sm">June 2023 – November 2023</p>
        <p className="text-gray-300 mt-2">Worked on real-time web development tasks including UI enhancements, debugging, and integration of frontend with backend using JavaScript and Python tools.</p>
        </div>
        <br></br>
        <div className="bg-white/5 border border-white/10 p-6 rounded-xl shadow-md">
        <h3 className="text-xl font-semibold text-purple-300">Research Assistant –  CMRIT College, Hyderabad</h3>
        <p className="text-gray-300 text-sm">October 2022 – March 2023</p>
        <p className="text-gray-300 mt-2">Worked on an image captioning project using Python and machine learning.Designed experiments, gathered data, and performed statistical analysis.
        Assisted with lab equipment maintenance and supported junior researchers.</p>
      </div>
    </motion.section>
  );
}