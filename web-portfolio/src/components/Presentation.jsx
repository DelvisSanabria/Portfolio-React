import { useEffect, useState } from 'react';
import  './../styles/components/_presentationText.sass';
import { easeIn, easeInOut, motion } from "framer-motion";

export function Presentation() {
  const words = ["Delvis", "Web Development", "simplicity lover", "love the functional"];
  const [dynamicText, setDynamicText] = useState('');
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  useEffect(() => {
    function typeEffect() {
      const currentWord = words[wordIndex];
      
      if (isDeleting && charIndex > 0) {
        setDynamicText(currentWord.substring(0, charIndex - 1));
        charIndex--;
        setTimeout(typeEffect, 100);
      } else if (charIndex < currentWord.length) {
        setDynamicText(currentWord.substring(0, charIndex + 1));
        charIndex++;
        setTimeout(typeEffect, 100);
      } else {
        isDeleting = true;
        setTimeout(typeEffect, 4000);
      }
      
      if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
      }
    }

    typeEffect();
  }, []);

  return (
    <>
      <motion.div
        className="textContainer"
        initial={{
          opacity: 0,
          y: -150,
          transitionTimingFunction: easeInOut,
          transitionDuration: 5,
        }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1>
          I'm <br /> <span>{dynamicText}</span>
        </h1>
      </motion.div>
    </>
  );
}