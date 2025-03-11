import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { FloatingTech } from "@/components/FloatingTech";

export default function Contact() {
  // State for form fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative min-h-[calc(100vh-76px)] flex flex-col items-center justify-center bg-black text-white px-6 py-16"
    >
      {/* Floating tech icons background */}
<div className="absolute inset-0 overflow-hidden pointer-events-none">
  <FloatingTech count={6} />
</div>


      {/* Contact Section */}
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-between space-y-10 md:space-y-0">
        {/* Left Section */}
        <div className="max-w-lg">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Let’s chat.<br />Tell me about your project.
          </h2>
          <p className="text-gray-400 mt-4">
            Let’s create something together ✨
          </p>

          <div className="mt-6 flex items-center space-x-4 p-4 bg-gray-800 rounded-lg shadow-md">
            <Mail className="text-purple-500" />
            <a href="mailto:gaurav33dev@gmail.com" className="text-purple-400 font-semibold">
              gaurav33dev@gmail.com
            </a>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <form
          className="w-full max-w-lg bg-gray-900 shadow-lg rounded-xl p-6 md:p-8"
        >
          <h3 className="text-lg font-semibold text-white mb-4">
            Send me a message..
          </h3>

          <div className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Full name*"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-700 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email address*"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-700 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-700 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
            />
            <textarea
              name="message"
              placeholder="Tell us more about your project*"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-700 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-purple-500 outline-none h-32"
              required
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-purple-600 text-white font-semibold py-3 rounded-lg mt-2"
            >
              Send message
            </motion.button>
          </div>
        </form>
      </div>
    </motion.div>
  );
}
