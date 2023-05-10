/**
 * Performs a painter painting a particular painting
 * @param {Painting} painter 
 * @param {string} painting 
 * @returns {boolean} Whether the painter painted the painting.
 */
function paintPainting(painter, painting) {
  return painter
    .prepare()
    .paint(painting,painter, ownMaterials)
    .finish();
}

// ---

const firstName = 'Georgia';
const nameLength = firstName.length();

// Error: This expression is not callable.

// ---

// 이전 코드: sayMyName(firstName, lastNameName) { ...
function sayMyName(fullName) {
  console.log(`You acting kind of shady, ain't callin' me ${fullName}`);
}

sayMyName("Beyonce", "Knowles");

// ---

// Error: Exprected 1 argument, but got 2.

interface Painter {
  finish(): boolean;
  ownMaterials: Material[];
  paint(painting: string, materials: Material[]): boolean;
}

function paintPainting(painter: Painter, painting: string): boolean { /* ... */ }

// ---

const artist = "Augusta Savage";
console.log({artist});

