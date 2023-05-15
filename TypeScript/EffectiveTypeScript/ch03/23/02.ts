interface Point {
  x: number;
  y: number;
}
const pt: Point = {};
// ~~ Type '{}' is missing the following properties from type 'Point': x, y
pt.x = 3;
pt.y = 4;

export default {};

/**
 * 요약
 *
 * 할당한 순간 타입을 추론하기 때문에 오류가 발생한다.
 */
