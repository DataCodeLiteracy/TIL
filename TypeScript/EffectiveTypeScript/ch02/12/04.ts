type BinaryFn = (a: number, b: number) => number;
const add: BinaryFn = (a, b) => a + b;
const sub: BinaryFn = (a, b) => a - b;
const mul: BinaryFn = (a, b) => a * b;
const div: BinaryFn = (a, b) => a / b;

export default {};

/**
 * 요약
 *
 * 한 비슷한 함수들의 파라미터에 적용할 타입을 공통적으로 정의해서 사용할 수 있다.
 */
