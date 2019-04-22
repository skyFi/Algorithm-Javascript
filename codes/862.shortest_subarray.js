/**
 * 返回 A 的最短的非空连续子数组的长度，该子数组的和至少为 K 。
 * 如果没有和至少为 K 的非空子数组，返回 -1 。
 *
 * 示例 1：
 *    输入：A = [1], K = 1
 *    输出：1
 * 示例 2：
 *    输入：A = [1,2], K = 4
 *    输出：-1
 * 示例 3：
 *    输入：A = [2,-1,2], K = 3
 *    输出：3
 *
 * 提示：
 *    1 <= A.length <= 50000
 *    -10 ^ 5 <= A[i] <= 10 ^ 5
 *    1 <= K <= 10 ^ 9
 */
{
  /**
   * @param {number[]} A
   * @param {number} K
   * @return {number}
   */
  var shortestSubarray = function(A, K) {
    const len = A.length;
    let sum = 0;
    let begin = 0; // 满足条件的开始指针
    let result = -1;
    for (let i = 0; i < len; i++) {
      if (A[i] >= K) return 1;
      sum += A[i];
      // 标记零点
      if (sum < 1) {
        sum = 0;
        begin = i + 1;
        continue;
      }
      // 负数前移，非负化，用于后移开始指针
      for (let j = i - 1; A[j + 1] < 0; j--) {
        A[j] = A[j + 1] + A[j];
        A[j + 1] = 0;
      }
      if (sum >= K) {
        // 查找当前分段最短
        while (sum - A[begin] >= K || A[begin] <= 0) {
          sum -= A[begin++];
        }
        const length = i - begin + 1;
        // 记录所有零点分段的最短
        if (result < 0 || result > length) {
          result = length;
        }
      }
    }
    return result;
  };

  // const a = [77, 19, 35, 10, -14];
  // const k = 19; // 1

  // const a = [48, 99, 37, 4, -31];
  // const k = 140; // 2

  // const a = [17, 85, 93, -45, -21];
  // const k = 150; // 2

  // const a = [1];
  // const k = 1; // 1

  // const a = [75, -32, 50, 32, 97];
  // const k = 129; // 2

  // const a = [84, -37, 32, 40, 95];
  // const k = 167; // 3

  const a = [-1, -2, -3, 6, 1, -2, -3, -2, 1, 4, 3];
  const k = 7;

  console.time('a');
  var r = shortestSubarray(a, k);
  console.timeEnd('a');
  console.log();
  console.log(r);
}
