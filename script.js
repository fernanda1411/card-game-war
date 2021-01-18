import Deck from "./deck.js";

const computerCardSlot = document.querySelector('.computer-card-slot');
const playerCardSlot = document.querySelector('.player-card-slot');
const text = document.querySelector('.text');
const playerDeckElement = document.querySelector('.player-deck');
const computerDeckElement = document.querySelector('.computer-deck');

let playerDeck, computerDeck;

startGame();

function startGame(){
    const deck = new Deck();
    deck.shuffle();

    const deckMidpoint = Math.ceil(deck.numberOfCards / 2);
    playerDeck = new Deck(deck.cards.slice(0, deckMidpoint));
    computerDeck = new Deck(deck.cards.slice(deckMidpoint, deck.numberOfCards));
    cleanBeforeRound();
}

function cleanBeforeRound(){
    computerCardSlot.innerHTML = '';
    playerCardSlot.innerHTML = '';
    text.innerHTML = '';
    updateDeckCount()
}

function updateDeckCount(){
    computerDeckElement.innerText = computerDeck.numberOfCards;
    playerDeckElement.innerText = playerDeck.numberOfCards;
}


// computerCardSlot.appendChild(deck.cards[0].getHTML());
// playerCardSlot.appendChild(deck.cards[1].getHTML());