

//---------------------------------create stars for comment-------------------------------
const stars = ['one','two','three','four','five'];

stars.map((item,index) => {
       let node = document.createElement("img");
       node.setAttribute("src", "assets/pictures/Star 2.svg");
       node.setAttribute("class", "star");
    switch(item) {
        case 'one':
           node.setAttribute("id", "star-01");
            break;
        case 'two':
           node.setAttribute("id", "star-02");
            break;
        case 'three':
           node.setAttribute("id", "star-03");
            break;
        case 'four':
            node.setAttribute("id", "star-04");
            break;
        case 'five':
            node.setAttribute("id", "star-05");
            break;
        default:
           console.log('whre is stars') | null
        }
        
const parent = document.getElementById('comment')
parent.appendChild(node);

})
//----------------------------------------- site variables ------------------------------------

//price

let firstCardPrice = '$69.95'
let secondCardPrice = "$139.90"
let secondCardOldPrice = '$209.85'
let thirdCardPrice = '$209.85'
let thirdCardOldPrice = '$349.95'

let card_01 = document.getElementById('card-price-01');
let card_02 = document.getElementById('card-price-02');
let card_03 = document.getElementById('card-price-03');
let card_02_old = document.getElementById('card-old-price-01');
let card_03_old = document.getElementById('card-old-price-02');

card_01.innerText = firstCardPrice
card_02.innerText = secondCardPrice
card_03.innerText = thirdCardPrice
card_02_old.innerText = secondCardOldPrice
card_03_old.innerText = thirdCardOldPrice


//total review

const totalReview = document.getElementById('total-reviews');
totalReview.innerHTML = 131



//------------------------------ change some text for mobile view -----------------------------
let first_screen_title = document.getElementById('magic_description');
let magic_box_second_title = document.getElementById('magic_box_title_02');


window.addEventListener('resize',()=> {
    if(window.innerWidth <= 414){
        first_screen_title.innerHTML = 'MagicMassage provides relief from head tensions, muscle aches, sleep irregularities and more!';
        magic_box_second_title.innerHTML = 'Body Massage';
        
    //------------------------------------------hide all ul tag -----------------------------------
        let i = 0
        while(i < 4){
            document.querySelectorAll('ul')[i].style.display='none';
            i++
        }
    document.querySelector('#magic_button_text').innerHTML = 'Get The MagicMassage Now'
    document.querySelector('.wrapper-item-text-01').innerHTML = 'FREE 2-DAY USA SHIPPING'
    document.querySelector('.wrapper-item-text-02').innerHTML = '100% MONEY-BACK GUARANTEE'
    document.querySelector('#card-message-01').innerHTML = 'Buy MagicMassage'
    const changeCardMoneyBackText = document.querySelectorAll('.card-money-back-text')
    
    
    changeCardMoneyBackText.forEach(element => {
        element.innerHTML = 'Special online price!'
    });
    
    };
})




window.addEventListener('load', ()=> {
//--------------------------------------horizontal scroll for comments section --------------------------------
const review_card_01 = document.querySelector('#review-card-container-01');
const review_card_02 = document.querySelector('#review-card-container-02');
const review_card_03 = document.querySelector('#review-card-container-03');

const dots = document.querySelectorAll('#scroll-dots')

    dots.forEach((item,index) => {
        item.addEventListener('click', function(e) {
       
            if(e.target.classList.contains('dots')) {
                e.target.classList.toggle('dot-active');
                if(e.target.id === 'dot-02'){
                    review_card_01.style.left = '-1000px';
                    review_card_02.style.left = '18px';
                    review_card_03.style.left = '316px';
                    document.getElementById('dot-01').classList.remove('dot-active');
                    document.getElementById('dot-03').classList.remove('dot-active');
                }
                if(e.target.id === 'dot-03'){
                    review_card_02.style.left = '-1000px';
                    review_card_03.style.left = '18px';
                    document.getElementById('dot-02').classList.remove('dot-active');
                    document.getElementById('dot-01').classList.remove('dot-active');
                  
                }
                if(e.target.id === 'dot-01'){
                    review_card_01.style.left = '18px';
                    review_card_02.style.left = '316px';
                    review_card_03.style.left = '616px';
                    document.getElementById('dot-02').classList.remove('dot-active');
                    document.getElementById('dot-03').classList.remove('dot-active')
                }
            }
 
            
        });
      });
})
    










