const x: never = 12;
// ~ Type '12' is not assignable to type 'never'

export default {};

/**
 * 요약
 *
 * 타입스크립트가 오류를 체크하는 순간에는 '타입'을 가지고 있다.
 */

let foo: number;
foo = null; // 오류: 'null'을 'number'에 할당할 수 없음
foo = undefined; // 오류: 'undefined'를 'number'에 할당할 수 없음

/**
 * strictNullChecks 여부와 null | undefined
 * 
 * TypeScript에서는 null과 undefined를 각각 null과 undefined라는 별도의 타입으로 갖습니다. 
 * 이 두 타입은 다른 모든 타입과 호환 가능합니다. 그래서 number, string, boolean, object, 그리고 다른 타입 등 어떤 타입이든 null 또는 undefined를 할당할 수 있습니다.
 * 하지만 strictNullChecks 옵션을 켜면 null과 undefined를 일반적인 값과 구분하여 타입 체크를 엄격하게 합니다. 
 * 즉, 이 옵션이 켜져 있으면 null과 undefined는 number, string, boolean, object, 그리고 다른 타입 등과 호환되지 않으며, 따라서 변수를 선언할 때 반드시 초기값을 설정하거나, 
 * 혹은 값이 null 또는 undefined가 될 가능성이 있는 변수에 대해서는 해당 타입과 null 또는 undefined를 모두 포함하는 유니온 타입을 사용해야 합니다.
 * 
 * strictNullChecks 옵션이 켜져 있을 때는 null과 undefined가 number 타입에 할당될 수 없으므로, number 타입으로 선언된 변수는 null과 undefined를 가질 수 없습니다. 
 * 그러므로 strictNullChecks 옵션이 켜져 있을 때는 number | undefined | null이 아니라 number 타입으로 선언된 변수에 null이나 undefined를 할당하면 타입 에러가 발생합니다.
 * 반면, strictNullChecks 옵션이 꺼져 있을 때는 null과 undefined가 모든 타입에 할당될 수 있으므로, number 타입으로 선언된 변수는 null과 undefined를 가질 수 있습니다. 
 * 따라서 strictNullChecks 옵션이 꺼져 있을 때는 number | undefined | null이 됩니다.

 */
