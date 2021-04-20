/*      -------------------------------
       |      HACKERRANK SOLUTION      |
        -------------------------------
  Auther : Sonu Kumar (B.tech 2nd Year in 2020-2021)

*/

const circularArrayRotation = (arr, k, queries) => {
  let result = [];

  if (arr.length === k) {
    queries.forEach((e) => {
      result.push(arr[e]);
    });
  } else {
    let temp = arr.splice(arr.length - k, k).concat(arr);

    queries.forEach((e) => {
      result.push(temp[e]);
    });
  }

  return result;
};

let arr = [1, 2, 3, 5];
let k = 3;
let queries = [1, 2];

console.log(circularArray(arr, k, queries));
let res = arr.splice(arr.length - k, k);

// console.log(res + "  " + arr.splice(k, arr.length - k));
console.log(res.concat(arr));
