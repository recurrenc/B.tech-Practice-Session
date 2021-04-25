/*      -------------------------------
       |      HACKERRANK SOLUTION      |
        -------------------------------
  Auther : Sonu Kumar (B.tech 2nd Year in 2020-2021)

*/

let arr = [5, 6, 6, 4, 6, 5, 6, 7];
// Complete the equalizeArray function below.
function equalizeArray(arr) {
  let res = [];

  let temp = new Set(arr);
  let itr = temp.values();
  arr.sort((a, b) => a - b);
  for (let i = 0; i < temp.size; i++) {
    let v = itr.next().value;
    res.push(arr.lastIndexOf(v) - arr.indexOf(v) + 1);
  }
  res.sort((a, b) => b - a);

  return arr.length - res[0];
}

console.log(equalizeArray(arr));
