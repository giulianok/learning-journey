/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let start = -1;
  let end = -1;

  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];

    if (n === target) {
      if (start === -1) {
        start = i;
        end = i;
      } else {
        end = i;
      }
    }
  }

  return [start, end];
};

searchRange([5, 7, 7, 8, 8, 10], 8);
// Output: [3,4]

searchRange([5, 7, 7, 8, 8, 10], 6);
// Output: [-1,-1]

searchRange([], 0);
// Output: [-1,-1]
