function getDateAgo(date, days) {
  let tempDate = new Date(date);

  tempDate.setDate(date.getDate() - days);
  
  return tempDate.getDate();
}

let date = new Date(2015, 0, 2);

console.log(getDateAgo(date, 1));
console.log(getDateAgo(date, 2));
console.log(getDateAgo(date, 365));
