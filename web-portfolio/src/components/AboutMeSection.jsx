import { motion, useAnimate } from "framer-motion";
import { useState } from "react";

export function AboutMeSection() {
  const [selectedId, setSelectedId] = useState(null);

  const boxVariants = {
    selected: {
      opacity: 1,
      scale: 1.2,
      width: "55vw",
      height: "25vh",
      position: "absolute",
      top: "calc(120vh + 5rem)",
      left: "calc(50% - 24vw)",
      zIndex: 999,
      padding: "20px",
    },
    unselected: {
      opacity: 0.5,
      scale: 0.9,
      x: 0,
      y: 0,
    },
  };

  const handleBoxClick = (id) => {
    setSelectedId(id);
  };

  return (
    <>
      <section>
        <div className="flex justify-center p-4">
          <h2 className="font-semibold text-4xl text-[#101736] tracking-wider">About Me</h2>
        </div>
        <div className="flex flex-col pl-10 lg:pl-40">
          <div className="grid grid-cols-3 m-4 gap-20 lg:gap-40">
            <motion.div
              className="bg-[#d2d3ce] p-4 rounded-2xl col-span-1 w-[30vw] h-[200px]"
              variants={boxVariants}
              animate={selectedId === 0 ? "selected" : "unselected"}
              transition={{ type: "spring", stiffness: 100 }}
              onClick={() => handleBoxClick(0)}
            >
              "Hola"
            </motion.div>
            <motion.div
              className="bg-[#d2d3ce] p-4 rounded-2xl col-span-2 w-[45vw] h-[200px]"
              variants={boxVariants}
              animate={selectedId === 1 ? "selected" : "unselected"}
              transition={{ type: "spring", stiffness: 100 }}
              onClick={() => handleBoxClick(1)}
            >
              "Hola"
            </motion.div>
          </div>
          <div className="grid grid-cols-4 m-4 gap-16 lg:gap-32">
            <motion.div
              className="bg-[#d2d3ce] p-4 rounded-2xl col-span-2 w-[45vw] h-[200px]"
              variants={boxVariants}
              animate={selectedId === 2 ? "selected" : "unselected"}
              transition={{ type: "spring", stiffness: 100 }}
              onClick={() => handleBoxClick(2)}
            >
              "Hola"
            </motion.div>
            <motion.div
              className="bg-[#d2d3ce] p-4 rounded-2xl col-span-1 w-[30vw] h-[200px]"
              variants={boxVariants}
              animate={selectedId === 3 ? "selected" : "unselected"}
              transition={{ type: "spring", stiffness: 100 }}
              onClick={() => handleBoxClick(3)}
            >
              "Hola"
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
