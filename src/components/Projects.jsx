import React from "react";
import { motion } from "framer-motion";
import { FloatingTech } from "@/components/FloatingTech";
import { DevAnimation } from "@/components/DevAnimation";
import { Code, Database, Terminal, Globe, Layout, Layers } from "lucide-react"; // Lucide icons

const projects = [
  {
    title: "MineGuard",
    description: "AI-powered chatbot for mining safety and compliance.",
    image: "./public/aa.webp",
    tech: [<Terminal size={20} />, <Database size={20} />, <Layers size={20} />],
    link: "#",
    preview: "#",
  },
  {
    title: "JobQuest",
    description: "Full-Stack Job Application Platform for job seekers.",
    image: "./public/aa.webp",
    tech: [<Code size={20} />, <Database size={20} />, <Globe size={20} />],
    link: "https://github.com/igauravgupta/JobQuest",
    preview: "#",
  },
  {
    title: "GoRide",
    description: "On-demand ride management system for urban travel.",
    image: "./public/aa.webp",
    tech: [<Terminal size={20} />, <Layers size={20} />, <Database size={20} />],
    link: "https://github.com/igauravgupta/taxi-management-app-frontend",
    preview: "#",
  },
  {
    title: "EduFlow",
    description: "Learning Management System for online education.",
    image: "./public/aa.webp",
    tech: [<Layout size={20} />, <Terminal size={20} />, <Database size={20} />],
    link: "https://github.com/igauravgupta/LMS_backend",
    preview: "#",
  },
];

export default function Projects() {
  return (
    <motion.div
      className="relative min-h-screen bg-black-900 text-white py-16 px-6 overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* FloatingTech Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <FloatingTech count={6} />
      </div>

      {/* Section Title */}
      <motion.h2
        className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      >
        PROJECTS
      </motion.h2>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="relative bg-[#1c2233] rounded-lg border border-gray-700 shadow-lg p-6 flex flex-col"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Project Details */}
            <div className="mt-5">
              <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
              <p className="text-gray-400 text-sm mt-2">{project.description}</p>

              {/* Tech Stack */}
              <div className="flex items-center space-x-3 mt-3 text-purple-400">
                {project.tech.map((icon, i) => (
                  <span key={i}>{icon}</span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex mt-5 space-x-4">
                <a
                  href={project.link}
                  className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
                >
                  GitHub Repo
                </a>
                <a
                  href={project.preview}
                  className="px-4 py-2 border border-gray-400 text-gray-300 rounded-lg hover:bg-gray-800 transition"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Developer Animation */}
      <div className="absolute bottom-0 right-0 w-96 h-96">
        <DevAnimation />
      </div>
    </motion.div>
  );
}
