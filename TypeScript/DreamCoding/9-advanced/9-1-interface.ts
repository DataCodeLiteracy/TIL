type PositionType = {
  x: number;
  y: number;
};

interface PositionInterface {
  x: number;
  y: number;
}

// object
const obj1: PositionType = {
  x: 1,
  y: 1
};

const obj2: PositionInterface = {
  x: 1,
  y: 1,
  z: 1
};

// class

class Pos1 implements PositionType {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

class Pos2 implements PositionInterface {
  x: number;
  y: number;
  z: number;
  constructor(x: number, y: number, z: number) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
}

// Extends
interface ZPositionInterface extends PositionInterface {
  z: number;
}

type ZPositionType = PositionType & { z: number };

// only interfaces can be merged.
interface PositionInterface {
  z: number;
}

// type PositionType {
// }

// Type aliases can use computed properties
type Person = {
  name: string;
  age: number;
};

type Name = Person["name"];

type NumberType = number;

type Direction = "left" | "right";

const obj3: Name = "Lee";

// ---

// 이 경우에도 생성자가 없으면 오류를 발생시킨다.

// type Coffee = {

// }

// interface CoffeeMaker {
//   coffeeBeans: number;
//   makeCoffee: (shots: number) => Coffee;
// }

// class CoffeeMachine implements CoffeeMaker {
//   coffeeBeans: number;
//   makeCoffee: (shots: number){
//     return {};
//   }
// }

// ---

// interface 보다는 type을 사용해야 하는 상황..
// interface는 어떤 것을 구현할 목적.. 어떤 것을 담을 목적이라면 type

// interface Position {
//   x: number;
//   y: number;
// }

type Position = {
  x: number;
  y: number;
};

const pos: Position = {
  x: 0,
  y: 0
};

printPosition(pos);

function printPosition(pos: Position) {
  console.log(pos);
}
