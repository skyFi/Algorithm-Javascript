/**
 * 给定两个大小为 m 和 n 的有序数组 nums1 和 nums2。
 * 请你找出这两个有序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。
 * 你可以假设 nums1 和 nums2 不会同时为空。
 *
 * 示例 1:
 *    nums1 = [1, 3]
 *    nums2 = [2]
 * 则中位数是 2.0
 *
 * 示例 2:
 *    nums1 = [1, 2]
 *    nums2 = [3, 4]
 * 则中位数是 (2 + 3)/2 = 2.5
 */

{
  /**
   * 暴力解法
   * @param {number[]} nums1
   * @param {number[]} nums2
   * @return {number}
   */
  var findMedianSortedArrays = function(nums1, nums2) {
    const tl = nums1.length + nums2.length;
    const mil = tl % 2 === 0 ? [tl / 2 - 1, tl / 2] : [Math.floor(tl / 2)];
    const sorted = [...nums1, ...nums2].sort((a, b) => a - b);
    return mil.map(mi => sorted[mi]).reduce((a, b) => a + b, 0) / mil.length;
  };

  /**
   * 占用了额外的空间，emmmm....
   * @param {number[]} nums1
   * @param {number[]} nums2
   * @return {number}
   */
  var findMedianSortedArrays2 = function(nums1, nums2) {
    const tl = nums1.length + nums2.length;
    const mil = tl % 2 === 0 ? [tl / 2 - 1, tl / 2] : [Math.floor(tl / 2)];
    let p = 0;
    let q = 0;
    const numsT = [];
    for (let i = 0; i < tl; i++) {
      if (nums1[p] === undefined) {
        numsT.push(nums2[q]);
        q++;
      } else if (nums2[q] === undefined) {
        numsT.push(nums1[p]);
        p++;
      } else if (nums1[p] <= nums2[q]) {
        numsT.push(nums1[p]);
        p++;
      } else {
        numsT.push(nums2[q]);
        q++;
      }
      if (numsT.length - 1 === mil[0] && mil.length === 1) {
        return numsT[mil[0]];
      }
      if (numsT.length - 1 === mil[1] && mil.length === 2) {
        return (numsT[mil[0]] + numsT[mil[1]]) / 2;
      }
    }
  };

  var n1 = [];
  var n2 = [1];
  const r = findMedianSortedArrays2(n1, n2);
  console.log(r);
}
