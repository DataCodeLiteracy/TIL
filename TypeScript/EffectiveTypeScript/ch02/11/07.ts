interface Room {
  numDoors: number;
  ceilingHeightFt: number;
}
function setDarkMode() {}
interface Options {
  title: string;
  darkMode?: boolean;
}
const intermediate = { darkmode: true, title: "Ski Free" };
const o: Options = intermediate; // OK

export default {};

/**
 * 요약
 *
 * 임시 변수에 할당한 뒤 다시 그걸 변수에 할당하면 잉여속성검사가 수행되지 않는다.
 */
