/*      -----------------------------------------
       |          Merge Sort Algorithem          |
        -----------------------------------------
  Auther : Sonu Kumar (B.tech 2nd Year in 2020-2021)

*/

const Merge = (left, right) => {
  let arr = [];
  // Break out of loop if any one of the array gets empty
  while (left.length && right.length) {
    // Pick the smaller among the smallest element of left and right sub arrays
    if (left[0] < right[0]) {
      arr.push(left.shift());
    } else {
      arr.push(right.shift());
    }
  }

  // Concatenating the leftover elements
  // (in case we didn't go through the entire left or right array)
  return [...arr, ...left, ...right];
};

const MergeSort = (array) => {
  const half = array.length / 2;

  // Base case or terminating case
  if (array.length < 2) {
    return array;
  }

  const left = array.splice(0, half);
  return Merge(MergeSort(left), MergeSort(array));
};

console.log(MergeSort([5, 8, 99, 123, 3, 6, 8, 55], 0, 7));
