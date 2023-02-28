function readNumber() {
  let num = prompt('Enter number', 0);

  if (num === null || num === '') return null;
  
  return (typeof +num !== 'number' || isNaN(+num)) ? readNumber() : +num;
}

alert(`Число: ${readNumber()}`);
