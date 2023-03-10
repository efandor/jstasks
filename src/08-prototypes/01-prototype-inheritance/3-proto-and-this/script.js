let animal = {
  eat() {
    this.full = true;
  }
};

let rabbit = {
  __proto__: animal
};

rabbit.eat();
console.log(rabbit); // { full: true }
console.log(animal); // { eat: [Function: eat] }