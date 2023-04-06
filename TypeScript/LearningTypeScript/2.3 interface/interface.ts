type Poet6 = {
  born: number;
  name: string;
}

interface Poet7 {
  born: number;
  name: string;
}

let valueLater: Poet6;

// OK
valueLater = {
  born: 1935,
  name: "Sara Teasdale",
}

// valueLater = "Emily Dickinson";
// Error: Type 'string' is not assignable to type 'Poet6'.
// 'string' 형식은 'Poet6' 형식에 할당할 수 없습니다.ts(2322)

// valueLater = {
  // born: true,
  // Error: Type 'boolean' is not assignable to type 'number'.
  // 'boolean' 형식은 'number' 형식에 할당할 수 없습니다.ts(2322)
  // name: 'Sappho'
// }

interface Book2 {
  author?: string;
  pages: number;
};

// OK
const ok2: Book2 = {
  author: "Rita Dove",
  pages: 80,
};

const missing2: Book2 = {
  pages: 80
}

interface Page {
  readonly text: string;
}

function read(page: Page) {
  // OK: text 속성을 수정하지 않고 읽는 것
  console.log(page.text);

  // page.text += "!";
  // Error: annot assign to 'text' because it is a read-only property.
}

const pageIsh = {
  text: "Hello, world!",
}

// OK: pageIsh는 Page 객체가 아니라 text가 있는, 유추된 객체 타입입니다. 
pageIsh.text += "!";

// OK pageIsh의 더 구체적인 버전인 Page를 읽습니다. 
read(pageIsh);

interface HasBothFunctionTypes {
  property: () => string;
  method(): string;
}

const hasBoth3: HasBothFunctionTypes = {
  property: () => "",
  method() {
    return '';
  }
};

hasBoth3.property(); // OK
hasBoth3.method(); // OK

interface OptionalReadonlyFunctions {
  optionalProperty?: () => string;
  optionalMethod?(): string;
}

type FunctionAlias = (input: string) => number;

interface CallSignature {
  (input: string): number;
}

// 타입: (input: string) => number
const typedFunctionAlias: FunctionAlias = (input) => input.length; // OK

// 타입: (input: string) => number
const typeCallSignature: CallSignature = (input) => input.length; // OK

interface FunctionWithCount {
  count: number;
  (): void;
}

let hasCallCount: FunctionWithCount;

function keepsTrackOfCalls() {
  keepsTrackOfCalls.count += 1;
  console.log(`I've been called ${keepsTrackOfCalls.count} times`!);
}

keepsTrackOfCalls.count = 0;

hasCallCount = keepsTrackOfCalls; // OK

function doesNotHaveCount() {
  console.log("No idea!");
}

// hasCallCount = doesNotHaveCount;
// Error: Property 'count' is missing in type '() => void' but required in type 'FunctionWithCount'.
// 'count' 속성이 '() => void' 형식에 없지만 'FunctionWithCount' 형식에서 필수입니다.ts(2741)

interface WordCounts {
  [i: string]: number;
}

const counts: WordCounts = {};

counts.apple = 0; // OK
counts.banana = 1; // OK

// counts.cherry = false;
// Error: Type 'boolean' is not assignable to type 'number'.
// 'boolean' 형식은 'number' 형식에 할당할 수 없습니다.ts(2322)

interface DatesByName {
  [i: string]: Date;
}

const publishDates: DatesByName = {
  Frankenstein: new Date("1 January 1818"),
};

publishDates.Frankenstein; // 타입: Date
console.log(publishDates.Frankenstein.toString()); // OK

publishDates.Beloved; // 타입은 Date이지만 런타임 값은 undefined
// console.log(publishDates.Beloved.toString());
// 타입 시스템에서는 오류가 나지 않지만 실제 런타임에서는 오류가 발생합니다. 
// Runtiem error: Cannot read property 'toString'
// of undefined (reading publishDates.Beloved)

interface HistoricalNovels {
  Oroonoko: number;
  [i: string]: number;
}

// OK
const novels: HistoricalNovels = {
  Outlander: 1991,
  Oroonoko: 1668,
}

// const missingOroonoko: HistoricalNovels = {
// Error: Property 'Oroonoko' is missing in type '{ Outlander: number; }' but required in type 'HistoricalNovels'.
// Oroonoko' 속성이 '{ Outlander: number; }' 형식에 없지만 'HistoricalNovels' 형식에서 필수입니다.ts(2741)
//   Outlander: 1991,
// }

interface ChapterStarts {
  preface: 0;
  [i: string]: number;
}

const correctPreface: ChapterStarts = {
  preface: 0,
  night: 1,
  shopping: 5
};

// const wrongPreface: ChapterStarts = {
  // preface: 1,
  // Error: Type '1' is not assignable to type '0'.
  // '1' 형식은 '0' 형식에 할당할 수 없습니다.ts(2322)
