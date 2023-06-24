const jackson5 = ["Jackie", "Tito", "Jermaine", "Marlon", "Michael"];
const members = ["Janet", "Michael"]
  .map((who) => jackson5.find((n) => n === who))
  .filter((who) => who !== undefined); // Type is (string | undefined)[]

export default {};

/**
 * 요약
 *
 * filter함수를 이용해서 undefined를 걸러내도 잘 동작하지 않는다.
 * 이때 타입 가드를 사용하라.
 */
