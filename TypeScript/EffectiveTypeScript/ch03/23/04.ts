interface Point {
  x: number;
  y: number;
}
const pt = {} as Point;
pt.x = 3;
pt.y = 4; // OK

export default {};

/**
 * 요약
 *
 * 단언문을 통해서도 해결할 수 있다.
 */
