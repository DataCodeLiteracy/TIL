const pt = {};
pt.x = 3;
// ~ Property 'x' does not exist on type '{}'
pt.y = 4;
// ~ Property 'y' does not exist on type '{}'

export default {};

/**
 * 요약
 *
 * 타입스크립트는 자바스크립트와 달리 정의되어 있지 않은 타입의 속성을 동적으로 추가할 수 없다.
 */
