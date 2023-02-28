function getMaxSubSum(arr) {
  let maxSum = 0;
  let partialSum = 0;

  arr.forEach((item) => {
    partialSum += item;
    maxSum = Math.max(maxSum, partialSum);

    if (partialSum < 0) {
      partialSum = 0;
    };
  });

  return maxSum;
}

console.log(getMaxSubSum([-1, 6, 7, -2, -3, 5]));
