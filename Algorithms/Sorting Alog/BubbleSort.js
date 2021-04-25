/*      -----------------------------------------
       |         Bubble Sort Algorithem          |
        -----------------------------------------
  Auther : Sonu Kumar (B.tech 2nd Year in 2020-2021)

*/

const BubbleSort = (list) => {
  for (let i = 0; i < list.length - 1; i++) {
    let swap = false;
    for (let j = 0; j < list.length - i - 1; j++) {
      if (list[j] > list[j + 1]) {
        list = Swap(list, j, j + 1);
        swap = true;
      }
    }
    if (!swap) break;
  }
  return list;
};

const Swap = (list, a, b) => {
  let temp = list[a];
  list[a] = list[b];
  list[b] = temp;
  return list;
};

console.log(BubbleSort([5, 8, 99, 123, 3, 6, 8, 55]));
