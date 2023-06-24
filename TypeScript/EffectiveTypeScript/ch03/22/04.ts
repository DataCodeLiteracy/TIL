interface A {
  a: number;
}
interface B {
  b: number;
}
function pickAB(ab: A | B) {
  if ("a" in ab) {
    ab; // Type is A
  } else {
    ab; // Type is B
  }
  ab; // Type is A | B
}

export default {};

/**
 * 요약
 *
 * 속성 체크로 타입 좁히기
 */
