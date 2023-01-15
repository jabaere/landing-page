export function cardButton(
  text,
  buttonClassStyle,
  textClassStyle,
  buttonIdStyle
) {
   return `
     <div class=${buttonClassStyle} id=${buttonIdStyle}>
       <p class=${textClassStyle}>${text}</p>
     </div>
   `
}