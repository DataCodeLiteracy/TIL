interface Person {
  first: string;
  last: string;
}
const p: Person = { first: "Jane", last: "Jacobs" };
//    -             -----          ---- Values
//       ------ Type
function email(p: Person, subject: string, body: string): Response {
  //     ----- -          -------          ----  Values
  //              ------           ------        ------   -------- Types
  // COMPRESS
  return new Response();
  // END
}

export default {};

/**
 * 요약
 *
 * = 뒤에 나오는 건 값,
 * : 뒤에 나오는 건 타입
 */
