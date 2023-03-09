let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

const printReversedListWithLoop = (list) => {
  let listCopy = list;
  let listArray = [];

  while (listCopy) {
    listArray.push(listCopy.value);
    listCopy = listCopy.next;
  }

  listArray.reverse().forEach((value) => console.log(value));
};

const printReversedListWithRecursion = (list) => {
    if (list.next) {
    printReversedListWithRecursion(list.next);
  }

  console.log(list.value); 
};

printReversedListWithLoop(list);
printReversedListWithRecursion(list);
