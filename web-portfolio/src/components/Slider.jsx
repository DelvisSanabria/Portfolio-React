import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import images from "./images.jsx";

export function Slider() {
  const [width, setWidth] = useState(0);
  const slider = useRef();
  useEffect(() => {
    if (slider.current) {
      setWidth(slider.current.scrollWidth - slider.current.offsetWidth);
    }
  }, []);

  return (
    <div className="overflow-hidden w-full py-8">
      <motion.div
        ref={slider}
        className="cursor-grab"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="flex gap-8 px-4"
          style={{ width: "max-content" }}
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 w-32 h-32 md:w-40 md:h-40 bg-[#d2d3ce] rounded-2xl p-4 flex items-center justify-center hover:bg-[#b9b9b9] transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {image}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}