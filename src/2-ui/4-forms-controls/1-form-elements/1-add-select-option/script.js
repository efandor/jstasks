let selectedOption = genres.options[genres.selectedIndex];

console.log(selectedOption.value);
console.log(selectedOption.text);

let classic = new Option("Классика", "classic");

setTimeout(() => {
  genres.append(classic);
}, 1000);

setTimeout(() => {
  classic.selected = true;
}, 2000);