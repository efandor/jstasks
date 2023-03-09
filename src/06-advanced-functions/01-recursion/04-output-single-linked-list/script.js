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

const printListWithLoop = (list) => {
  let listCopy = list;

  while (listCopy !== null) {
    console.log(listCopy.value);
    listCopy = listCopy.next;
  }
};

const printListWithRecursion = (list) => {
  console.log(list.value); 

  if (list.next) {
    printListWithRecursion(list.next);
  }
};

printListWithLoop(list);
printListWithRecursion(list);
