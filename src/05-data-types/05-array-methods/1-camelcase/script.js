function camelize(str) {
  const words = str.split('-');

  const camelCaseWords = words.map((word, index) => {
    return index === 0 ? word : `${word[0].toUpperCase()}${word.slice(1)}`;
  });

  return camelCaseWords.join('');
}

console.log(camelize("background-color"));
console.log(camelize("-webkit-transition"));
console.log(camelize("list-style-image"));
