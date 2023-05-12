interface Room {
  numDoors: number;
  ceilingHeightFt: number;
}
const obj = {
  numDoors: 1,
  ceilingHeightFt: 10,
  elephant: "present"
};
const r: Room = obj; // OK

export default {};

/**
 * 요약
 *
 * 임시변수에 타입을 정의하고 객체를 할당하면 구조적 타이핑 관점과 일치한다.
 * 구조적 타이핑 관점에서는 r 변수가 Room 인터페이스의 모든 프로퍼티를 만족하지 않지만,
 * TypeScript는 타입 호환성을 체크할 때 추가적인 프로퍼티를 무시하고 타입을 호환시키는데,
 * 이를 excess property checking 이라고 합니다.
 */
