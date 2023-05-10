interface Square {
  width: number;
}
interface Rectangle extends Square {
  height: number;
}
type Shape = Square | Rectangle;

function calculateArea(shape: Shape) {
  if (shape instanceof Rectangle) {
    // ~~~~~~~~~ 'Rectangle' only refers to a type,
    //           but is being used as a value here
    return shape.width * shape.height;
    //         ~~~~~~ Property 'height' does not exist
    //                on type 'Shape'
  } else {
    return shape.width * shape.width;
  }
}

export default {};

/**
 * 요약
 *
 * instanceof는 런타임에 일어나지만 타입은 런타임 시점에는 아무런 역할을 하지 않는다.
 * 즉, 런타임에는 타입체크가 불가능하다.
 */
