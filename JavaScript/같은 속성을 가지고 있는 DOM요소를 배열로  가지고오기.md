# 같은 속성을 가지고 있는 DOM요소를 배열로 가지고 오기

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <script src="index.js" defer></script>
    <title>Select</title>
  </head>
  <body>
    <h1>단축키 일람</h1>
    <ul id="shortcuts">
      <li class="current selected">
        <div class="shortcut">&uarr;</div>
        <div class="description">윗줄로 이동</div>
      </li>
      <li>
        <div class="shortcut">&darr;</div>
        <div class="description">아랫줄로 이동</div>
      </li>
      <li>
        <div class="shortcut">alt + &uarr;</div>
        <div class="description">5즐 위로 이동</div>
      </li>
      <li>
        <div class="shortcut">alt + &darr;</div>
        <div class="description">5줄 아래로 이동</div>
      </li>
      <li>
        <div class="shortcut">shift + &uarr;</div>
        <div class="description">현재줄 + 윗줄 선택</div>
      </li>
      <li>
        <div class="shortcut">shift + &darr;</div>
        <div class="description">현재줄 + 아랫줄 선택</div>
      </li>
      <li>
        <div class="shortcut">alt + shift + &uarr;</div>
        <div class="description">현재줄 + 상위 5줄 선택</div>
      </li>
      <li>
        <div class="shortcut">alt + shift + &darr;</div>
        <div class="description">현재줄 + 하위 5줄 선택</div>
      </li>
    </ul>
  </body>
</html>
```

위와 같은 html코드가 있을 때 shortcut들을 모두 받아와서 배열로 만들고 싶다면 어떻게 해야할까? 일단 내가 주로 생각했던 건 아래와 같다.

```jsx
const list = document.querySelectorAll('.shortcut')
// 사용할 때 [...list] 스프레드로 배열로 변환시켜서 사용한다.
```

하지만 강의를 보다가 Array.from에 대해서 다시 한 번 상기시킬 수 있었고, list 자체를 배열로 처음부터 만들어놓아도 괜찮다고 생각한다. 

```jsx
const list = Array.from(document.querySelectorAll('.shortcut'))
```

하지만 여기서 한 가지를 더 선택사항에 넣을 수 있게 되었다. 나는 항상 querySelectorAll로 가져올 생각만 하고 있었는데, 처음부터 가지고 올 때 상위 부모 태그를 DOM요소로 저장하고, 그 자식들을 받아오는 식으로도 할 수가 있었다.

```jsx
const list = Array.from(document.querySelector('#shortcuts').children)
```

앞으로 자바스크립트로만 뭔가 구현해야 할 때 Array.from을 잘 기억해 두었다가 활용해보자.

---

여기서 한 가지 번외로 짚어보고 갈 점은.. script 태그를 head 태그 안에 넣어두고 DOM요소를 그냥 가져와 버리면, DOM 트리가 생성되기도 전에 스크립트 태그부터 불러오기 때문에 오류가 발생한다. 

```bash
index.js:1 Uncaught TypeError: Cannot read properties of null (reading 'children')
    at index.js:1:61
```

그렇기 때문에 head 태그에서 사용하려면 반드시 defer 옵션을 사용하거나 아니면 script 태그를 body태그 최하단에 넣어야 한다. 그렇게 해야 DOM트리를 모두 생성한 다음에 스크립트 태그를 불러올 수 있다.

```html
<script src="index.js" defer></script>
```