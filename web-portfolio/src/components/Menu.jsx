import CloseIcon from "./svg/CloseIcon.jsx";
import {HamburgerMenu} from "./svg/HamburgerMenu.jsx";
import { useState } from "react";
import { AnimatePresence, m, motion } from "framer-motion";

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
  return (
    <>
      {isClicked ? (
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="sticky flex items-center z-50 overflow-hidden my-4 top-[92vh]  bg-[#d2d3ce] w-[430px] rounded-xl p-1 text-[#101736] text-xs select-none md:left-[24vw] lg:left-[31vw]">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`${
              activeTab === tab.id ? "" : "hover:text-black/75"
            } relative flex flex-row justify-center items-center rounded-lg w-20 h-7`}
            style={{
              WebkitTapHighlightColor: "transparent",
            }}
          >
            {activeTab === tab.id && (
              <motion.span
                layoutId="bubble"
                className="absolute inset-0 z-10 bg-[#b9b9b9] mix-blend-overlay"
                style={{ borderRadius: 8 }}
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            {tab.label}
          </button>
        ))}
        <div onClick={handleClick} className="cursor-pointer">
          <CloseIcon />
        </div>    
      </motion.div>
      ) : (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            exit={{opacity:0, y: -200}}
            className="sticky top-[92vh] justify-items-center z-50"
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
              className="bg-[#d2d3ce] w-[45px] justify-items-center rounded-xl p-1 m-4 text-[#101736] text-xs select-none cursor-pointer"
            >
              <HamburgerMenu />
            </motion.div>
          </motion.div>
        </AnimatePresence>
      )}
    </>
  );
}