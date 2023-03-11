let ul = document.createElement('ul');

document.body.append(ul);

do {
  let name = prompt('Enter list item name', '');

  if (name) {
    let li = document.createElement('li');
  
    li.textContent = name;
    ul.append(li);
    continue;
  }

  break;
} while (true);
