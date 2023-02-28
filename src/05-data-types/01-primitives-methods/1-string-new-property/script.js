let str = 'Привет';

str.test = 5; 

console.log(str.test); // undefined

(() => {
  'use strict';

  str.test = 5; // TypeError: Cannot create property 'test' on string 'Привет'

  console.log(str.test);
})()
