 
import pc from './../assets/img/pc-1.png'
import {AnimatePresence, motion, useMotionValue, useSpring, useTransform} from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import Card from './Card'

export function PresentationSection(){
  const { isDark, toggleTheme } = useTheme();
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
   return (
    <div className="w-full overflow-x-hidden min-h-[100vh] pt-6 sm:pt-8 relative">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f5f5f5] via-transparent to-[#d2d3ce] dark:from-[#101736] dark:via-transparent dark:to-[#1a2347] opacity-50 pointer-events-none transition-colors duration-300"></div>
      <div className="relative z-10">
      <header className="flex justify-between items-center py-4 px-4 w-full relative z-50">
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col font-semibold text-[#101736] dark:text-[#d2d3ce] tracking-wider select-none"
          >
            <span className="text-lg md:text-xl">Delvis</span>
            <span className="text-lg md:text-xl">Sanabria</span>
          </motion.div>
          <div className="flex justify-end">
            <button
              onClick={toggleTheme}
              className="w-12 h-12 rounded-xl bg-[#d2d3ce] dark:bg-[#1a2347] hover:bg-[#b9b9b9] dark:hover:bg-[#232d4a] transition-all duration-300 flex items-center justify-center text-xl border-2 border-[#101736] dark:border-[#d2d3ce] shadow-lg"
              aria-label="Toggle theme"
            >
              {isDark ? '☀️' : '🌙'}
            </button>
          </div>
      </header>
       <main className="flex flex-col items-center mt-8 md:mt-10 px-4 overflow-x-hidden gap-8 md:gap-10">
         <AnimatePresence>
           <div className="flex flex-col items-center">
             <motion.div
               onMouseMove={handleMouseMove}
               onMouseLeave={handleMouseLeave}
               style={{
                 rotateX,
                 rotateY,
                 transformStyle: "preserve-3d",
               }}
               initial={{ x: "-100%", scale: 0.5 }}
               animate={{ x: 0, scale: 1 }}
               transition={{
                 scale: { duration: 4 },
                 duration: 3,
               }}
               exit={{ x: "-100%", scale: 0.5 }}
               className="flex flex-col items-center select-none"
             >
               <div className="flex flex-row justify-center items-center w-[280px] sm:w-[300px] md:w-[400px] h-auto min-h-[100px] bg-white dark:bg-[#1a2347] rounded-2xl p-4 md:p-6 transition-colors duration-300">
                 <div className="grid grid-rows-3 justify-center text-center">
                   <h2 className="font-semibold text-[#101736] dark:text-[#d2d3ce] tracking-wider text-sm md:text-base lg:text-lg transition-colors duration-300">
                     Hi! I am Delvis Sanabria
                   </h2>
                   <h3 className="font-medium text-[#101736] dark:text-[#d2d3ce] tracking-wider mt-1 text-xs md:text-sm transition-colors duration-300">
                     Web Developer
                   </h3>
                   <span className="text-[#101736] dark:text-[#d2d3ce] tracking-wider text-xs mt-2 transition-colors duration-300">
                     and this is a piece of me
                   </span>
                 </div>
               </div>
             </motion.div>
           </div>
         </AnimatePresence>
         <Card src={pc}></Card>
       </main>
      </div>
    </div>
  );
};