// function play() {
//   const homeSection = document.getElementById('home');
//   homeSection.classList.add('hidden');

//   const playGround = document.getElementById('play_ground');
//   playGround.classList.remove('hidden');
// }

function buttonPress(event) {
  const playerPressed = event.key;
  
}
document.addEventListener('keyup', buttonPress);

function continueGame() {
  const alphaBet = getRandomAlphabet();

  const currentAlphabet = document.getElementById('alphabet');
  currentAlphabet.innerText = alphaBet;

  setBackground(alphaBet);
}

function play() {
  hideElement('home');
  showElement('play_ground');
  continueGame();
}
