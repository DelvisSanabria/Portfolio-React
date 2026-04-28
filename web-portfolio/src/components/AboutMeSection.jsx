import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export function AboutMeSection() {
  const [expandedId, setExpandedId] = useState(null);

  useEffect(() => {
    if (expandedId) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [expandedId]);

  const boxes = [
    {
      id: 0,
      title: "Education",
      content: "Self-taught Web Developer with focus on modern JavaScript frameworks. Constantly learning and adapting to new technologies.",
      span: "md:col-span-1"
    },
    {
      id: 1,
      title: "Experience",
      content: "Building web applications with React, Node.js, and modern tools. Passionate about creating clean, user-friendly interfaces.",
      span: "md:col-span-2"
    },
    {
      id: 2,
      title: "Approach",
      content: "I believe in writing clean, maintainable code and creating exceptional user experiences through thoughtful design and functionality.",
      span: "md:col-span-2"
    },
    {
      id: 3,
      title: "Interests",
      content: "When not coding, I enjoy exploring new technologies, contributing to open source, and staying up-to-date with web development trends.",
      span: "md:col-span-1"
    },
  ];

  return (
    <div className="relative min-h-screen py-16 px-4 md:px-10 lg:px-20 overflow-x-hidden">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex justify-center mb-12"
      >
        <h2 className="font-semibold text-4xl md:text-5xl text-[#101736] dark:text-[#d2d3ce] tracking-wider transition-colors duration-300">About Me</h2>
      </motion.div>

      <div className="max-w-6xl mx-auto">
        {/* First Row - 1 column + 2 columns on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {boxes.slice(0, 2).map((box, index) => {
            if (expandedId !== null) {
              return (
                <div
                  key={box.id}
                  className={`bg-[#d2d3ce] dark:bg-[#1a2347] p-6 rounded-2xl min-h-[200px] flex flex-col justify-center ${box.span} invisible`}
                />
              );
            }
            return (
              <motion.div
                key={box.id}
                layoutId={`about-box-${box.id}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-[#d2d3ce] dark:bg-[#1a2347] p-6 rounded-2xl cursor-pointer hover:bg-[#b9b9b9] dark:hover:bg-[#232d4a] transition-colors duration-300 min-h-[200px] flex flex-col justify-center ${box.span}`}
                onClick={() => setExpandedId(box.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <h3 className="font-semibold text-[#101736] dark:text-[#d2d3ce] tracking-wider mb-3 text-lg md:text-xl transition-colors duration-300">{box.title}</h3>
                <p className="text-[#101736] dark:text-[#d2d3ce] tracking-wider opacity-80 text-sm md:text-base transition-colors duration-300">{box.content}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Second Row - 2 columns + 1 column on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {boxes.slice(2, 4).map((box, index) => {
            if (expandedId !== null) {
              return (
                <div
                  key={box.id}
                  className={`bg-[#d2d3ce] dark:bg-[#1a2347] p-6 rounded-2xl min-h-[200px] flex flex-col justify-center ${box.span} invisible`}
                />
              );
            }
            return (
              <motion.div
                key={box.id}
                layoutId={`about-box-${box.id}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: (index + 2) * 0.1 }}
                viewport={{ once: true }}
                className={`bg-[#d2d3ce] dark:bg-[#1a2347] p-6 rounded-2xl cursor-pointer hover:bg-[#b9b9b9] dark:hover:bg-[#232d4a] transition-colors duration-300 min-h-[200px] flex flex-col justify-center ${box.span}`}
                onClick={() => setExpandedId(box.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <h3 className="font-semibold text-[#101736] dark:text-[#d2d3ce] tracking-wider mb-3 text-lg md:text-xl transition-colors duration-300">{box.title}</h3>
                <p className="text-[#101736] dark:text-[#d2d3ce] tracking-wider opacity-80 text-sm md:text-base transition-colors duration-300">{box.content}</p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Expanded Card - Animates from original position to center */}
      {expandedId !== null && (
        <motion.div
          layoutId={`about-box-${expandedId}`}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => setExpandedId(null)}
        >
          <div
            className="bg-[#d2d3ce] dark:bg-[#1a2347] rounded-2xl p-8 md:p-12 max-w-3xl w-full max-h-[90vh] overflow-y-auto transition-colors duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {boxes.filter(b => b.id === expandedId).map(box => (
                <div key={box.id}>
                <div className="flex justify-between items-start mb-6">
                  <h3 className="font-semibold text-3xl md:text-4xl text-[#101736] dark:text-[#d2d3ce] tracking-wider transition-colors duration-300">
                    {box.title}
                  </h3>
                  <button
                    onClick={() => setExpandedId(null)}
                    className="text-[#101736] dark:text-[#d2d3ce] hover:text-black dark:hover:text-white transition-colors text-3xl leading-none"
                  >
                    ×
                  </button>
                </div>
                <p className="text-[#101736] dark:text-[#d2d3ce] text-base md:text-lg tracking-wider opacity-80 transition-colors duration-300">
                  {box.content}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}
