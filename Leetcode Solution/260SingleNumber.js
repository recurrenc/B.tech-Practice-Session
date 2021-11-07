// let singleNumber = function (nums) {
//   nums.sort((a, b) => a - b);
//   let found = false;
//   for (let i = 0; i < nums.length; ) {
//     if (nums.length <= 2) return nums;
//     console.log(nums);
//     let index = nums.indexOf(nums[i], i + 1);
//     if (index >= 0) {
//       nums.splice(index, 1);
//       found = true;
//     } else {
//       if (found) {
//         nums.splice(i, 1);
//         found = false;
//       } else {
//         i++;
//         found = false;
//       }
//     }
//   }
//   return nums;
// };
// const filter = (map, cb) => {
//   for (let [k, v] of map) {
//     if (!cb(k, v)) {
//       map.delete(k);
//     }
//   }
//   return map;
// };
// const singleNumber = (nums) => {
//   const map = new Map();
//   for (let i = 0; i < nums.length; i++) {
//     if (map.has(nums[i])) {
//       map.set(nums[i], map.get(nums[i]) + 1);
//     } else map.set(nums[i], 1);
//   }
//   return [...filter(map, (k, v) => v === 1).keys()];
// };

const singleNumber = (nums) => {
  nums.sort((a, b) => a - b);
  //[ 1,1,2,2,2,3,5 ]
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    if (res.length >= 2) break;
    if (nums[i] === nums[i + 1]) {
      continue;
    } else if (nums[i] === nums[i - 1]) {
      continue;
    } else {
      console.log(nums[i]);
      res.push(nums[i]);
    }
  }
  return res;
};

console.log(singleNumber([1, 2, 1, 3, 2, 2, 2, 5]));
