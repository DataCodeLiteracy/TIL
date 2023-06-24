const elements = [true, null, undefined, 42];

// elements.push("even", ["more"]);
// elements 배열의 값: [true, null, undefined, 42, "even", ["more"]];

const warriors = ["Artemisia", "Boudica"];

// OK: "Zendobia"의 타입은 string
warriors.push("Zendobia");

// warriors.push(true);
// Error: Argument of type 'boolean' is not assignable to parameter of type 'string'.
// 'boolean' 형식의 인수는 'string' 형식의 매개 변수에 할당될 수 없습니다.ts(2345)

let arrayOfNumbers: number[];

arrayOfNumbers = [4, 8, 15, 16, 23, 42];
// Error: Type 'number[]' is not assignable to type 'number'.
// 'number[]' 형식은 'number' 형식에 할당할 수 없습니다.ts(2322)

// 타입은 string 배열을 반환하는 함수
let createStrings: () => string[];

// 타입은 각각의 string을 반환하는 함수 배열
let stringCreators: (() => string)[];

// 타입은 string 또는 number의 배열
let stringOrArrayOfNumbers: string | number[];

// 타입은 각각 number 또는 string인 요소의 배열
let arrayOfStringOrNumbers: (string | number)[];

// 타입 : (string | undefined)[]
const nameMaybe2 = [
  "Agualtune",
  "Blenda",
  undefined,
];

// 타입: any[]
let values = [];

// 타입: string[]
values.push('');

// 타입: (number | string)[]
values[0] = 0;

let arrayOfArraysOfNumbers: number[][];

arrayOfArraysOfNumbers = [
  [1, 2, 3],
  [2, 4, 6],
  [3, 6, 9],
];

// 타입 : number[][]
let arrayOfArraysOfNumbers2: (number[])[];

// ---

const defenders = ["Clarenza", "Dina"];

// 타입: string
const defender = defenders[0];

const soldiersOrDates = ["Deborah Sampson", new Date(1782, 6, 3)];

// 타입: string | Date
const soldierOrDates = soldiersOrDates[0];

function withElements(elements: string[]) {
  // console.log(elements[9001].length);  // 타입 오류 없음
}

withElements(["It's", "over"]);

// ---

// 타입 : string[]
const soldiers = ["Harriet Tubman", "Joan of Arc", "Khutulun"];

// 타입 : number[]
const soldierAges = [90, 19, 45];

// 타입: (string | number)[]
const conjoined = [...soldiers, ...soldierAges];

function logWarriors(greeting: string, ...names: string[]) {
  for (const name of names) {
    console.log(`${greeting}, ${name}`);
  }
}

const warriors2 = ["Cathay Williams", "Lozen", "Nzinga"];

logWarriors("Hello", ...warriors2);

const birthYears = [1844, 1840, 1583];

// logWarriors("Born in", ...birthYears);
// Error: Argument of type 'number' is not assignable to parameter of type 'string'.
// 'number' 형식의 인수는 'string' 형식의 매개 변수에 할당될 수 없습니다.ts(2345)

// ---

let yearAndWarrior: [number, string];

yearAndWarrior = [530, "Tomyris"]; // OK

// yearAndWarrior = [false, "Tomyris"];
// Error:  Type 'boolean' is not assignable to type 'number'
// 'boolean' 형식은 'number' 형식에 할당할 수 없습니다.ts(2322)

// yearAndWarrior = [530];
// Error: ype '[number]' is not assignable to type '[number, string]'.
// Source has 1 element(s) but target requires 2.
// '[number]' 형식은 '[number, string]' 형식에 할당할 수 없습니다. 소스에 1개 요소가 있지만, 대상에 2개가 필요합니다.ts(2322)

// year 타입: number
// warrior 타입: string
let [year, warrior] = Math.random() > 0.5
  ? [340, "Archidamia"]
  : [1828, "Rani of Jhansi"];
  
// 타입: (boolean | number)[]
const pariLoose = [false, 123];
// const pairTupleLoose: [boolean, number] = pariLoose;
// Error: Type '(number | boolean)[]' is not assignable to type '[boolean, number]'.
//  Target requires 2 element(s) but source may have fewer.
// '(number | boolean)[]' 형식은 '[boolean, number]' 형식에 할당할 수 없습니다.
//  대상에 2개 요소가 필요하지만, 소스에 더 적게 있을 수 있습니다. ts(2322)

