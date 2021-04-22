function nonDivisibleSubset(k, s) {
  // Write your code here
  if (k === 1) {
    return 1;
  }
  let count = 0;
  let remainders = [];
  let hasDivisible = false;

  for (let i = 0; i < s.length; i++) {
    remainders[i] = s[i] % k;
    if (remainders[i] === 0) {
      hasDivisible = true;
    }
  }
  if (hasDivisible) {
    count += 1;
  }
  for (let i = 1; i <= k; i++) {
    const num1 = i;
    const num2 = k - i;
    let num1C = 0;
    let num2C = 0;

    if (num1 > num2) {
      break;
    }
    for (let j = 0; j < remainders.length; j++) {
      if (num1 === remainders[j]) {
        num1C += 1;
      }
      if (num2 === remainders[j]) {
        num2C += 1;
      }
    }
    if (num1C > 0 && num1 === num2) {
      count += 1;
      break;
    } else {
      count += num1C > num2C ? num1C : num2C;
    }
  }
  return count;
}
console.log(nonDivisibleSubset(5, [1, 2, 3, 4, 6, 8, 9]));
