import { useEffect, useState } from 'react';
import  './../styles/components/_presentationText.sass'

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
        setTimeout(typeEffect, 200);
      } else if (charIndex < currentWord.length) {
        setDynamicText(currentWord.substring(0, charIndex + 1));
        charIndex++;
        setTimeout(typeEffect, 300);
      } else {
        isDeleting = true;
        setTimeout(typeEffect, 1200);
      }
      
      if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
      }
    }

    typeEffect();
  }, []);

  return (
    <div className='textContainer'>
      <h1>I'm <br /> <span>{dynamicText}</span></h1>
    </div>
  );
}