let data = {
  "Рыбы": {
    "форель": {},
    "лосось": {}
  },

  "Деревья": {
    "Огромные": {
      "секвойя": {},
      "дуб": {}
    },
    "Цветковые": {
      "яблоня": {},
      "магнолия": {}
    }
  }
};

function createTree(container, obj) {
  container.append(createTreeDom(obj));
}

function createTreeDom(data) {
  if (!Object.keys(data).length) return;

  let list = document.createElement('ul');

  for (let key in data) {
    let listItem = document.createElement('li');

    listItem.innerHTML = key;

    let childrenUl = createTreeDom(data[key]);

    if (childrenUl) {
      listItem.append(childrenUl);
    }

    list.append(listItem);
  }

  return list;
}

let container = document.getElementById('container');

createTree(container, data);
