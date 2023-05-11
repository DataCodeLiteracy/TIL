type T = Exclude<string | Date, string | number>; // Type is Date
type NonZeroNums = Exclude<number, 0>; // Type is still just number

const a: NonZeroNums = 0;

export default {};

/**
 * 요약
 *
 * Exclude<T, U>는 T에서 T와 U의 교집합을 제거한다.
 */
