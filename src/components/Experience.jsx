import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Full Stack Developer",
    company: "Cigna",
    duration: "May 2025 – Present",
    length: "Current",
    location: "USA",
    mode: "Hybrid / Remote",
    points: [
      "Built React and TypeScript member portals with smoother navigation and lazy loading.",
      "Developed Angular admin dashboards that reduced manual reporting effort.",
      "Created Spring Boot microservices on Azure for scalable backend services.",
      "Improved Azure SQL performance through query tuning and indexing.",
      "Set up CI/CD workflows with automated testing, monitoring, and secure APIs."
    ],
    skills: [
      "React.js",
      "TypeScript",
      "Angular",
      "Java",
      "Spring Boot",
      "Azure",
      "Azure SQL",
      "Docker",
      "Redis",
      "OAuth2",
      "Cypress"
    ]
  },
  {
    role: "Full Stack Developer",
    company: "JPMorgan Chase",
    duration: "Jun 2022 – Dec 2023",
    length: "1 year 7 months",
    location: "India",
    mode: "Remote / Hybrid",
    points: [
      "Built secure React dashboards for high-volume financial workflows.",
      "Developed Java Spring Boot APIs to improve reconciliation speed.",
      "Implemented JWT, MFA, and AWS KMS encryption for compliance.",
      "Designed event-driven integrations with SNS and SQS for reliability.",
      "Containerized services with Docker and supported Kubernetes deployments."
    ],
    skills: [
      "React.js",
      "Java",
      "Spring Boot",
      "JWT",
      "AWS KMS",
      "SNS",
      "SQS",
      "Docker",
      "Kubernetes",
      "GitHub Actions",
      "CloudWatch"
    ]
  },
  {
    role: "Software Developer Engineer",
    company: "Kroger",
    duration: "Jan 2021 – May 2022",
    length: "1 year 5 months",
    location: "India",
    mode: "Remote / Hybrid",
    points: [
      "Developed Angular dashboards for inventory visibility and faster workflows.",
      "Built Node.js REST APIs to improve order processing efficiency.",
      "Designed SQL schemas and caching strategies for better query performance.",
      "Integrated vendor APIs for procurement automation and secure data exchange.",
      "Supported testing, DevOps workflows, and sprint-based delivery."
    ],
    skills: [
      "Angular",
      "Node.js",
      "REST APIs",
      "SQL",
      "Caching",
      "JUnit",
      "DevOps",
      "Logging",
      "Agile"
    ]
  }
];

export default function Experience() {
  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
      className="relative min-h-screen px-6 py-24 sm:px-8 sm:py-28 overflow-hidden"
    >
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-[#D9E3E8] via-[#C8D6DD] to-[#A8BBC3]"
        animate={{ backgroundPosition: ["0% 0%", "0% 100%"] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        style={{ backgroundSize: "100% 200%" }}
      />

      {/* Ambient Glows */}
      <motion.div
        className="absolute top-28 left-1/2 -translate-x-1/2 w-[68%] h-[38%] bg-white/30 blur-[110px] opacity-40"
        animate={{ y: [0, -18, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute bottom-0 left-1/3 w-[55%] h-[42%] bg-[#52796F]/25 blur-[140px] opacity-50"
        animate={{ y: [0, 22, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="flex items-center gap-4 mb-14"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.div
            className="h-[3px] bg-[#52796F] rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 52 }}
            transition={{ duration: 0.8 }}
          />
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#2F3E46] tracking-tight">
            Experience
          </h2>
        </motion.div>

        {/* Experience Cards */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="group relative overflow-hidden rounded-[28px] border border-white/40 bg-white/75 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.10)]"
            >
              {/* Accent strip */}
              <div className="absolute left-0 top-0 h-full w-1.5 bg-gradient-to-b from-[#84A98C] via-[#6D8B74] to-[#52796F]" />

              {/* Soft hover layer */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-white/10 to-[#84A98C]/10" />

              <div className="relative z-10 p-6 sm:p-8 md:p-10">
                {/* Top row */}
                <div className="flex flex-col gap-3 sm:gap-4">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#2F3E46] leading-tight">
                      {exp.role}{" "}
                      <span className="text-[#84A98C]">– {exp.company}</span>
                    </h3>

                    <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm sm:text-base text-[#52796F] font-medium">
                      <span>{exp.duration}</span>
                      <span className="text-[#7A8E93]">•</span>
                      <span>{exp.length}</span>
                      <span className="text-[#7A8E93]">•</span>
                      <span>{exp.location}</span>
                      <span className="text-[#7A8E93]">•</span>
                      <span>{exp.mode}</span>
                    </div>
                  </div>
                </div>

                {/* Bullet points */}
                <ul className="mt-7 space-y-3">
                  {exp.points.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-[#354F52] text-sm sm:text-[1rem] leading-7"
                    >
                      <span className="mt-2 h-2 w-2 rounded-full bg-[#84A98C] shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Skills */}
                <div className="mt-8">
                  <p className="text-sm font-semibold tracking-wide text-[#2F3E46] mb-3 uppercase">
                    Tech Stack
                  </p>

                  <div className="flex flex-wrap gap-2.5">
                    {exp.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1.5 rounded-full text-sm font-medium bg-[#E8F0EC] text-[#2F3E46] border border-[#84A98C]/30 hover:bg-[#DDE9E2] transition"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}