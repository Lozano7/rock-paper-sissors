import includeHtml from './include_html.js';

const d = document;
const ls = localStorage;
let count = ls.getItem('contador');
const $score = d.getElementById('score');

export default function playNow() {
  d.addEventListener('click', (e) => {
    if (e.target.matches('.click')) {
      establecerSonido(e.target.dataset.click);
      let random = Math.floor(Math.random() * (4 - 1) + 1).toString();
      setTimeout(() => {
        d.querySelector('.play').removeChild(d.querySelector('h1'));
        includeHtml('.container-btn', 'assets/win_OR_loser.html');
      }, 900);
      setTimeout(() => {
        establecerPlayer('.user', e.target.dataset.click);
        establecerPlayer('.rival', random);
      }, 1900);
      setTimeout(() => {
        ganador(e.target.dataset.click, random);
      }, 2500);
    }
  });
}
function establecerSonido(value) {
  const options = {
    1: 'assets/sounds/papel.wav',
    2: 'assets/sounds/tijera.wav',
    3: 'assets/sounds/piedra.wav',
  };
  eligirSonido(options[value]);
}
function eligirSonido(src, time) {
  const audio = d.createElement('audio');
  audio.src = src;
  audio.currentTime = 0.5;
  audio.play();
  setTimeout(() => {
    audio.pause();
    audio.currentTime = 0;
  }, time || 500);
}
function establecerPlayer(className, value) {
  const $player = d.querySelector(className);
  switch (value) {
    case '1':
      $player.style.backgroundColor = 'hsl(230, 89%, 62%)';
      $player.querySelector('button img').src = 'images/icon-paper.svg';
      break;
    case '2':
      $player.style.backgroundColor = 'hsl(39, 89%, 49%)';
      $player.querySelector('button img').src = 'images/icon-scissors.svg';
      break;

    case '3':
      $player.style.backgroundColor = 'hsl(349, 71%, 52%)';
      $player.querySelector('button img').src = 'images/icon-rock.svg';
      break;
  }
}

const $main = d.querySelector('main');
const $results = d.querySelector('.results');
const $title = $results.querySelector('h2');

const resultados = {
  1: function () {
    $results.style.display = 'flex';
    $title.innerHTML = 'EMPATE';
    $main.style.marginBottom = '0';
    eligirSonido('assets/sounds/empate.mp3', 8000);
  },
  2: function () {
    $results.style.display = 'flex';
    $title.innerHTML = 'GANASTE';
    $main.style.marginBottom = '0';
    count++;
    console.log(count);
    ls.setItem('contador', count.toString());
    $score.innerHTML = count.toString();
    eligirSonido('assets/sounds/ganador.mp3', 8000);
  },
  3: function () {
    $results.style.display = 'flex';
    $title.innerHTML = 'PERDISTE';
    $main.style.marginBottom = '0';
    count++;
    console.log(count);
    if (count < 0) count = 0;
    ls.setItem('contador', count.toString());
    $score.innerHTML = count.toString();
    eligirSonido('assets/sounds/perdedor.mp3', 8000);
  },
};

function ganador(user, pc) {
  let userNumber = parseInt(user);
  let pcNumber = parseInt(pc);
  switch (userNumber) {
    case 1:
      if (pcNumber === 1) {
        resultados['1']();
      } else if (pcNumber === 2) {
        resultados['3']();
      } else {
        resultados['2']();
      }
      break;
    case 2:
      if (pcNumber === 2) {
        resultados['1']();
      } else if (pcNumber === 3) {
        resultados['3']();
      } else {
        resultados['2']();
      }
      break;
    case 3:
      if (pcNumber === 3) {
        resultados['1']();
      } else if (pcNumber === 1) {
        resultados['3']();
      } else {
        resultados['2']();
      }
      break;
  }
}
