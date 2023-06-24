function arraySum(arr: number[]) {
  const a = [...arr];
  let sum = 0,
    num;
  while ((num = a.pop()) !== undefined) {
    sum += num;
  }
  return sum;
}
function printTriangles(n: number) {
  const nums = [];
  for (let i = 0; i < n; i++) {
    nums.push(i);
    console.log(arraySum(nums));
  }
}

printTriangles(5);

/**
 * 1회차:
 * i = 0
 * nums = [0]
 * sum = 0
 * num2 = []
 *
 * 2회차:
 * i = 1
 * nums = [1]
 * sums = 1
 * nums = []
 */

export default {};
