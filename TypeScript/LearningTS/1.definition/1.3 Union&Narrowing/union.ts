let mathematician = Math.random() > 0.5 
  ? undefined 
  : "Mark Goldberg";

// ---

let thinker: string | null = null;

if (Math.random() > 0.5) {
  thinker = "Susanne Langer"; // OK
}

// ---

let physicist = Math.random() > 0.5
  ? "Marie Curie"
  : 84;

// ---

physicist.toString(); //OK

physicist.toUpperCase();
// Error: Property 'toUpperCase' does not exist on type 'string | number'.
// Property 'toUpperCase' does not exist on type 'string | number'.

physicist.toFixed();
// Error: Property 'toFixed' does not exist on type 'string | number'.
// Property 'toFixed' does not exist on type 'string | number'.

// ---

let admiral: number | string;

admiral = "Grace Hopper";

admiral.toUpperCase(); // OK: string

admiral.toFixed();
// Error: Property 'toFixed' does not exist on type 'string'.

// ---
let inventor: number | string = "Hedy Lamarr";

inventor.toUpperCase(); // OK: string

inventor.toFixed();

// Error: Property 'toFixed' does not exist on type 'string'.

// ---

// scientist: number | string의 타입
let scientist = Math.random() > 0.5
  ? "Rosalind Franklin"
  : 51;

if (scientist === "Rosalind Franklin") {
  // scientist: string의 타입
  scientist.toUpperCase(); // OK
}

// scientist: number | string의 타입
scientist.toUpperCase();
// Error: Property 'toUpperCase' does not exist on type 'string | number'.
// Property 'toUpperCase' does not exist on type 'number'.

// ---

let researcher = Math.random() > 0.5
  ? "Rosalind Franklin"
  : 51;
  
if(typeof researcher === 'string') {
  researcher.toUpperCase(); // OK: string
}

if(!typeof researcher === 'string') {
  researcher.toFixed(); // OK: number
} else {
  researcher.toUpperCase(); // OK: string
}

// ---

typeof researcher === 'string'
  ? researcher.toUpperCase() // OK: string
  : researcher.toFixed() // OK: number

