let user = {
  name: "Василий Иванович",
  age: 35
};

let userClone = JSON.parse(JSON.stringify(user));

console.log(userClone);
console.log(user !== userClone);
