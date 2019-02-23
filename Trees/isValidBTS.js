//  * Definition for a binary tree node.
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */

var isValidBST = function(root) {
  // Base case
  if (root === null) {
    return true;
  }
  // Recursive case
  let lValid = root.left ? root.val > root.left.val : true;
  let rValid = root.right ? root.val < root.right.val : true;
  const nodeValid = lValid && rValid;

  return nodeValid ? isValidBST(root.left) && isValidBST(root.right) : false;
};

//    10
//  /  \
// 5    15
//    /  \
//   6    20
// Output: true

const n1 = new TreeNode(10);
const n2 = new TreeNode(5);
const n3 = new TreeNode(15);
const n4 = new TreeNode(6);
const n5 = new TreeNode(20);

n1.left = n2;
n1.right = n3;
n3.left = n4;
n3.right = n5;

console.log(isValidBST(n1));