const tupleThree: [boolean, number, string] = [false, 1583, "Nzinga"];

const tupleTwoExact: [boolean, number] = [tupleThree[0], tupleThree[1]];

// const tupleTwoExtra: [boolean, number] = tupleThree;
// Error: Type '[boolean, number, string]' is not assignable to type '[boolean, number]'.
//  Source has 3 element(s) but target allows only 2.
// '[boolean, number, string]' 형식은 '[boolean, number]' 형식에 할당할 수 없습니다.
//  소스에 3개 요소가 있지만, 대상에서 2개만 허용합니다.ts(2322)

function logPair(name: string, value: number) {
  console.log(`${name} has ${value}`);
}

const pairArray = ["Amage", 1];

// logPair(...pairArray);
// Error: A spread argument must either have a tuple type or be passed to a rest parameter.
// 확산 인수는 튜플 유형을 가지거나 나머지 매개 변수로 전달되어야 합니다.ts(2556)

const pairTupleIncorrect: [number, string] = [1, "Amage"];

// logPair(...pairTupleIncorrect);
// Error: Argument of type 'number' is not assignable to parameter of type 'string'.
// 'number' 형식의 인수는 'string' 형식의 매개 변수에 할당될 수 없습니다.ts(2345)

const pairTupleCorrect: [string, number] = ["Amage", 1];

logPair(...pairTupleCorrect); // OK

function logTrio(name: string, value: [number, boolean]) {
  console.log(`${name} has ${value[0]} (${value[1]})`);
}

// const trios: [string, [number, boolean][]] = [
//   ["Amanitore", [1, true]],
//   ["thelfld", [2, false]],
//   ["Ann E. Dunwoody", [3, false]]
// ];

// trios.forEach(trio => logTrio(...trio)); // OK

// trios.forEach(logTrio);
// Error: Argument of type '(name: string, value: [number, boolean]) => void' is not assignable to parameter of type '(value: string | [number, boolean][], index: number, array: (string | [number, boolean][])[]) => void'.
//  Types of parameters 'name' and 'value' are incompatible.
//    Type 'string | [number, boolean][]' is not assignable to type 'string'.
//      Type '[number, boolean][]' is not assignable to type 'string'.
// '(name: string, value: [number, boolean]) => void' 형식의 인수는 '(value: string | [number, boolean][], index: number, array: (string | [number, boolean][])[]) => void' 형식의 매개 변수에 할당될 수 없습니다.
//  'name' 및 'value' 매개 변수의 형식이 호환되지 않습니다.
//    'string | [number, boolean][]' 형식은 'string' 형식에 할당할 수 없습니다.
//      '[number, boolean][]' 형식은 'string' 형식에 할당할 수 없습니다.ts(2345)

// 반환 타입: (string | number)[]
function firstCharAndSize(input: string) {
  return [input[0], input.length];
}

// firstChar 타입: string | number
// size 타입: string | number
const [firstChar, size] = firstCharAndSize("Gudit");

// 반환 타입: [string, number]
function firstCharAndSizeExplicit(input: string): [string, number]{
  return [input[0], input.length];
}

// firstChar 타입: string
// size 타입: number
const [firstChar2, size2] = firstCharAndSizeExplicit("Cathay Williams");

// 타입: (string | number)[]
const unionArray = [1157, "Tomoe"];

// 타입: readonly [1157, "Tomoe"];
const readonlyTuple = [1157, "Tomoe"] as const;

const pairMutable: [number, string] = [1157, "Tomoe"];
pairMutable[0] = 1247; // OK

// const pairAlsoMutable: [number, string] = [1157, "Tomoe"] as const;
// Error: he type 'readonly [1157, "Tomoe"]' is 'readonly' and cannot be assigned to the mutable type '[number, string]'.
// 'readonly [1157, "Tomoe"]' 형식은 'readonly'이며 변경 가능한 형식 '[number, string]'에 할당할 수 없습니다.ts(4104)

const pairConst = [1157, "Tomoe"] as const;
// pairConst[0] = 1247;
// Error: Cannot assign to '0' because it is a read-only property.
// 읽기 전용 속성이므로 '0'에 할당할 수 없습니다.ts(2540)

// 반환 타입: readonly [string, number]
function firstCharAndSizeAsConst(input: string) {
  return [input[0], input.length] as const;
}

// firstChar 타입: string
// size 타입: number
const [firstChar3, size3] = firstCharAndSizeAsConst("Ching Shih");