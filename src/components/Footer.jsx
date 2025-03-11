import { Github, Linkedin, Twitter } from "lucide-react";
import { FloatingTech } from "@/components/FloatingTech";
import { DevAnimation } from "@/components/DevAnimation";

export default function Footer() {
  return (
    <footer className="relative bg-black-1200 text-white py-12 px-6 overflow-hidden">
      {/* FloatingTech Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <FloatingTech count={5} />
      </div>

      <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        
        {/* Left Section - Branding */}
        <div className="mb-6 md:mb-0">
          <h2 className="text-2xl font-bold">igauravgupta</h2>
          <p className="text-gray-400 text-sm">Building the web, one project at a time.</p>
        </div>

        {/* Center - Social Links */}
        <div className="flex space-x-6 text-gray-400">
          <a href="https://github.com/igauravgupta" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition">
            <Github size={24} />
          </a>
          <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition">
            <Linkedin size={24} />
          </a>
          <a href="https://twitter.com/your-twitter" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition">
            <Twitter size={24} />
          </a>
        </div>

        {/* Right Section - Copyright */}
        <div className="mt-6 md:mt-0 text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} igauravgupta. All rights reserved.
        </div>
      </div>

      {/* Developer Animation */}
      <div className="absolute bottom-0 right-0 w-72 h-72">
        <DevAnimation />
      </div>
    </footer>
  );
}
