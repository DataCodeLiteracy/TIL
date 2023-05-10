const philosopher = "Hypatia";

let mathematician2 = "Mark Goldberg";

// ---

let lifespan: number | "ongoing" | "uncertain";

lifespan = 89; // OK
lifespan = "ongoing" // OK

lifespan = true;
// Error: Type 'true' is not assignable to type 'number | "ongoing" | "uncertain"'

// ---

let specificallyAda: "Ada";

specificallyAda = "Ada"; // OK

specificallyAda = "Byron"; 
// Error: Type ' "Byron" is not assignable to type "Ada" '.

let someString = ''; // 타입: string

specificallyAda = someString;
// Error: Type 'string' is not assignable to type '"Ada"'.

someString = ":)";

// ---

const firstName: string = null;

// ---

let nameMaybe = Math.random() > 0.5
  ? "Tony Hoare"
  : undefined;

nameMaybe.toLowerCase();
// Potential runtiem error: Cannot read property 'toLowerCase' of undefined

// ---

let geneticist = Math.random() > 0.5
  ? "Barbara McClintock"
  : undefined;

if (geneticist) {
  geneticist.toUpperCase(); // OK: string
}

geneticist.toUpperCase();
// Error: Object is possibly 'undefined'.

// ---

geneticist && geneticist.toUpperCase(); // OK: string | undefined
geneticist?.toUpperCase(); // OK: string | undefined

// ---

let biologist = Math.random() > 0.5 && "Rachel Carson";

if (biologist) {
  biologist; // 타입: string
} else {
  biologist; // 타입: false | string
}

// ---

let mathematician3: string | undefined;

mathematician3?.length;
// Error: Variable 'mathematician' is used before being assigned.

mathematician3 = "Mark Goldberg";
mathematician3.length; // OK

// ---

let rawDataFirst: boolean | number | string | null | undefined;
let rawDataSecond: boolean | number | string | null | undefined;
let rawDataThird: boolean | number | string | null | undefined;

// ---

type RawData = boolean | number | string | null | undefined;
let rawDataFirst2: RawData;
let rawDataSecond2: RawData;
let rawDataThird2: RawData;

// ---

type SomeType = string | undefined;

console.log(SomeType);
// Error: 'SomeType' only refers to a type, but is being used as a value here.

// ---

type Id = number | string;

// IdMaybe 타입은 다음과 같음: number | string | undefined | null
type IdMaybe = Id | undefined | null;

// ---

type IdMaybe2 = Id | undefined | null;
type Id2 = number | string;

