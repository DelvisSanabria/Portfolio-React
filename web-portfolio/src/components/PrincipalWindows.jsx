import {Menu} from './Menu'
import pc from './../assets/img/pc-1.png'
import {AnimatePresence, easeInOut, motion} from 'framer-motion'

export function PrincipalWindows(){
  return (
    <div className="grid grid-rows-[70px_1fr] w-[100vw] h-[100vh] bg-[#f5f5f5]">
      <header className="flex flex-col items-center">
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            exit={{ opacity: 0, y: -100 }}
            className="grid grid-rows-2 justify-items-center p-4 font-semibold text-[#101736] tracking-wider select-none"
          >
            <span>Delvis</span>
            <span>Sanabria</span>
          </motion.div>
        </AnimatePresence>
      </header>
      <main className="grid grid-rows-[125px_1fr] justify-center justify-items-center">
        <AnimatePresence>
          <motion.div
            initial={{  x: "-100%", scale:0.5 }}
            animate={{ x: 0,scale:1 }}
            transition={{ 
              scale:{duration: 4},
              duration:3,
            }}
            exit={{ x:"-100%", scale:0.5 }}
            className="grid grid-rows-[17px_110px] justify-items-center select-none">
            <div className="w-0 h-0 border-l-[18px] border-l-transparent border-b-[19px] border-b-white border-r-[18px] border-r-transparent"></div>
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
          </motion.div>
        </AnimatePresence>
        <div className="flex flex-row justify-center items-center">
          <img className="h-[350px]" src={pc} alt="intro-Img" />
        </div>
        <Menu />
      </main>
    </div>
  );
};