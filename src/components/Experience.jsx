import React from "react";
import { motion } from "framer-motion";
import { FloatingTech } from "@/components/FloatingTech";
import { DevAnimation } from "@/components/DevAnimation";
import { Circle } from "lucide-react"; // Lucide icon for timeline

const experiences = [
  {
    year: "Sep 2024 - Nov 2024",
    role: "Full Stack Intern",
    company: "Sajal Technologies",
    description:
      "Led a team for a Full Stack project using MERN technologies, built a user-friendly UI, and developed RESTful APIs for the backend.",
  },
  {
    year: "Jan 2025 - Feb 2025",
    role: "Backend Developer (Freelance)",
    company: "ADHD Tracker",
    description:
      "Designed and implemented backend architecture, focusing on API performance and security for ADHD Tracker.",
  },
  {
    year: "Aug 2023 - Present",
    role: "Web Coordinator",
    company: "GDG On Campus, KIET",
    description:
      "Mentored 20+ students, organized workshops, coding sessions, and led web development initiatives.",
  },
];

export default function Experience() {
  return (
    <div className="relative min-h-screen bg-black-900 text-white py-16 px-6 overflow-hidden">
      {/* FloatingTech Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <FloatingTech count={6} />
      </div>

      {/* Section Title (Updated Color) */}
      <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
        EXPERIENCE
      </h2>

      {/* Experience Timeline */}
      <div className="max-w-4xl mx-auto space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="relative bg-[#1c2233] rounded-lg border border-gray-700 shadow-lg p-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Timeline Connector */}
            {index !== experiences.length - 1 && (
              <div className="absolute left-4 top-10 w-0.5 h-full bg-gray-600"></div>
            )}

            {/* Timeline Dot */}
            <div className="absolute left-4 top-6 transform -translate-x-1/2">
              <Circle className="text-purple-400" size={16} />
            </div>

            {/* Experience Details */}
            <div className="ml-10">
              <span className="text-sm text-purple-400">{exp.year}</span>
              <h3 className="text-xl font-semibold text-pink-400">
                {exp.role} - {exp.company}
              </h3>
              <p className="text-gray-400 mt-2">{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Developer Animation */}
      <div className="absolute bottom-0 right-0 w-96 h-96">
        <DevAnimation />
      </div>
    </div>
  );
}