// }


// OK
interface MoreNarrowNumbers {
  [i: number]: string;
  [i: string]: string | undefined;
}

// OK
const mixesNumbersAndStrings: MoreNarrowNumbers = {
  0: '',
  key1: '',
  key2: undefined,
}

interface MoreNarrowStrings {
  // [i: number]: string | undefined;
  // Error: 'number' index type 'string | undefined' is not assignable to 'string' index type 'string'.
  // 'number' 인덱스 유형 'string | undefined'을(를) 'string' 인텍스 유형 'string'에 할당할 수 없습니다.ts(2413)
  [i: string]: string;
}

interface Novel {
  author: {
    name: string;
  };
  setting: Setting;
}

interface Setting {
  place: string;
  year: number;
}

let myNovel: Novel;

// OK
myNovel = {
  author: {
    name: 'Jane Austen',
  },
  setting: {
    place: 'England',
    year: 1812,
  }
}

// myNovel = {
//   author: {
//     name: 'Emily Bronte',
//   },
//   setting: {
//     Error: Property 'year' is missing in type '{ place: string; }' but required in type 'Setting'.
//     'year' 속성이 '{ place: string; }' 형식에 없지만 'Setting' 형식에서 필수입니다.ts(2741)
//     place: 'West Yorkshire',
//   }
// }

interface Writing2 {
  title: string;
}

interface Novella extends Writing2 {
  pages: number;
}

// OK
let myNovella: Novella = {
  pages: 195,
  title: "Ethan Frome",
};

// let missingPages: Novella = {
  // Error: Property 'pages' is missing in type '{ title: string; }' but required in type 'Novella'.
  // 'pages' 속성이 '{ title: string; }' 형식에 없지만 'Novella' 형식에서 필수입니다.ts(2741)
  // title: "The Awakening",
// }

// let extraProperty2: Novella = {
//   pages: 300,
  // strategy: "baseline",
  // Error: Type '{ pages: number; strategy: string; style: string; }' is not assignable to type 'Novella'.
  // Object literal may only specify known properties, and 'strategy' does not exist in type 'Novella'.
  // '{ pages: number; strategy: string; style: string; }' 형식은 'Novella' 형식에 할당할 수 없습니다.
  // 개체 리터럴은 알려진 속성만 지정할 수 있으며 'Novella' 형식에 'strategy'이(가) 없습니다.ts(2322)
  // style: "Naturalism"
// }

interface WithNullableName {
  name: string | null;
}

interface WithNonNullableName extends WithNullableName {
  name: string;
}

// interface WithNumericName extends WithNullableName {
  // Error: Interface 'WithNumericName' incorrectly extends interface 'WithNullableName'.
  // Types of property 'name' are incompatible.
  //  Type 'string | number' is not assignable to type 'string | null'.
  //    Type 'number' is not assignable to type 'string'.
  // 'WithNumericName' 인터페이스가 'WithNullableName' 인터페이스를 잘못 확장합니다.
  // 'name' 속성의 형식이 호환되지 않습니다.
  //  'string | number' 형식은 'string | null' 형식에 할당할 수 없습니다.
  //    'number' 형식은 'string' 형식에 할당할 수 없습니다.ts(2430)
//   name: number | string;
// }

interface GivesNumber {
  giveNumber(): number;
}

interface GivesString {
  giveString(): string;
}

interface GivesBothAndEither extends GivesNumber, GivesString {
  giveEither(): number | string;
}

function useGivesBoth(instance: GivesBothAndEither) {
  instance.giveEither(); // 타입: number | string
  instance.giveNumber(); // 타입: number
  instance.giveString(); // 타입: string
}

interface Merged {
  fromFirst: string;
}

interface Merged {
  fromSecond: number;
}

// 다음과 같음: 
// interface Merged {
//   fromFirst: string;  
//   fromSecond: number;
// }

interface Window {
  myEnvironmentVariable: string;
}

window.myEnvironmentVariable; // 타입: string

interface MergedProperties {
  same: (input: boolean) => string;
  different: (input: string) => string;
}

// interface MergedProperties {
//   same: (input: boolean) => string; // OK

//   different: (input: number) => string;
//   // Error: Subsequent property declarations must have the same type.  
//   // Property 'different' must be of type '(input: string) => string',
//   // but here has type '(input: number) => string'.
//   // 후속 속성 선언에 같은 형식이 있어야 합니다. 
//   // 'different' 속성이 '(input: string) => string' 형식이어야 하는데 
//   // 여기에는 '(input: number) => string' 형식이 있습니다.ts(2717)
// }

interface MergedMethods {
  different(input: string): string;
}

interface MergedMethods {
  different(input: number): string; // OK
}