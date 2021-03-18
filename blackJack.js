let cardValue;
let handValue = 0;

const dealButton = document.getElementById('dealHand')
const hitButton = document.getElementById('hitButton')
const playerDisplay = document.getElementById('playerHand')
const playerHandTotal = document.getElementById('playerHandTotal')
const suitImages = document.getElementById('suitImgs')
const singleDeckBtn = document.getElementById('singleDeck')

const gameDeck = {
    deck: [],
    hand: [],
    discardPile: [],
    values: [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'Ace'],
    suits: ['Diamonds', 'Spades', 'Clubs', 'Hearts'],
    makeDeck(){
        const {suits, values, deck} = this;
        for(let value of values) {
            for(let suit of suits) {
                deck.push({value, suit});
            }
        }
        return deck;
    },
    drawCard() {
        const {hand} = this; 
        const drawnCard = this.deck.pop();  
        this.discardPile.push(drawnCard);
        hand.push(drawnCard)
        this.updateDisplay(drawnCard)
    },
    dealHand(numCards){
        for(let i = 0; i < numCards; i++) {
            this.drawCard();
        }
    },
    shuffleDeck() {
        const {deck} = this
        for(let i = deck.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [deck[i], deck[j]] = [deck[j], deck[i]];
        }
    },
    updateDisplay({value, suit}) {
        let img = document.createElement('img');
        img.style.width = '20px'

        if(value === 'J' || value === 'Q' || value === 'K') {
            cardValue = 10;
        } else if (value === 'Ace') {
            cardValue = 11;
        } else {
            cardValue = value
        }
        handValue += cardValue
    
        switch(suit) {
            case 'Hearts':
                img.setAttribute('src', "./imgs/hearts.png");
                img.setAttribute('class', 'red')
                break;
            case 'Diamonds':
                img.setAttribute('src', './imgs/diamonds.png');
                img.setAttribute('class', 'red')
                break;
            case 'Spades':
                img.setAttribute('src', './imgs/spades.png');
                break;
            case 'Clubs':
                img.setAttribute('src', './imgs/clubs.png');
                break;
        }
        let cardSpan = document.createElement('span');
        cardSpan.innerHTML = `${value}`, cardSpan.appendChild(img)
        playerHandTotal.innerText = `Total: ${handValue}`
        if(img.classList.contains('red')) {
            cardSpan.style.color = 'red'
        }
        playerDisplay.append(cardSpan)
    },
    clearDisplay() {
    }
}

singleDeckBtn.onclick = () => {
    gameDeck.makeDeck();
    gameDeck.shuffleDeck();
}
dealButton.onclick = () => {
    //clearDisplay()
    playerDisplay.innerText = ''
    handValue = 0;
    gameDeck.hand = [];
    gameDeck.dealHand(2);
}
hitButton.onclick = () => {
    gameDeck.drawCard();
}