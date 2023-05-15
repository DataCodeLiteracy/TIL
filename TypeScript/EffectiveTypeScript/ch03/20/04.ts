function fetchProduct(id: string) {}
function fetchProductBySerialNumber(id: number) {}
const id = "12-34-56";
fetchProduct(id);

const serial = 123456; // OK
fetchProductBySerialNumber(serial); // OK

export default {};

/**
 * 요약
 *
 * 타입이 다르다면 변수를 다르게 선언하는 것을 고려하라.
 */
