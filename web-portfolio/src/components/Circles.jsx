import './../styles/components/_animation.sass'

export function Circles({children, contClasses, sdClasses, style}){
  return(
    <>
      <div className={contClasses} style={style}>
        {children}
      </div>
      <div className={sdClasses} style={style}></div>
    </>
  )
};