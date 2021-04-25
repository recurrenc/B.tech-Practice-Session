/*      -------------------------------
        |    FUNCTIONAL PROGRAMMING   |
        -------------------------------
  Auther : Sonu Kumar (B.tech 2nd Year in 2020-2021)
* This Function takes two arguments
  arg 1 : a number
  arg 2 : an array

  returns an shortest array which elements is combination of elements 
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

  let shortestCombination = null;

  for (let num of numbers) {
    const remainder = targetSum - num;
    const remainderCombination = canSum(remainder, numbers, memo);

    if (remainderCombination !== null) {
      const combination = [...remainderCombination, num];
      if (
        shortestCombination === null ||
        combination.length < shortestCombination.length
      ) {
        shortestCombination = combination;
      }
    }
  }

  // Storing key value in cache
  memo[targetSum] = shortestCombination;
  return shortestCombination;
};

console.log(canSum(51, [3, 5, 7]));
console.log(canSum(50, [3, 5, 7]));
