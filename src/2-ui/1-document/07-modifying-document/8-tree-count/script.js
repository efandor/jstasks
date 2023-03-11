let listItems = document.getElementsByTagName('li');

for (let listItem of listItems) {
  let listLength = listItem.getElementsByTagName('li').length;

  console.log(listItem)

  listLength && (listItem.firstChild.textContent += listLength);
}
