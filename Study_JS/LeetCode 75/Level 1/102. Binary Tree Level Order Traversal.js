/* Given the root of a binary tree, return the level order traversal of its nodes'
values. (i.e., from left to right, level by level).
Input: root = [3,9,20,null,null,15,7]
Output: [[3],[9,20],[15,7]] */

// https://leetcode.com/problems/binary-tree-level-order-traversal/

//   Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  const ans = new Array();

  //   ans.push([root.val]);

  //   ans.push(printOrder(root));

  ans.push(printOrder(root));

  /* while (root.left || root.right) {
    ans.push(printOrder(root));
    // ans.push(printOrder(root.left));
    // ans.push(printOrder(root.right));
  } */

  return ans;
};
function printOrder(node) {
  const ans2 = new Array();

  if (node.left !== null) ans2.push(node.left.val);
  if (node.right !== null) ans2.push(node.right.val);
  return ans2;
}

ListNode7 = new TreeNode(7, null, null);
ListNode15 = new TreeNode(15, null, null);
ListNode20 = new TreeNode(20, ListNode15, ListNode7);
ListNode9 = new TreeNode(9, null, null);
ListNode3 = new TreeNode(3, ListNode9, ListNode20);

console.log(levelOrder(ListNode3));
