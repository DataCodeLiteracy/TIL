const xs = [1, 2, 3];
const keys = Object.keys(xs); // Type is string[]
for (const key in xs) {
  key; // Type is string
  const x = xs[key]; // Type is number
}

export default {};

/**
 * 요약
 *
 * 타입스크립트에서 어쩔 수 없이 허용해주는 부분?
 */
