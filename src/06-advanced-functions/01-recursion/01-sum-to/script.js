
const sumWithLoop = (n) => {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  return sum;
};

console.log(sumWithLoop(100));


const sumWithRecursion = (n) => {
  if (n === 1) return 1;

  return n + sumTo(n - 1);
};


console.log(sumWithLoop(100));


const sumWithFormula = (n) => n * (n + 1) / 2;

console.log(sumWithFormula(100));
