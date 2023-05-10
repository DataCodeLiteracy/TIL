interface Square {
  kind: "square";
  width: number;
}
interface Rectangle {
  kind: "rectangle";
  height: number;
  width: number;
}
type Shape = Square | Rectangle;

function calculateArea(shape: Shape) {
  if (shape.kind === "rectangle") {
    shape; // Type is Rectangle
    return shape.width * shape.height;
  } else {
    shape; // Type is Square
    return shape.width * shape.width;
  }
}

// calculateArea({
//   height: 100,
//   width: 100,
//   kind:'rectangle'
// })

calculateArea({
  height: 100,
  width: 100,
  kind: "square"
});

export default {};

/**
 * 요약
 *
 * 'height' in shape와 shape.kind === 'rectangle'을 사용하는 것은 공통적으로 유니온 타입에서 특정 타입을 판별할 때 사용되는 방법 중 두 가지 입니다.
 * 이 방법을 사용하는 이유는 코드에서 유니온 타입을 다루면서 각각의 타입에 맞게 다른 동작을 수행해야 할 때가 있기 때문입니다.
 * 예를 들어, 위 코드에서 calculateArea 함수에서 Shape 타입은 Square과 Rectangle의 유니온 타입이며, 이 중에 각각에 맞게 넓이를 계산해주어야 합니다.
 * 하지만 Shape 타입은 Square과 Rectangle의 공통적인 타입만 가지고 있기 때문에 어떤 타입이 들어올지 예측할 수 없습니다.
 * 따라서, 위 코드에서는 유니온 타입을 다룰 때 타입스크립트가 타입 정보를 유지하도록 하기 위해, 태그 기법을 사용하여 각 타입을 명시적으로 식별합니다.
 * 이렇게 하면 코드에서 각 타입을 구분하여 다른 동작을 수행할 수 있습니다.
 * 즉, 'height' in shape와 shape.kind === 'rectangle'를 통해, 타입스크립트는 해당 객체가 Square인지 Rectangle인지를 판별할 수 있게 됩니다.
 * 이 방법은 코드의 가독성을 높이고, 실수를 줄일 수 있는 장점이 있습니다.
 */
