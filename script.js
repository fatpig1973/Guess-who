console.log('Guess Who?')

    

//   locates the first 'card' class that have the 'onclick' event
function toggleEliminated() {
    this.classList.toggle('eliminated')
}
let someCards = document.querySelectorAll('.card')
for (let i = 0; i < someCards.length; i++) {
    someCards[i].onclick = toggleEliminated
}

//   queryselectorall retuns a nodelist, the for loop iterates through the list and applies the function to each


