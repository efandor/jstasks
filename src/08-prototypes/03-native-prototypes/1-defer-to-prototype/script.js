Function.prototype.defer = function(delay) {
  setTimeout(this, delay);
};

function f() {
  console.log("Hello!");
}

f.defer(1000);
