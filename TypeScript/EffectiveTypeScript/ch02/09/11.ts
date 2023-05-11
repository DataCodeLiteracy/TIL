const elNull = document.getElementById("foo"); // Type is HTMLElement | null
const el = document.getElementById("foo")!; // Type is HTMLElement

export default {};

/**
 * 요약
 *
 * 타입스크립트보다 타입 정보를 더 잘 알고 잇으면 타입 단언이나 !(null 아님 단언문)를 사용하자.
 */
