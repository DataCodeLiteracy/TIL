interface Tuple {
  0: number;
  1: number;
  length: 2;
}
const t: Tuple = [10, 20]; // OK

interface Tuple2 extends Array<string> {
  0: number;
  1: number;
  length: 2;
}
const t2: Tuple2 = [10, 20]; // OK
t2.concat(t2);

export default {};
