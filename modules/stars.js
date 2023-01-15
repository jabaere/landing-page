export function stars(containerStyle,starsCommonStyle,path) {
    const stars = [1,2,3,4,5];
   // const path = './assets/pictures/Star 2.svg';
     return `
       <div class=${containerStyle}>
          ${stars.map((item,index) => `<img src=${path} class=${starsCommonStyle} id='customers-total-star-0${item}'/>`)}
       </div>
     `
  }