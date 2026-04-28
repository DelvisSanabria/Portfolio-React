import { motion,useMotionValue, useSpring, useTransform } from "framer-motion";

export default function Card ({src}){
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring,[-0.5, 0.5],["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring,[-0.5, 0.5],["-17.5deg", "17.5deg"]);
  const handleMouseMove = (e)=>{
    const rect = e.target.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = (mouseX / width) - 0.5;

    const yPct = (mouseY / height) - 0.5;

    x.set(xPct);
    y.set(yPct);
  }

  const handleMouseLeave = ()=>{
    x.set(0);
    y.set(0);
  }
  return(
    <motion.div
    onMouseMove={handleMouseMove}
    onMouseLeave={handleMouseLeave}
    style={{
      rotateX,
      rotateY,
      transformStyle:"preserve-3d",
      boxShadow: "0 20px 60px rgba(0,0,0,0.15)"
    }}
    className="relative h-[250px] w-60 sm:h-[300px] sm:w-72 md:h-[350px] md:w-80 rounded-xl bg-gradient-to-br from-[#d2d3ce] to-[#b9b9b9] dark:from-[#1a2347] dark:to-[#232d4a] text-[#101736] dark:text-[#d2d3ce] transition-colors duration-300 hover:shadow-2xl dark:hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d"
        }}
        className="absolute inset-4 grid place-content-center rounded-xl bg-[#f5f5f5] dark:bg-[#232d4a] shadow-lg transition-colors duration-300"
      >
        <img className="h-[180px] sm:h-[240px] md:h-[280px] object-contain" src={src} alt="PC" />
      </div>
    </motion.div>
  )
};