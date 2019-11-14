/*
# PROBLEM
Given the value of two nodes in a binary search tree, find the lowest (nearest) common ancestor.
You may assume that both values already exist in the tree.

For example, using the tree shown (see below), assume 4 and 14 are the two fiven nodes. The lowest common ancestor would be 8
because it's an ancestor to both 4 and 14, and there is no node lower on the tree that is an ancestor to both 4 and 14

## TREE
      20
    8   22
  4   12
    10  14

*/

const assert = require("assert");

let Tree = {
  value: 20,
  left: {
    value: 8,
    left: {
      value: 4
    },
    right: {
      value: 12,
      left: {
        value: 10
      },
      right: {
        value: 14
      }
    }
  },
  right: {
    value: 22
  }
};

function LowestCommonAncestor(tree, n1, n2) {
  let a = findValueAndGetPath(tree, n1);
  let b = findValueAndGetPath(tree, n2);
  return getCommonValue(a, b);
}

function findValueAndGetPath(tree, value, path = []) {
  if (tree.value === value) return path;
  path.push(tree.value);
  return findValueAndGetPath(
    value < tree.value ? tree.left : tree.right,
    value,
    path
  );
}

function getCommonValue(a, b) {
  let i = 0;
  let last;
  while (a[i] === b[i]) {
    last = a[i];
    i++;
  }
  return last;
}

assert.equal(LowestCommonAncestor(Tree, 4, 14), 8);
