const printNumbersWithInterval = (from, to) => {
  let current = from;

  const print = () => {
    console.log(current);
    if (current === to) {
      clearInterval(timerId);
    }

    current++;
  }

  print();

  let timerId = setInterval(print, 1000);
}

const printNumbersWithTimeout = (from, to) => {
  let current = from;

  const print = () => {
    console.log(current);
    if (current < to) {
      setTimeout(print, 1000);
    }

    current++;
  }

  print();
}

printNumbersWithInterval(5, 10);
setTimeout(() => {printNumbersWithTimeout(1, 5);}, 6000);
