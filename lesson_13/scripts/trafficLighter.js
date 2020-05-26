const redLight = document.querySelector('.red');
const yellowLight = document.querySelector('.yellow');
const greenLight = document.querySelector('.green');

function toggleRed() {
  yellowLight.classList.remove('active');
  greenLight.classList.remove('active');
  redLight.classList.add('active');
}

function toggleYellow() {
  redLight.classList.remove('active');
  greenLight.classList.remove('active');
  yellowLight.classList.add('active');
}

function toggleGreen() {
  redLight.classList.remove('active');
  yellowLight.classList.remove('active');
  greenLight.classList.add('active');
}

redLight.addEventListener('click', toggleRed);
yellowLight.addEventListener('click', toggleYellow);
greenLight.addEventListener('click', toggleGreen);
