interface Point {
  x: number;
  y: number;
}
const pt = { x: 3, y: 4 };
const id = { name: "Pythagoras" };
const namedPoint = {};
const result2 = Object.assign(namedPoint, pt, id);
Object.assign(namedPoint, pt, id);

// console.log(result2.name);

namedPoint.name;
// ~~~~ Property 'name' does not exist on type '{}'

export default {};
