/**
 * 给出两个 非空 的链表用来表示两个非负的整数。
 * 其中，它们各自的位数是按照 逆序 的方式存储的，
 * 并且它们的每个节点只能存储 一位 数字。
 * 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。
 * 您可以假设除了数字 0 之外，这两个数都不会以 0 开头。
 * 示例：
 *    输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
 *    输出：7 -> 0 -> 8
 *    原因：342 + 465 = 807
 */
{
  function ListNode(val) {
    this.val = val;
    this.next = null;
  }
  const l1 = new ListNode(2);
  l1.next = new ListNode(4);
  l1.next.next = new ListNode(3);
  const l2 = new ListNode(5);
  l2.next = new ListNode(6);
  l2.next.next = new ListNode(4);
  /**
   * Definition for singly-linked list.
   * function ListNode(val) {
   *     this.val = val;
   *     this.next = null;
   * }
   */
  /**
   * @param {ListNode} l1
   * @param {ListNode} l2
   * @return {ListNode}
   */
  var addTwoNumbers = function(l1, l2) {
    const r = new ListNode(0);
    let rp = r;
    let p = l1;
    let q = l2;
    while (p || q) {
      const v1 = (p && p.val) || 0;
      const v2 = (q && q.val) || 0;
      const sum = v1 + v2;
      rp.next = new ListNode(0);
      rp.val += sum;
      if (rp.val >= 10) {
        rp.val = rp.val - 10;
        rp.next.val += 1;
      }
      q = q && q.next;
      p = p && p.next;
      if (!p && !q && rp.next.val === 0) {
        rp.next = null;
      } else {
        rp = rp.next;
      }
    }
    return r;
  };

  const r = addTwoNumbers(l1, l2);
  console.log(r);
}
