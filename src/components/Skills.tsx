import { type FC, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaJava,
  FaPhp,
  FaMobileAlt,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiFirebase,
  SiChakraui,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiGraphql,
  SiVercel,
  SiFigma,
  SiJavascript,
  SiPostgresql,
  SiArduino,
  SiCplusplus,
  SiSupabase,
} from "react-icons/si";


const skills = [
  { icon: <FaHtml5 title="HTML5" />, name: "HTML5" },
  { icon: <FaCss3Alt title="CSS3" />, name: "CSS3" },
  { icon: <SiJavascript title="JavaScript" />, name: "JavaScript" },
  { icon: <SiTypescript title="TypeScript" />, name: "TypeScript" },
  { icon: <FaReact title="React" />, name: "React" },
  { icon: <FaMobileAlt title="React Native" />, name: "React Native" },
  { icon: <SiNextdotjs title="Next.js" />, name: "Next.js" },
  { icon: <SiTailwindcss title="TailwindCSS" />, name: "TailwindCSS" },
  { icon: <FaNodeJs title="Node.js" />, name: "Node.js" },
  { icon: <SiExpress title="Express.js" />, name: "Express.js" },
  { icon: <SiMongodb title="MongoDB" />, name: "MongoDB" },
  { icon: <SiPostgresql title="PostgreSQL" />, name: "PostgreSQL" },
  { icon: <SiFirebase title="Firebase" />, name: "Firebase" },
  { icon: <SiSupabase title="Supabase" />, name: "Supabase" }, // placeholder explained below
  { icon: <SiGraphql title="GraphQL" />, name: "GraphQL" },
  { icon: <SiCplusplus title="C++" />, name: "C++" },
  { icon: <FaPython title="Python" />, name: "Python" },
  { icon: <FaJava title="Java" />, name: "Java" },
  { icon: <FaPhp title="PHP" />, name: "PHP" },
  { icon: <SiVercel title="Vercel" />, name: "Vercel" },
  { icon: <SiFigma title="Figma" />, name: "Figma" },
  { icon: <FaGithub title="GitHub" />, name: "GitHub" },
  { icon: <SiArduino title="Arduino" />, name: "Arduino" },
  { icon: <SiChakraui title="Chakra UI" />, name: "Chakra UI" }, // placeholder explained below
];

/* ---------- Stats (numeric for animation) ---------- */
const stats = [
  { value: 3, label: "Years Experience", suffix: "+" },
  { value: 15, label: "Projects Completed", suffix: "+" },
  { value: 10, label: "Technologies Mastered", suffix: "+" },
  { value: 100, label: "Passion", suffix: "%" },
];

/* ---------- Helper: smooth count-up using requestAnimationFrame ---------- */
const useCountUp = (end: number, startWhen: boolean, durationMs = 1500) => {
  const [value, setValue] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!startWhen) {
      setValue(0);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      return;
    }

    const startTimeRef = { t: 0 };
    const tick = (timestamp: number) => {
      if (!startTimeRef.t) startTimeRef.t = timestamp;
      const elapsed = timestamp - startTimeRef.t;
      const progress = Math.min(elapsed / durationMs, 1);
      const current = Math.round(progress * end);
      setValue(current);
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        // ensure final value is exact
        setValue(end);
      }
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [end, startWhen, durationMs]);

  return value;
};

/* ---------- Component ---------- */
const Skills: FC = () => {
  // detect when stats section enters viewport
  const statsRef = useRef<HTMLDivElement | null>(null);
  const [statsInView, setStatsInView] = useState(false);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        const e = entries[0];
        if (e.isIntersecting) {
          setStatsInView(true);
          // optional: observer.disconnect(); // if you want it to run only once
        }
      },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // prepare counts (hooks called consistently)
  const counts = stats.map((s) => useCountUp(s.value, statsInView, 1500));

  return (
    <div className="bg-dark-primary text-gray-200">
      {/* Skills Section */}
      <section
        id="skills"
        className="min-h-screen flex flex-col items-center justify-center px-6 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark-accent mb-12">
            Skills & Tools
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-10 text-5xl text-dark-accent"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center gap-2 text-gray-200 hover:text-blue-500 transition transform-gpu"
            >
              <div className="text-4xl md:text-5xl">{skill.icon}</div>
              <span className="text-sm">{skill.name}</span>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Stats Section */}
      <section
        id="stats"
        ref={statsRef}
        className="py-20 bg-dark-secondary text-gray-200 flex flex-col items-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark-accent mb-12">
            My Numbers
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, idx) => {
            const count = counts[idx];
            // format display: include suffix
            const display =
              stat.suffix === "%"
                ? `${count}${stat.suffix}`
                : `${count}${stat.suffix}`;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: idx * 0.12 }}
              >
                <p className="text-5xl font-bold text-dark-accent">
                  {display}
                </p>
                <p className="text-gray-400 mt-2">{stat.label}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </section>
    </div>
  );
};

export default Skills;

