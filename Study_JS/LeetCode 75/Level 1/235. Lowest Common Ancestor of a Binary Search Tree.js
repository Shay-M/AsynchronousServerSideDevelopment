/* Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.
According to the definition of LCA on Wikipedia:
“The lowest common ancestor is defined between two nodes p and q as the lowest node in
T that has both p and q as descendants (where we allow a node to be a descendant of itself).”
*/

/*
Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
Output: 6
Explanation: The LCA of nodes 2 and 8 is 6. */

// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  let node = root;

  while (node !== null) {
    if (p.val > node.val && q.val > node.val) node = node.right;
    else if (p.val < node.val && q.val < node.val) node = node.left;
    else return node;
  }
};

ListNode9 = new TreeNode(9, null, null);
ListNode7 = new TreeNode(7, null, null);
ListNode8 = new TreeNode(6, ListNode7, ListNode9);

ListNode5 = new TreeNode(5, null, null);
ListNode3 = new TreeNode(3, null, null);

ListNode4 = new TreeNode(4, ListNode3, ListNode5);
ListNode0 = new TreeNode(0, null, null);

ListNode2 = new TreeNode(2, ListNode0, ListNode4);

ListNode6 = new TreeNode(6, ListNode2, ListNode8);

console.log(lowestCommonAncestor(ListNode6, 2, 8).val); // Output: 6
