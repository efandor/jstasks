const table = document.body.firstElementChild;

Array.from(table.rows).forEach((row, i) => row.children[i].style.backgroundColor = 'red');
