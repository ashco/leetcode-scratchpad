// Definition for singly-linked list.
function ListNode(val) {
  this.val = val;
  this.next = null;
}

//  * @param {ListNode} l1
//  * @param {ListNode} l2
//  * @return {ListNode}

var mergeTwoLists = function(l1, l2) {};

// Input: 1->2->4, 1->3->4
// Output: 1->1->2->3->4->4

const l1a = new ListNode(1);
const l1b = new ListNode(2);
const l1c = new ListNode(4);

l1a.next = l1b;
l1b.next = l1c;

const l2a = new ListNode(1);
const l2b = new ListNode(3);
const l2c = new ListNode(4);

l2a.next = l2b;
l2b.next = l2c;

console.log(mergeTwoLists());
