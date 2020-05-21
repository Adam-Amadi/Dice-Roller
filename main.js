const dieRolls = []
const rollButton = document.querySelector('#roll-button')
let userInput = document.querySelector('input')
let totalValue = document.querySelector('#total')
let showAdamsrollsButton = document.querySelector('#show-all-rolls-button')
let listElement = document.querySelector('#all-rolls')
let resetButton = document.querySelector('#reset')



rollButton.addEventListener("click", function () { 
    let diceInput = document.querySelector('#dice-number').value

    let counter = 0
    let total = 0
    while (counter < userInput.value) {
        diceInput = Math.floor(Math.random() * 6) + 1; 
        counter += 1 
        total += diceInput
        console.log(diceInput)
        dieRolls.push(diceInput);
        
    }

    totalValue.innerHTML = 'The Sum Of The Rolls Is ' + total
})


showAdamsrollsButton.addEventListener("click", function () {

    let counter = 0
    while (counter < dieRolls.length) {
        listElement.innerHTML += "<li>" + dieRolls[counter] + "</li>"; 
        counter += 1
    }
})

resetButton.addEventListener('click', function () {
    userInput.value = newCounterValue = ' ';
    totalValue.innerHTML = newCounterValue = 'The Sum Of The Rolls Is ' + 0;
    listElement.innerHTML = newCounterValue = ' ';
})
        //  ASSESSMENT FINISHED UP HERE //





  // This is extra design  //
function rollDice() {
    const dice = [...document.querySelectorAll(".die-list")];
    dice.forEach(die => {
      toggleClasses(die);
      die.dataset.roll = getRandomNumber(1, 6);
    });
  }
  function toggleClasses(die) {
    die.classList.toggle("odd-roll");
    die.classList.toggle("even-roll");
  }
  
  function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  document.getElementById("roll-button").addEventListener("click", rollDice);
  