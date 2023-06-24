// Don't do this!
const originalCharAt = String.prototype.charAt;
String.prototype.charAt = function (pos) {
  console.log(this, typeof this, pos);
  return originalCharAt.call(this, pos);
};
console.log("primitive".charAt(3));

export default {};

/**
 * 요약
 *
 * 자바스크립트는 자동으로 형 변환을 해주는 래퍼객체가 있다. 이를 통해 래퍼 객체의 메서드를 사용 가능하다.
 */
