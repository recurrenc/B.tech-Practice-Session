function billboards(k, revenue) {
  let tempSum = 0,
    maxSum = 0;
  const tsum = arraySum(revenue);
  for (let j = 0; j <= k + 1; j++) {
    for (let i = 0; i < revenue.length; i++) {
      if ((i + j + 1) % (k + 1) === 0) {
        tempSum += revenue[i];
      }
    }
    if (maxSum < tsum - tempSum) {
      maxSum = tsum - tempSum;
      tempSum = 0;
    }
  }

  return maxSum;
}

const arraySum = (list) => {
  let sum = 0;
  list.forEach((e) => (sum += e));
  return sum;
};

console.log(billboards(2, [1, 2, 3, 1, 6, 10]));
console.log(billboards(4, [1, 2, 3, 4, 5]));
