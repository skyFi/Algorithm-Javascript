/**
 * 给定一个整数数组 nums 和一个目标值 target，
 * 请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
 * 你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。
 *
 * 示例:
 * 给定 nums = [2, 7, 11, 15], target = 9
 * 因为 nums[0] + nums[1] = 2 + 7 = 9
 * 所以返回 [0, 1]
 */

{
  const nums = [2, 7, 11, 15];
  const target = 9;

  // 有点暴力
  function sum(ns, t) {
    let p = 0;
    const len = ns.length;
    while (p < len) {
      let q = p + 1; // 避免重复使用
      while (q < len) {
        // 确定一定有且只有一个答案，则确定有输出
        if (ns[p] + ns[q] === t) {
          return [p, q];
        }
        q++;
      }
      p++;
    }
  }

  const r = sum(nums, target);
  console.log(r);
}
