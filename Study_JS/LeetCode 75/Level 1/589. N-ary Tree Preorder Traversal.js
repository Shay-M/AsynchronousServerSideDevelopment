// https://leetcode.com/problems/n-ary-tree-preorder-traversal/

// https://leetcode.com/study-plan/leetcode-75/?progress=bvp2pst

// Given the root of an n-ary tree, return the preorder traversal of its nodes' values.
// Nary-Tree input serialization is represented in their level order traversal. Each group of children is separated by the null value (See examples)

/* Input: root = [1,null,3,2,4,null,5,6]
Output: [1,3,5,6,2,4] */

// https://www.geeksforgeeks.org/tree-traversals-inorder-preorder-and-postorder/

function Node(val, children) {
  this.val = val;
  this.children = children;
}

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function (root) {
  const ans = new Array();
  printPreorder(root, ans);
  return ans;
};

function printPreorder(node, ans) {
  if (node == null) return;

  ans.push(node.val);
  console.log(node.val);

  printPreorder(node.children);

  //   printPreorder(node.right);
}

root = [1, null, 3, 2, 4, null, 5, 6];

console.log(preorder(root));
