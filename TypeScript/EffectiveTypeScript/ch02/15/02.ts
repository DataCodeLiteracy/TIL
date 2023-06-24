type Rocket = { [property: string]: string };
const rocket: Rocket = {
  name: "Falcon 9",
  variant: "v1.0",
  thrust: "4,940 kN"
}; // OK

export default {};

/**
 * 인덱스 시그니처의 단점
 *
 * 1. 잘못된 키를 포함해 모든 키를 허용합니다. name 대신 Name으로 작성해도 유효한 Rocket 타입이 됩니다.
 * 2. 특정 키가 필요하지 않습니다. {}도 유효한 Rocket 타입입니다.
 * 3. 키마다 다른 타입을 가질 수 없습니다.
 * 4. 자동 완성 기능이 동작하지 않습니다.
 */
