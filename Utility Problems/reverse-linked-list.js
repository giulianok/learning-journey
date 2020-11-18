/*
SOUCES
- https://www.youtube.com/watch?v=O0By4Zq0OFc
- https://leetcode.com/problems/reverse-linked-list/
- https://www.youtube.com/watch?v=S92RuTtt9EE
*/

const LinkedList = require('../data-structures/linked-list');

const makeExample = () => {
  const example = new LinkedList(1);
  example.next = new LinkedList(2);
  example.next.next = new LinkedList(3);
  example.next.next.next = new LinkedList(4);

  return example;
};

console.log('original', makeExample().toArray());

const recursive = node => {
  if (node == null || node.next == null) {
    return node;
  }

  let tmp = recursive(node.next);

  node.next.next = node; // point the next of the next (e.g null of 3 -> 4 -> null) to myself (3 -> 4 -> 3 -> 4 -> inifinity)
  node.next = null; // point the next to null to remove the infinity pointer (e.g. 3 -> null)

  return tmp; // this one now is 4 because if the last value of the stack, and points to node (e.g. 4 -> 3 -> null), and null is because we removed it in line 19
};

console.log('recursive', recursive(makeExample()).toArray());

const iterative = example => {
  /*
  prev    curr  next
    *  ->  1  ->  2  ->  3  ->  4  ->  null
  */

  let prev = null;
  let curr = example;
  let next = null;

  while (curr) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
};

console.log('iterative', iterative(makeExample()).toArray());
