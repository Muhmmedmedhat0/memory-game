`use strict`;
// Select The Start Game Button
let startButton = document.querySelector(`.control-buttons span`);
startButton.onclick = function () {
    // Remove Splash Screen
    document.querySelector(`.control-buttons`).remove();
};
// Select The Restar Game Button
let restart = document.querySelector(`.restart`);
// Restar The game
restart.onclick = function () {
    location.reload();
};
// Effect Duration
let deuration = 1000;
// Select Blocks Container
let cardsContainer = document.querySelector(`.deck`);
// Create Array From Game Blocks
let cards = Array.from(cardsContainer.children);
// Create Range Of Keys
// let orderRange = [...Array(cards.length).keys()];
let orderRange = Array.from(Array(cards.length).keys());
// console.log(orderRange);
shuffle(orderRange);
// console.log(orderRange);

// Add Order Css Property To Game cards
cards.forEach((card, index) => {
    card.style.order = orderRange[index];
    card.addEventListener(`click`, function () {
        flipCard(card);
    });
});

// shuffle function
function shuffle(array) {
    // setting vars
    let currentIndex = array.length,
        tempValue,
        randomIndex;
    //the array got elements
    while (currentIndex > 0) {
        // get random Number
        randomIndex = Math.floor(Math.random() * currentIndex);
        // decrese the length by one
        currentIndex--;
        // [1] save current element in temp value
        tempValue = array[currentIndex];
        // [2] current element = random element
        array[currentIndex] = array[randomIndex];
        // [3] random element = get element in the temp value
        array[randomIndex] = tempValue;
    }
    return array;
}

// flip card function
function flipCard(selectedCard) {
    // add class open
    selectedCard.classList.add(`open`, `show`);
    // collect all flipped cards
    let allFlipedCards = cards.filter((flibedcard) =>
        flibedcard.classList.contains(`open`, `show`)
    );
    // if there is two selected
    if (allFlipedCards.length === 2) {
        // console.log(`two flibed card selected`);
        // stop clicking function
        stopClicking();
        // check matched cards
        checkMatchedCard(allFlipedCards[0], allFlipedCards[1]);
    }
}
// stop clicking function
function stopClicking() {
    // add class no Clicking on the main container
    cardsContainer.classList.add(`no-clicking`);
    setTimeout(() => {
        // remove class no clicjing after deuration
        cardsContainer.classList.remove(`no-clicking`);
    }, deuration);
}
// check matched cards function
function checkMatchedCard(firstCard, secondCard) {
    let movesElement = document.querySelector(`.moves`);
    if (firstCard.dataset.technology === secondCard.dataset.technology) {
        firstCard.classList.remove(`open`, `show`);
        secondCard.classList.remove(`open`, `show`);

        firstCard.classList.add(`match`);
        secondCard.classList.add(`match`);
    } else {
        movesElement.innerHTML = parseInt(movesElement.innerHTML) + 1;
        setTimeout(() => {
            firstCard.classList.remove(`open`, `show`);
            secondCard.classList.remove(`open`, `show`);
        }, deuration);
    }
}
// The stars rating depends on the number of moves:

// ⭐⭐⭐ If the moves are between 8 and 11.
// ⭐⭐ If the moves are between 12 and 19.
// ⭐ If the moves are 20 or more.
    let movesElement = document.querySelector(`.moves`);
if (movesElement.innerHTML == 8 || movesElement.innerHTML == 11) {
    console.log(`good`);
} else {
}