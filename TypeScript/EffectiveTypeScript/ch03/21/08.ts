interface Vector3 {
  x: number;
  y: number;
  z: number;
}
function getComponent(vector: Vector3, axis: "x" | "y" | "z") {
  return vector[axis];
}
const v1 = {
  x: 1,
  y: 2
}; // Type is { x: number; y: number; }

const v2 = {
  x: 1 as const,
  y: 2
}; // Type is { x: 1; y: number; }

const v3 = {
  x: 1,
  y: 2
} as const; // Type is { readonly x: 1; readonly y: 2; }

export default {};

/**
 * 요약
 *
 * 타입을 좁히기 위해서 as const를 적절하게 사용하라.
 */
