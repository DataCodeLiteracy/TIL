interface Room {
  numDoors: number;
  ceilingHeightFt: number;
}
function setDarkMode() {}
interface Options {
  title: string;
  darkMode?: boolean;
}
const o: Options = { darkmode: true, title: "Ski Free" };
// ~~~~~~~~ 'darkmode' does not exist in type 'Options'...

export default {};

/**
 * 요약
 *
 * 객체 리터럴을 그대로 할당할시에는 잉여속성검사가 동작한다.
 */
