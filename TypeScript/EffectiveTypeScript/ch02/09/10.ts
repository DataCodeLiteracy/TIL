// tsConfig: {"strictNullChecks":false}

const divEl = document.querySelector("#myButton");
if (divEl) {
  divEl.addEventListener("click", (e) => {
    e.currentTarget; // Type is EventTarget
    const button = e.currentTarget as HTMLButtonElement;
    button; // Type is HTMLButtonElement
  });
}

document.querySelector("#myButton")!.addEventListener("click", (e) => {
  e.currentTarget; // Type is EventTarget
  const button = e.currentTarget as HTMLButtonElement;
  button; // Type is HTMLButtonElement
});

export default {};

/**
 * 요약
 *
 * possibly null
 * 타입스크립트는 DOM에 접근할 수 없다.
 * 우리는 타입스크립트가 알지 못하는 정보를 알고 있기 때문에 여기서는 타입 단언문을 쓰는 것이 타당하다.
 */
