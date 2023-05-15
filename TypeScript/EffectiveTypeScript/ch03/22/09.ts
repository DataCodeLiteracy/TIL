function isInputElement(el: HTMLElement): el is HTMLInputElement {
  return "value" in el;
}

function getElementContent(el: HTMLElement) {
  if (isInputElement(el)) {
    el; // Type is HTMLInputElement
    return el.value;
  }
  el; // Type is HTMLElement
  return el.textContent;
}

export default {};

/**
 * el is HTMLInputElement - 사용자 정의 타입 가드
 * 타입 체커에게 매개변수의 타입을 좁힐 수 있다고 알려준다.
 */
