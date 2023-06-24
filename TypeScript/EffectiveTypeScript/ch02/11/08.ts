interface Room {
  numDoors: number;
  ceilingHeightFt: number;
}
function setDarkMode() {}
interface Options {
  title: string;
  darkMode?: boolean;
}
const o = { darkmode: true, title: "Ski Free" } as Options; // OK

export default {};

/**
 * 요약
 *
 * 타입 단언문을 사용할 때도 잉여속성검사는 수행하지 않는다.
 */
