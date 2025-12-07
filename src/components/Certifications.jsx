import React from "react";
import { motion } from "framer-motion";
import { SiChase, SiNvidia, SiOracle } from "react-icons/si";

export default function Certifications() {
  const certs = [
    {
      title: "J.P. Morgan – Software Engineering Job Simulation",
      issuer: "Forage",
      year: "2025",
      icon: <SiChase className="text-blue-700 text-3xl sm:text-4xl md:text-5xl" />,
      url: "https://www.theforage.com/completion-certificates/Sj7temL583QAYpHXD/E6McHJDKsQYh79moz_Sj7temL583QAYpHXD_68ff4434596b3fe0f6018725_1761812686834_completion_certificate.pdf",
    },
    {
      title: "Fundamentals of Deep Learning",
      issuer: "NVIDIA",
      year: "2025",
      icon: <SiNvidia className="text-green-600 text-3xl sm:text-4xl md:text-5xl" />,
      url: "https://learn.nvidia.com/certificates?id=R47_6tCqS2WZH79Plr-T1Q#",
    },
    {
      title: "Oracle Certified Associate, Java SE 8 Programmer",
      issuer: "Oracle",
      year: "2023",
      icon: <SiOracle className="text-red-600 text-3xl sm:text-4xl md:text-5xl" />,
      url: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=898F070B85726914C763BB704BF1CB8593592772E88E97734142FE578DB87EA6#",
    },
  ];

  return (
    <motion.section
      id="certifications"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="
        min-h-screen
        px-4 sm:px-6 
        py-16 sm:py-28
        bg-gradient-to-b from-[#E8EEF1] via-[#C8D5E0] to-[#90A4AE]
      "
    >
      {/* Section Title */}
      <h2 className="text-2xl sm:text-4xl md:text-5xl font-semibold text-center mb-10 sm:mb-16 text-[#2F3E46]">
        Certifications
      </h2>

      {/* Cards Container */}
      <div
        className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          lg:grid-cols-3 
          gap-6 sm:gap-10 md:gap-12
          max-w-6xl 
          mx-auto
        "
      >
        {certs.map((c, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -10, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="
              bg-white 
              shadow-xl 
              hover:shadow-2xl 
              rounded-2xl sm:rounded-3xl 
              p-5 sm:p-8 
              cursor-pointer 
              border border-gray-200 
              text-center 
              transition-all
            "
            onClick={() => window.open(c.url, "_blank")}
          >
            <div className="flex justify-center mb-3 sm:mb-4">{c.icon}</div>

            <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 break-words">
              {c.title}
            </h3>

            <p className="text-xs sm:text-sm text-gray-600 mt-1">{c.issuer}</p>

            <p className="text-xs text-gray-500 mt-1">{c.year}</p>

            <p className="mt-3 sm:mt-4 text-blue-600 underline text-xs sm:text-sm">
              View Credential
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
