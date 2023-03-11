let elem = document.getElementById('text');
let scrollBottom;

setInterval(() => {
  scrollBottom = elem.scrollHeight - elem.scrollTop - elem.offsetHeight;
  console.log(scrollBottom);
}, 1500);
