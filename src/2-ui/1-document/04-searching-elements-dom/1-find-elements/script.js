const table = document.getElementById('age-table');

console.log(table);

const labels = document.querySelectorAll('#age-table label');

console.log(labels);

const firstTd = table.getElementsByTagName('td')[0];

console.log(firstTd);

const form = document.querySelector('form[name="search"]');

console.log(form);

const firstInput = form.querySelector('input');

console.log(firstInput);

let input = [].slice.call(form.querySelectorAll('input'), -1);

console.log(input);
