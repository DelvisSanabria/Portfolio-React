import { motion } from "framer-motion";
import { useState,useEffect } from "react";
import React from 'react';

export function AboutMeSection() {
  const [selectedId, setSelectedId] = useState(null);

  const isBoxSelected = selectedId !== null;

  // --- Hook useEffect para controlar el scroll del body ---
  useEffect(() => {
    const body = document.body; // Obtiene el elemento body

    if (isBoxSelected) {
      // Si una caja está seleccionada, bloquea el scroll
      body.style.overflow = 'hidden';
    } else {
      // Si no hay cajas seleccionadas, permite el scroll
      body.style.overflow = ''; // O 'visible', 'auto'. Usar '' remueve el estilo inline.
    }

    // Función de limpieza: esto se ejecuta cuando el componente se desmonta
    // o antes de que el efecto se ejecute de nuevo (si isBoxSelected cambia)
    return () => {
      body.style.overflow = ''; // Asegura que el scroll se habilite al desmontar o antes del re-render
    };
  }, [isBoxSelected]); // El efecto depende del estado isBoxSelected


  // Datos de las cajas con su className inicial definido
  const boxes = [
    // Primera Fila: Dos cajas, col-span 1 y 2. Suma = 3. Necesita grid-cols-3.
    { id: 0, title: "Education", content: "Self-taught Web Developer with focus on modern JavaScript frameworks. Constantly learning and adapting to new technologies.", className: "col-span-1 h-[200px] md:h-[250px]" },
    { id: 1, title: "Experience", content: "Building web applications with React, Node.js, and modern tools. Passionate about creating clean, user-friendly interfaces.",   className: "col-span-2 h-[200px] md:h-[250px]" },
    // Segunda Fila: Dos cajas, col-span 2 y 1. Suma = 3. Necesita grid-cols-3.
    { id: 2, title: "Approach", content: "I believe in writing clean, maintainable code and creating exceptional user experiences through thoughtful design and functionality.",   className: "col-span-2 h-[200px] md:h-[250px]" },
    { id: 3, title: "Interests", content: "When not coding, I enjoy exploring new technologies, contributing to open source, and staying up-to-date with web development trends.", className: "col-span-1 h-[200px] md:h-[250px]" },
  ];


  const boxVariants = {
    selected: {
      opacity: 1,
      scale: 1,
      width: "90vw",
      height: "auto",
      maxHeight: "80vh",
      position: "fixed",
      top: "50%",
      left: "50%",
      translateX: "-50%",
      translateY: "-50%",
      zIndex: 1000,
      padding: "20px",
      overflowY: "auto",
      transition: { type: "spring", stiffness: 100 },
    },
    unselected: {
      opacity: 1,
      scale: 1,
      x: 0,
      y: 0,
      position: "static",
      top: undefined,
      left: undefined,
      translateX: undefined,
      translateY: undefined,
      zIndex: 'auto',
      transition: { type: "spring", stiffness: 100 },
    },
  };

  const handleBoxClick = (id) => {
    if (selectedId === id) {
      return;
    }
    setSelectedId(id);
  };

  const handleOverlayClick = () => {
    setSelectedId(null);
  };

  return (
    <div className="relative min-h-screen">
      {/* Contenido principal */}
      <section className={`relative z-10 ${isBoxSelected ? 'pointer-events-none' : ''}`}>
         <div className="flex justify-center p-4">
           <h2 className="font-semibold text-4xl text-[#101736] tracking-wider">About Me</h2>
         </div>
         <div className="flex flex-col px-10 lg:px-40 justify-center">

             {/* Primer grid */}
             <div className="grid grid-cols-1 md:grid-cols-3 m-4 gap-6 md:gap-10">
               {boxes.slice(0, 2).map((box) => {
                 const isThisBoxSelected = selectedId === box.id;
                 const opacity = isBoxSelected && !isThisBoxSelected ? 0.3 : 1;
                 return (
                   <React.Fragment key={box.id}>
                     <motion.div
                       className={`bg-[#d2d3ce] p-4 rounded-2xl cursor-pointer overflow-hidden ${box.className}`}
                       variants={boxVariants}
                       animate={isThisBoxSelected ? "selected" : "unselected"}
                       onClick={() => handleBoxClick(box.id)}
                       style={{ pointerEvents: isBoxSelected && !isThisBoxSelected ? 'none' : 'auto', opacity: opacity }}
                       layout
                     >
                       <h3 className="font-semibold text-lg md:text-xl text-[#101736] tracking-wider mb-2">{box.title}</h3>
                       <p className="text-[#101736] text-xs md:text-sm tracking-wider opacity-80">{box.content}</p>
                     </motion.div>
                     {isThisBoxSelected && (
                       <div className={box.className} style={{ visibility: 'hidden' }} />
                     )}
                   </React.Fragment>
                 );
               })}
             </div>

             {/* Segundo grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 m-4 gap-6 md:gap-10">
                {boxes.slice(2, 4).map((box) => {
                  const isThisBoxSelected = selectedId === box.id;
                  const opacity = isBoxSelected && !isThisBoxSelected ? 0.3 : 1;
                  return (
                    <React.Fragment key={box.id}>
                      <motion.div
                        className={`bg-[#d2d3ce] p-4 rounded-2xl cursor-pointer overflow-hidden ${box.className}`}
                        variants={boxVariants}
                        animate={isThisBoxSelected ? "selected" : "unselected"}
                        onClick={() => handleBoxClick(box.id)}
                        style={{ pointerEvents: isBoxSelected && !isThisBoxSelected ? 'none' : 'auto', opacity:opacity }}
                        layout
                      >
                        <h3 className="font-semibold text-lg md:text-xl text-[#101736] tracking-wider mb-2">{box.title}</h3>
                        <p className="text-[#101736] text-xs md:text-sm tracking-wider opacity-80">{box.content}</p>
                      </motion.div>
                      {isThisBoxSelected && (
                        <div className={box.className} style={{ visibility: 'hidden' }} />
                      )}
                    </React.Fragment>
                  );
                })}
              </div>

            {/* Segundo grid */}
             <div className="grid grid-cols-3 m-4 gap-10 lg:gap-10">
               {boxes.slice(2, 4).map((box) => {
                 const isThisBoxSelected = selectedId === box.id;
                 // Determinar la opacidad de la misma manera
                 const opacity = isBoxSelected && !isThisBoxSelected ? 0.3 : 1;
                 return (
                   <React.Fragment key={box.id}>
                      <motion.div
                        className={`bg-[#d2d3ce] p-4 rounded-2xl ${box.className} cursor-pointer overflow-hidden`}
                        variants={boxVariants}
                        animate={isThisBoxSelected ? "selected" : "unselected"}
                        onClick={() => handleBoxClick(box.id)}
                        style={{ pointerEvents: isBoxSelected && !isThisBoxSelected ? 'none' : 'auto', opacity:opacity }}
                        layout
                      >
                        <h3 className="font-semibold text-lg md:text-xl text-[#101736] tracking-wider mb-2">{box.title}</h3>
                        <p className="text-[#101736] text-xs md:text-sm tracking-wider opacity-80">{box.content}</p>
                      </motion.div>
                     {isThisBoxSelected && (
                       <div
                         className={box.className}
                         style={{ visibility: 'hidden' }}
                       />
                     )}
                   </React.Fragment>
                 );
               })}
             </div>
         </div>
      </section>

      {/* Overlay */}
      {isBoxSelected && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 bg-black bg-opacity-20 z-[500]"
          onClick={handleOverlayClick}
        />
      )}

    </div>
  );
}