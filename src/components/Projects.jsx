import React from "react";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "NextHire-AI",
      desc: "NextHire-AI helps users track their job applications and compare their resume with job descriptions using AI-powered analysis.",
      link: "https://nexthire-ai.onrender.com",
      github: "https://github.com/btalasil/nexthire-ai",
      img: process.env.PUBLIC_URL + "/project1.png",
    },
    {
      title: "Spotify UI",
      desc: "A front-end UI replica of Spotify designed using pure HTML and CSS, focusing on layout structure, responsive design, and modern visual styling.",
      link: "https://btalasil.github.io/spotify-web-player/",
      github: "https://github.com/btalasil/spotify-web-player",
      img: process.env.PUBLIC_URL + "/project2.png",
    },
    {
      title: "ASL Alphabet Recognition",
      desc: "A CNN-based model trained on hand gesture images to classify American Sign Language alphabets.",
      link: "#/project3",
      github: "https://github.com/btalasil/your-asl-repo",
      img: "/project3.png",
    },
  ];

  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="relative min-h-screen w-full px-4 py-20 sm:px-6 sm:py-28 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b 
        from-[#E8EEF1] via-[#C8D5E0] to-[#90A4AE]"></div>

      <div className="absolute top-0 left-1/2 -translate-x-1/2 
        w-[80%] sm:w-[70%] h-[45%] bg-white/40 blur-[120px] opacity-60"></div>

      <div className="absolute bottom-0 left-1/3 
        w-[70%] sm:w-[60%] h-[50%] bg-[#546E7A]/40 blur-[140px] opacity-60"></div>

      <div className="relative max-w-6xl mx-auto">

        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, letterSpacing: "14px", y: 25 }}
          whileInView={{ opacity: 1, letterSpacing: "1px", y: 0 }}
          transition={{ duration: 1.4, ease: "easeOut", delay: 0.3 }}
          className="text-3xl sm:text-4xl font-bold text-[#2F3E46] mb-12 sm:mb-16"
        >
          Projects
        </motion.h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 sm:gap-12">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60, rotate: 3 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{
                duration: 0.8,
                delay: i * 0.15,
                ease: "easeOut",
              }}
              whileHover={{
                scale: 1.04,
                y: -12,
                transition: { duration: 0.25 },
              }}
              viewport={{ once: false, amount: 0.3 }}
              className="rounded-2xl bg-white/90 backdrop-blur-xl shadow-xl
                border border-gray-200 hover:shadow-2xl transition-all 
                duration-200 cursor-pointer overflow-hidden"
            >
              {/* IMAGE WRAPPER */}
              <div className="w-full h-40 sm:h-56 bg-white flex items-center justify-center overflow-hidden rounded-t-2xl">
                <img
                  src={p.img}
                  alt={p.title}
                  className="max-h-full max-w-full object-contain transition-transform duration-700"
                />
              </div>
              <div className="w-full h-px bg-gray-300"></div>

              {/* BOTTOM SECTION */}
              <div className="px-5 py-5 bg-[#EFE6DD] backdrop-blur-sm border-t border-gray-300 min-h-[200px] sm:min-h-[220px] flex flex-col justify-between">

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-semibold text-[#1F2B33] mb-2 tracking-tight">
                  {p.title}
                </h3>

                {/* Description */}
                <p className="text-[#2A3A3F] text-sm leading-relaxed mb-4">
                  {p.desc}
                </p>

                <div className="w-full h-px bg-gray-300 mb-4"></div>

                {/* Footer Links */}
                <div className="flex items-center justify-between">
                  <a
                    href={p.link}
                    target="_blank"
                    className="text-[#355A52] text-sm font-medium flex items-center gap-1
                      hover:text-[#1F2B33] hover:gap-2 transition-all duration-200"
                  >
                    Live Demo <span className="text-lg">→</span>
                  </a>

                  <a
                    href={p.github}
                    target="_blank"
                    className="flex items-center gap-1 text-sm text-[#355A52]
                      hover:text-[#1F2B33] hover:gap-2 transition-all duration-200"
                  >
                    GitHub
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 .5C5.373.5 0 5.873 0 12.5c0 5.289 3.438 9.773 8.207 11.364.598.111.793-.26.793-.577 
                        0-.285-.011-1.04-.017-2.042-3.338.726-4.042-1.61-4.042-1.61-.545-1.387-1.333-1.757-1.333-1.757
                        -1.089-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 
                        1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605
                        -2.665-.303-5.466-1.334-5.466-5.934 
                        0-1.311.469-2.381 1.236-3.221-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 
                        3.302 1.23a11.52 11.52 0 0 1 3.003-.404c1.018.005 2.045.138 
                        3.004.404 2.292-1.552 3.298-1.23 3.298-1.23.655 1.653.243 2.873.12 
                        3.176.77.84 1.235 1.91 1.235 3.221 
                        0 4.61-2.807 5.628-5.479 5.922.43.37.815 1.102.815 2.222 
                        0 1.606-.015 2.898-.015 3.293 0 .319.192.694.801.576C20.565 
                        22.27 24 17.788 24 12.5 24 5.873 18.627.5 12 .5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
