let styles = ["Джаз", "Блюз"];

const getMiddleIndex = (arr) => Math.floor((arr.length - 1) / 2);

styles.push("Рок-н-ролл");
styles[getMiddleIndex(styles)] = "Классика";
styles.shift();
styles.unshift("Рэп", "Регги");

console.log(styles);
