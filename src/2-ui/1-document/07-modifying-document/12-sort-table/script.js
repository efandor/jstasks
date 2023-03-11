let table = document.getElementById('table');
let sortedRows = [...table.rows].slice(1).sort((a, b) => {
  return +a.lastElementChild.innerHTML - +b.lastElementChild.innerHTML
});

table.append(...sortedRows);
