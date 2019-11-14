/*
SOURCES
https://leetcode.com/articles/redundant-connection/
*/

const assert = require('assert');
const DSU = require('./data-structures/dsu-disjoint-set-union');

/*
Input: [[1,2], [1,3], [2,3]]
Output: [2,3]
Explanation: The given undirected graph will be like this:
  1
 / \
2 - 3


Input: [[1,2], [2,3], [3,4], [1,4], [1,5]]
Output: [1,4]
Explanation: The given undirected graph will be like this:
5 - 1 - 2
    |   |
    4 - 3
*/

const MAX_EDGE_VAL = 1000;

const findRedundantConnection = edges => {
  const dsu = new DSU(MAX_EDGE_VAL + 1);

  for (let edge of edges) {
    if (!dsu.union(edge[0], edge[1])) {
      return edge;
    }
  }

  return null;
};

assert.deepEqual(findRedundantConnection([[1, 2], [1, 3], [2, 3]]), [2, 3]);
assert.deepEqual(
  findRedundantConnection([[1, 2], [2, 3], [3, 4], [1, 4], [1, 5]]),
  [1, 4]
);
