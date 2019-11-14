const assert = require("assert");

const bruteForce = (x, n) => {
  if (n < 0) {
    x = 1 / x;
    n = -n;
  }

  let result = 1;

  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
};

assert.equal(bruteForce(2, 5), Math.pow(2, 5));
assert.equal(bruteForce(2.1, 3), Math.pow(2.1, 3));
assert.equal(bruteForce(2, -2), Math.pow(2, -2));
assert.equal(bruteForce(2, -5), Math.pow(2, -5));

const fastPow = (x, n) => {
  if (n < 0) {
    x = 1 / x;
    n = -n;
  }

  const r = (x, n) => {
    if (n == 0) {
      return 1
    };

    const half = r(x, Math.floor(n / 2))

    if (n % 2 === 0) {
      return half * half;
    } else {
      return half * half * x;
    }
  }

  return r(x, n)
}

assert.equal(fastPow(2, 5), Math.pow(2, 5));
// assert.equal(fastPow(2.1, 3), Math.pow(2.1, 3));
// assert.equal(fastPow(2, -2), Math.pow(2, -2));
// assert.equal(fastPow(2, -5), Math.pow(2, -5));