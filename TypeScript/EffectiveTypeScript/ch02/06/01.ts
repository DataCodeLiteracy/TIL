// function getElement(elOrId: string | HTMLElement | null): HTMLElement {
//   if (typeof elOrId === 'object') {
//     return elOrId
//     // ~~~~~~~~~~~~~~ 'HTMLElement | null' is not assignable to 'HTMLElement'
//   } else if (elOrId === null) {
//     return document.body
//   } else {
//     const el = document.getElementById(elOrId)
//     return el
//     // ~~~~~~~~~~ 'HTMLElement | null' is not assignable to 'HTMLElement'
//   }
// }

function getElement(elOrId: string | HTMLElement | null): HTMLElement | null {
  if (typeof elOrId === "object" || elOrId === null) {
    return elOrId;
    // ~~~~~~~~~~~~~~ 'HTMLElement | null' is not assignable to 'HTMLElement'
  } else if (elOrId === "object") {
    return document.body;
  } else {
    const el = document.getElementById(elOrId);
    return el;
    // ~~~~~~~~~~ 'HTMLElement | null' is not assignable to 'HTMLElement'
  }
}

export default {};

/**
 * 요약
 *
 * typeof null은 'object'이므로 null일 가능성을 체크해줘야 한다.
 * 편집기 상의 언어서비스를 최대한 활용하라.
 */
