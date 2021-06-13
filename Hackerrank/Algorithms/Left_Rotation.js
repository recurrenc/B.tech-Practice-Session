function rotateLeft(d, arr) {
  // Write your code here
  const l = arr.length;
  if (d === l) return arr;
  const rotationCount = d % l;
  return [...arr.slice(rotationCount), ...arr.slice(0, rotationCount)];
}
console.log(rotateLeft(4, [1, 2, 3, 4, 5]));
