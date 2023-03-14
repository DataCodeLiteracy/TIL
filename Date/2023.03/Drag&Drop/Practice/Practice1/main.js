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

// dragstart 이벤트

const divItems = document.querySelectorAll("section > div");

divItems.forEach((item) => {
  item.addEventListener("dragstart", (e) => {
    const img = new Image();
    img.src = "./DataLiteracy.png";
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
    e.dataTransfer.setDragImage(img, 30, 30);
  });
  // drag 이벤트
  // item.addEventListener("drag", (e) => {
  //   console.log("드래그 중입니다.");
  // });
});

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

//dragleave 이벤트
mainContainer.addEventListener("dragleave", (e) => {
  e.preventDefault();
  if (e.target.parentNode.className === "mainContainer") {
    console.log(`요소가 ${e.target.className}에서 빠져나갔습니다.`);
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
  console.log(e.dataTransfer.items);
  e.preventDefault();
  if (e.target.parentNode.className === "mainContainer") {
    console.log(`요소가 ${e.target.className}에 drop 되었습니다.`);
  }
});

// dragend 이벤트
divItems.forEach((item) => {
  item.addEventListener("dragend", (e) => {
    console.log(e.dataTransfer);
    console.log(`${e.target.className}요소의 drag 이벤트가 종료되었습니다.`);
  });
});
