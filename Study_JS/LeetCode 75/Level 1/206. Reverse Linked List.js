// Given the head of a singly linked list, reverse the list, and return the reversed list.

// https://leetcode.com/problems/reverse-linked-list/

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
  ListNode.prototype.toString = function listNodeToString() {
    if (this === null) return 'null';
    return `${this.val} -> ${this.next}`;
  };
}

var reverseList = function (head) {
  if (head === null) return 'null';

  let prev = null,
    curr = head,
    next = curr.next;

  while (curr != null) {
    curr.next = prev;
    prev = curr;
    curr = next;
    if (curr != null) next = curr.next;
  }

  return prev;
};

ListNode5 = new ListNode(5, null);
ListNode4 = new ListNode(4, ListNode5);
ListNode3 = new ListNode(3, ListNode4);
ListNode2 = new ListNode(2, ListNode3);
ListNode1 = new ListNode(1, ListNode2);

console.log(ListNode1.toString());

console.log(reverseList(ListNode1).toString());

var reverseListRecursive = function (head) {
  if (head === null) return null;
  if (head.next === null) return head;

  let prev = reverseListRecursive(head.next);
  head.next.next = head;
  head.next = null;

  return prev;
};

console.log(reverseListRecursive(ListNode5).toString());
