// Definition for singly-linked list.
function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  // Declare vars
  const arr = []; // array to hold node list
  let node = head;

  // populate array
  while (node.next !== null) {
    arr.push(node);
    node = node.next;
  }
  arr.push(node);

  const tIndex = arr.length - n;
  // point target node to node after n
  let leftNode = arr[tIndex - 1];
  let rightNode = arr[tIndex + 1];
  // if no left or right nodes
  if (leftNode === undefined && rightNode === undefined) {
    head = null;
  }
  // if no left node
  else if (leftNode === undefined) {
    head = rightNode;
  }
  // if no right node
  else if (rightNode === undefined) {
    leftNode.next = null;
    // if both left and right
  } else {
    leftNode.next = rightNode;
  }

  return head;
};

const n1 = new ListNode(1);
// const n2 = new ListNode(2);
// const n3 = new ListNode(3);
// const n4 = new ListNode(4);
// const n5 = new ListNode(5);

// n1.next = n2;
// n2.next = n3;
// n3.next = n4;
// n4.next = n5;

console.log(removeNthFromEnd(n1, 1));
