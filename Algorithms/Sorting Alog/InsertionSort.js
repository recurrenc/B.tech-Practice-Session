/*      -----------------------------------------
       |        Insertion Sort Algorithem        |
        -----------------------------------------
  Auther : Sonu Kumar (B.tech 2nd Year in 2020-2021)


  Algorithm 
To sort an array of size n in ascending order: 
1: Iterate from arr[1] to arr[n] over the array. 
2: Compare the current element (key) to its predecessor. 
3: If the key element is smaller than its predecessor, compare it to the    
elements before. Move the greater elements one position up to make space for the swapped element.

*/

const InsertionSort = (list) => {
  let i, key, j;
  for (i = 1; i < list.length; i++) {
    key = list[i];
    j = i - 1;
    while (j >= 0 && list[j] > key) {
      list[j + 1] = list[j];
      j = j - 1;
    }
    list[j + 1] = key;
  }
  return list;
};

console.log(InsertionSort([5, 8, 99, 123, 3, 6, 8, 55]));
