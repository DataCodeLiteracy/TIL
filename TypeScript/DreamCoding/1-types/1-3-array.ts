{
  // Array
  const numbers: number[] = [1, 3, 4];
  const nums: Array<number> = [1, 5, 7];

  function printArray(numbers: readonly number[]) {
    // numbers.push 
  }

  // Tuple - 배열이긴 배열인데 서로 다른 타입을 가질 수 있는 배열
  // Tuple -> interface, type alias, class
  let student: [string, number];
  student = ['Lee', 37];
  student[0] // Lee
  student[1] // 37

  // 권장하지 않음, 인덱스로 접근하는 건 가독성이 떨어짐

  // 디스트럭처링으로 나름 해결
  const [name, age] = student;
}