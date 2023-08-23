# Browser & WebAPI

## HTML Semantic Element

의미론적인 태그를 사용해야 한다. 

웹 표준을 준수해야 한다. 

## NodeList

### Node

문서 내에 모든 객체

### Element

Tag로 둘러싸인 요소

- quertSelectorAll 로 가지고 올때 주의할 점은.. NodeList
    - Element로 사용하기 위해서는 반드시 배열로 변환해주어야 한다.

## innerHTML

- innerHTML은 사용하면 XSS 공격에 취약하다.
- 리액트에서는 dangerouslySetInnerHTML
    
    **`dangerouslySetInnerHTML`**은 React에서 사용되는 JSX 요소의 속성 중 하나로, 문자열 형태의 HTML을 JSX 요소 내에 렌더링할 때 사용됩니다. 그러나 이 속성은 이름에서 알 수 있듯이 "위험하게 설정된 내용"을 렌더링하는데 사용되므로 신중하게 사용해야 합니다.
    
    일반적으로 React에서는 JSX를 사용하여 컴포넌트의 UI를 구성하고 렌더링하는 것이 권장되는 방법입니다. JSX는 JavaScript의 확장 문법으로, UI를 선언적으로 표현할 수 있도록 도와줍니다. 그러나 때로는 서버에서 제공되는 HTML 코드나 외부에서 가져온 HTML을 동적으로 렌더링해야 할 때가 있습니다. 이 때 **`dangerouslySetInnerHTML`**을 사용할 수 있습니다.
    
    ```jsx
    function HTMLRenderer({ htmlContent }) {
      return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
    }
    
    const myHtml = "<p>This is <strong>HTML</strong> content.</p>";
    
    ReactDOM.render(<HTMLRenderer htmlContent={myHtml} />, document.getElementById('root'));
    ```
    
    위의 예시에서 **`dangerouslySetInnerHTML`**을 사용하여 HTML 문자열 **`myHtml`**을 렌더링합니다. 하지만 이 속성을 사용할 때 주의해야 할 사항이 몇 가지 있습니다:
    
    1. **XSS 취약점**: **`dangerouslySetInnerHTML`**을 사용할 때 주의하지 않으면 사용자가 입력한 내용이나 외부에서 가져온 내용을 렌더링할 때 크로스 사이트 스크립팅 (XSS) 공격에 취약할 수 있습니다. 사용자로부터 입력받은 내용을 그대로 렌더링하거나, 안전하지 않은 외부 소스의 내용을 렌더링할 때는 반드시 적절한 데이터 필터링 및 이스케이프를 수행해야 합니다.
    2. **성능 최적화**: React는 Virtual DOM을 활용하여 효율적인 UI 업데이트를 제공하는데, **`dangerouslySetInnerHTML`**을 사용하면 React가 해당 부분을 렌더링하지 않으므로 성능 최적화 측면에서 일부 제약이 발생할 수 있습니다.
    3. **구조와 스타일**: **`dangerouslySetInnerHTML`**을 사용하면 해당 HTML 코드의 구조와 스타일을 React 컴포넌트의 구조와 스타일과 일치시키기 어려울 수 있습니다.
    
    따라서 **`dangerouslySetInnerHTML`**을 사용할 때에는 보안, 성능, 구조 및 스타일 등 다양한 측면을 고려하여 사용하는 것이 중요합니다. 대부분의 상황에서는 **`dangerouslySetInnerHTML`**을 사용하지 않고 React의 컴포넌트 기반 접근 방식을 사용하는 것이 권장됩니다.
    
    - 그럼 서버에서 내려온 html코드를 가져와 사용할 때 dangerouslySetInnerHTML를 사용하지 않고 어떻게 처리할 수 있을까?
        
        서버에서 내려온 HTML 코드를 React에서 처리할 때에는 다음과 같은 접근 방식을 고려할 수 있습니다. 이를 통해 **`dangerouslySetInnerHTML`**를 사용하지 않고도 안전하게 내려온 HTML을 렌더링할 수 있습니다.
        
        1. **React 컴포넌트 활용**: 내려온 HTML 대신 React 컴포넌트를 활용하여 UI를 구성하는 방법입니다. 서버에서 HTML 대신 JSON 형식의 데이터를 내려주고, React 컴포넌트를 이용하여 데이터를 기반으로 UI를 생성합니다. 이 방식은 JSX를 활용하여 동적인 UI를 렌더링하면서도 XSS 공격을 방지할 수 있습니다.
        2. **기능별 라이브러리 활용**: 내려온 HTML에 기능별로 적합한 라이브러리를 적용하여 UI를 구성하는 방법입니다. 예를 들어, 서버에서 내려온 HTML에 대한 마크업을 Markdown으로 변환한 뒤, React에서 Markdown 컴포넌트를 활용하여 렌더링할 수 있습니다.
        3. **외부 라이브러리 활용**: 위의 방법 이외에도 몇몇 라이브러리는 외부에서 가져온 HTML을 안전하게 렌더링하는 기능을 제공합니다. 이러한 라이브러리를 활용하여 외부 HTML을 렌더링할 수 있습니다.
        4. **내용 필터링과 이스케이프**: 내려온 HTML을 렌더링하기 전에 사용자 입력이나 외부 소스로부터 내려온 내용을 필터링하고 이스케이프 처리하여 보안을 강화할 수 있습니다. 이 방법을 통해 XSS 공격을 방지하면서 내용을 렌더링할 수 있습니다.
        
        ```jsx
        import React from 'react';
        import DOMPurify from 'dompurify'; // 외부 라이브러리
        
        function SafeHTMLRenderer({ htmlContent }) {
          // 내려온 HTML 내용을 필터링하고 이스케이프 처리
          const sanitizedHTML = DOMPurify.sanitize(htmlContent);
        
          return <div dangerouslySetInnerHTML={{ __html: sanitizedHTML }} />;
        }
        
        const myHtml = "<p>This is <strong>safe</strong> HTML content.</p>";
        
        ReactDOM.render(<SafeHTMLRenderer htmlContent={myHtml} />, document.getElementById('root'));
        ```
        
