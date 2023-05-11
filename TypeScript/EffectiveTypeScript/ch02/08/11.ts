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
    shape; // OK, type is Cylinder
    shape.radius; // OK, type is number
  }
}
const v = typeof Cylinder; // Value is "function"
type T = typeof Cylinder; // Type is typeof Cylinder
const first: Person["first"] = p["first"]; // Or p.first
//    -----                   ---------- Values
//           ------ ------- Types

const last: Person.last = p["first"]; // Or p.first

export default {};

/**
 * 요약
 *
 * 타입의 속성을 얻을 때는 대괄호 표기법으로 작성해야 한다.
 * 인덱스 위치에는 어떠한 타입이든 사용 가능하다.
 */
