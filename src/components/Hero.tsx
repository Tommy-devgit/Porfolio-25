// src/components/Hero.tsx
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import profilepicture from "../assets/profile.jpg"

const roles = ["Software Engineer", "Designer", "Developer"];

const Hero = () => {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-center min-h-[90vh] px-16 overflow-hidden gap-12">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-black via-[#0a0f1c] to-[#0a0a0f]" />
      <motion.div
        className="absolute -top-40 -left-40 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl"
        animate={{ x: [0, 20, -20, 0], y: [0, -20, 20, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-blue-900/30 rounded-full blur-3xl"
        animate={{ x: [0, -30, 30, 0], y: [0, 30, -30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Left Content */}
      <div className="flex-1 text-center md:text-left">
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-gray-100 mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hi, I’m <span className="text-blue-600">Tommy</span>
        </motion.h1>

        {/* Typing animation roles */}
        <motion.div
          className="text-xl md:text-2xl font-medium text-blue-600 h-8 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <TypingAnimation words={roles} />
        </motion.div>

        <motion.p
          className="text-lg text-gray-400 max-w-xl mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Passionate about crafting modern, scalable, and aesthetic digital
          experiences with code and design.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex gap-6 justify-center md:justify-start"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Link
            to="/projects"
            className="px-6 py-3 rounded-3xl bg-blue-600 text-white font-medium hover:bg-blue-500 transition"
          >
            View Projects
          </Link>
          <Link
            to="/contact"
            className="px-6 py-3 rounded-3xl border border-gray-700 text-gray-200 hover:border-blue-500 hover:text-blue-400 transition"
          >
            Contact Me
          </Link>
        </motion.div>
      </div>

      {/* Right Picture Section */}
      <motion.div
        className="flex-1 flex justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-2 border-blue-600 shadow-lg shadow-blue-500/30">
          <img
            src={profilepicture} // put your picture in public/profile.jpg
            alt="Tommy"
            className="w-full h-full object-cover"
          />
          {/* Glow ring */}
          <motion.div
            className="absolute inset-0 rounded-full border-4 border-blue-400/40"
            animate={{ rotate: 360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

/* ---------------- Typing Animation ---------------- */
import { useEffect, useState } from "react";

const TypingAnimation = ({ words }: { words: string[] }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (index === words.length) return;

    if (subIndex === words[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 1000);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words]);

  useEffect(() => {
    const blinkInterval = setInterval(() => setBlink((prev) => !prev), 500);
    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <span>
      {`${words[index].substring(0, subIndex)}${blink ? "|" : " "}`}
    </span>
  );
};
// its not working but just lets continue to the other section