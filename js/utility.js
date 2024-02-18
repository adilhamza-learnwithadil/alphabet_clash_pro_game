function hideElement(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add('hidden')
}

function showElement(elementId) {
  const playGround = document.getElementById(elementId);
  playGround.classList.remove('hidden');
}

function setBackground(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add('bg-orange-500')
}

function getRandomAlphabet() {
  const alphabets = 'abcdefghijklmnopqrstuvwxyz';
  const alphabet = alphabets.split('');

  const randomNum = Math.random() * 25;
  const index = Math.round(randomNum);

  const alphaBet = alphabet[index];
  console.log(index, alphaBet);
  return alphaBet;

}