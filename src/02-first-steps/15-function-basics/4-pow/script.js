function pow(x, n) {
  if (n < 1) {
    console.log(`Степень ${n} не поддерживается, используйте натуральное число`);

    return;
  }

  let result = x;

  for (let i = 1; i < n; i++) {
    result *= x;
  }

  return result;
}

console.log(pow(2, 3));