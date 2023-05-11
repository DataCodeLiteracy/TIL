"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// OK, {"A", "B"} is a subset of {"A", "B"}:
var ab = Math.random() < 0.5 ? "A" : "B";
var ab12 = ab; // OK, {"A", "B"} is a subset of {"A", "B", 12}
var back = twelve;
// ~~~~ Type 'AB12' is not assignable to type 'AB'
//        Type '12' is not assignable to type 'AB'
exports.default = {};
/**
 * declare 할당하기 전에 사용하고 싶을 때? declare를 사용한다?
 * 기본적인 declare의 의미는..
 * declare는 TypeScript 컴파일러에게 해당 변수가 이미 존재한다는 것을 알려주는 것입니다. 따라서 이전에 다른 파일에서 선언된 변수를 사용하고자 할 때는 declare를 사용합니다.
 * 컴파일시 declare는 없어진다.
 */
