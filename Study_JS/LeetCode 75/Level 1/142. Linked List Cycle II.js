/* Given the head of a linked list, return the node where the cycle begins. If there is no cycle, return null.
There is a cycle in a linked list if there is some node in the list that can be reached again by 
continuously following the next pointer. Internally, pos is used to denote the index of the node that
 tail's next pointer is connected to (0-indexed). It is -1 if there is no cycle. Note that pos is not passed as a parameter.
 */

function ListNode(val, next) {
  this.val = val;
  this.next = next;
}

var detectCycle = function (head) {
  let slow = head,
    fast = head;

  while (fast && fast.next) {
    // console.log(`slow: ${slow.val} fast: ${fast.val}`);

    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) break;
  }

  if (!fast || !fast.next) return null;

  fast = head;

  while (slow !== fast) {
    slow = slow.next;
    fast = fast.next;
  }

  return slow;
};

ListNode4 = new ListNode(-4);
ListNode3 = new ListNode(0, ListNode4);
ListNode2 = new ListNode(2, ListNode3);
ListNode1 = new ListNode(3, ListNode2);
ListNode4.next = ListNode2;

// ListNode2 = new ListNode(2, null);
// ListNode1 = new ListNode(1, ListNode2);
// ListNode2.next = ListNode1;

console.log(detectCycle(ListNode1));
