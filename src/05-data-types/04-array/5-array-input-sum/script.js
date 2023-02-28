function sumInput() {
 
  let numbers = [];

  while (true) {
    let value = prompt("Введите число", 0);

    if (value === "" || value === null || !isFinite(value)) break;

    numbers.push(+value);
  }

  let sum = 0;

  numbers.forEach((num) => sum += num);

  return sum;
}

alert(sumInput()); 
