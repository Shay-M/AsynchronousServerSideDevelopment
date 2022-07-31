/* You are given the heads of two sorted linked lists list1 and list2.
Merge the two lists in a one sorted list. The list should be made by
 splicing together the nodes of the first two lists.
Return the head of the merged linked list. */

// https://leetcode.com/problems/merge-two-sorted-lists/

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var mergeTwoLists = function (list1, list2) {
  let index1 = list1,
    index2 = list2,
    tempList1;

  while (index1 != null && index2 != null) {
    if (index1.val >= index2.val) {
      tempList1 = list1;
      list1.next = list2;
      list2.next = tempList1;
    }

    index1 = index1.next;
    index2 = index2.next;
  }
};

ListNode3 = new ListNode(4, null);
ListNode2 = new ListNode(2, ListNode3);
ListNode1 = new ListNode(1, ListNode2);

ListNode33 = new ListNode(4, null);
ListNode22 = new ListNode(3, ListNode33);
ListNode11 = new ListNode(1, ListNode22);

console.log(mergeTwoLists(ListNode1, ListNode11));
