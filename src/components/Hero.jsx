import React from "react";
import { motion } from "framer-motion";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function Hero() {
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  return (
    <section
      id="home"
      className="
        relative min-h-screen flex items-center 
        px-6 sm:px-10 overflow-hidden
        bg-gradient-to-br from-[#7EA48A] via-[#6C8E73] to-[#5A7865]
      "
    >
      {/* Soft Noise Texture */}
      <div
        className="absolute inset-0 opacity-[0.06] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/asfalt-light.png')",
        }}
      />

      {/* Floating Blobs */}
      <motion.div
        className="absolute top-20 left-6 w-40 h-40 sm:w-64 sm:h-64 rounded-full 
                   bg-[#9fbaff]/35 backdrop-blur-xl shadow-lg"
        animate={{ x: [0, 60, -40, 0], y: [0, -40, 25, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute bottom-24 left-1/4 w-40 h-40 sm:w-56 sm:h-56 rounded-full 
                   bg-[#ffbcd0]/30 backdrop-blur-xl shadow-lg"
        animate={{ x: [0, 40, -25, 0], y: [0, -25, 20, 0] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute bottom-10 right-10 w-40 h-40 sm:w-56 sm:h-56 rounded-full 
                   bg-[#8efcd7]/30 backdrop-blur-xl shadow-lg"
        animate={{ x: [0, -40, 25, 0], y: [0, 30, -18, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Particles */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="absolute inset-0"
        options={{
          fullScreen: false,
          particles: {
            number: { value: 20 },
            size: { value: 2 },
            opacity: { value: 0.4 },
            move: { enable: true, speed: 0.6 },
            color: "#ffffff",
          },
        }}
      />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 sm:gap-20 items-center py-28 sm:py-24">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="text-center md:text-left"
        >
          <p className="text-2xl sm:text-3xl text-white font-semibold mb-3 drop-shadow-[0_4px_12px_rgba(0,0,0,0.55)]">
            Hello, I'm
          </p>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white leading-tight drop-shadow-[0_5px_18px_rgba(0,0,0,0.65)]">
            Bharath Kumar{" "}
            <span className="inline-block animate-wave">👋</span>
          </h1>

          {/* DESCRIPTION */}
          <p className="mt-6 text-base sm:text-[1.15rem] text-white/95 max-w-md mx-auto md:mx-0 leading-relaxed font-light drop-shadow-[0_4px_14px_rgba(0,0,0,0.75)]">
            I'm a MERN Stack Developer who enjoys building clean, fast, and
            intuitive web applications. I work with React, Node.js, Express,
            and MongoDB to create full-stack solutions that feel smooth and
            perform well in the real world.
          </p>

          {/* BUTTONS */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center md:justify-start">
            <a
              href="/resume.pdf"
              download
              className="
                px-7 py-3 rounded-lg bg-white text-black font-semibold
                shadow-lg hover:shadow-xl hover:-translate-y-1
                transition-all text-center
              "
            >
              Download Resume
            </a>

            <a
              href="#projects"
              className="
                px-7 py-3 rounded-lg border border-white/40 text-white font-semibold
                hover:bg-white/10 hover:backdrop-blur-md
                hover:-translate-y-1 transition-all text-center
              "
            >
              View My Work
            </a>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.04, rotate: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center"
        >
          <div
            className="
              rounded-3xl overflow-hidden
              bg-white/95 backdrop-blur-xl
              p-2 border border-white/20
              shadow-[0_0_40px_rgba(255,255,255,0.12)]
              w-[280px] h-[350px] sm:w-[340px] sm:h-[420px] md:w-[380px] md:h-[450px]
            "
          >
            <img
              src="/bharath.jpg"
              alt="Bharath Kumar"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
