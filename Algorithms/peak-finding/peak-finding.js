/*
https://courses.csail.mit.edu/6.006/spring11/lectures/lec02.pdf
https://www.filipekberg.se/2014/02/10/understanding-peak-finding/

# Technique
Using **Devide and Conquer** technique

Giving an array A[0..n-1]

* A[i] is a **peak** if it is not smaller than its neighbor(s): A[i-1] <= A[i] >= A[i+]
where we imagine A[-1] = A[n] = -infinite

GOAL: Find ANY peak

*/

for (var i = 0; i < 5; i++) {
  (function(i) {
    setTimeout(() => {
      console.log(i);
    }, 1000);
  })(i);
}

const assert = require("assert");

function PeakFinding(arr, start = 0, end) {
  if (!end) end = arr.length - 1;
  let pivot = Math.ceil((end - start) / 2) + start;

  if (arr[pivot] < arr[pivot - 1]) {
    return PeakFinding(arr, start, pivot);
  } else if (arr[pivot] < arr[pivot + 1]) {
    return PeakFinding(arr, pivot, end);
  }

  return arr[pivot];
}

assert.equal(PeakFinding([1, 2, 6, 5, 3, 7, 4]), 6);
assert.equal(PeakFinding([1, 2, 3, 4, 5, 7, 6]), 7);
