// Definition for a binary tree node.
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
function maxDepth(root) {
  // Base case
  if (root === null) return 0;
  // Recursive case
  const depthLeft = maxDepth(root.left) + 1;
  const depthRight = maxDepth(root.right) + 1;
  return depthLeft > depthRight ? depthLeft : depthRight;
}

// [3,9,20,null,null,15,7],
//     3
//   /  \
// 9    20
//    /   \
//  15     7

const n1 = new TreeNode(3);
const n2 = new TreeNode(9);
const n3 = new TreeNode(20);
const n4 = new TreeNode(15);
const n5 = new TreeNode(7);
const n6 = new TreeNode(4);
const n7 = new TreeNode(33);

n1.left = n2;
n1.right = n3;
n3.left = n4;
n3.right = n5;
n5.right = n6;
n6.right = n7;

console.log(maxDepth(n1));
