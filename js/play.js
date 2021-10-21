import includeHtml from './include_html.js';

const d = document;
const $main = d.querySelector('.container-btn');

export default function playNow() {
  d.addEventListener('click', (e) => {
    if (e.target.matches('.click')) {
      establecerSonido(e.target.dataset.click);
      includeHtml('.container-btn', 'assets/win_OR_loser.html');
      let random = Math.floor(Math.random() * (3 - 1) + 1).toString();
      setTimeout(() => {
        establecerPlayer('.user', e.target.dataset.click);
        establecerPlayer('.rival', random);
      }, 800);
    }
  });
}
function establecerSonido(value) {
  const options = {
    1: '../assets/sounds/papel.webm',
    2: '../assets/sounds/tijera.webm',
    3: '../assets/sounds/piedra.webm',
  };
  eligirSonido(options[value]);
}
async function eligirSonido(src) {
  let sonido = new Promise((resolve, reject) => {
    try {
      const audio = d.createElement('audio');
      audio.src = src;
      audio.play();
      setTimeout(() => {
        audio.pause();
        audio.currentTime = 0;
      }, 500);
    } catch (error) {
      console.log(error);
    }
  });
  await sonido.then().catch((error) => {
    console.log(error);
  });
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
