function getStringLen(foo: String) {
  return foo.length;
}

getStringLen("hello"); // OK
getStringLen(new String("hello")); // OK string -> String

export default {};

/**
 * 요약
 *
 *
 */
