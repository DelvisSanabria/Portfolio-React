/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import './styles/components/_animation.sass'
import { Circles } from './components/Circles';
import { Circle } from './components/Circle';
import { Card } from './components/Card';
import logo from "./assets/Complete__logo__rc.png"
import { Presentation } from './components/Presentation';
import { AnimatePresence, easeInOut, motion } from "framer-motion"

function Home() {
  const [selectedCircle, setSelectedCircle] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const handleCircleClick = (cirle)=>{
    setSelectedCircle(cirle)
    setIsVisible(true);
  }

  function closeModal(){
    setIsVisible(false);
    setSelectedCircle("");
  }

  const MoveContainer = ()=>{
    const [mousePos, setMousePos] = useState({x:0, y:0});
    const sensitivity = 10;
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      setMousePos({ x:clientX, y:clientY });
    };

    useEffect(()=>{
      document.addEventListener('mousemove', handleMouseMove);
      return()=>{
        document.removeEventListener('mousemove', handleMouseMove);
      }
    },[])
    return(
      <div className='secondCont'>
        <AnimationPosition mousePos={mousePos} sensitivity={sensitivity}/>
      </div>
    )
  };

  const AnimationPosition = ({mousePos,sensitivity}) => {
    return (
      <>
      <motion.div
        className="animationPosition"
        style={{
          translateX: `${mousePos.x/sensitivity}px`,
          translateY: `${mousePos.y / sensitivity}px`,
        }}
        initial={{
          opacity: 0,
          scale: 0,
        }}
        animate={{ opacity: 1, scale: 1 }}

        transition={{transitionTimingFunction:easeInOut,
          transitionDelay: 100,
          transitionDuration: 25,}}
      >
        <Circles
          contClasses={"container__six"}
          sdClasses={"container__sd__six"}
        >
          <Circle
            classes={"circle__projets"}
            event={() => {
              handleCircleClick("circle__projets");
            }}
          ></Circle>
        </Circles>
        <Circles
          contClasses={"container__five"}
          sdClasses={"container__sd__five"}
        ></Circles>
        <Circles
          contClasses={"container__four"}
          sdClasses={"container__sd__four"}
        >
          <Circle
            classes={"circle__skills"}
            event={() => {
              handleCircleClick("circle__skills");
            }}
          ></Circle>
        </Circles>
        <Circles
          contClasses={"container__three"}
          sdClasses={"container__sd__three"}
        >
          <Circle
            classes={"circle__contact"}
            event={() => {
              handleCircleClick("circle__contact");
            }}
          ></Circle>
        </Circles>
        <Circles sdClasses={"container__sd__two"}></Circles>
        <Circles
          contClasses={"container__one"}
          sdClasses={"container__sd__one"}
        >
          <div className="logContainer">
            <img
              className="logo"
              onClick={() => {
                handleCircleClick("circle__about");
              }}
              src={logo}
              alt="LogoImg"
            />
          </div>
        </Circles>
      </motion.div>
      </>
    );
  };
  return (
    <>
      <div className="container">
        <AnimatePresence>
          {isVisible == true && (
            <Card event={closeModal} selectedCircle={selectedCircle}></Card>
          )}
        </AnimatePresence>
      </div>
      <div className="generalContainer">
        <Presentation></Presentation>
        <MoveContainer>
        </MoveContainer>
      </div>
    </>
  );
}

export default Home;