function arraySum(arr: number[]) {
  let sum = 0,
    num;
  while ((num = arr.pop()) !== undefined) {
    sum += num;
  }
  return sum;
}

console.log(arraySum([1, 2, 3, 4, 5]));

export default {};
