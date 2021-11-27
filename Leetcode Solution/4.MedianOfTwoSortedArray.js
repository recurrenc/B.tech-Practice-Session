const findMedianSortedArrays = (nums1, nums2) => {
  const result = mergeTwoSortedArray(nums1, nums2);
  const l = result.length;

  return l % 2 === 0
    ? (result[l / 2] + result[l / 2 - 1]) / 2
    : result[Math.floor(l / 2)];
};

const mergeTwoSortedArray = (a, b) => {
  if (a[a.length - 1] <= b[0]) return [...a, ...b];
  if (b[b.length - 1] <= a[0]) return [...b, ...a];
  let res = Array(a.length + b.length).fill(0);

  let i = 0,
    j = 0,
    k = 0;
  while (i < a.length && j < b.length) {
    if (a[i] < b[j]) {
      res[k] = a[i];
      i++;
    } else {
      res[k] = b[j];
      j++;
    }
    k++;
  }

  while (i < a.length) {
    res[k] = a[i];
    i++;
    k++;
  }

  while (j < b.length) {
    res[k] = b[j];
    j++;
    k++;
  }
  return res;
};

console.log(findMedianSortedArrays([1, 2], [3, 4]));
