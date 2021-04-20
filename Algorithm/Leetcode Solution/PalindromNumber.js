/*      -------------------------------
        |    FUNCTIONAL PROGRAMMING   |
        -------------------------------
  Auther : Sonu Kumar (B.tech 2nd Year in 2020-2021)

*/

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  //   if(x < 0) return false;
  //   let i = 0;
  //   let ts = x + '';
  //   while(i <= ts.length/2){
  //     if(ts[i] !== ts[ts.length - 1 - i]) return false;
  //     else {
  //       i++;
  //     }
  //   }

  //   return true;

  x = x + "";

  if (x == x.split("").reverse().join("")) return true;

  return false;
};
console.log(isPalindrome(23432));
