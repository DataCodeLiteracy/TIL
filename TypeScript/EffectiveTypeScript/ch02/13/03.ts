type TState = {
  name: string;
  capital: string;
};
interface IState {
  name: string;
  capital: string;
}
const wyoming: TState = {
  name: "Wyoming",
  capital: "Cheyenne",
  population: 500_000
  // ~~~~~~~~~~~~~~~~~~ Type ... is not assignable to type 'TState'
  //                    Object literal may only specify known properties, and
  //                    'population' does not exist in type 'TState'
};

export default {};

/**
 * 요약
 *
 * 타입이든 인터페이스든 규격에 맞춰서 사용해야 한다는 점은 동일하다.
 */
