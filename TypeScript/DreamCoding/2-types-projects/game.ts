/**
 * Let's make a game 🕹
 */

type Action = "up" | "down" | "left" | "right" | "end";

const position = {
  x: 0,
  y: 0
};

function move(action: Action) {
  switch (action) {
    case "up":
      // position.x += 0;  // 굳이 0을 할 필요없었다.;; 생각이 짧았음..
      position.y += 1;
      return position;
    case "down":
      // position.x += 0;
      position.y -= 1;
      return position;
    case "left":
      position.x -= 1;
      // position.y += 0;
      return position;
    case "right":
      position.x += 1;
      // position.y += 0;
      return position;
    case "end":
      position.x = 0;
      position.y = 0;
      return;
    default:
      throw new Error(`This ${action} is not exist!`);
  }
}

console.log(position); // { x: 0, y: 0}
move("up");
console.log(position); // { x: 0, y: 1}
move("down");
console.log(position); // { x: 0, y: 0}
move("left");
console.log(position); // { x: -1, y: 0}
move("right");
console.log(position); // { x: 0, y: 0}

move("end");
console.log(position); // { x: 0, y: 0}

move("up");
console.log(position); // { x: 0, y: 1}
move("up");
console.log(position); // { x: 0, y: 1}
// move("unknown");
