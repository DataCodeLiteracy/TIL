interface Vector2D {
  x: number;
  y: number;
}
function calculateLength(v: Vector2D) {
  return Math.sqrt(v.x * v.x + v.y * v.y);
}
interface NamedVector {
  name: string;
  x: number;
  y: number;
}
const v: NamedVector = { x: 3, y: 4, name: "Zee" };
calculateLength(v); // OK, result is 5

export default {};

/**
 * 요약
 *
 * NamedVector와 Vector2D의 관계 설정과 calculateLength를 정의하지 않았음에도 문제가 없다.
 * 이는 구조적 타이핑과 관련이 있다. 좋든 싫든 타입은 열려있다.
 */
