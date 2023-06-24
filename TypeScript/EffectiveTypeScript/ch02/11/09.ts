interface Options {
  darkMode?: boolean;
  [otherOptions: string]: unknown;
}
const o: Options = { darkmode: true }; // OK

export default {};

/**
 * 요약
 *
 * [otherOptions: string]: unknown 인덱스 시그니처 사용시에도..
 */
