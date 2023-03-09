const makeCounter = () => {
  let count = 0;

  function counter() {
    return count++;
  }

  counter.set = (value) => count = value;

  counter.decrease = () => count--;

  return counter;
}

let counter = makeCounter();

console.log(counter());
console.log(counter());

counter.set(100);
counter();
counter()

counter.decrease();
console.log(counter());