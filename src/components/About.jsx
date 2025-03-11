import React from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Download, Github, Linkedin, Twitter, Mail } from "lucide-react"
import { FloatingTech } from "@/components/FloatingTech"
import { DevAnimation } from "@/components/DevAnimation"
import {Link, NavLink} from "react-router"

export default function Hero() {
  return (
    <div className="relative min-h-[calc(100vh-76px)] flex items-center">
      {/* Floating tech icons background */}
      <div className="absolute inset-0 overflow-hidden">
        <FloatingTech count={6} />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-50">
          {/* Left Side - Description */}
<motion.div
  initial={{ opacity: 0, x: -50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.5 }}
  className="text-center md:text-left max-w-lg"
>
  <h2 className="text-4xl font-bold mb-4">About Me</h2>
  <p className="text-lg text-gray-300">
    Hey there! I'm <span className="font-semibold text-purple-400">Gaurav Gupta</span>, a passionate Full Stack Developer with expertise in the MERN stack and a keen interest in DevOps & AI-powered solutions.  
  </p>
  <ul className="list-disc mt-4 ml-5 space-y-2 text-gray-300">
    <li><span className="font-semibold text-purple-400">Technical Skills:</span> Full Stack Development (MERN), DevOps, Backend Systems, API Development.</li>
    <li><span className="font-semibold text-purple-400">Experience:</span> Full Stack Intern at <strong>Sajal Technologies</strong>, Freelance Backend Developer for <strong>vemakers</strong>.</li>
    <li><span className="font-semibold text-purple-400">Community Involvement:</span> Web Coordinator at GDG On Campus, mentored 20+ students, organized 4+ workshops & hackathons.</li>
    <li><span className="font-semibold text-purple-400">Competitive Programming:</span> Solved 200+ DSA questions, LeetCode rating 1523+.</li>
    <li><span className="font-semibold text-purple-400">Certifications:</span> JavaScript Developer, Ubuntu Linux OS Basics.</li>
  </ul>
  <p className="mt-4 text-gray-400">
    Apart from coding, I enjoy mentoring students, organizing hackathons, and collaborating on innovative projects!
  </p>
</motion.div>


          {/* Right Side - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-60 h-60 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-purple-500 shadow-lg"
          >
            <img
              src="./src/assets/1732630581602.jpeg"
              alt="Gaurav Gupta"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 w-96 h-96">
        <DevAnimation />
      </div>
    </div>
  )
}