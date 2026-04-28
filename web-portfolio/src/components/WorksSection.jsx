import { motion } from "framer-motion";
import { useState, useEffect } from "react";

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
  const [expandedCardId, setExpandedCardId] = useState(null);

  useEffect(() => {
    if (expandedCardId) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [expandedCardId]);

  return (
    <section id="works" className="min-h-screen py-16 px-4 md:px-10 lg:px-20 overflow-x-hidden">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex justify-center mb-12"
      >
        <h2 className="font-semibold text-4xl md:text-5xl text-[#101736] dark:text-[#d2d3ce] tracking-wider transition-colors duration-300">
          Works
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto relative">
        {projects.map((project, index) => {
          if (expandedCardId && project.id !== expandedCardId) return null;

          return (
            <motion.div
              key={project.id}
              layoutId={`card-${project.id}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-[#d2d3ce] dark:bg-[#1a2347] rounded-2xl p-6 md:p-8 hover:bg-[#b9b9b9] dark:hover:bg-[#232d4a] transition-colors duration-300 cursor-pointer ${
                expandedCardId === project.id ? 'invisible' : ''
              }`}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              whileHover={{ scale: expandedCardId ? 1 : 1.02 }}
              whileTap={{ scale: expandedCardId ? 1 : 0.98 }}
              onClick={() => setExpandedCardId(project.id)}
            >
              <div className="text-6xl mb-4">{project.image}</div>
              <h3 className="font-semibold text-xl md:text-2xl text-[#101736] dark:text-[#d2d3ce] tracking-wider mb-3 transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-[#101736] dark:text-[#d2d3ce] text-sm md:text-base tracking-wider mb-4 opacity-80 transition-colors duration-300">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-[#f5f5f5] dark:bg-[#232d4a] text-[#101736] dark:text-[#d2d3ce] text-xs md:text-sm px-3 py-1 rounded-full font-medium tracking-wider transition-colors duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <motion.a
                href={project.link}
                className="inline-block text-[#101736] dark:text-[#d2d3ce] text-sm md:text-base font-semibold tracking-wider hover:underline transition-colors duration-300"
                whileHover={{ x: 5 }}
                onClick={(e) => e.stopPropagation()}
              >
                View Project →
              </motion.a>
            </motion.div>
          );
        })}
      </div>

      {expandedCardId !== null && (
        <motion.div
          layoutId={`card-${expandedCardId}`}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => setExpandedCardId(null)}
        >
          <div
            className="bg-[#d2d3ce] dark:bg-[#1a2347] rounded-2xl p-8 md:p-12 max-w-3xl w-full max-h-[90vh] overflow-y-auto transition-colors duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {projects
              .filter((p) => p.id === expandedCardId)
              .map((project) => (
                <div key={project.id}>
                  <div className="flex justify-between items-start mb-6">
                    <div className="text-8xl">{project.image}</div>
                    <button
                      onClick={() => setExpandedCardId(null)}
                      className="text-[#101736] hover:text-black transition-colors text-3xl leading-none"
                    >
                      ×
                    </button>
                  </div>
                  <h3 className="font-semibold text-3xl md:text-4xl text-[#101736] dark:text-[#d2d3ce] tracking-wider mb-4 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-[#101736] dark:text-[#d2d3ce] text-base md:text-lg tracking-wider mb-6 opacity-80 transition-colors duration-300">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-[#f5f5f5] dark:bg-[#232d4a] text-[#101736] dark:text-[#d2d3ce] text-sm md:text-base px-4 py-2 rounded-full font-medium tracking-wider transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <motion.a
                    href={project.link}
                    className="inline-block text-[#101736] dark:text-[#d2d3ce] text-base md:text-lg font-semibold tracking-wider hover:underline transition-colors duration-300"
                    whileHover={{ x: 5 }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    View Project →
                  </motion.a>
                </div>
              ))}
          </div>
        </motion.div>
      )}
    </section>
  );
}
