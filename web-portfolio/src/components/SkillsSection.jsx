import { motion } from "framer-motion";
import { Slider } from "./Slider";

export function SkillsSection() {
  return (
    <section id="skills" className="min-h-screen py-16 px-4 md:px-10 lg:px-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex justify-center mb-12"
      >
        <h2 className="font-semibold text-4xl md:text-5xl text-[#101736] dark:text-[#d2d3ce] tracking-wider transition-colors duration-300">
          Skills
        </h2>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <Slider />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true }}
        className="flex justify-center mt-12"
      >
        <p className="text-[#101736] dark:text-[#d2d3ce] text-sm md:text-base tracking-wider text-center max-w-2xl transition-colors duration-300">
          Technologies I work with to build modern and scalable web applications
        </p>
      </motion.div>
    </section>
  );
}
