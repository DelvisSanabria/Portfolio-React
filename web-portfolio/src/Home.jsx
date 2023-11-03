import { useEffect, useState } from 'react'
import './styles/components/_animation.sass'
import { Circles } from './components/Circles';
import { Circle } from './components/Circle';
import { Card } from './components/Card';
import logo from "./assets/Complete__logo__rc.png"
import { Presentation } from './components/Presentation';

function Home() {
  const [selectedCircle, setSelectedCircle] = useState("")
  const handleCircleClick = (cirle)=>{
    setSelectedCircle(cirle)
  }
  const [Modal, setModal] = useState(false);

  function openModal(){
    setModal(true)
  }
  function closeModal(){
    setSelectedCircle("")
  }

  const MoveContainer = ({children})=>{
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
      <div
        className="animationPosition"
        style={{
          transform: `translate(${mousePos.x/sensitivity}px,${mousePos.y / sensitivity}px)`
        }}
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
      </div>
      </>
    );
  };
  return (
    <>
      <div className="container">
        {selectedCircle && (
          <Card event={closeModal} selectedCircle={selectedCircle}></Card>
        )}
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