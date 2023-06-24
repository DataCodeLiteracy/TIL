interface Name {
  first: string;
  last: string;
}
type DancingDuo<T extends Name> = [T, T];

const couple1: DancingDuo<Name> = [
  { first: "Fred", last: "Astaire" },
  { first: "Ginger", last: "Rogers" }
]; // OK
const couple2: DancingDuo<{ first: string }> = [
  // ~~~~~~~~~~~~~~~
  // Property 'last' is missing in type
  // '{ first: string; }' but required in type 'Name'
  { first: "Sonny" },
  { first: "Cher" }
];

export default {};

/**
 * 요약
 *
 * 제네릭의 매개변수를 제한하기 위해 extends 키워드를 이용한다.
 */
