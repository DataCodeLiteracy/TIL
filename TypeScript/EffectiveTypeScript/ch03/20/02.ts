function fetchProduct(id: string) {}
function fetchProductBySerialNumber(id: number) {}
let id = "12-34-56";
fetchProduct(id);

id = 123456;
// ~~ '123456' is not assignable to type 'string'.
fetchProductBySerialNumber(id);
// ~~ Argument of type 'string' is not assignable to
//    parameter of type 'number'

export default {};

/**
 * 요약
 * 
 * 타입스크립트에서는 string으로 추론된 변수에 number를 다시 할당할 수 없다.
 */
