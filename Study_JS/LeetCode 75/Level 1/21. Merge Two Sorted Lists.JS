/* You are given the heads of two sorted linked lists list1 and list2.
Merge the two lists in a one sorted list. The list should be made by
 splicing together the nodes of the first two lists.
Return the head of the merged linked list. */

// https://leetcode.com/problems/merge-two-sorted-lists/

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
  ListNode.prototype.toString = function listNodeToString() {
    return `${this.val} ${this.next}`;
  };
}

var mergeTwoLists = function (list1, list2) {
  let tempList1 = new ListNode();
  let pointList = tempList1;

  while (list1 != null || list2 != null) {
    if (list1 != null && list2 != null) {
      if (list1.val <= list2.val) {
        tempList1.next = list1;
        tempList1 = tempList1.next;

        list1 = list1.next;
      } else {
        //index1.val > index2.val
        tempList1.next = list2;
        tempList1 = tempList1.next;

        list2 = list2.next;
      }
    } else if (list1 == null) {
      tempList1.next = list2;
      break;
    } else {
      tempList1.next = list1;
      break;
    }
  }
  return pointList.next;
};

////////////////////////////////////////////////////////////////

var mergeTwoLists2 = function (l1, l2) {
  if (l1 == null) return l2;
  if (l2 == null) return l1;

  if (l1.val < l2.val) {
    l1.next = mergeTwoLists2(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLists2(l1, l2.next);
    return l2;
  }
};

ListNode3 = new ListNode(4, null);
ListNode2 = new ListNode(2, ListNode3);
ListNode1 = new ListNode(1, ListNode2);

ListNode33 = new ListNode(4, null);
ListNode22 = new ListNode(3, ListNode33);
ListNode11 = new ListNode(1, ListNode22);

console.log(mergeTwoLists2(ListNode1, ListNode11).toString());
