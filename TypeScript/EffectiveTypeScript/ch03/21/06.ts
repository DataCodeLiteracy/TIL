interface Vector3 {
  x: number;
  y: number;
  z: number;
}
function getComponent(vector: Vector3, axis: "x" | "y" | "z") {
  return vector[axis];
}
const v = {
  x: 1
};
v.x = 3; // OK
v.x = "3";
// ~ Type '"3"' is not assignable to type 'number'
v.y = 4;
// ~ Property 'y' does not exist on type '{ x: number; }'
v.name = "Pythagoras";
// ~~~~ Property 'name' does not exist on type '{ x: number; }'

export default {};

/**
 * 요약
 *
 * v 객체는 const로 선언했기 때문에 x속성만 있는 것으로 추론한다.
 */
