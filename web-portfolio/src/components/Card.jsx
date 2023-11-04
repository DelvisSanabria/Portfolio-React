import { Button } from "./Button";
import { Content } from "./Content";
import  './../styles/components/_cardStyle.sass'
import { easeInOut, motion } from "framer-motion"

export function Card({selectedCircle, event}){
  return (
    <motion.div
      className="cardContainer"
      initial={{
        opacity: 0,
        y: -100,
        transitionTimingFunction: easeInOut,
        transitionDuration: 3,
      }}
      animate={{ opacity: 1, y: 0 }}
      exit={{
        opacity: 0,
        y: -100,
        transitionTimingFunction: easeInOut,
        transitionDuration: 3,
      }}
    >
      <div className="card">
        <div className="closeWindows">
          <Button classes="closeBtn" event={event}></Button>
        </div>
        <Content selectedCircle={selectedCircle}></Content>
      </div>
    </motion.div>
  );
}