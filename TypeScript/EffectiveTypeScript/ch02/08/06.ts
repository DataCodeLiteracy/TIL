interface Person {
  first: string;
  last: string;
}
const p: Person = { first: "Jane", last: "Jacobs" };
//    -             ----------------------------- Values
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

export default {};

/**
 * 요약
 *
 * class로 정의하면 타입으로도 사용이 가능하고 값으로도 사용 가능하다.
 */
