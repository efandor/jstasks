Function.prototype.defer = function(delay) {
  return (...args) => {
    setTimeout(() => {
      this.apply(this, args);
    }, delay);
  }
};

function f(a, b) {
  console.log(a + b);
}

f.defer(1000)(1, 2);
