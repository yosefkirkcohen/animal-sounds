// import functions and grab DOM elements
const horseEl = document.getElementById('horse-image')
const dogEl = document.getElementById('dog-image')
const catEl = document.getElementById('cat-image')
const horseSound =document.getElementById('horse-sound')
const dogSound =document.getElementById('dog-sound')
const catSound =document.getElementById('cat-sound')

console.log(horseEl)
// initialize state

// set event listeners 
horseEl.addEventListener('click', () => {
  horseSound.play();
})
dogEl.addEventListener('click', () => {
  dogSound.play();
})
catEl.addEventListener('click', () => {
  catSound.play();
})
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
