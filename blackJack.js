let cardNumber;
let cardValue;
let cardSuit;
let hand = [];
let handValue = 0;


const dealButton = document.getElementById('dealHand')
const hitButton = document.getElementById('hitButton')
const playerHand = document.getElementById('playerHand')
const playerHandTotal = document.getElementById('playerHandTotal')
const suitImages = document.getElementById('suitImgs')
const deck = {
    values: [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'Ace'],
    suits: ['Diamonds', 'Spades', 'Clubs', 'Hearts'],
    heart: document.getElementById('heartImg'),
    diamond: document.getElementById('diamondsImg'),
    spade: document.getElementById('spadesImg'),
    club: document.getElementById('clubsImg')
}

const getCardValue = () => {
    const randomNumber = Math.floor(Math.random() * deck.values.length)
    for(let i = 0; i < deck.values.length; i++) {
        if(randomNumber === i) {
            cardNumber = deck.values[i]
        if(deck.values[i] === 'J' || deck.values[i] === 'Q' || deck.values[i] === 'K') {
                cardValue = 10;
            } else if (deck.values[i] === 'Ace') {
                cardValue = 11
            } else {
                cardValue = deck.values[i]
            }
        }
    }
    hand.push(cardNumber)
    handValue += cardValue;
    return cardNumber
}

const getCardSuit = () => {
    let img = document.createElement('img');
    img.style.width = '20px'
    const randomNumber = Math.floor(Math.random() * deck.suits.length)
    for(let i = 0; i < deck.suits.length; i++) {
        if(randomNumber === i) {
            cardSuit = deck.suits[i]
            switch(cardSuit){
                case 'Hearts':
                    img.setAttribute('src', "./imgs/hearts.png");
                    img.setAttribute('class', 'red')
                    //drawcard(img) ???
                    break;
                case 'Diamonds':
                    img.setAttribute('src', './imgs/diamonds.png');
                    img.setAttribute('class', 'red')
                    break;
                case 'Spades':
                    img.setAttribute('src', './imgs/spades.png');
                    img.setAttribute('class', 'black');
                    break;
                case 'Clubs':
                    img.setAttribute('src', './imgs/clubs.png');
                    img.setAttribute('class', 'black');
                    break;
            }
        }
    }
    hand.push(cardSuit)
    return img
}

const drawCard = () => {
    updateDis(getCardValue(), getCardSuit())
}

const updateDis = (value, suit) => {
    console.log(value, suit)
    let cardSpan = document.createElement('span');
    cardSpan.innerHTML = ` ${value}`, cardSpan.appendChild(suit)
    playerHandTotal.innerText = `Total: ${handValue}`
    if(suit.classList.contains('red')) {
        cardSpan.style.color = 'red'
    }
    playerHand.append(cardSpan)
}

dealButton.onclick = () => {
    playerHand.innerText = ''
    handValue = 0;
    drawCard()
    drawCard()
}

hitButton.onclick = () => {
    drawCard()
}
