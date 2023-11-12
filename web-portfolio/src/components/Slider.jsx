import { useRef,useEffect, useState } from "react";
import  './../styles/components/_skillsmenu.sass';
import { motion } from "framer-motion";
import  images from "./images.jsx";

export function Slider(){
  const [width, setWidth] = useState(0);
  const slider = useRef();
  let index = 0;
  useEffect(()=>{
   setWidth(slider.current.scrollWidth - slider.current.offsetWidth); 
  }, []);
  function updateIndex(){
    index++
  }
  return(
    <motion.div ref={slider} className="sliderContainer" whileTap={{cursor:"grabbing"}}>
      <motion.div drag="x" dragConstraints={{right:0, left: -width}} className="slider">
        {images.map(image =>{
          return(
            <motion.div className="sliderImgCont" key={index}>
              {image}
              {updateIndex()}
            </motion.div>
          )
        })}
      </motion.div>
    </motion.div>
  )
}