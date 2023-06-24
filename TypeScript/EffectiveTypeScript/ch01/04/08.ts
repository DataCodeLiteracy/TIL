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
interface Vector3D {
  x: number;
  y: number;
  z: number;
}
function calculateLengthL1(v: Vector3D) {
  let length = 0;
  for (const axis of Object.keys(v)) {
    const coord = v[axis];
    // ~~~~~~~ Element implicitly has an 'any' type because ...
    //         'string' can't be used to index type 'Vector3D'
    length += Math.abs(coord);
  }
  return length;
}
const vec3D = { x: 3, y: 4, z: 1, address: "123 Broadway" };
calculateLengthL1(vec3D); // OK, returns NaN

export default {};

/**
 * 요약
 *
 * axis의 인덱스 값에 어떤 형식이 올지 모르니 타입스크립트의 타입 체커가 오류를 발생시키는 것이 정확하다.
 */
