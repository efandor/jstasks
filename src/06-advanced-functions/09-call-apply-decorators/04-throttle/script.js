function throttle(func, ms) {
  let timer = null;
  let lastArgs = null;
  let lastThis = null;

  return function (...args) {
    if (timer) {
      lastArgs = args;
      lastThis = this;

      return;
    }

    func.apply(this, args);

    timer = setTimeout(() => {
      func.apply(lastThis, lastArgs);
      clearTimeout(timer);
      timer = null;
      lastArgs = null;
      lastThis = null;
    }, ms);
  }
}

function f(a) {
  console.log(a)
}

// f1000 передаёт вызовы f максимум раз в 1000 мс
let f1000 = throttle(f, 1000);

f1000(1); // показывает 1
f1000(2); // (ограничение, 1000 мс ещё нет)
f1000(3); // (ограничение, 1000 мс ещё нет)

// когда 1000 мс истекли ...
// ...выводим 3, промежуточное значение 2 было проигнорировано