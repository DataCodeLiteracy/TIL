// 드래그할 요소를 선택합니다.
const dragElement = document.getElementById("dragElement");

// 드래그 앤 드롭 이벤트를 설정합니다.
dragElement.addEventListener("dragstart", function (event) {
  // 드래그할 요소의 id를 설정합니다.
  console.log(1);
  event.dataTransfer.setData("text", event.target.id);
});

// 드롭할 영역을 선택합니다.
var dropZone = document.getElementById("dropZone");

// 드롭 앤 드롭 이벤트를 설정합니다.
dropZone.addEventListener("drop", function (event) {
  // 기본 동작을 취소합니다.
  event.preventDefault();

  // 드롭된 요소의 id를 가져옵니다.
  var data = event.dataTransfer.getData("text");

  // 드롭된 요소를 드롭할 영역 안에 추가합니다.
  event.target.appendChild(document.getElementById(data));
});

dropZone.addEventListener("dragover", function (event) {
  // 기본 동작을 취소합니다.
  event.preventDefault();
});

// -------------------------------------------------------------------------

document.addEventListener("dragstart", (event) => {
  // 반투명하게 만들기
  event.target.classList.add("dragging");
});

document.addEventListener("dragend", (event) => {
  // 불투명하게 초기화
  event.target.classList.remove("dragging");
});
