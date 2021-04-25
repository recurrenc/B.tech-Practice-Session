/*      -----------------------------------------
       |        Binary Search Algorithem         |
        -----------------------------------------
  Auther : Sonu Kumar (B.tech 2nd Year in 2020-2021)

*/

const BinarySearch = (
  list,
  element,
  first = list[0],
  last = list[list.length - 1]
) => {
  let mid = parseInt((last + first) / 2, 10);
  if (list[mid] == element) return mid;
  else if (list[mid] > element) return BinarySearch(list, element, first, mid);
  else if (list[mid] < element) return BinarySearch(list, element, mid, last);
};

console.log(BinarySearch([1, 2, 3, 4, 5, 6, 7], 7));
