function getSecondsToTomorrow() {
  let date = new Date();

  return 86400 - date.getHours() * 3600 - date.getMinutes() * 60 - date.getSeconds();
}

console.log(getSecondsToTomorrow());
