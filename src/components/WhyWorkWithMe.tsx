import { motion } from "framer-motion";

const benefits = [
  {
    title: "Clean & Maintainable Code",
    description:
      "I prioritize readability, scalability, and performance in every project I build.",
  },
  {
    title: "Modern Tech Stack",
    description:
      "From React and React Native to PostgreSQL and Firebase, I use up-to-date tools.",
  },
  {
    title: "Problem-Solving Mindset",
    description:
      "I love breaking down complex problems into simple, elegant solutions.",
  },
  {
    title: "Collaboration & Communication",
    description:
      "Working with me means consistent updates, transparency, and teamwork.",
  },
  {
    title: "Adaptability",
    description:
      "Quick to learn new tools and technologies to fit your project’s needs.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants: any = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as any } },
};

export default function WhyWorkWithMe() {
  return (
    <section className="py-20 px-6 md:px-20 bg-dark-primary from-gray-950 to-gray-900 text-gray-200">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-gray-100 mb-12 relative inline-block"
        >
          Why Work With Me
          <span className="absolute left-1/2 -bottom-2 w-16 h-1 bg-blue-500 rounded-md transform -translate-x-1/2"></span>
        </motion.h2>

        {/* Benefits */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 text-left"
        >
          {benefits.map((benefit, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="p-6 rounded-xl bg-[#111] border border-gray-800 hover:border-blue-500/70 transition-colors"
            >
              <h3 className="text-xl font-semibold text-gray-200 hover:text-blue-400 transition">
                {benefit.title}
              </h3>
              <p className="text-gray-400 mt-3">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
