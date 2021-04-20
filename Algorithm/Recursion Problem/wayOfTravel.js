/*      -------------------------------
        |    FUNCTIONAL PROGRAMMING   |
        -------------------------------
  Auther : Sonu Kumar (B.tech 2nd Year in 2020-2021)
* This Function takes two arguments
  arg 1 : a number
  arg 2 : a number

  a matrix input taken by this function as m*n and return number of
   way to travell from upper left corner to bottom right corner.
*/

const findPath = (m, n, memo = {}) => {
  // check element present in cache
  let key = m + "," + n;
  if (key in memo) return memo[key];

  // base case of recursion.
  if (m === 0 || n === 0) return 0;
  if (m === 1 && n === 1) return 1;

  //Storing Value and recalling function
  memo[key] = findPath(m - 1, n, memo) + findPath(m, n - 1, memo);
  return memo[key];
};

console.log(findPath(3, 3));
