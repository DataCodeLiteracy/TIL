function add(a: number, b: number) {
  return a + b;
}
// ~~~ Duplicate function implementation
function add(a: string, b: string) {
  return a + b;
}
// ~~~ Duplicate function implementation

export default {};

/**
 * 요약
 *
 * 타입스크립트에서는 함수 오버로딩을 지원하지만, 실제로 함수 오버로딩이 이루어지는 것은 아닙니다.
 * 타입스크립트는 오버로드된 시그니처를 기반으로 함수를 호출할 때 인자의 타입을 체크하여 어떤 오버로드된 시그니처가 호출되어야 하는지를 결정합니다.
 * 그러나 이는 타입 체킹 단계에서만 이루어지는 것이며, 런타임에서는 단일 함수만 존재합니다.
 * 따라서 타입과 런타임 동작이 독립적이기 때문에, 타입스크립트에서 함수 오버로딩을 사용하더라도 실제로 여러 함수를 정의하는 것과 같은 효과를 내지는 못합니다.
 * 함수의 구현은 단 하나이며, 함수가 호출될 때 인자의 타입을 기반으로 알맞은 시그니처를 선택하는 것이 타입스크립트의 역할입니다.
 */
