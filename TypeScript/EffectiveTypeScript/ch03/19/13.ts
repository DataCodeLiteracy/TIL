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
const elmo: Product = {
  name: "Tickle Me Elmo",
  id: "048188 627152",
  price: 28.99
};

export default {};

/**
 * 타입을 지정하면 잉여속성 체크가 가능하다. 그래서 변수에 할당하는 순간 오류 체크가 가능하다.
 */
