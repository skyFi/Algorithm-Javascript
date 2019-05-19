// 给定一组多个（n）物品，每种物品都有自己的重量（w_i）和价值（v_i），
// 在限定的总重量/总容量（C）内，选择其中若干个（也即每种物品可以选0个或1个），
// 设计选择方案使得物品的总价值最高。
//
// “填二维表”的动态规划方法:
function knapsack(input, c) {
  const n = input.length;
  const m = [];
  for (let w = 0; w <= c; w++) {
    m[0] = m[0] || [];
    m[0][w] = 0;
  }
  for (let i = 1; i <= n; i++) {
    m[i] = m[i] || [];
    m[i][0] = 0;
  }
  for (let i = 1; i <= n; i++) {
    for (let w = 1; w <= c; w++) {
      const wi = input[i - 1].w;
      const vi = input[i - 1].v;
      if (wi > w) {
        m[i][w] = m[i - 1][w];
      } else {
        m[i][w] = Math.max(m[i - 1][w], vi + m[i - 1][w - wi]);
      }
    }
  }
  console.log(m)
  return m[n][c];
}

// w: 重量, v: 价值.
const i = [
  { v: 1, w: 1 },
  { v: 6, w: 2 },
  { v: 18, w: 5 },
  { v: 22, w: 6 },
  { v: 28, w: 7 }
];
const result = knapsack(i, 11);
console.log(result);