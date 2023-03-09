let f = debounce(console.log, 1000);

f(1); // выполняется немедленно
f(2); // проигнорирован

setTimeout( () => f(3), 100); // проигнорирован (прошло только 100 мс)
setTimeout( () => f(4), 1100); // выполняется
setTimeout( () => f(5), 1500); // проигнорирован (прошло только 400 мс от последнего вызова)

function debounce(func, ms) {
  let isDelay = false;

  return function(...args) {
    if (isDelay) return;

    func.apply(this, args);
    isDelay = true;
    setTimeout(() => isDelay = false, ms);
  };
}