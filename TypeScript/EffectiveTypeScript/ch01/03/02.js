"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calculateArea(shape) {
    if ('height' in shape) {
        shape; // Type is Rectangle
        return shape.width * shape.height;
    }
    else {
        shape; // Type is Square
        return shape.width * shape.width;
    }
}
exports.default = {};
