/**
给定一个整数 n ，你需要找到与它最近的回文数（不包括自身）。

“最近的”定义为两个整数差的绝对值最小。

示例 1:

输入: "123"
输出: "121"
注意:

n 是由字符串表示的正整数，其长度不超过18。
如果有多个结果，返回最小的那个。
 */

{
  /**
   * @param {string} n
   * @return {string}
   */
  var nearestPalindromic = function(n) {
    const length = n.length;
    if (length === 1 || String(Number(n) - 1).length === 1) {
      return String(Number(n) - 1);
    }
    const isOdd = length % 2 === 1;
    const m = isOdd ? (length + 1) / 2 : length / 2;
    const NString = n.slice(0, m);
    const NNumber = Number(NString);
    const list = [NNumber - 1, NNumber, NNumber + 1].map(a => {
      if (a === 0) {
        return '9';
      }
      const aString = String(a);
      const aLen = String(a).length;
      const NLen = NString.length;
      if (aLen < NLen) {
        return isOdd ? aString + reverse(aString) : aString + '9' + reverse(aString);
      }

      if (aLen > NLen) {
        return isOdd
          ? aString + reverse(aString.slice(0, m - 1))
          : aString + reverse(aString.slice(0, m));
      }
      return aString + reverse(isOdd ? aString.slice(0, m - 1) : aString);
    });
    let min = Number.MAX_VALUE;
    let mDiff = Number.MAX_VALUE;
    list.forEach(l => {
      if (l === n) {
        return;
      }
      const lNumber = Number(l);
      const diff = Math.abs(lNumber - Number(n));
      if (diff < mDiff) {
        min = l;
        mDiff = diff;
      }
    });

    function reverse(str = '') {
      return str
        .split('')
        .reverse()
        .join('');
    }

    return min;
  };

  const r = nearestPalindromic('807045053224792883');
  console.log(r);
}
