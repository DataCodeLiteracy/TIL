// tsConfig: {"noImplicitAny":false}

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: boolean, b: boolean): number;

function add(a: any, b: any) {
  return a + b;
}

const three = add(1, 2); // Type is number
const twelve = add("1", "2"); // Type is string
const third = add(true, false); // Type is number

export default {};

/**
 * 요약
 *
 *
 */
