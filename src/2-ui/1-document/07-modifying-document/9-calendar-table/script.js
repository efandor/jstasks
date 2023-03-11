const createGridCalendar = (elem, year, month) => {
  let days = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
  let day = new Date(year, month - 1).getDay();

  day = day === 0 ? 7 : day - 1;

  console.log(day);

  let lastDay = new Date(year, month, 0).getDate();

  console.log('lastd-', lastDay);

  days.forEach((day) => {
    let div = document.createElement('div');

    div.textContent = day;
    div.className = 'accent';
    elem.append(div);
  });

  for (let i = 1 - day; i <= 35 - day; i++) {
    let div = document.createElement('div');

    elem.append(div);

    if (i > 0 && i <= lastDay) {
      div.textContent = i;
    }
  }
};

createGridCalendar(container, 2020, 2);
