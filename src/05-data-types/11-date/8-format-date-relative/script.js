function formatDate(date) {
  let diff = new Date() - date;
  let sec = Math.floor(diff / 1000);
  let min = Math.floor(diff / 60000);

  if (diff < 1000) {
    return 'прямо сейчас';
  }
  
  if (sec < 60) {
    return sec + ' сек. назад';
  }
  
  if (min < 60) {
    return min + ' мин. назад';
  }

  let dateArray = [
    date.getDate(),
    date.getMonth() + 1,
    date.getFullYear(),
    date.getHours(),
    date.getMinutes()
  ]

  let formatedDate = dateArray.map(component => `0${component}`.slice(-2));

  return  `${formatedDate[0]}.${formatedDate[1]}.${formatedDate[2]} ${formatedDate[3]}:${formatedDate[4]}`;
}

console.log(formatDate(new Date(new Date - 1)));
console.log(formatDate(new Date(new Date - 30 * 1000)));
console.log(formatDate(new Date(new Date - 5 * 60 * 1000)));
console.log(formatDate(new Date(new Date - 86400 * 1000)));
