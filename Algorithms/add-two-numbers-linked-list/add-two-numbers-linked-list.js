/*
Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.

Input: (5) + (7)
Output: 2 -> 1
Explanation: 5 + 7 = 12.
*/

// # Definition for singly-linked list.
// class ListNode(object):
//   def __init__(self, x):
//     self.val = x
//     self.next = None

// class Solution:
//   def addTwoNumbers(self, l1, l2, c = 0):
//     # Fill this in.

// l1 = ListNode(2)
// l1.next = ListNode(4)
// l1.next.next = ListNode(3)

// l2 = ListNode(5)
// l2.next = ListNode(6)
// l2.next.next = ListNode(4)

// result = Solution().addTwoNumbers(l1, l2)
// while result:
//   print result.val,
//   result = result.next
// # 7 0 8


function ListNode(value) {
  this.val = value
  this.next = null
}

const l1 = new ListNode(2)
l1.next = new ListNode(4)
l1.next.next = new ListNode(3)

const l2 = new ListNode(5)
l2.next = new ListNode(6)
l2.next.next = new ListNode(4)

const addTwoNumbers = (l1, l2) => {
  let newNode = null
  let current = null

  if (!l1 && !l2) {
    return newNode
  }

  let extra = 0
  while(l1 && l2) {
    const sum = l1.val + l2.val + extra
    const hasExtra = sum > 9
    const node = new ListNode(hasExtra ? sum - 10 : sum)

    if (!newNode) {
      newNode = node
      current = newNode
    }

    extra = hasExtra ? 1 : 0

    l1 = l1.next
    l2 = l2.next

    if (current) {
      current.next = node
      current = current.next
    }
  }

  return newNode
}

let node = addTwoNumbers(l1, l2)
let result = ""
while (node) {
  console.log('node value',node.val.toString())
  result += node.val
  node = node.next
}
console.log(result)
