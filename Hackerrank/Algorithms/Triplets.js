function compareTriplets(a, b) {
  // Write your code here
  let a1 = 0,
    b1 = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] < b[i]) b1++;
    else if (a[i] > b[i]) a1++;
    else continue;
  }
  return [a1, b1];
}

console.log(compareTriplets([4, 2, 5], [5, 2, 4]));