- SetHTML을 대신 사용?
    - 아직은 권장되지 않음
- insertAdjacentHTML()를 사용
    
    [Element: insertAdjacentHTML() 메서드 - Web API | MDN](https://developer.mozilla.org/ko/docs/Web/API/Element/insertAdjacentHTML)
    
- innerText보다 textContent를 사용

---

insertAdjacentElement()

insertAdjacentHTML()

insertAdjacentText()

이 세가지를 사용하라. 요소를 삽입하고, HTML을 삽입하고 텍스트를 삽입할 때..

## Data Attributes

- 속성을 마음대로 선언할 수 있지만 data 어트리뷰트를 활용하는 것이 좋다.

```html
<h1 안녕="안녕"></h1>
<h1 data-hello="안녕"></h1>
```

- html 속성을 정의할 때 케밥 케이스 사용을 권장하고 있다. 그렇기 때문에 더더욱 data를 활용하는 것이 좋다.

## Black Box Event Listener

```jsx
/**
 * Black Box Event Listener
 * (개인적인 사례 혹은 주관이라고 생각해줘라..?)
 *
 * Black Box
 *  - 내부 구현이 어떻게 동작될지 예측할 수 없는 경우
 *  - 추상화가 너무 과하게 되거나 명시적인 코드가 아닌 경우
 */

const button = document.querySelector('button')

// 버튼.이벤트_등록('이벤트_타입', 리스너_함수_실행) -> 반응형으로 실행된다.
button.addEventListener('click', someFunc)

// 굉장히 많은 코드가 콜백함수에 등록되는 경우... 추상화가 필요하다.

// handleClick이라고 의미 없이 짓게 되면 click, keyup, submit에 대응할 수 없는 함수 네이밍이다.
// const handleClick = () => {
//   // 1. input을 받는 코드
//   // 2. 유효성 검사를 하는 코드
//   // 3. form을 전송하는 코드
// }

const handleSearch = () => {
  // 1. input을 받는 코드
  // 2. 유효성 검사를 하는 코드
  // 3. form을 전송하는 코드
}

button.addEventListener('click', handleSearch)
button.addEventListener('keyup', handleSearch)
form.addEventListener('onSubmit', handleSearch)
```