import includeHtml from './include_html.js';

const d = document;
const $main = d.querySelector('.container-btn');

export default function playNow() {
  d.addEventListener('click', (e) => {
    if (e.target.matches('.click')) {
      establecerSonido(e.target.dataset.click);
      setTimeout(() => {
        includeHtml('.container-btn', 'assets/win_OR_loser.html');
      }, 900);
      let random = Math.floor(Math.random() * (3 - 1) + 1).toString();
      setTimeout(() => {
        establecerPlayer('.user', e.target.dataset.click);
        establecerPlayer('.rival', random);
      }, 2500);
    }
  });
}
function establecerSonido(value) {
  const options = {
    1: '../assets/sounds/sonido-papel.mp3',
    2: '../assets/sounds/sonido-tijera.mp3',
    3: '../assets/sounds/sonido-piedra.mp3',
  };
  eligirSonido(options[value]);
}
function eligirSonido(src) {
  const audio = d.createElement('audio');
  audio.src = src;
  audio.play();
  setTimeout(() => {
    audio.pause();
    audio.currentTime = 0;
  }, 500);
}
function establecerPlayer(className, value) {
  const $player = d.querySelector(className);
  switch (value) {
    case '1':
      $player.style.backgroundColor = 'hsl(230, 89%, 62%)';
      $player.querySelector('button img').src = '../images/icon-paper.svg';
      break;
    case '2':
      $player.style.backgroundColor = 'hsl(39, 89%, 49%)';
      $player.querySelector('button img').src = '../images/icon-scissors.svg';
      break;

    case '3':
      $player.style.backgroundColor = 'hsl(349, 71%, 52%)';
      $player.querySelector('button img').src = '../images/icon-rock.svg';
      break;
  }
}

function ganador(user, pc) {
  let count = 0;
}
