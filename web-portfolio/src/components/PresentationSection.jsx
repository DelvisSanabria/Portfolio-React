
import pc from './../assets/img/pc-1.png'
import {AnimatePresence , easeInOut, motion,useMotionValue, useSpring, useTransform} from 'framer-motion'
import "@theme-toggles/react/css/Expand.css"
import { Expand } from '@theme-toggles/react'
import Card from './Card'

export function PresentationSection(){
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
    <div className="grid grid-rows-[70px_1fr] w-[97vw] overflow-x-hidden h-[100vh]">
      <header className=" grid grid-cols-2 items-center my-2">
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            exit={{ opacity: 0, y: -100 }}
            className="grid grid-rows-2 justify-items-start ml-3 p-4 font-semibold text-[#101736] tracking-wider select-none"
          >
            <span>Delvis</span>
            <span>Sanabria</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            exit={{ opacity: 0, y: -100 }}
            className="grid grid-rows-2 justify-items-end p-4 mr-3 font-semibold text-[#101736] tracking-wider select-none"
          >
            <Expand duration={750} />
          </motion.div>
        </AnimatePresence>
      </header>
      <main className="grid grid-rows-[125px_1fr] pl-11 mt-3 justify-center justify-items-center overflow-x-hidden">
        <AnimatePresence>
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
            className="grid grid-rows-[100px_17px] justify-items-center select-none"
          >
            <div className="flex flex-row justify-center items-center w-[300px] h-[100px] bg-white rounded-2xl">
              <div className="grid grid-rows-3 justify-center text-center">
                <h2 className="font-semibold text-[#101736] tracking-wider">
                  Hi! I am Delvis Sanabria
                </h2>
                <h3 className="font-medium text-sm text-[#101736] tracking-wider mt-1">
                  Web Developer
                </h3>
                <span className="text-[#101736] tracking-wider text-xs mt-2">
                  and this is a piece of me
                </span>
              </div>
            </div>
            <div className="w-0 h-0 border-l-[18px] border-l-transparent border-b-[19px] border-b-white border-r-[18px] border-r-transparent rotate-180"></div>
          </motion.div>
        </AnimatePresence>
        <div className="flex flex-row justify-center items-center">
          <Card src={pc}></Card>
        </div>
      </main>
    </div>
  );
};