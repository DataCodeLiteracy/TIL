interface Room {
  numDoors: number;
  ceilingHeightFt: number;
}
const r: Room = {
  numDoors: 1,
  ceilingHeightFt: 10,
  elephant: "present"
  // ~~~~~~~~~~~~~~~~~~ Object literal may only specify known properties,
  //                    and 'elephant' does not exist in type 'Room'
};

export default {};

/**
 * 요약
 *
 * 구조적 타이핑 관점에서는 오류가 발생하지 않아야 한다.
 */
