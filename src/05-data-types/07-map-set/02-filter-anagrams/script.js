function aclean(arr) {
  let map = new Map();

  arr.forEach((word) => {
    let sorted = word.toLowerCase().split('').sort().join('');

    map.set(sorted, word);
  });

  return [...map.values()];
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log(aclean(arr));