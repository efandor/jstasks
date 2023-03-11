const container = document.getElementById('container');

container.addEventListener('click', (event) => {
  if (event.target.className === 'remove-button') {
    let pane = event.target.closest('.pane');

    pane.remove();
  }

  return;
});
