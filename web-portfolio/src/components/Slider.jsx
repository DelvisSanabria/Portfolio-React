import { useEffect, useState } from "react";
import  './../styles/components/_skillsmenu.sass';

export function Slider({imgSlides}){
  const [index, setIndex] = useState(0);
  const [img, setImg] = useState(imgSlides);
  const length = imgSlides.length
  
  useEffect(
    () => {
      setImg(imgSlides[index])
    }, [index]
  )


  function nextImg() {
    setIndex( index === length - 1 ? 0 : index + 1 )
  }
  function previousImg() {
    setIndex(index === 0 ? length - 1 : index - 1)
  }

  return (
    <>
      <div className="sliderContainer">
        <div className="previousBtn" onClick={previousImg}>
          <svg
            className="ctrlBtn"
            xmlns="http://www.w3.org/2000/svg"
            height="48"
            viewBox="0 -960 960 960"
            width="48"
          >
            <path d="M561-240 320-481l241-241 43 43-198 198 198 198-43 43Z" />
          </svg>
        </div>
        <div className="slider">
          <img className="sliderImg" src={img} alt="#" />
        </div>
        <div className="nextBtn" onClick={nextImg}>
          <svg
            className="ctrlBtn"
            xmlns="http://www.w3.org/2000/svg"
            height="48"
            viewBox="0 -960 960 960"
            width="48"
          >
            <path d="m375-240-43-43 198-198-198-198 43-43 241 241-241 241Z" />
          </svg>
        </div>
      </div>
    </>
  );
}