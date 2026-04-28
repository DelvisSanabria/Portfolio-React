import CloseIcon from "./svg/CloseIcon.jsx";
import {HamburgerMenu} from "./svg/HamburgerMenu.jsx";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

let tabs = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "works", label: "Works" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export function Menu() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const [isClicked, SetIsClicked] = useState(false);

  const handleClick = () => {
    SetIsClicked(!isClicked);
  };

  const scrollToSection = (id) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    SetIsClicked(false);
  };

  return (
    <>
      {isClicked ? (
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed z-50 bottom-4 left-0 right-0 flex justify-center"
        >
          <div className="flex items-center bg-[#d2d3ce] dark:bg-[#1a2347] w-[320px] sm:w-[430px] rounded-xl p-1 text-[#101736] dark:text-[#d2d3ce] text-xs select-none transition-colors duration-300">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => scrollToSection(tab.id)}
                className={`${
                  activeTab === tab.id
                    ? "text-[#101736] dark:text-[#d2d3ce] font-bold"
                    : "hover:text-black/75 dark:hover:text-white/75"
                } relative flex flex-row justify-center items-center rounded-lg w-16 h-7 transition-colors duration-300`}
                style={{
                  WebkitTapHighlightColor: "transparent",
                }}
              >
                {activeTab === tab.id && (
                  <motion.span
                    layoutId="bubble"
                    className="absolute inset-0 z-10 bg-[#b9b9b9] dark:bg-[#232d4a]"
                    style={{ borderRadius: 8 }}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-20">{tab.label}</span>
              </button>
            ))}
            <div onClick={handleClick} className="cursor-pointer text-[#101736] dark:text-[#d2d3ce] transition-colors duration-300">
              <CloseIcon />
            </div>
          </div>
        </motion.div>
      ) : (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            exit={{opacity:0, y: -200}}
            className="fixed bottom-4 left-0 right-0 z-50 flex justify-center"
          >
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: [-2, 3] }}
              whileHover={{scale:1.2, background:"#b9b9b9"}}
              onClick={handleClick}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 2,
              }}
              className="bg-[#d2d3ce] dark:bg-[#1a2347] w-[45px] justify-items-center rounded-xl p-1 m-4 text-[#101736] dark:text-[#d2d3ce] text-xs select-none cursor-pointer transition-colors duration-300"
            >
              <HamburgerMenu />
            </motion.div>
          </motion.div>
        </AnimatePresence>
      )}
    </>
  );
}