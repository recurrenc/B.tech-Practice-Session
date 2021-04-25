/*      -------------------------------
       |      HACKERRANK SOLUTION      |
        -------------------------------
  Auther : Sonu Kumar (B.tech 2nd Year in 2020-2021)

*/

function cutTheSticks(arr) {
  let res = [];
  arr.sort((a, b) => a - b);

  let set = new Set(arr);

  res.push(arr.length);
  let itr = set.values();
  for (let i = 0; i < set.size; i++) {
    let temp = arr.length - 1 - arr.lastIndexOf(itr.next().value);
    if (temp) res.push(temp);
  }

  return res;
}

let arr = [5, 4, 4, 2, 2, 8];
console.log(cutTheSticks(arr));
