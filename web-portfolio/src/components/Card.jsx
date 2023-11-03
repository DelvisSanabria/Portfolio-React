import { Button } from "./Button";
import { Content } from "./Content";
import  './../styles/components/_cardStyle.sass'

export function Card({selectedCircle, event}){
  return(
    <div className="cardContainer">
      <div className="card">
        <div className="closeWindows">
          <Button classes="closeBtn" event={event}></Button>
        </div>
        <Content selectedCircle={selectedCircle}></Content>
      </div>
    </div>
  )
}