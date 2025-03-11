import { Button } from "@/components/ui/button";
import { Code, Menu, Download } from "lucide-react";
import { motion } from "framer-motion";
import { Link, NavLink } from "react-router";

export default function Navbar() {
  return (
    <motion.nav
    initial={{ y: -100 }}
    animate={{ y: 0 }}
    className="flex items-center justify-between px-6 py-4 backdrop-blur-sm border-b border-white/10"
  >
    <Link to="/" className="flex items-center space-x-2">
      <Code className="w-8 h-8 text-purple-500" />
      <span className="text-white font-medium text-xl">igauravgupta</span>
    </Link>

    <div className="hidden md:flex items-center space-x-8 text-white">
     
      <NavLink to="/about" className={({ isActive }) =>
              `px-4 py-2 rounded-md text-white transition ${
                isActive ? "bg-purple-600 font-bold" : "hover:bg-gray-700"
              }`}>WhoAmI</NavLink>
      <NavLink to="/skills" className={({ isActive }) =>
              `px-4 py-2 rounded-md text-white transition ${
                isActive ? "bg-purple-600 font-bold" : "hover:bg-gray-700"
              }`}>DevPowers</NavLink>
               <NavLink to="/projects" className={({ isActive }) =>
              `px-4 py-2 rounded-md text-white transition ${
                isActive ? "bg-purple-600 font-bold" : "hover:bg-gray-700"
              }`}>Builds</NavLink>
               <NavLink to="/experience" className={({ isActive }) =>
              `px-4 py-2 rounded-md text-white transition ${
                isActive ? "bg-purple-600 font-bold" : "hover:bg-gray-700"
              }`}>CareerChronicles</NavLink>
      <NavLink to="/contact" className={({ isActive }) =>
              `px-4 py-2 rounded-md text-white transition ${
                isActive ? "bg-purple-600 font-bold" : "hover:bg-gray-700"
              }`}>Let’s Connect</NavLink>
    </div>

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


    <Button variant="ghost" size="icon" className="md:hidden text-white">
      <Menu className="w-6 h-6" />
    </Button>
  </motion.nav>
  );
}
