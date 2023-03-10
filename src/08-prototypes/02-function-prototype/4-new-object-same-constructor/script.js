let obj = {key: 'value'};

function Obj(prop) {
  this.prop = prop;
}

let obj1 = new Obj('prop1')
let obj2 = new obj1.constructor('prop2');

console.log(obj1); // Obj { prop: 'prop1' }
console.log(obj2); // Obj { prop: 'prop2' }

Obj.prototype = obj;

let obj3 = new Obj('prop3')
let obj4 = new obj3.constructor('prop4');

console.log(obj3); // { prop: 'prop3' }
console.log(obj4); // [String: 'prop4']
