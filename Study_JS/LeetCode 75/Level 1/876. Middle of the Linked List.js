function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
  ListNode.prototype.toString = function listNodeToString() {
    if (this === null) return 'null';
    return `${this.val} -> ${this.next}`;
  };
}

var middleNode = function (head) {
  //   let count = 0;
  //   let pointer = head;

  //   while (pointer != null) {
  //     pointer = pointer.next;
  //     count++;
  //   }
  //   count /= 2;

  //   while (count > 0.5) {
  //     head = head.next;
  //     count--;
  //   }

  //   return head;

  let slow = head;
  let fast = head;
  while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
    // console.log(fast.val);
  }
  return slow;
};

ListNode10 = new ListNode(10, null);
ListNode9 = new ListNode(9, ListNode10);
ListNode8 = new ListNode(8, ListNode9);
ListNode7 = new ListNode(7, ListNode8);
ListNode6 = new ListNode(6, ListNode7);
ListNode5 = new ListNode(5, ListNode6);
ListNode4 = new ListNode(4, ListNode5);
ListNode3 = new ListNode(3, ListNode4);
ListNode2 = new ListNode(2, ListNode3);
ListNode1 = new ListNode(1, ListNode2);

console.log(ListNode1.toString());

console.log(middleNode(ListNode1).toString());
