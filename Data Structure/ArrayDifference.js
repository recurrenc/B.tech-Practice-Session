/*      -------------------------------
       |        DATA STRUCTURE         |
        -------------------------------
  Auther : Sonu Kumar (B.tech 2nd Year in 2020-2021)

*/

function sym(...args) {
  return [...args.reduce(reducer, new Set())];
}

function reducer(result, arr) {
  const compare = new Set(arr);
  console.log(arr);
  console.log(compare);
  for (let val of compare) {
    if (result.has(val)) {
      result.delete(val);
    } else {
      result.add(val);
    }
  }
  return result;
}

console.log(sym([1, 2, 3], [5, 2, 1, 4]));
