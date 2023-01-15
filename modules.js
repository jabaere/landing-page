import { cardButton } from "./modules/cardButton.js";
import { paymentIcons } from "./modules/paymentIcons.js";
import { stars } from "./modules/stars.js";
import { reviewCard } from "./modules/reviewCard.js";
import { questions} from "./modules/questions.js";
//----------------------------------create card buttons---------------------------------
[1,2,3].map((item,index)=> {
    let button_01 = cardButton('GET YOUR MAGIC','card-buttons-sb','card-button-text',`card-buttons-sb-0${item}`);
    const parent = document.getElementById(`card-0${item}`)
    parent.innerHTML+=button_01
});


//--------------------------create card payment method icons----------------------------

const data = [1,2,3]

data && data.length > 0 && data.map((item,index)=> {
    let icons2 = paymentIcons('card-payments',`card-payments-0${item}`).replaceAll(',','');;
    const parent = document.getElementById(`card-0${item}`);
    parent.innerHTML+=icons2;
   
})

//-----------------------------------------create stars--------------------------------
   const path = 'assets/pictures/star-01.svg';
   let alStars = stars('stars-total-container','stars-total',path).replaceAll(',','');
   const starsParrent = document.getElementById('third-screen');
   starsParrent.innerHTML+=alStars

// -----------------------------------------create review cards ------------------------

const comments = [
    '',
    "I love the MagicMassage! It’s simple to use, does not mess up my curly hair as many other similar products do, and the massage is relaxing as it is refreshing. I feel like it has been made for my scalp! It just feels right.",
    "I could not be happier with this product! I use it at night to relax and it does wonders for me. My kids and dog also love it, they’ll sit and let me massage their scalp for hours. At first my Labrador was hesitant not knowing what it was, but now she gets excited as soon as I take the MagicMassage out.",
    "It arrived in perfect condition, and the packaging was immaculate. It felt amazing on my head, like someone was massaging it with the perfect pressure and speed. My long hair doesn't get caught in it at all, and I feel relaxed after using it. Best purchase I’ve made in a LONG time!",
    "I could not love this massager more. I use it for scalp stimulation during showers as it feels great to massage with shampoo. I love that it's light enough to carry it with me when I travel and comfortable to use. The product looks luxurious and would recommend this to anyone looking for a high quality head massager."
  ]

let reviews = [1,2,3,4]
reviews && reviews.length > 0 && reviews.map((item,index)=> {
    let customeReviews = reviewCard('review-card-container',`review-card-container-0${item}`,item,comments).replaceAll(',','');;
    const parent = document.getElementById('third-screen');
    parent.innerHTML+=customeReviews;
    let starsForUser = stars('user-star-container','user-stars-total',path).replaceAll(',','');
    const starContainer = document.getElementById(`review-card-container-0${item}`);
    starContainer.innerHTML+=starsForUser;
});

//-----------------------------------------create questions----------------------------

export const questionsData = [
    {
        question:'How long does the battery last fully charged?',
        answer:"The MagicMassage™ can last up to 6 hours when it's fully charged.",
        id:1
    },
    {
        question:'Can I use it in the shower?',
        answer:"don't hire me",
        id:2
    },
    {
        question:'What is the Mint price ?',
        answer:"don't hire me",
        id:3
    },
    {
        question:'What is included in the package',
        answer:"don't hire me",
        id:4
    }
]

let questions_02 = questions(questionsData).toString().replaceAll(',','');
let questionParrent = document.getElementById('faq-screen');
questionParrent.innerHTML+=questions_02;





