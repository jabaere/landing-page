export function paymentIcons(
    containerStyle,
    containerId
  ) {
    const icons = [
        {
          name: 'amex',path:'../assets/pictures/amex.svg',id:1
        },
        {
          name: 'apple-pay', path:'../assets/pictures/apple-pay.svg',id:2
        },
        {
          name: 'google-pay', path:'../assets/pictures/google-pay.svg',id:3
        },
        {
          name: 'mastercard', path:'../assets/pictures/mastercard.svg',id:4
        },
        {
          name: 'ragaca-pay', path:'../assets/pictures/ragaca-pay.svg',id:5
        },
        {
          name: 'paypal', path:'../assets/pictures/paypal.svg',id:6
        },
        {
          name: 'visa', path:'../assets/pictures/visa.svg',id:7
        }        
]
     return `
       <div class=${containerStyle} id=${containerId}>
          ${icons.map((item,index) => `<img src=${item.path} id='icon-0${item.id}'/>`)}
       </div>
     `
  }