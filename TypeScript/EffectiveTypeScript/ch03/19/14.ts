interface Product {
  id: string;
  name: string;
  price: number;
}

function logProduct(product: Product) {
  const id: number = product.id;
  // ~~ Type 'string' is not assignable to type 'number'
  const name: string = product.name;
  const price: number = product.price;
  console.log(id, name, price);
}
const furby = {
  name: "Furby",
  id: 630509430963,
  price: 35
};
logProduct(furby);
// ~~~~~ Argument .. is not assignable to parameter of type 'Product'
//         Types of property 'id' are incompatible
//         Type 'number' is not assignable to type 'string'

export default {};

/**
 * 요약
 *
 * 타입을 지정하지 않으면 할당할 때 오류를 확인하지 못하고 함수 등이 호출되는 순간에야 확인이 가능하다.
 */
