let singer = "Ella Fitzgerald";

let bestSong = Math.random() > 0.5 ? "Chain of Fools" : "Respect";

let firstName = "Whitney";
// firstName.length();
// 
// Error: This expression is not callable.
// Type 'Number' has no call signatures.

// let let wat;
//
// Error: ',' expected.

let firstName2 = "Carole";
firstName2 = "Joan";

let lastName = "Carole";
// lastName = true;

let rocker; // 타입 : any

rocker = "Joan Jett"; // 마우스 올렸을 때 이때는 any 타입인데, 책에서는 타입 : string
console.log(typeof rocker); // 이 경우 string 그러니까, 할당 뒤에 확인? 그럼.. 이 줄에서 console.log로 확인할 필요없이, 마우스 올리면 string

rocker.toUpperCase(); // Ok

rocker = 19.58; // 여기서도 위에와 동일하다.

rocker.toPrecision(1); // Ok

rocker.toUpperCase();
// Error: 'toUpperCase' does not exist on type 'number'.

let rocker2: string;
rocker2 = "Joan Jett";
rocker2 = 19.58;

let firstName3: string = "Tina"; // 타입 시스템은 변경되지 않음

let firstName4: string = 42; 
//Error: Type 'number' is not assignable to type 'string'.

let rapper = "Queen Latifah";
rapper.length; // Ok

rapper.push('!');
// Error: Property 'push' does not exist on type 'string'.

let cher = {
  firstName: "Cherliyn",
  lastName: "Sarkisian",
};

cher.middleName;
// Error: Property 'middleName' does not exist on type
// `{ firstName: string; lastName: string}.

// ---

import { value } from "./values";

export const doubled = value * 2;