var a = [2, 0, 1, 2, 2, 2, 2];
// var a = [2, 0, 1];
// var a = [1, 0, 1, 0];
// var a = [2, 0, 2, 1, 1, 0];
// var a = [0, 1, 0];
// var a = [2, 1, 2];
// var a = [1, 2];

function sort(nums) {
  var p = 0; // 排序移动指针
  var end = nums.length - 1; // 高值
  var start = 0; // 低值
  while (p <= end) {
    if (nums[p] === 2) {
      swap(nums, p, end);
      end--;
    } else if (nums[p] === 0) {
      swap(nums, start, p);
      start++;
      p++;
    } else {
      p++;
    }
  }

  function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

sort(a);
console.log(a);
