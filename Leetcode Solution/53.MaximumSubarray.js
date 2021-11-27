/**
 *
 * @param { number array } nums
 * @returns  {[ maximumSum, [startIndex, lastIndex] ]}
 *
 */
const maxSubArray = (nums) => {
  let start = 0,
    end = 0,
    sum = 0,
    maxSum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (sum < 0) {
      sum = 0;
      start = i + 1;
    } else if (maxSum < sum) {
      maxSum = sum;
      end = i;
    }
  }
  return [maxSum, [start, end]];
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
