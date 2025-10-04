// src/components/Contact.tsx
import { type FC } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact: FC = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-dark-primary text-gray-200"
    >
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-dark-accent mb-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Let’s Work Together
      </motion.h2>

      <motion.p
        className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Have a project idea or want to collaborate? I turn ideas into clean,
        modern, and scalable digital experiences. Let's build something
        awesome together.
      </motion.p>

      <motion.div
        className="flex gap-6 text-3xl text-dark-accent mb-6"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <a href="mailto:youremail@example.com" aria-label="Email">
          <FaEnvelope />
        </a>
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
      </motion.div>

      <motion.a
        href="mailto:youremail@example.com"
        className="px-8 py-3 rounded-3xl bg-blue-600 text-white font-medium hover:bg-blue-500 transition"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
      >
        Hit Me Up
      </motion.a>
    </section>
  );
};

export default Contact;
