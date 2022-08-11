function ListNode(val, next) {
  this.val = val;
  this.next = next;
}

var detectCycle = function (head) {
  let slow = head,
    fast = head;

  while (fast && fast.next) {
    console.log(`slow: ${slow.val} fast: ${fast.val}`);

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
ListNode1 = new ListNode(3, null);
ListNode4.next = ListNode2;

// ListNode2 = new ListNode(2, null);
// ListNode1 = new ListNode(1, ListNode2);
// ListNode2.next = ListNode1;

console.log(detectCycle(ListNode1));
