const text = document.getElementById('text');
const field = document.getElementById('field');

console.log(getComputedStyle(field).width, ' ', field.clientWidth) // 200px   200

field.style.padding = '20px';

console.log(getComputedStyle(field).width, ' ', field.clientWidth) // 200px   240
console.log(getComputedStyle(text).width, ' ', text.clientWidth) // auto   0