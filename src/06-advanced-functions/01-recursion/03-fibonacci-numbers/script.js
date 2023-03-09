const fib = (n) => {
  let firstNum = 1;
  let secondNum = 1;

  for (let i = 3; i <= n; i++) {
    let fibNum = firstNum + secondNum;

    firstNum = secondNum;
    secondNum = fibNum;
  }

  return secondNum;
};

console.log(fib(3));
console.log(fib(7));
console.log(fib(77));
