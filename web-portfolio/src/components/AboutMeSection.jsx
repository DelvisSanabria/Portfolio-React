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
    { id: 0, content: "Contenido Caja 1 (Pequeña)", className: "col-span-1 h-[200px]" },
    { id: 1, content: "Contenido Caja 2 (Grande)",   className: "col-span-2 h-[200px]" },
    // Segunda Fila: Dos cajas, col-span 2 y 1. Suma = 3. Necesita grid-cols-3.
    { id: 2, content: "Contenido Caja 3 (Grande)",   className: "col-span-2 h-[200px]" },
    { id: 3, content: "Contenido Caja 4 (Pequeña)", className: "col-span-1 h-[200px]" },
  ];


  const boxVariants = {
    selected: {
      opacity: 1,
      scale: 1.2,
      width: "55vw",
      height: "25vh",
      position: "fixed",
      top: "50%",
      left: "25%",
      translateX: "-50%",
      translateY: "-50%",
      zIndex: 1000,
      padding: "20px",
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
            <div className="grid grid-cols-3 m-4 gap-10 lg:gap-10">
              {boxes.slice(0, 2).map((box) => {
                const isThisBoxSelected = selectedId === box.id;
                // Determinar la opacidad: 1 si no hay nada seleccionado O si esta caja es la seleccionada.
                // Opacidad reducida (ej. 0.3) si hay algo seleccionado Y esta caja NO es la seleccionada.
                const opacity = isBoxSelected && !isThisBoxSelected ? 0.3 : 1;
                return (
                  <React.Fragment key={box.id}>
                    <motion.div
                      className={`bg-[#d2d3ce] p-4 rounded-2xl ${box.className}`}
                      variants={boxVariants}
                      animate={isThisBoxSelected ? "selected" : "unselected"}
                      onClick={() => handleBoxClick(box.id)}
                      style={{ pointerEvents: isBoxSelected && !isThisBoxSelected ? 'none' : 'auto', opacity: opacity }}
                      layout
                    >
                      {box.content}
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

            {/* Segundo grid */}
             <div className="grid grid-cols-3 m-4 gap-10 lg:gap-10">
               {boxes.slice(2, 4).map((box) => {
                 const isThisBoxSelected = selectedId === box.id;
                 // Determinar la opacidad de la misma manera
                 const opacity = isBoxSelected && !isThisBoxSelected ? 0.3 : 1;
                 return (
                   <React.Fragment key={box.id}>
                     <motion.div
                       className={`bg-[#d2d3ce] p-4 rounded-2xl ${box.className}`}
                       variants={boxVariants}
                       animate={isThisBoxSelected ? "selected" : "unselected"}
                       onClick={() => handleBoxClick(box.id)}
                       style={{ pointerEvents: isBoxSelected && !isThisBoxSelected ? 'none' : 'auto', opacity:opacity }}
                       layout
                     >
                       {box.content}
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