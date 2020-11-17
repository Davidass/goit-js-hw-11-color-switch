import colors from './js/colors';

const refs = {
  bodyREf: document.querySelector('body'),
  startBntRef: document.querySelector('button[data-action="start'),
  stopBntRef: document.querySelector('button[data-action="stop'),
};

let timerId = null;
const NOTIFICATION_DELAY = 1000;

refs.startBntRef.addEventListener('click', chageBackgroundColor);

refs.stopBntRef.addEventListener('click', stopExecutionBackgroundColor);


function randomBackgroundColor(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function chageBackgroundColor() {
  timerId = setInterval(() => {
    refs.startBntRef.setAttribute('disabled', 'disabled');
    refs.bodyREf.style.backgroundColor = colors.[randomBackgroundColor(0, colors.length-1)];
  }, NOTIFICATION_DELAY);
}

function stopExecutionBackgroundColor() {
  refs.startBntRef.removeAttribute('disabled');
  clearInterval(timerId);
}
