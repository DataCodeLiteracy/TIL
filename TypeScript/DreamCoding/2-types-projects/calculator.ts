/**
 * Let's make a calculator 🧮
 */

// 내 코드

type calcFunc = "add" | "subtract" | "multiply" | "divide" | "remainder";

function calculate(callback: calcFunc, num1: number, num2: number): number {
  if (callback === "add") {
    return num1 + num2;
  } else if (callback === "subtract") {
    return num1 - num2;
  } else if (callback === "multiply") {
    return num1 * num2;
  } else if (callback === "divide") {
    return num1 / num2;
  } else if (callback === "remainder") {
    return num1 % num2;
  } else {
    throw new Error("unknown calcFunc");
  }
}

console.log(calculate("add", 1, 3)); // 4
console.log(calculate("subtract", 3, 1)); // 2
console.log(calculate("multiply", 4, 2)); // 8
console.log(calculate("divide", 4, 2)); // 2
console.log(calculate("remainder", 5, 2)); // 1

// 엘리 코드

type Command = "add" | "subtract" | "multiply" | "divide" | "remainder";
function calculate2(command: Command, a: number, b: number): number {
  switch (command) {
    case "add":
      return a + b;
    case "subtract":
      return a - b;
    case "multiply":
      return a * b;
    case "divide":
      return a / b;
    case "remainder":
      return a % b;
    default:
      throw new Error("unknown calcFunc");
  }
}

console.log(calculate2("add", 1, 3)); // 4
console.log(calculate2("subtract", 3, 1)); // 2
console.log(calculate2("multiply", 4, 2)); // 8
console.log(calculate2("divide", 4, 2)); // 2
console.log(calculate2("remainder", 5, 2)); // 1
