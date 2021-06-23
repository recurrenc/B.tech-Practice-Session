function arrayManipulation(n, queries) {
  // Write your code here
  let arr = new Array(n).fill(0);
  queries.forEach((q) => {
    for (let i = q[0] - 1; i < q[1]; i++) {
      arr[i] += q[2];
    }
  });
  arr.sort((a, b) => b - a);
  return arr[0];
}

const arr = [
  [1, 2, 100],
  [2, 5, 100],
  [3, 4, 100],
];
console.log(arrayManipulation(5, arr));
