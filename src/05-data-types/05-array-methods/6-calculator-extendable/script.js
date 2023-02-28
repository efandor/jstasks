function Calculator() {
  this.methods = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b
  };

  this.calculate = function(str) {
    const split = str.split(' ');
    const a = +split[0];
    const operation = split[1];
    const b = +split[2];

    return this.methods[operation](a, b);
  }

  this.addMethod = function(name, func) {
    this.methods[name] = func;
  };
}

let powerCalc = new Calculator;

powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

console.log(powerCalc.calculate("2 ** 3"));
