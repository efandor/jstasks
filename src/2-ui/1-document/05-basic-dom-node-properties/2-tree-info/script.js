for (let listItem of document.querySelectorAll('li')) {
  let text = listItem.firstChild.textContent;
  let count = listItem.querySelectorAll('li').length;

  console.log(`${text.trim()}-${count}`);
}
