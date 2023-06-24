{
  /*
    Type Inference
  */

  let text = "hello";
  // text = 1;  // 자동으로 추론한다.
  function print(message: "hello") {
    // 강의와 버전차이 때문일까? 5.0.3 버전에서는 경고가 아니라 오류 발생..
    console.log(message);
  }
  print("hello");
  // print('world');
  // print(1);\

  function add(x: number, y: number) {
    return x + y; // return 값 추론..
  }

  const result = add(1, 2); // 자동으로 추론..

  // 그럼 타입 추론이 좋은 걸까? - 엘리는 아니라고 생각한다 함..

  function add2(x: number, y: number): number {
    return x + y;
  }
}
