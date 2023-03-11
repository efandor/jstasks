const ball = document.getElementById('ball');
const field = document.getElementById('field');

setTimeout(() => {
  ball.style.left = `${Math.round((field.clientWidth - ball.offsetWidth) / 2)}px`
  ball.style.top = `${Math.round((field.clientHeight - ball.offsetHeight) / 2)}px`
}, 2000);
