// https://leetcode.com/problems/n-ary-tree-preorder-traversal/

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
  if (node === null) return;

  ans.push(node.val);

  if (node.children !== null)
    node.children.forEach((element) => printPreorder(element, ans));
}

ListNode6 = new Node(6, null);
ListNode5 = new Node(5, null);
ListNode4 = new Node(4, null);
ListNode3 = new Node(3, [ListNode5, ListNode6]);
ListNode2 = new Node(2, null);
ListNode1 = new Node(1, [ListNode3, ListNode2, ListNode4]);

console.log(preorder(ListNode1));
