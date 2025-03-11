import React from "react"
import { motion } from "framer-motion"
import { FloatingTech } from "@/components/FloatingTech"
import { DevAnimation } from "@/components/DevAnimation"

export default function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative min-h-[calc(100vh-76px)] flex flex-col items-center justify-center bg-black text-white px-6"
    >
      {/* Floating tech icons background */}
      <div className="absolute inset-0 overflow-hidden">
        <FloatingTech count={6} />
      </div>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-3xl md:text-4xl font-bold text-center mb-10 bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text"
      >
        MY SKILLS
      </motion.h2>

      {/* Skills Container */}
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-12">
        {[
          {
            title: "Frontend",
            color: "text-purple-400",
            skills: [
              "HTML", "CSS", "JavaScript", "React", "Next.js", "Zustand",
              "Tailwind CSS", "Framer Motion", "DOM"
            ]
          },
          {
            title: "Backend & Databases",
            color: "text-blue-400",
            skills: [
              "Node.js", "Bun", "Express.js", "REST API", "Zod Validation", "JWT/OAuth",
              "DB Modeling"
            ]
          },
          {
            title: "Languages & Tools",
            color: "text-green-400",
            skills: [
              "JavaScript","C++","Git",
              "GitHub", "Vercel", "VS Code", "Linux"
            ]
          },
          {
            title: "Databases",
            color: "text-yellow-400",
            skills: ["SQL", "PostgreSQL", "Prisma ORM","MongoDB"]
          }
        ].map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="space-y-4"
          >
            <h3 className={`text-xl font-semibold ${category.color}`}>{category.title}</h3>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } }
              }}
              className="flex flex-wrap gap-3"
            >
              {category.skills.map((skill, idx) => (
                <motion.span
                  key={idx}
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  whileHover={{ scale: 1.1 }}
                  className="px-3 py-2 bg-[#1c2233] rounded-md border border-gray-700 cursor-pointer"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Animated developer */}
      <div className="absolute bottom-0 right-0 w-96 h-96">
        <DevAnimation />
      </div>
    </motion.div>
  )
}
