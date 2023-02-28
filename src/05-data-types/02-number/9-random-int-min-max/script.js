function randomInteger(min, max) {
  const randomFloatNumber = min + Math.random() * (max - min + 1);

  return Math.floor(randomFloatNumber);
}

console.log(randomInteger(1, 5));
