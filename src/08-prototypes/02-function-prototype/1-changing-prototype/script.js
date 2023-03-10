function Rabbit() {};

Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

console.log(rabbit.eats); // true

rabbit = new Rabbit();

Rabbit.prototype = {};

console.log('1 - ', rabbit.eats); // true


function Rabbit() {};

Rabbit.prototype = {
  eats: true
};

rabbit = new Rabbit();

Rabbit.prototype.eats = false;

console.log('2 - ', rabbit.eats ); // false


function Rabbit() {};

Rabbit.prototype = {
  eats: true
};

rabbit = new Rabbit();

delete rabbit.eats;

console.log('3 - ', rabbit.eats ); // true

function Rabbit() {};

Rabbit.prototype = {
  eats: true
};

rabbit = new Rabbit();

delete Rabbit.prototype.eats;

console.log('4 - ', rabbit.eats ); // undefined
