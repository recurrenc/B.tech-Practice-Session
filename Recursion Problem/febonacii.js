/*      -------------------------------
        |    FUNCTIONAL PROGRAMMING   |
        -------------------------------
  Auther : Sonu Kumar (B.tech 2nd Year in 2020-2021)
* This Function takes one  arguments
  arg 1 : a number

  returns nth favonacii number.
*/

const fab = (n, memo = {}) => {
  if (n in memo) return memo[n];

  // recursion base cases
  if (n <= 2) return 1;

  // Memoization and recursion

  memo[n] = fab(n - 1, memo) + fab(n - 1, memo);

  return memo[n];
};

console.log(fab(55));
