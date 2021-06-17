/*      -------------------------------
        |    FUNCTIONAL PROGRAMMING   |
        -------------------------------
  Auther : Sonu Kumar (B.tech 2nd Year in 2020-2021)
* This Function takes two arguments
  arg 1 : a number
  arg 2 : an array

  returns an longest posible  array which elements is combination of elements 
  of given array and  whose sum is equal to given number.
*/

const canSum = (targetSum, numbers, memo = {}) => {
  // Checking the value in cache
  if (targetSum in memo) {
    return memo[targetSum];
  }
  // Base cases of Recursion.

  if (targetSum === 0) {
    return [];
  }

  if (targetSum < 0) {
    return null;
  }

  // logic of the problem statement

  let longestCombination = null;

  for (let num of numbers) {
    const remainder = targetSum - num;
    const remainderCombination = canSum(remainder, numbers, memo);

    if (remainderCombination !== null) {
      const combination = [...remainderCombination, num];
      if (
        longestCombination === null ||
        combination.length > longestCombination.length
      ) {
        longestCombination = combination;
      }
    }
  }

  // Storing key value in cache
  memo[targetSum] = longestCombination;
  return longestCombination;
};

console.log(canSum(5, [5, 3, 2]).length);
console.log(canSum(7, [5, 2, 2]).length);
console.log(canSum(7, [5, 5, 2]).length);
console.log(canSum(4, [2, 1, 1]).length);
console.log(canSum(100, [23, 15, 50]).length);
console.log(canSum(4000, [23, 15, 50]).length);
