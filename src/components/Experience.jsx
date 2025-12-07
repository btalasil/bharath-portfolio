import React from "react";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
      className="
        relative min-h-screen 
        flex flex-col justify-start 
        px-6 py-32 sm:py-36 overflow-hidden
      "
    >
      {/* Animated Background Gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-[#D9E3E8] via-[#C1D0D9] to-[#9AAEB8]"
        animate={{ backgroundPosition: ["0% 0%", "0% 100%"] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        style={{ backgroundSize: "100% 200%" }}
      />

      {/* Floating soft glows */}
      <motion.div
        className="absolute top-40 left-1/2 -translate-x-1/2 
          w-[65%] h-[40%] bg-white/30 blur-[100px] opacity-40"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute bottom-10 left-1/3 
          w-[55%] h-[45%] bg-[#52796F]/30 blur-[130px] opacity-50"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content */}
      <div className="relative max-w-4xl mx-auto w-full">

        {/* Animated Header */}
        <motion.div
          className="flex items-center gap-4 mb-12"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.div
            className="w-12 h-1 bg-[#52796F] rounded-full"
            animate={{ width: ["0px", "50px"] }}
            transition={{ duration: 1 }}
          />
          <h2 className="text-3xl font-semibold text-[#2F3E46] tracking-tight">
            Experience
          </h2>
        </motion.div>

        {/* Experience Card */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.02, rotate: 0.5 }}
          animate={{ y: [0, -5, 0] }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            y: { duration: 5, repeat: Infinity, ease: "easeInOut" }
          }}
          className="
            bg-white/90 backdrop-blur-md 
            p-6 sm:p-8 rounded-2xl shadow-xl border border-[#84A98C]/40 
            hover:shadow-2xl 
            transition-all duration-300 relative overflow-hidden
          "
        >
          {/* Ripple Hover Effect */}
          <span className="absolute inset-0 bg-gradient-to-br from-[#ffffff30] to-[#84A98C20] opacity-0 hover:opacity-100 transition duration-500"></span>

          {/* Title */}
          <h3 className="text-[1.55rem] sm:text-3xl font-bold text-[#2F3E46] tracking-tight relative z-10">
            Internship Trainee <span className="text-[#84A98C]">– Virtusa</span>
          </h3>

          {/* Duration + Location */}
          <p className="text-sm sm:text-base text-[#52796F] mt-2 font-medium relative z-10 flex flex-wrap gap-2">
            <span>Feb 2023 – Jul 2023</span> •
            <span>6 months</span> •
            <span>Hyderabad, India</span> •
            <span>Remote</span>
          </p>

          {/* Bullet Points */}
          <ul className="mt-6 space-y-3 text-[#354F52] text-sm sm:text-base leading-7 relative z-10">
            <li className="flex gap-3">
              <span className="text-[#84A98C] text-lg">•</span>
              Developed and enhanced UI features using JavaScript and React.
            </li>

            <li className="flex gap-3">
              <span className="text-[#84A98C] text-lg">•</span>
              Integrated backend services and REST APIs using Node.js and Express.
            </li>

            <li className="flex gap-3">
              <span className="text-[#84A98C] text-lg">•</span>
              Debugged front-end and back-end modules, improving reliability.
            </li>

            <li className="flex gap-3">
              <span className="text-[#84A98C] text-lg">•</span>
              Worked with MySQL for queries, schema updates, and data handling.
            </li>

            <li className="flex gap-3">
              <span className="text-[#84A98C] text-lg">•</span>
              Collaborated with senior engineers to deliver sprint deliverables on time.
            </li>
          </ul>

          {/* Skills */}
          <p className="mt-6 text-sm sm:text-base text-[#2F3E46] font-bold relative z-10">
            Skills:
            <span className="font-normal text-[#354F52] ml-1">
              Java, JavaScript, React.js, MySQL, Node.js
            </span>
          </p>
        </motion.div>

      </div>
    </motion.section>
  );
}
