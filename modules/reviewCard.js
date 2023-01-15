export function reviewCard(containerStyle,containerId,id,comments) {

    return `
       <div class=${containerStyle} id=${containerId}>
         <img src='../assets/pictures/user-image-0${id}.png' alt ='user-image' id='user-image-0${id}' class='user-image' />
         <p id='user-name-01' class='user-name'>Megan K.</p>
         <img src='../assets/pictures/verified-user.svg' alt ='user-ver'  class='user-verified-icon' />
         <p class='user-verified-text'>VERIFIED BUYER</p>
         <p class='user-comment' id='user-comment-01'>${comments[id]}</p>
       </div>
     `
  }