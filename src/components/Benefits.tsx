import { motion } from "framer-motion";

const benefits = [
  {
    title: "Collaborative Approach",
    description: "I believe in building solutions together, valuing feedback and teamwork at every step.",
  },
  {
    title: "Modern Tech Stack",
    description: "Using up-to-date tools like React, React Native, PostgreSQL, and Firebase to deliver scalable products.",
  },
  {
    title: "Problem-Solving Mindset",
    description: "I tackle challenges with creativity and persistence, always aiming for efficient solutions.",
  },
  {
    title: "Clean & Maintainable Code",
    description: "My focus is on writing code that’s easy to understand, extend, and maintain.",
  },
  {
    title: "Continuous Learning",
    description: "I keep expanding my knowledge — from frontend to backend to hardware integration.",
  },
];

export default function Benefits() {
  return (
    <section className="w-full py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <motion.h2
          className="text-3xl font-bold text-gray-900 mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Why Work With Me?
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-xl bg-white shadow hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}