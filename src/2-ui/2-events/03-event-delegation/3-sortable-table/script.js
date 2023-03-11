const grid = document.getElementById('grid');

function sortGrid(colNum, colType) {
  let tbody = grid.querySelector('tbody');
  let rows = [...tbody.rows];

  if (typeof colType.dataset.type === 'string') {
    rows.sort((a,b) => a.cells[colNum].innerHTML > b.cells[colNum].innerHTML ? 1 : -1);
  }

  if (typeof colType.dataset.type === 'number') {
    rows.sort((a,b) => a.cells[colNum].innerHTML - b.cells[colNum].innerHTML);
  }

  tbody.append(...rows);
}

grid.addEventListener('click', (event) => {
  if (event.target.tagName !== 'TH') return;
  
  let colName = event.target;

  sortGrid(colName.cellIndex, colName);
});
