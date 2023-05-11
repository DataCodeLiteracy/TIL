interface Person {
  first: string;
  last: string;
}
const p: Person = { first: "Jane", last: "Jacobs" };
//    -           --------------------------------- Values
//       ------ Type
function email(p: Person, subject: string, body: string): Response {
  //     ----- -          -------          ----  Values
  //              ------           ------        ------   -------- Types
  // COMPRESS
  return new Response();
  // END
}

class Cylinder {
  radius = 1;
  height = 1;
}

function calculateVolume(shape: unknown) {
  if (shape instanceof Cylinder) {
    // instance인게 참이면 타입도 참이다.
    shape; // OK, type is Cylinder
    shape.radius; // OK, type is number
  }
}
type T1 = typeof p; // Type is Person
type T2 = typeof email;
// Type is (p: Person, subject: string, body: string) => Response

const v1 = typeof p; // Value is "object"
const v2 = typeof email; // Value is "function"
// 아직 추론을 못하니까 이 중에 하나 일거야.. 타입스크립트의 입장..
// const v1: "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function"

export default {};
