const list: number[] = [1, 2, 3]; // Type is number[]
// 더 적어질 수 있어서 에러

const tuple: [number, number, number] = list;
// ~~~~~ Type 'number[]' is missing the following
//       properties from type '[number, number]': 0, 1

const list2: [number, number, number] = [1, 2, 3];
// 3개를 할당해야 하는데 두개만 할당했다. tuple2: [number, number, number]로 할당하면 오류 해결..

const tuple2: [number, number] = list2;
// ~~~~~ Type 'number[]' is missing the following
//       properties from type '[number, number]': 0, 1

export default {};

/**
 * 요약
 *
 * 자동으로 추론된 튜플은 적게 있을 수도 있다. 즉, possibly다.
 */
