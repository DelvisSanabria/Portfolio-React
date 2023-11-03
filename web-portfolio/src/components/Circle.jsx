export function Circle({classes, event = () => {
  console.log("click");
}}){
  return(
    <div className={classes} onClick={event}></div>
  )
};