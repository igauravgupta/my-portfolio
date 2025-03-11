import { useState } from "react";
import { motion } from "framer-motion";
import { Link, NavLink } from "react-router"; // Fixed import
import { Code, Menu, Download, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 w-full flex items-center justify-between px-6 py-4 bg-black/70 backdrop-blur-md border-b border-white/10 z-50"
    >
      {/* Logo */}
      <Link to="/" className="flex items-center space-x-2">
        <Code className="w-8 h-8 text-purple-500" />
        <span className="text-white font-medium text-xl">igauravgupta</span>
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-8 text-white">
        {["WhoAmI", "DevPowers", "Builds", "CareerChronicles", "Let’s Connect"].map((text, index) => (
          <NavLink
            key={index}
            to={`/${text.toLowerCase().replace(/\s+/g, "")}`}
            className={({ isActive }) =>
              `px-4 py-2 rounded-md text-white transition ${
                isActive ? "bg-purple-600 font-bold" : "hover:bg-gray-700"
              }`
            }
          >
            {text}
          </NavLink>
        ))}
      </div>

      {/* Download CV (Hidden on Mobile) */}
      <div className="hidden md:flex items-center space-x-4">
        <a
          href="https://drive.google.com/file/d/1SvVnoboQ_FkIfwiv9ctc-PQZxhAJ4gKT/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8">
            <Download className="mr-2 h-5 w-5" />
            Download CV
          </Button>
        </a>
      </div>

      {/* Mobile Menu Button */}
      <Button variant="ghost" size="icon" className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </Button>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute top-full left-0 w-full bg-black/90 backdrop-blur-lg p-6 flex flex-col items-center space-y-6 md:hidden border-b border-white/10"
        >
          {["WhoAmI", "DevPowers", "Builds", "CareerChronicles", "Let’s Connect"].map((text, index) => (
            <NavLink
              key={index}
              to={`/${text.toLowerCase().replace(/\s+/g, "")}`}
              className="text-white text-lg hover:text-purple-400 transition"
              onClick={() => setIsOpen(false)} // Close menu on click
            >
              {text}
            </NavLink>
          ))}

          {/* Download CV (Visible in Mobile Menu) */}
          <a
            href="https://drive.google.com/file/d/1SvVnoboQ_FkIfwiv9ctc-PQZxhAJ4gKT/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white flex items-center space-x-2 hover:text-purple-400 transition"
          >
            <Download className="w-5 h-5" />
            <span>Download CV</span>
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
}
