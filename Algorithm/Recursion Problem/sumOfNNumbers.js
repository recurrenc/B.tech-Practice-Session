/*      -------------------------------
        |    FUNCTIONAL PROGRAMMING   |
        -------------------------------
  Auther : Sonu Kumar (B.tech 2nd Year in 2020-2021)

*/

// const canSum = (targerSum, number, memo={}) =>{
//   if(targerSum in memo) return memo[targerSum];
//   if(targerSum === 0) return [];
//   if(targerSum < 0) return null;

//   for(let num of number){
//     const remainder = targerSum - num;
//     const remainderCombination = canSum(remainder, number, memo);

//     if(remainderCombination !== null){
//       memo[targerSum] = [...remainderCombination, num];
//       return memo[targerSum];
//     }
//   }
//   memo[targerSum] = null;
//   return null;

// }
// console.log(canSum(51, [ 3, 5, 7]));

// // for(let i = 25; i <= 150; i++){
// //   console.log(`${i} :  ${canSum(i, [25,13,27])}`);
// // }

const sumOfNNumbers = (n, memo = {}) => {
  if (n in memo) return memo[n];
  if (n === 0) return 0;
  if (n === 1) return 1;
  memo[n] = n + sumOfNNumbers(n - 1);
  console.log(memo[n]);
  return memo[n];
};
console.log(`hii sonu`);
