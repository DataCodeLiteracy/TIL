declare var console: Console;

const poet = {
  born: 1935,
  name: "Mary Oliver",
};

poet['born']; // 타입: number
poet.name; // 타입 string

poet.end;
// Error: Property 'end' does not exist on type ' { born: number; name: string }'.

// ---

let poetLater: {
  born: number;
  name: string;
}

// Ok
poetLater = {
  born: 1935,
  name: "Mary Oliver",
};

poetLater = "Sappho";
// Error; Type 'string' is not assignable to type ' { born: number; name: string }'

// ---

type Poet = {
  born: number;
  name: string;
};

let poetLater2 = {
  born: 1935,
  name: "Sara Teasdale",
};

poetLater2 = "Emily Dickinson";
// Error: Type 'string' is not assignable to 'Poet'.

// ---

type WithFirstName = {
  firstName: string;
};

type WithLastName = {
  lastName: string;
};

const hasBoth = {
  firstName: "Lucile",
  lastName: "Clifton",
}

// Ok: 'hasBoth'는 'string' 타입의 'firstName'을 포함함
let withFirstName: WithFirstName = hasBoth;

// Ok: 'hasBoth'는 'string' 타입의 'lastName'을 포함함
let withLastName: WithLastName = hasBoth;

// ---

type FirstAndLastNames = {
  first: string;
  last: string;
};

// OK
const hasBoth2: FirstAndLastNames = {
  first: "Sarojini",
  last: "Naidu",
};

const hasOnlyOne: FirstAndLastNames = {
  // Error: Property 'last' is missing in type '{ first: string }'
  // but required in type 'FirstAndLastNames'.
  first: "Sappho"
};

// ---

type TimeRange = {
  start: Date;
};

const hasStartString: TimeRange = {
  start: "1879-02-13",
  // Error: Type 'string' is not assignable to type 'Date'.
}

// ---

type Poet2 = {
  born: number;
  name: string;
}

// OK: Poet2의 필드와 일치함
const poetMatch: Poet2 = {
  born: 1928,
  name: "Maya Angelou"
};

const extraProperty: Poet2 = {
  activity: "walking",
  // Error: Type '{ activity: string, born: number, name: string }'
  // is not assignable to type 'Poet2'
  // Object literal may only specify known properties,
  // and 'activity does not exist in type 'Poet2'.
  /*
  { activity: string; born: number; name: string; }' 형식은 'Poet' 형식에 할당할 수 없습니다.
  개체 리터럴은 알려진 속성만 지정할 수 있으며 'Poet' 형식에 'activity'이(가) 없습니다.ts(2322)
   */
  born: 1935,
  name: "Mary Oliver",
};

const existingObject = {
  activity: "walking",
  born: 1935,
  name: "Mary Oliver",
};

const extraPropertyButOk: Poet2 = existingObject; // OK

// ---

type Poem3 = {
  author: {
    firstName: string;
    lastName: string;
  };
  name: string;
};

// OK
const poemMatch: Poem3 = {
  author: {
    firstName: "Sylvia",
    lastName: "Plath",
  },
  name: "Lady Lazarus",
};

const poemMismatch: Poem3 = {
  author: {
    name: "Sylvia Plath",
    // Error: Type '{ name: string }' is not assignable
    // to type '{ firstName: string, lastName: string }'.
    // Object literal may only specify known properties, and 'name'
    // does not exist in type '{ firstName: string; lastName: string }'.
  },
  name: "Tulips",
};

// ---

type Author = {
  firstName: string;
  lastName: string;
};

type Poem4 = {
  author: Author;
  name: string;
};

const poemMismatch2: Poem4 = {
  author: {
    // Error: Type '{ name: string; }' is not assignable to type 'Author'.
    // Object literal may only specify known properties,
    // and 'name' does not exist in type 'Author'.
  },
  name: "Tulips",
};

// ---

type Book = {
  author?: string;
  pages: number;
};

// OK
const ok: Book = {
  author: "Rita Dove",
  pages: 80,
};

const missing: Book = {
  // Error: Property 'pages' is missing in type
  // '{ pages: number; } but required in type 'Book'.
  author: "Rita Dove",
};

// ---

type Writers = {
  author: string | undefined;
  editor?: string;
};

// OK: author는 undefined으로 제공됨
const hasRequired: Writers = {
  author: undefined,
};

