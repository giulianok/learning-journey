/*
Output: 100, 50, 25, 75, 150, 125, 110, 175
*/

const assert = require("assert");

const Tree = {
  value: 100,
  left: {
    value: 50,
    left: {
      value: 25
    },
    right: {
      value: 75
    }
  },
  right: {
    value: 150,
    left: {
      value: 125,
      left: {
        value: 110
      }
    },
    right: {
      value: 175
    }
  }
};

function PreOrderTraversal(node, arr = []) {
  if (!node) return;
  arr.push(node.value);
  PreOrderTraversal(node.left, arr);
  PreOrderTraversal(node.right, arr);
  return arr;
}

function InOrderTraversal(node, arr = []) {
  if (!node) return;
  InOrderTraversal(node.left, arr);
  arr.push(node.value);
  InOrderTraversal(node.right, arr);
  return arr;
}

function PostOrderTraversal(node, arr = []) {
  if (!node) return;
  PostOrderTraversal(node.left, arr);
  PostOrderTraversal(node.right, arr);
  arr.push(node.value);
  return arr;
}

assert.equal(
  PreOrderTraversal(Tree).join(", "),
  "100, 50, 25, 75, 150, 125, 110, 175"
);
assert.equal(
  InOrderTraversal(Tree).join(", "),
  "100, 50, 25, 75, 150, 125, 110, 175"
);
assert.equal(
  PostOrderTraversal(Tree).join(", "),
  "100, 50, 25, 75, 150, 125, 110, 175"
);
