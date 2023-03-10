let dictionary = Object.create(null);

Object.defineProperty(dictionary, 'toString', {
  // enumerable: false,
  // configurable: false,
  // writable: false,
  value() {
    return Object.keys(this).join()
  }
});

dictionary.apple = "Apple";
dictionary.__proto__ = "test";

for(let key in dictionary) {
  console.log(key); // "apple", затем "__proto__"
}  

// список свойств, разделённых запятой, выведен с помощью toString
console.log(dictionary); // "apple,__proto__"
