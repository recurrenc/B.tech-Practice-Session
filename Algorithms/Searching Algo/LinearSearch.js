/*      -----------------------------------------
       |        Linear Search Algorithem         |
        -----------------------------------------
  Auther : Sonu Kumar (B.tech 2nd Year in 2020-2021)

*/

const LinearSearch = (arr, key) => {
  let results = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === key) {
      results.push(i);
    }
  }
  // If results array is empty, return -1
  if (!results) {
    return -1;
  }

  return results;
};

console.log(LinearSearch([2, 4, 5, 6, 7, 8, 6, 33, 34], 6));
