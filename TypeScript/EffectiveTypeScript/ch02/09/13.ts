interface Person {
  name: string;
}
const el = document.body as unknown as Person; // OK

export default {};

/**
 * 요약
 *
 * 모든 타입은 unknown의 서브 타입이기 때문에 unknown을 포함한 단언문은 항상 동작한다.
 */
