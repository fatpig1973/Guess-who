console.log('Guess Who?')
// parameter named 'event' , it represents the event OBJECT that is passed to the funtionwhen the 'click' event is triggered

function toggleEliminated(event) {
    let cardSelected = event.target
    cardSelected.classList.toggle('eliminated')
  }
//   locates the first 'card' class that have the 'onclick' event
  let cards = document.querySelectorAll('.card')
  for (let i = 0; i < cards.length; i++) {
    cards[i].onclick = toggleEliminated
  }
//   queryselectorall retuns a nodelist, the for loop iterates through the list and applies the function to each