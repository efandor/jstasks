function f(x) {
  console.log(x);
}

let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

function delay(func, ms) {
  return function(...args) {
    setTimeout(() => func.apply(this, args), ms);
  };
}

f1000("test1"); // показывает "test" после 1000 мс
f1500("test2"); // показывает "test" после 1500 мс
