/*      -----------------------------------------
       |        Selection Sort Algorithem        |
        -----------------------------------------
  Auther : Sonu Kumar (B.tech 2nd Year in 2020-2021)

*/

const Swap = (list, a, b) => {
  let temp = list[a];
  list[a] = list[b];
  list[b] = temp;
  return list;
};

const SelectionSort = (list) => {
  for (let i = 0; i < list.length; i++) {
    let min = list[i];
    let minIndex = i;
    for (let j = i + 1; j < list.length; j++) {
      if (list[j] < min) {
        min = list[j];
        minIndex = j;
      }
    }
    if (minIndex !== i) Swap(list, i, minIndex);
  }
  return list;
};
console.log(SelectionSort([5, 8, 99, 123, 3, 6, 8, 55]));
