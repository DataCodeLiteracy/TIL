interface Person {
  firstName: string;
  last: string;
}
const formatName = (p: Person) => `${p.firstName} ${p.last}`;
const formatNameAny = (p: any) => `${p.first} ${p.last}`;

export default {};

/**
 * 요약
 *
 * any타입은 이름바꾸기를 자동으로 할 수 없다.
 */
