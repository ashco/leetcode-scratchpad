//  * Definition for singly-linked list.
function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
  if (node.next) {
    const nextNode = node.next;
    node.val = nextNode.val;
    node.next = nextNode.next;
  }
};

const n1 = new ListNode(4);
const n2 = new ListNode(5);
const n3 = new ListNode(1);
const n4 = new ListNode(9);

n1.next = n2;
n2.next = n3;
n3.next = n4;

console.log(deleteNode(n2));
console.log(n1);
