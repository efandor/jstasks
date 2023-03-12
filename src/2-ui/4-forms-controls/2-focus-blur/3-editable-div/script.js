let area = null;
let view = document.getElementById('view');

const stopTyping = () => {
  view.innerHTML = area.value;
  area.replaceWith(view);
}

const typing = () => {
  area = document.createElement('textarea');
  area.className = 'edit';
  area.value = view.innerHTML;

  area.onkeydown = function(event) {
    if (event.key === 'Enter') {
      this.blur();
    }
  };

  area.onblur = () => stopTyping();

  view.replaceWith(area);
  area.focus();
}

view.onclick = () => typing();
