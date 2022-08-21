/* 
Given the root of a binary tree, determine if it is a valid binary search tree (BST).

A valid BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.
*/

/* Input: root = [2,1,3]
Output: true 

Input: root = [5,1,4,null,null,3,6]
Output: false
Explanation: The root node's value is 5 but its right child's value is 4.
*/

// https://leetcode.com/problems/validate-binary-search-tree/

//Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
  /*  function recurse(root) {
    if (root === null) return;

    if (root.left !== null && root.val <= root.left.val) return false;
    if (root.right !== null && root.val >= root.right.val) return false;

    recurse(root.left);
    recurse(root.right);
    return true;
  } */

  function recurseValid(node, leftBoundary, rightBoundary) {
    if (node === null) return true;

    if (!(node.val > leftBoundary && node.val < rightBoundary)) return false;

    return (
      recurseValid(node.left, leftBoundary, node.val) &&
      recurseValid(node.right, node.val, rightBoundary)
    );
  }

  return recurseValid(root, -Number.MAX_VALUE, Number.MAX_VALUE);
};

/* ListNode6 = new TreeNode(6, null, null);
ListNode3 = new TreeNode(3, null, null);
ListNode4 = new TreeNode(4, ListNode3, ListNode6);
ListNode1 = new TreeNode(1, null, null);
ListNode5 = new TreeNode(5, ListNode1, ListNode4);
console.log(isValidBST(ListNode5)); // false */

ListNode3 = new TreeNode(3, null, null);
ListNode1 = new TreeNode(1, null, null);
ListNode2 = new TreeNode(2, ListNode1, ListNode3);

console.log(isValidBST(ListNode2)); // true

/* 
ListNode_1 = new TreeNode(-1, null, null);
ListNode0 = new TreeNode(0, ListNode_1, null);
console.log(isValidBST(ListNode0)); // false */
