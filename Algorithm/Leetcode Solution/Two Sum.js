/*      -------------------------------
        |    FUNCTIONAL PROGRAMMING   |
        -------------------------------
  Auther : Sonu Kumar (B.tech 2nd Year in 2020-2021)

*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let res;
  nums.forEach((n, i) => {
    let x = nums.indexOf(target - n);
    if (x >= 0) {
      res = [x, i];
    }
  });
  return res;
};

console.log(twoSum([3, 4, 5, 2, 3, 5], 6));
