"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calculateArea(shape) {
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
exports.default = {};

/**
 * 요약
 *
 * if문 안에 있는 타입을 Rectangle은 컴파일 후 없어지지 않지만,
 * 기본적으로 타입이나 인터페이스는 컴파일 후에 js파일에서는 제거되고 보여지지 않는다.
 */
