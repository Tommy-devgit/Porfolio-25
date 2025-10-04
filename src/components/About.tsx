// src/components/About.tsx
import { motion } from "framer-motion";
import AboutIllustration from "../assets/code.png"; // replace with your asset

const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-dark-primary text-gray-200"
    >
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-6xl w-full">
        
        {/* Left Text */}
        <motion.div
          className="flex-1 flex flex-col items-start gap-6"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark-accent mb-4">
            About Me
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-md">
            I’m passionate about turning ideas into real projects. With skills in frontend & backend development, I focus on creating smooth, dark-themed modern designs and functional apps that solve real-world problems.
          </p>
          <p className="text-lg md:text-xl text-gray-400 max-w-md">
            Always learning, always building, I thrive on bringing creative solutions to life and improving user experiences through design and code.
          </p>
        </motion.div>

        {/* Right Illustration */}
        <motion.div
          className="flex-1 flex justify-center md:justify-end"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-2xl overflow-hidden border-2 border-blue-600 shadow-lg shadow-blue-500/20 flex items-center justify-center bg-blue-900/20">
            <img
              src={AboutIllustration}
              alt="About Illustration"
              className="w-3/4 h-3/4 object-contain"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
