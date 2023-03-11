const clock = document.getElementById('clock-container');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
let timerId = null;

const addZero = (number) => number < 10 ? `0${number}` : number;
const changeContent = (elem, content) => elem.textContent = content;

const updateClock = () => {
  let date = new Date(); // (*)
  let hours = addZero(date.getHours());
  let minutes = addZero(date.getMinutes());
  let seconds = addZero(date.getSeconds());

  changeContent(clock.children[0], hours);
  changeContent(clock.children[1], minutes);
  changeContent(clock.children[2], seconds);
}

const startClock = () => {
  timerId = setInterval(updateClock, 1000);
  updateClock();
}

const stopClock = () => {
  clearInterval(timerId);
  timerId = null;
}

startButton.addEventListener('click', startClock);
stopButton.addEventListener('click', stopClock);
