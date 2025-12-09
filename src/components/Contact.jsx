import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative px-4 py-24 min-h-screen overflow-hidden"
    >
      {/* Soft Animated Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-[#C7D6CC] via-[#B8C9BD] to-[#A8B7AD]"
        animate={{ backgroundPosition: ["0% 0%", "0% 100%"] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        style={{ backgroundSize: "100% 200%" }}
      />

      {/* Subtle Glow */}
      <motion.div
        className="absolute top-32 left-1/2 -translate-x-1/2 w-[85%] h-[35%] bg-white/30 blur-[100px] opacity-40"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative max-w-md mx-auto bg-white/90 backdrop-blur-lg p-6 sm:p-10 rounded-2xl shadow-xl border border-[#84A98C]/40">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-4 mb-10"
        >
          <div className="w-10 h-1 bg-[#52796F] rounded-full"></div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#2F3E46]">
            Get In Touch
          </h2>
          <div className="w-10 h-1 bg-[#52796F] rounded-full"></div>
        </motion.div>

        {/* Contact Items */}
        <div className="space-y-5 text-[#354F52]">

          {/* Email */}
          <motion.div
            whileHover={{ scale: 1.02, x: 4 }}
            className="flex items-center gap-3 bg-[#F5F7F4] p-4 rounded-xl border border-[#84A98C]/30 shadow-sm hover:shadow-md transition w-full break-all"
          >
            <FaEnvelope size={20} className="text-[#52796F]" />
            <a
              href="mailto:bharathkumartalasila02@gmail.com"
              className="text-[#2F3E46] font-medium hover:underline text-sm sm:text-base"
            >
              bharathkumartalasila02@gmail.com
            </a>
          </motion.div>

          {/* LinkedIn */}
          <motion.div
            whileHover={{ scale: 1.02, x: 4 }}
            className="flex items-center gap-3 bg-[#F5F7F4] p-4 rounded-xl border border-[#84A98C]/30 shadow-sm hover:shadow-md transition w-full break-all"
          >
            <FaLinkedin size={20} className="text-[#52796F]" />
            <a
              href="https://www.linkedin.com/in/bharath-kumar-talasila/"
              target="_blank"
              rel="noreferrer"
              className="text-[#2F3E46] font-medium hover:underline text-sm sm:text-base"
            >
              linkedin.com/in/bharath-kumar-talasila
            </a>
          </motion.div>

          {/* GitHub */}
          <motion.div
            whileHover={{ scale: 1.02, x: 4 }}
            className="flex items-center gap-3 bg-[#F5F7F4] p-4 rounded-xl border border-[#84A98C]/30 shadow-sm hover:shadow-md transition w-full break-all"
          >
            <FaGithub size={20} className="text-[#52796F]" />
            <a
              href="https://github.com/btalasil"
              target="_blank"
              rel="noreferrer"
              className="text-[#2F3E46] font-medium hover:underline text-sm sm:text-base"
            >
              github.com/btalasil
            </a>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
}
