// Definition for a binary tree node.
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  // Base case

  // Recursive case

};

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

n1.left = n2;
n1.right = n3;
n3.left = n4;
n3.right = n5;

console.log(maxDepth(n1));
