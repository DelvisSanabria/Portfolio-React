import './../styles/components/_animation.sass'

export function Circles({children, contClasses, sdClasses}){
  return(
    <>
      <div className={contClasses}>
        {children}
      </div>
      <div className={sdClasses}></div>
    </>
  )
};