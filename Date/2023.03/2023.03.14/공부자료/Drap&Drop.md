- [1. Drag \& Drop 이벤트](#1-drag--drop-이벤트)
  - [1.1 dragstart 이벤트](#11-dragstart-이벤트)
  - [1.2 drag 이벤트](#12-drag-이벤트)
  - [1.3 dragenter 이벤트](#13-dragenter-이벤트)
  - [1.4 dragover 이벤트](#14-dragover-이벤트)
  - [1.5 drop 이벤트](#15-drop-이벤트)
  - [1.6 dragleave 이벤트](#16-dragleave-이벤트)
  - [1.7 dragend 이벤트](#17-dragend-이벤트)
- [2. DataTransfer 객체](#2-datatransfer-객체)

* [2. DataTransfer 객체](#2-datatransfer---)

# 1. Drag & Drop 이벤트

HTML에서 요소가 드래그 이벤트가 발생 할 수 있도록 해당 요소의 속성으로 draggable="true" 값을 주면 요소와 상호동작 할때마다 아래와 같은 드래그 드롭 이벤트들이 발생하게 된다. 애초에 디폴트 값으로 draggable이 true인 태그는 a태그만 있다. 그 외에는 모두 draggable=’true’를 설정해줘야 태그의 드래그가 가능하게 된다.

```html
<div draggable="true" class="item">
  <p>Drag Me!</p>
</div>
```

| 이벤트 순서                                                             | 설명                                                                    |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| 1. dragstart                                                            | 사용자가 객체를 드래그하려고 시작할 때 발생한다.                        |
| 2. drag                                                                 | 대상 객체를 드래그하면서 마우스를 움직일 때 발생한다.                   |
| 3. dragenter                                                            | 마우스가 대상 객체의 위로 처음 진입할 때 발생한다.                      |
| 4. dragover                                                             | 드래그하면서 마우스가 대상 객체의 영역 위에 자리 잡고 있을 때 발생한다. |
| 5. drop                                                                 | 드래그가 끝나서 드래그하던 객체를 놓는 장소에 위치한 객체에서 발생한다. |
| 이벤트리스너는 드래그된 데이터를 가져와서 드롭 위치에 놓는 역할을 한다. |
| 6. dragleave                                                            | 드래그가 끝나서 마우스가 대상 객체의 위에어 벗어날 때 발생한다.         |
| 7. dragend                                                              | 대상 객체를 드래그하다가 마우스 버튼을 놓는 순간 발생한다.              |

이 중, 필수로 사용해야 하는 이벤트는 drop, dragover 이벤트다. dragover 이벤트를 적용해야 drop이벤트를 적용가능하기 때문이다.

> 기본적으로 HTML 요소는 다른 요소의 위에 위치할 수 없다.
> 따라서 다른 요소 위에 위치할 수 있도록 만들기 위해서는 놓일 장소에 있는 요소의 기본 동작을 막아야만 한다.
> 이 작업을 event.preventDefault() 메소드를 호출하는 것만으로 간단히 설정할 수 있다.

---

## 1.1 dragstart 이벤트

```jsx
// 실시간으로 좌표 받아오기
const client = document.querySelector(".client");
const page = document.querySelector(".page");
const screen = document.querySelector(".screen");
const offset = document.querySelector(".offset");

document.addEventListener("mousemove", (e) => {
  const clientX = e.clientX;
  const clientY = e.clientY;
  const pageX = e.pageX;
  const pageY = e.pageY;
  const screenX = e.screenX;
  const screenY = e.screenY;
  const offsetX = e.offsetX;
  const offsetY = e.offsetY;

  client.innerHTML = `clientX : ${clientX}, clientY : ${clientY}`;
  page.innerHTML = `pageX : ${pageX}, pageY : ${pageY}`;
  screen.innerHTML = `screenX : ${screenX}, screenY : ${screenY}`;
  offset.innerHTML = `offsetX : ${offsetX}, offsetY : ${offsetY}`;
});
```

실시간으로 좌표를 받아오기 위해서 자바스크립트 파일에 해당코드도 같이 넣어두었다.

---

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style_cordinate2.css" />
    <title>Drag & Drop</title>
  </head>
  <body>
    <div class="mainContainer">
      <section class="sec1">
        <div draggable="true" class="div1"></div>
        <div draggable="true" class="div2"></div>
        <div draggable="true" class="div3"></div>
      </section>
      <section class="sec2">
        <div draggable="true" class="div4"></div>
        <div draggable="true" class="div5"></div>
        <div draggable="true" class="div6"></div>
      </section>
      <section class="sec3">
        <div draggable="true" class="div7"></div>
        <div draggable="true" class="div8"></div>
        <div draggable="true" class="div9"></div>
      </section>
      <div class="container">
        <div class="tag">
          <div class="client"></div>
          <div class="page"></div>
          <div class="screen"></div>
          <div class="offset"></div>
        </div>
      </div>
    </div>
    <script src="main.js"></script>
  </body>
</html>
```

```jsx
// dragstart 이벤트

const divItems = document.querySelectorAll("section > div");

divItems.forEach((item) => {
  item.addEventListener("dragstart", (e) => {
    const rect = item.getBoundingClientRect();
    console.log(rect);
    console.log(`e.clientX : ${e.clientX}`);
    console.log(`e.clientY : ${e.clientY}`);
    console.log(`e.pageX : ${e.pageX}`);
    console.log(`e.pageY : ${e.pageY}`);
    console.log(`e.screenX : ${e.screenX}`);
    console.log(`e.screenY : ${e.screenY}`);
    console.log(`e.offsetX : ${e.offsetX}`);
    console.log(`e.offsetY : ${e.offsetY}`);
    console.log("dragstart Event");
  });
});
```

실시간 좌표 측정하는 것과 dragstart 이벤트가 시작할때의 좌표값이 동일한지 측정해보았다.

![](https://velog.velcdn.com/images/dataliteracy/post/33c8b921-b510-4231-9efa-f68d3666b6c7/image.png)

이미지에서는 좌표값이 실시간으로 변하다보니 캡쳐할 때 좌표값이 변했지만 실제 동작할때는 clientX와 pageX의 값이 실시간 좌표와 일치했다.

---

## 1.2 drag 이벤트

```jsx
const divItems = document.querySelectorAll("section > div");

divItems.forEach((item) => {
  item.addEventListener("drag", (e) => {
    console.log("드래그 중입니다.");
  });
});
```

drag 이벤트는 drag가 동작하는 순간에는 계속 이벤트가 발생하게 됩니다.

![](https://velog.velcdn.com/images/dataliteracy/post/3898daa3-6edd-4ec5-ad0a-babd24d395ee/image.png)

실제로 기존에 있던 dragstart이벤트는 한 번만 출력되었지만, drag를 계속 시도한 결과 drag이벤트에 등록한 console.log는 620번이나 호출한 것을 알 수 있습니다.

---

## 1.3 dragenter 이벤트

dragenter 이벤트는 요소가 다른 요소에 진입했을 때 이벤트가 발생한다.

```jsx
// dragenter 이벤트
const mainContainer = document.querySelector(".mainContainer");
const sec1 = mainContainer.querySelector(".sec1");
const sec2 = mainContainer.querySelector(".sec2");
const sec3 = mainContainer.querySelector(".sec3");

mainContainer.addEventListener("dragenter", (e) => {
  if (e.target.parentNode.className === "mainContainer") {
    console.log(`요소가 들어간 section은 ${e.target.className}입니다.`);
  }
});
```

실제로 drag를 해보면 해당 section에 진입할 때 console.log가 정상적으로 출력되는 걸 볼 수 있다.

![](https://velog.velcdn.com/images/dataliteracy/post/817d62db-946d-44dc-8fbc-ddb3f3322fb5/image.png)

---

## 1.4 dragover 이벤트

dragover 이벤트는 drag한 요소가 특정 요소 위에 있으면 계속 발생하는 이벤트입니다.

```jsx
mainContainer.addEventListener("dragover", (e) => {
  if (e.target.parentNode.className === "mainContainer") {
    console.log(`요소가 올라가있는 section은 ${e.target.className}입니다.`);
  }
});
```

한 가지 div 요소를 특정 섹션위에 계속 가져다 놓고 있으면 console.log가 계속 출력됩니다.
요소에서 벗어나거나 drag를 중단하면 이벤트는 멈추게 됩니다.

![](https://velog.velcdn.com/images/dataliteracy/post/d8aa8453-82b6-42c0-bfa0-678ea02fa0ff/image.png)

---

## 1.5 drop 이벤트

drop 이벤트가 달린 요소가 드래그가 종료되면 발생합니다. (단, dragover랑 같이 써야 동작합니다.)

드롭될 요소에는 e.preventDefault()를 사용하지 않으면 정상적인 동작이 되지 않을 수 있습니다.

```jsx
mainContainer.addEventListener("dragover", (e) => {
  e.preventDefault();
  if (e.target.parentNode.className === "mainContainer") {
    console.log(`요소가 올라가있는 section은 ${e.target.className}입니다.`);
  }
});

mainContainer.addEventListener("drop", (e) => {
  e.preventDefault();
  if (e.target.parentNode.className === "mainContainer") {
    console.log(`요소가 ${e.target.className}에 drop 되었습니다.`);
  }
});
```

dragover 이벤트와 같이 사용하게 되면 console.log가 정상적으로 출력됩니다.

![](https://velog.velcdn.com/images/dataliteracy/post/a1776d13-b09e-4034-80b4-db25d9cdb073/image.png)

---

## 1.6 dragleave 이벤트

dragleave이벤트는 특정 요소를 빠져나올때 발생하는 이벤트입니다.

dragenter → dragover → dragleave의 과정을 연결지어 보겠습니다.

```jsx
// dragenter 이벤트
const mainContainer = document.querySelector(".mainContainer");
const sec1 = mainContainer.querySelector(".sec1");
const sec2 = mainContainer.querySelector(".sec2");
const sec3 = mainContainer.querySelector(".sec3");

mainContainer.addEventListener("dragenter", (e) => {
  e.preventDefault();
  if (e.target.parentNode.className === "mainContainer") {
    console.log(`요소가 들어간 section은 ${e.target.className}입니다.`);
  }
});

// dragover 이벤트
mainContainer.addEventListener("dragover", (e) => {
  e.preventDefault();
  if (e.target.parentNode.className === "mainContainer") {
    console.log(`요소가 올라가있는 section은 ${e.target.className}입니다.`);
  }
});

//dragleave 이벤트
mainContainer.addEventListener("dragleave", (e) => {
  e.preventDefault();
  if (e.target.parentNode.className === "mainContainer") {
    console.log(`요소가 ${e.target.className}에서 빠져나갔습니다.`);
  }
});
```

dragenter → dragover → dragleave의 순서대로 정상 출력됩니다.

![](https://velog.velcdn.com/images/dataliteracy/post/3883c6d1-45fb-4924-a3d5-bbd76fbb50bd/image.png)

---

## 1.7 dragend 이벤트

dragend 이벤트는 드래그가 끝날때 발생합니다. 어느 곳이든 마우스를 놓게 되면 발생하는 이벤트 입니다.

이번에는 dragenter → dragover → drop → dragend 이벤트의 순서로 연결지어서 이벤트를 발생시켜보겠습니다.

```jsx
// dragenter 이벤트
const mainContainer = document.querySelector(".mainContainer");
const sec1 = mainContainer.querySelector(".sec1");
const sec2 = mainContainer.querySelector(".sec2");
const sec3 = mainContainer.querySelector(".sec3");

mainContainer.addEventListener("dragenter", (e) => {
  e.preventDefault();
  if (e.target.parentNode.className === "mainContainer") {
    console.log(`요소가 들어간 section은 ${e.target.className}입니다.`);
  }
});

// dragover 이벤트
mainContainer.addEventListener("dragover", (e) => {
  e.preventDefault();
  if (e.target.parentNode.className === "mainContainer") {
    console.log(`요소가 올라가있는 section은 ${e.target.className}입니다.`);
  }
});

// drop 이벤트
mainContainer.addEventListener("drop", (e) => {
  e.preventDefault();
  if (e.target.parentNode.className === "mainContainer") {
    console.log(`요소가 ${e.target.className}에 drop 되었습니다.`);
  }
});

// dragend 이벤트
divItems.forEach((item) => {
  item.addEventListener("dragend", (e) => {
    console.log(`${e.target.className}요소의 drag 이벤트가 종료되었습니다.`);
  });
});
```

이번에도 역시 정상 출력됩니다.

![](https://velog.velcdn.com/images/dataliteracy/post/2b553f90-c469-4b74-b551-462510b20c28/image.png)

---

# 2. DataTransfer 객체

<aside>
💡 MDN 정의
객체 **`DataTransfer`**는 드래그 앤 드롭 작업 중에 드래그되는 데이터를 보유하는 데 사용됩니다. 각각 하나 이상의 데이터 유형인 하나 이상의 데이터 항목을 보유할 수 있습니다.

</aside>

dataTransfer 객체는 앞서 살펴봤던 drag & drop의 모든 이벤트에서 사용가능합니다.

이 부분은 아직 충분히 공부가 되지 않은 부분입니다. 앞으로 칸반보드 프로젝트를 진행할텐데, 그때 유용하게 쓰일지는 아직 모르겠으나, MDN 사이트에 있는 부분을 간략하게라도 정리해서 남겨놓는 게 좋을 것 같아 일단 적어봤습니다.

- 생성자 `DataTransfer()` - 새 `DataTransfer`개체를 만들고 반환합니다.
  - 인스턴스 프로퍼티
    - `DataTransfer.dropEffect`
      - 현재 선택된 끌어서 놓기 작업 유형을 가져오거나 작업을 새 유형으로 설정합니다.
    - `DataTransfer.effectAllowed`
      - 가능한 모든 유형의 작업을 제공합니다.
    - `DataTransfer.files`
      - 데이터 전송에서 사용할 수 있는 모든 로컬 파일 목록을 포함합니다. 끌기 작업에 파일 끌기가 포함되지 않는 경우 이 속성은 빈 목록입니다.
    - `DataTransfer.items` (읽기 전용)
      - 모든 드래그 데이터의 목록인 `DataTransferItemList` 객체를 제공합니다 .
    - `DataTransfer.types` (읽기 전용)
      - `dragstart`이벤트 에 설정된 형식을 제공하는 문자열 배열입니다.
  - 인스턴스 메서드
    - `DataTransfer.clearData(format)`
      - 제거할 데이터 유형을 지정하는 문자열입니다. 이 매개변수가 빈 문자열이거나 제공되지 않으면 모든 유형의 데이터가 제거됩니다.
    - `DataTransfer.getData(format)`
      - 지정된 유형의 데이터를 검색하거나 해당 유형의 데이터가 없거나 데이터 전송에 데이터가 없는 경우 빈 문자열을 검색합니다.
    - `DataTransfer.setData(format, data)`
      - 주어진 유형에 대한 데이터를 설정합니다. 유형에 대한 데이터가 없으면 유형 목록의 마지막 항목이 새 형식이 되도록 끝에 추가됩니다. 해당 유형의 데이터가 이미 존재하는 경우 동일한 위치에 기존 데이터가 대체됩니다.
    - `DataTransfer.setDragImage(imgElement, xOffset, yOffset)`
      - 사용자 지정 이미지를 원하는 경우 드래그에 사용할 이미지를 설정합니다.

---

Reference

> [https://inpa.tistory.com/entry/드래그-앤-드롭-Drag-Drop-기능](https://inpa.tistory.com/entry/%EB%93%9C%EB%9E%98%EA%B7%B8-%EC%95%A4-%EB%93%9C%EB%A1%AD-Drag-Drop-%EA%B8%B0%EB%8A%A5)
> [https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer](https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer)
