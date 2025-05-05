import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      className="max-w-4xl mx-auto px-6 py-36 min-h-screen"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl font-bold mb-6 text-purple-400"
      >
        Get In Touch
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <p className="text-gray-300 flex items-center gap-2 mb-4">
          <FaEnvelope className="text-blue-400" size={18} />
          <a
            href="mailto:btalasil@aum.edu"
            className="text-blue-400 hover:underline"
          >
            btalasil@aum.edu
          </a>
        </p>

        <p className="text-gray-300 flex items-center gap-2">
          <FaLinkedin className="text-blue-400" size={20} />
          <a
            href="https://www.linkedin.com/in/bharath-kumar-talasila/"
            target="_blank"
            rel="noreferrer"
            className="text-blue-400 hover:underline"
          >
            linkedin.com/in/bharath-kumar
          </a>
        </p>
      </motion.div>
    </motion.section>
  );
}
