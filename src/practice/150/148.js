/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
  // 递归的终止条件
  if (head == null || head.next == null) return head;
  // 快慢指针找到中间节点
  let slow = head,
    fast = head;
  while (fast.next != null && fast.next.next != null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  let right = slow.next;
  // 断开链表
  slow.next = null;
  let left = head;
  // 递归排序左右链表
  left = sortList(left);
  right = sortList(right);
  const merge = (left, right) => {
    let dummy = new ListNode(0);
    let cur = dummy;
    while (left != null && right != null) {
      if (left.val < right.val) {
        cur.next = left;
        left = left.next;
      } else {
        cur.next = right;
        right = right.next;
      }
      cur = cur.next;
    }
    cur.next = left || right;
    return dummy.next;
  };
  return merge(left, right);
};