const missingRequired: Writers = {};
// Error: Property 'author' is missing in type '{}' but required in type 'Writers'.

// ---
const poem4 = Math.random() > 0.5
  ? { name: "The Double Image", pages: 7 }
  : { name: "Her Kind", rhymes: true };
// 타입:
/*
  {
    name: string;
    pages: number;
    rhymes?: undefined;
  }
  |
  {
    name: string;
    pages?: undefined;
    rhymes: boolean;
  }
*/

poem4.name; // string
poem4.pages // number | undefined
poem4.rhymes; // booleans | undefined

// ---

type PoemWithPages = {
  name: string;
  pages: number;
};

type PoemWithRhymes = {
  name: string;
  rhymes: boolean;
};

type Poem2 = PoemWithPages | PoemWithRhymes;

const poem5: Poem2 = Math.random() > 0.5
  ? { name: "The Double Image", pages: 7 }
  : { name: "Her Kind", rhymes: true };

poem5.name; // OK

poem5.pages;
// Error: Property 'pages' does not exist on type 'Poem5'.
// Property 'pages' does not exist on type 'PoemWithRhymes'.

poem5.rhymes;
// Error: Property 'rhymes' does not exist on type 'Poem5'.
// Property 'rhymes' does not exist on type 'PoemWithRhymes'.

// ---

if ("pages" in poem5) {
  poem5.pages; // OK: poem5는 PoemWithPages로 좁혀짐
} else {
  poem5.rhymes; // OK: poem는 PoemWithRhymes로 좁혀짐
}

// ---

if (poem5.pages) { /* ... */ }
// Error: Property 'pages' does not exist on type 'PoemWithPages | PoemWithRhymes'.
// Property 'pages' does not exist on type 'PoemWithRhymes'.

// ---

type PoemWithPages2 = {
  name: string;
  pages: number;
  type: 'pages';
};

type PoemWithRhymes2 = {
  name: string;
  rhymes: boolean;
  type: 'rhymes';
};

type Poem6 = PoemWithPages2 | PoemWithRhymes2;

const poem6: Poem6 = Math.random() > 0.5
  ? { name: "The Double Image", pages: 7, type: "pages" }
  : { name: "Her Kind", rhymes: true, type: "rhymes" };
  
if (poem6.type === 'pages') {
  console.log(`It's got pages: ${poem6.pages}`); // OK
} else {
  console.log(`It rhymes: ${poem6.rhymes}`);
}

poem6.type; // 타입: 'pages' | 'rhymes'

poem6.pages;
// Error: Property 'pages' does not exist on type 'Poem'.
// Property 'pages' does not exist on type 'PoemWithRhymes'.

// ---

type Artwork = {
  genre: string;
  name: string;
};

type Writing = {
  pages: number;
  name: string;
};

type WrittenArt = Artwork & Writing;

// 다음과 같음: 
/*  
  {
    genre: string;
    name: string;
    pages: number;
  }
*/

// ---

// type ShortPoem = { author: string } & (
//   | { kigo: string; type: "haiku"; }
//   | { meter: number; type: "villanelle"; }
// );

type ShortPoemBase = { author: string };
type Haiku = ShortPoemBase & { kigo: string; type: "haiku"; };
type Villanelle = ShortPoemBase & { meter: number; type: "villanelle"; }
type ShortPoem = Haiku | Villanelle;


// OK
const morningGlory: ShortPoem = {
  author: "Fukuda Chiyo-ni",
  kigo: "Morning Glory",
  type: "haiku",
};

const oneArt: ShortPoem = {
  /*
  '{ author: string; type: "villanelle"; }' 형식은 'ShortPoem' 형식에 할당할 수 없습니다.
  '{ author: string; type: "villanelle"; }' 형식은 
  '{ author: string; } & { meter: number; type: "villanelle"; }' 형식에 할당할 수 없습니다.
  'meter' 속성이 '{ author: string; type: "villanelle"; }' 형식에 없지만 
  '{ meter: number; type: "villanelle"; }' 형식에서 필수입니다.
  */
  author: "Elizabeth Bishop",
  type: "villanelle",
}

type NotPossible = number & string; // 타입: never

// ---

let notNumber: NotPossible = 0;
/*
  'number' 형식은 'never' 형식에 할당할 수 없습니다.
*/

let notString: never = '';
/*
  string' 형식은 'never' 형식에 할당할 수 없습니다.
*/

