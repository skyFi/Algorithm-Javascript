// todo:
// 排序算法： https://www.cnblogs.com/onepixel/p/7674659.html
// 1. 冒泡排序
// 2. 快速排序
// 3. 简单插入排序
// 4. 希尔排序
// 5. 简单选择排序
// 6. 堆排序
// 7. 二路归并排序
// 8. 多路归并排序
// 9. 计数排序
// 10. 桶排序
// 11. 基数排序

const a = [...Array(10000000)].map(_ => Math.floor(Math.random() * 10000)).filter(Boolean); // 3.69s

// 计数排序
function countSort(arr, maxNum) {
  let len = arr.length;
  const bucketCount = maxNum + 1;
  const bucket = Array(bucketCount);
  let sortedIndex = 0;
  for (let i = 0; i < len; i++) {
    const item = arr[i];
    if (!bucket[item]) {
      bucket[item] = 0;
    }
    bucket[item]++;
  }
  for (let i = 0; i < bucketCount; i++) {
    while (bucket[i] > 0) {
      arr[sortedIndex++] = i;
      bucket[i]--;
    }
  }
  return arr;
}

// 快排
function quickSort(arr) {}

// 归并排序
function mergeSort(arr) {}

const r = countSort(a, 10000); // 100 -> 3.702s   10000 -> 4.212   10000000 -> 5.622
// const r = a.sort(); // 100 -> 8.711s   10000 -> 13.569s 10000000 -> 15.982s
console.log(r);
