let arr = [1, 2, 3, 4, 5, 6, 7];

const inBetween = (a, b) => (item) => (item >= a && item <= b);
const inArray = (arr) => (item) => arr.includes(item);

console.log(arr.filter(inBetween(3, 6))); // [ 3, 4, 5, 6 ]
console.log(arr.filter(inArray([1, 2, 10]))); // [ 1, 2 ]
