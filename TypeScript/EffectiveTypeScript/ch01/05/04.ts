interface Person {
  first: string;
  last: string;
}

const formatName = (p: Person) => `${p.first} ${p.last}`;
const formatNameAny = (p: any) => `${p.first} ${p.last}`;

export default {};

/**
 * 요약
 *
 * any타입은 언어 서비스를 사용할 수 없다.
 */
