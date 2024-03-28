/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  const mergeTwoLists = (l1, l2) => {
    let dummy = new ListNode();
    let cur = dummy;
    while (l1 && l2) {
      if (l1.val < l2.val) {
        cur.next = l1;
        l1 = l1.next;
      } else {
        cur.next = l2;
        l2 = l2.next;
      }
      cur = cur.next;
    }
    cur.next = l1 ? l1 : l2;
    return dummy.next;
  };
  const mergeLists = (left, right) => {
    if (left === right) return lists[left];
    if (left > right) return null;
    const mid = (left + right) >> 1;
    return mergeTwoLists(mergeLists(left, mid), mergeLists(mid + 1, right));
  };
  // 左闭右闭
  return mergeLists(lists, 0, lists.length - 1);
};
