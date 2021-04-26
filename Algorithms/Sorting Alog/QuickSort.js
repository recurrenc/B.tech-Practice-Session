/*      -----------------------------------------
       |         Quick Sort Algorithem           |
        -----------------------------------------
  Auther : Sonu Kumar (B.tech 2nd Year in 2020-2021)

  What is Quick sort?
Quick sort follows Divide and Conquer algorithm. It is dividing elements in to smaller parts based on some condition and performing the sort operations on those divided smaller parts. Hence, it works well for large datasets. So, here are the steps how Quick sort works in simple words.

1.  First select an element which is to be called as pivot element.
2.  Next, compare all array elements with the selected pivot element and arrange them in such a way that, elements less than the pivot element are to it's left and greater than pivot is to it's right.
3.  Finally, perform the same operations on left and right side elements to the pivot element.

*/

const swap = (items, leftIndex, rightIndex) => {
  let temp = items[leftIndex];
  items[leftIndex] = items[rightIndex];
  items[rightIndex] = temp;
};
const partition = (items, left, right) => {
  let pivot = items[Math.floor((right + left) / 2)],
    i = left,
    j = right;
  while (i <= j) {
    while (items[i] < pivot) {
      i++;
    }
    while (items[j] > pivot) {
      j--;
    }
    if (i <= j) {
      swap(items, i, j);
      i++;
      j--;
    }
  }
  return i;
};

const quickSort = (items, left, right) => {
  let index;
  if (items.length > 1) {
    index = partition(items, left, right); //index returned from partition
    if (left < index - 1) {
      //more elements on the left side of the pivot
      quickSort(items, left, index - 1);
    }
    if (index < right) {
      //more elements on the right side of the pivot
      quickSort(items, index, right);
    }
  }
  return items;
};
// first call to quick sort

let items = [55, 4, 32, 23, 88];
let sortedArray = quickSort(items, 0, items.length - 1);
console.log(sortedArray); //prints [2,3,5,6,7,9]
