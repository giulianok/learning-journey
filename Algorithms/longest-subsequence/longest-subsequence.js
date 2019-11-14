const assert = require('assert');

/*
NOTICE

This needs some thoughts and work

SOUCES:
https://www.youtube.com/watch?v=ASoaQq66foQ
*/

const bruteForce = (s1, s2) => {
  if (!s1 || !s2) {
    return '';
  }

  const longestFound = (s1, s2, i = 0) => {
    let z = 0;
    let longest = '';
    while (i < s1.length && z >= 0 && z < s2.length) {
      const index = s2.indexOf(s1[i], z);
      if (index > -1) {
        longest += s1[i];
        z = index;
      }
      i++;
    }

    return longest;
  };

  let foundLongest = '';

  for (let i = 0; i < s1.length; i++) {
    let f = longestFound(s1, s2, i);
    if (f.length > foundLongest.length) {
      foundLongest = f;
    }
  }

  return foundLongest;
};

assert.equal(bruteForce('ABAZDC', 'BACBAD'), 'ABAD');
// assert.equal(bruteForce('AGGTAB', 'GXTXAYB'), 'GTAB'); // does not work :D

const dynamicProgramming = (s1, s2, subs = '') => {
  if (!s1.length || !s2.length) {
    return subs;
  }

  const s1withoutLast = s1.substr(0, s1.length - 1);
  const s2withoutLast = s2.substr(0, s2.length - 1);

  const s1last = s1[s1.length - 1];
  const s2last = s2[s2.length - 1];

  if (s1last === s2last) {
    return dynamicProgramming(s1withoutLast, s2withoutLast, s1last + subs);
  }

  const answer1 = dynamicProgramming(s1, s2withoutLast, subs);
  const answer2 = dynamicProgramming(s1withoutLast, s2, subs);

  if (answer1.length >= answer2.length) {
    return answer1;
  } else {
    return answer2;
  }

  // max( f('a', 'az'), f('aa', 'a') )
};

assert.equal(dynamicProgramming('AA', 'AA'), 'AA');
assert.equal(dynamicProgramming('AA', 'AZ'), 'A');
assert.equal(dynamicProgramming('ABAZDC', 'BACBAD'), 'ABAD');
assert.equal(dynamicProgramming('AGGTAB', 'GXTXAYB'), 'GTAB');

const dynamicProgrammingMemo = (s1, s2, subs = '', memo = {}) => {
  if (!s1.length || !s2.length) {
    return subs;
  }

  const s1withoutLast = s1.substr(0, s1.length - 1);
  const s2withoutLast = s2.substr(0, s2.length - 1);

  const s1last = s1[s1.length - 1];
  const s2last = s2[s2.length - 1];

  if (s1last === s2last) {
    return dynamicProgrammingMemo(
      s1withoutLast,
      s2withoutLast,
      s1last + subs,
      memo
    );
  }

  const memoA1key = `${s1}:${s2withoutLast}`;
  let answer1;
  if (memo[memoA1key]) {
    answer1 = memo[memoA1key];
  } else {
    answer1 = dynamicProgrammingMemo(s1, s2withoutLast, subs, memo);
    memo[memoA1key] = answer1;
  }

  const memoA2key = `${s1withoutLast}:${s2}`;
  let answer2;
  if (memo[memoA2key]) {
    answer2 = memo[memoA2key];
  } else {
    answer2 = dynamicProgrammingMemo(s1withoutLast, s2, subs, memo);
    memo[memoA2key] = answer2;
  }

  if (answer1.length >= answer2.length) {
    return answer1;
  } else {
    return answer2;
  }
};

assert.equal(dynamicProgrammingMemo('AA', 'AA'), 'AA');
assert.equal(dynamicProgrammingMemo('AA', 'AZ'), 'A');
assert.equal(dynamicProgrammingMemo('ABAZDC', 'BACBAD'), 'ABAD');
assert.equal(dynamicProgrammingMemo('AGGTAB', 'GXTXAYB'), 'GTAB');

console.log('DONE!');
