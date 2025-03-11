import React from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Download, Github, Linkedin, Twitter, Mail , Code} from "lucide-react"
import { FloatingTech } from "@/components/FloatingTech"
import { DevAnimation } from "@/components/DevAnimation"
import {Link, NavLink} from "react-router"

export default function Hero() {
  return (
    <div className="relative min-h-[calc(100vh-76px)] flex items-center ">
      {/* Floating tech icons background */}
      <div className="absolute inset-0 overflow-hidden">
        <FloatingTech count={6} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Hi, I'm
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                {" "}
                Gaurav Gupta
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 text-xl mb-8 max-w-2xl mx-auto"
          >
          Computer Science Student | Full Stack Developer | Passionate About AI, DevOps, and Scalable Web Solutions.🚀
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <div className="space-x-4">
  <a href="https://github.com/igauravgupta" target="_blank" rel="noopener noreferrer">
    <Button variant="outline" size="icon">
      <Github className="h-4 w-4" />
      <span className="sr-only">GitHub</span>
    </Button>
  </a>
  <a href="https://www.linkedin.com/in/i-gauravgupta/" target="_blank" rel="noopener noreferrer">
    <Button variant="outline" size="icon">
      <Linkedin className="h-4 w-4" />
      <span className="sr-only">LinkedIn</span>
    </Button>
  </a>
  <a href="https://codolio.com/profile/igauravgupta" target="_blank" rel="noopener noreferrer">
    <Button variant="outline" size="icon">
      <Code className="h-4 w-4" />
      <span className="sr-only">Codolio</span>
    </Button>
  </a>
</div>

          </motion.div>
        </div>
      </div>

      {/* Animated developer */}
      <div className="absolute bottom-0 right-0 w-96 h-96">
        <DevAnimation />
      </div>
    </div>
  )
}