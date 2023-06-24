function isGreeting(phrase: String) {
  return ["hello", "good day"].includes(phrase); // String -> string
  // ~~~~~~
  // Argument of type 'String' is not assignable to parameter
  // of type 'string'.
  // 'string' is a primitive, but 'String' is a wrapper object;
  // prefer using 'string' when possible
}

export default {};

class A {}

const a: A = new A();

const b: String | string = new String();

/**
 * 요약
 *
 * 같이 사용할 수 있는 경우가 있지만 그렇지 않은 경우도 있기 때문에..
 * 기본형과 래퍼객체를 혼동해서 사용하지 말아라.
 */
