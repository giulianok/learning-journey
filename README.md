# Interview Prep

The idea behind this Repo is to have a guide of what I need to be ready for an Interview as a Front End Engineer (Web + Software Engineer).

What I basically need to know is Data Structures, Algorithms and Concepts (like Big O).

# Data Structure

## Hash Table

This is like a plain object in JS

## Linked List

**Utilities**
- Reverse a linked list, iteratively and recursively.


## Doubly Linked List

TODO

## Queue

TODO

## Stack

TODO

## Trees

A tree has a node that has more nodes. It only has one root node and the root node has child nodes. Each child node has also child nodes. The last child node, the one that doesn't have child nodes, it's called "leaf"

                            Root
            Child                           Child
    Child           Child           Child           Child

Leaf Leaf Leaf Leaf Leaf Leaf Leaf Leaf

More: https://en.wikipedia.org/wiki/Tree_(data_structure)

### Binary Tree

When we talk about "Trees" we normally talk about "Binary Trees", which is basically a Tree where each node only has 2 nodes (left and right node) and then can be Null.

More: https://en.wikipedia.org/wiki/Binary_tree

### Binary Search Tree

Binary search trees keep their keys in sorted order, so that lookup and other operations can use the principle of binary search: when looking for a key in a tree (or a place to insert a new key), they traverse the tree from root to leaf, making comparisons to keys stored in the nodes of the tree and deciding, on the basis of the comparison, to continue searching in the left or right subtrees.

More: https://en.wikipedia.org/wiki/Binary_search_tree

Also see about:

- Balanced vs Unbalanced
- Traversing: InOrder (left then root then right), PreOrder (root then left then right) and PostOrder (left then right then root)

## Tries

A Trie is a tree with characters

## Graphs

A Graph is a collection of Nodes. Example: the network can be represented in a graph :)

### DFS - Depth-First Search

It goes deep one by one

### BFS - Breadth-First Search

It checks the closest onces first and then it goes deep. Need a Queue

## Heaps

Material:

- https://www.geeksforgeeks.org/heap-data-structure/
- https://en.wikipedia.org/wiki/Heap_(data_structure)
- https://www.youtube.com/watch?v=B7hVxCmfPtM

"An array visualized as a neerly complete Binary Tree"

A Heap is basically like a Binary Tree, having a root node and child nodes. Each node has Left and Right node.
There are 2 type of Heaps: Min and Max. The different between them is the order of the elements. The Min is going to start with
the minimum value to the maximum value. The Max Heap starts with the maximum value.

Example of Min Heap (the Max Heap it's just the opposite):
1
2 3
4 5 6 7

We represent the Heap in an Array, where the indices are by the row, meaning that, base on the example, we have an array of [1,2,3,4,5,6,7]

When we insert a new value we put it at the end and we start moving it to the Top if the value is less than the nodes at that level (row)

The following Heap **is not a Complete Binary Tree**. To have a Complete Binary Tree we should have 15 elements instead of 10
[16,14,10,8,7,9,3,2,4,1]

---

# Algorithms

## Divide and Conquer

### Peak Finding

https://courses.csail.mit.edu/6.006/spring11/lectures/lec02.pdf
See code in JS: peak-finding.js

---

## Bit Manipulation

---

## DP: Dynamic Programming

- Good for optimization problems
- Shortest path, min length path, minimize/maxize something
- Exhosted search -> usually a bad thing because is an exponential time solution, but, in a clever way, with DP, you get 
- "Careful brute force"
- Subproblems + "reuse" -> break a problem down into small subproblems, solve them, and reuse the solution of the subproblems
- Guessing + Recursion + Memoization
- Shortest path in some DAG (Directly Acycle Graph)

### 5 "easy" steps to DP:

1. Define subproblems
2. Guess (part of solution)
3. Relate subproblem solutions
4. Recurse & Memoization (recursively) OR build DP table bottom-up (interatively, forloops)
5. Solve the original problem

### Subproblems for string/sequences

There are 3 ways:

1. Suffixes: x[i:] (everything after i) -> O(n)
2. Prefixes: x[:j] (everything before j, aka last) -> O(n)
3. Substrings: x[i:j] -> O(n^2)

You **cannot** combine suffixes and prefixes, you pick either one. If you need to combine them, then what you need is a substring

**Resources**:
- https://www.youtube.com/watch?v=OQ5jsbhAv_M
- DAG: https://www.google.com/search?q=Directed+Acyclic+Graph&sxsrf=ALeKk036ocivcr503f1vafYJXrqlduCzFA:1605135347139&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjKzLqRy_vsAhVCFVkFHSgfDgAQ_AUoAXoECB8QAw&biw=1920&bih=946#imgrc=9bJolWFhwHo9PM

### Memoization

- More fn calls

### Bottom-Up

- Uses for loop (less fn calls)
- Can often save space

---

## Greedy

TODO

## Tail Call Optimization (TCO)

Some languages, like C++ and Javascript ES6+, when a function returns another function call, it optimizes the execuses and prevents the stack for growing.

Example

```js
const f = () => {
  // something

  return f(); // or any other fn, like r()
};
```

---

## Strings

### String Sliding Window

#### Resources
- Tutorials
  - https://www.youtube.com/watch?v=MK-NZ4hN7rs


--- 

## Algebra

### Vector multiplication

**Resources**:
- https://erik-engheim.medium.com/why-does-matrix-multiplication-work-the-way-it-does-7a8ed9739254