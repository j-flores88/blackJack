let cardNumber;
let cardValue;
let cardSuit;
let hand = [];
let handValue = 0;

const dealButton = document.getElementById('dealHand')
const hitButton = document.getElementById('hitButton')
const playerHand = document.getElementById('playerHand')
const playerHandTotal = document.getElementById('playerHandTotal')
const deck = {
    values: [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'Ace'],
    suits: ['Diamonds', 'Spades', 'Clubs', 'Hearts']
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
}

const getCardSuit = () => {
    const randomNumber = Math.floor(Math.random() * deck.suits.length)
    for(let i = 0; i < deck.suits.length; i++) {
        if(randomNumber === i) {
            cardSuit = deck.suits[i]
        }
    }
    hand.push(cardSuit)
}

const drawCard = () => {
    getCardValue()
    getCardSuit()
    playerHand.innerText += ` ${cardNumber} of ${cardSuit} `;
    playerHandTotal.innerText = `Hand Total: ${handValue}`;
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