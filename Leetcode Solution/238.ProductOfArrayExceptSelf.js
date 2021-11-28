/*
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]

Example 2:

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
*/

// Solution

/*
// Unoptimized Solution O(n)

const productExceptSelf = (nums) => {
  let produce = 1;
  nums.forEach((e) => {
    produce *= e;
  });
  return nums.map((e) => Math.floor(produce / e));
};

*/

/* 
// Unoptimized Space Complexity


const productExceptSelf = (nums) => {
  let left = [],
    right = [],
    result = [];
  for (let i = 0; i < nums.length; i++) {
    if (i === 0) left[i] = nums[i];
    else left[i] = left[i - 1] * nums[i];
  }
  for (let i = nums.length - 1; i >= 0; i--) {
    if (i === nums.length - 1) right[i] = nums[i];
    else right[i] = right[i + 1] * nums[i];
  }
  for (let i = 0; i < nums.length; i++) {
    if (i === 0) result[i] = right[i + 1];
    else if (i === nums.length - 1) result[i] = left[i - 1];
    else {
      result[i] = left[i - 1] * right[i + 1];
    }
  }

  return result;
};

*/

//  Optimised Time And Space Complexity

const productExceptSelf = (nums) => {
  let left = [],
    product = 1,
    result = [];
  for (let i = 0; i < nums.length; i++) {
    if (i === 0) left[i] = nums[i];
    else left[i] = left[i - 1] * nums[i];
  }
  for (let i = nums.length - 1; i >= 0; i--) {
    if (i === 0) result[i] = product;
    else {
      result[i] = left[i - 1] * product;
    }
    product *= nums[i];
  }
  // console.log({ left, product, result });
  return result;
};

console.log(productExceptSelf([1, 2, 3, 4]));
