/*
Given a list of numbers with only 3 unique numbers (1, 2, 3), sort the list in O(n) time.

Example 1:
Input: [3, 3, 2, 1, 3, 2, 1]
Output: [1, 1, 2, 2, 3, 3, 3]
def sortNums(nums):
  # Fill this in.

print sortNums([3, 3, 2, 1, 3, 2, 1])
# [1, 1, 2, 2, 3, 3, 3]

Challenge: Try sorting the list using constant space.
*/


/*
NOTES:
This is the Dutch national flag problem (https://en.wikipedia.org/wiki/Dutch_national_flag_problem)
*/

const swap = (arr, i, j) => {
  const tmp = arr[i]
  arr[i] = arr[j]
  arr[j] = tmp
}

const sortUnique3 = (arr) => {
  let min = arr[0]
  let max = arr[0]
  let MID = arr[0]

  for (let i = 0; i < arr.length; i++) {
    const n = arr[i]

    if (n < min) {
      MID = min
      min = n
    } else if (n > max) {
      MID = max
      max = n
    } else {
      MID = n
    }

    if (min < MID && MID < max) {
      break
    }
  }

  let i = 0;
  let j = 0;
  let end = arr.length - 1;

  while (j <= end) {
    if (arr[j] < MID) {
      // Swap?
      [arr[i], arr[j]] = [arr[j], arr[i]];
      // swap(arr, i, j)
      i++;
      j++;
    } else if (arr[j] > MID) {
      [arr[end], arr[j]] = [arr[j], arr[end]];
      // swap(arr, end, j)
      end--;
    } else {
      j++;
    }
  }

  return arr;
};

console.log(sortUnique3([3, 3, 2, 1, 3, 2, 1]));
console.log(sortUnique3([2, 2, 2, 5, 5, 20, 20]));
console.log(sortUnique3([10, 99, 50, 50, 99, 50, 10, 99, 50, 50, 50, 10, 99, 99, 10, 99]));