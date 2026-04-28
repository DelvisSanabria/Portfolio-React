import { motion } from "framer-motion";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, cart management, and payment integration.",
    image: "🛒",
    tech: ["React", "Node.js", "MongoDB"],
    link: "#"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A productivity application with drag-and-drop functionality, real-time updates, and team collaboration features.",
    image: "📋",
    tech: ["React", "PostgreSQL", "Express"],
    link: "#"
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "Real-time weather application with location tracking, forecasts, and interactive maps using external APIs.",
    image: "🌤️",
    tech: ["React", "API", "CSS3"],
    link: "#"
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "A responsive portfolio website showcasing projects and skills with smooth animations and modern design.",
    image: "💼",
    tech: ["React", "Framer Motion", "Tailwind"],
    link: "#"
  }
];

export function WorksSection() {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section id="works" className="min-h-screen py-16 px-4 md:px-10 lg:px-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex justify-center mb-12"
      >
        <h2 className="font-semibold text-4xl md:text-5xl text-[#101736] tracking-wider">
          Works
        </h2>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-[#d2d3ce] rounded-2xl p-6 md:p-8 hover:bg-[#b9b9b9] transition-colors duration-300 cursor-pointer"
            onMouseEnter={() => setHoveredId(project.id)}
            onMouseLeave={() => setHoveredId(null)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="text-6xl mb-4">{project.image}</div>
            <h3 className="font-semibold text-xl md:text-2xl text-[#101736] tracking-wider mb-3">
              {project.title}
            </h3>
            <p className="text-[#101736] text-sm md:text-base tracking-wider mb-4 opacity-80">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="bg-[#f5f5f5] text-[#101736] text-xs md:text-sm px-3 py-1 rounded-full font-medium tracking-wider"
                >
                  {tech}
                </span>
              ))}
            </div>
            <motion.a
              href={project.link}
              className="inline-block text-[#101736] text-sm md:text-base font-semibold tracking-wider hover:underline"
              whileHover={{ x: 5 }}
            >
              View Project →
            </motion.a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
