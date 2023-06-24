const triple: [number, number, number] = [1, 2, 3];
const double: [number, number] = triple;
// ~~~~~~ '[number, number, number]' is not assignable to '[number, number]'
//          Types of property 'length' are incompatible
//          Type '3' is not assignable to type '2'

export default {};

/**
 * 이 경우 타입스크립트는 숫자의 쌍을 {0: number, 1: number}로 모델링하지 않고, {0: number, 1: number: length: 2}로 모델링했습니다.
 * 그래서 length의 값이 맞지 않기 때문에 할당문에 오류가 발생했습니다.
 */
