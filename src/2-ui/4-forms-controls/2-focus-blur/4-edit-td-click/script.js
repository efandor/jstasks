let table = document.getElementById('bagua-table');
let typeArea;

const stopTyping = (elem, willSave) => {
  elem.innerHTML = willSave ? elem.firstChild.value : typeArea.data;
  elem.classList.remove('typing'); 
  typeArea = null;
}

const switchToTextArea = (elem) => {
  typeArea = {
    elem: elem,
    data: elem.innerHTML
  };

  elem.classList.add('typing');

  let textArea = document.createElement('textarea');
  textArea.style.width = `${elem.clientWidth}px`;
  textArea.style.height = `${elem.clientHeight}px`;
  textArea.className = 'text';

  textArea.value = elem.innerHTML;
  elem.innerHTML = '';
  elem.appendChild(textArea);
  textArea.focus();

  let buttons = document.createElement('div');
  let okBtn = document.createElement('button');
  let cancelBtn = document.createElement('button');

  buttons.className = 'buttons';
  elem.append(buttons);
  
  okBtn.className = 'ok-btn';
  okBtn.textContent = 'OK'
  cancelBtn.className = 'cancel-btn';
  cancelBtn.textContent = 'CANCEL'

  buttons.append(okBtn);
  buttons.append(cancelBtn);
}

table.onclick = (event) => {
  let target = event.target.closest('.cancel-btn,.ok-btn,td');

  if (!table.contains(target)) return;

  switch (target.className) {
    case 'ok-btn':
      stopTyping(typeArea.elem, true);
      break;
    case 'cancel-btn':
      stopTyping(typeArea.elem, false);
      break;
    default:
      if (typeArea) return;

      switchToTextArea(target);
      break;
  }
};
