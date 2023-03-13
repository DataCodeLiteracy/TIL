const divItems = document.querySelectorAll("div");

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

const body = document.querySelector("body");

body.addEventListener("click", (e) => {
  const rect = body.getBoundingClientRect();
  console.log(rect);
  console.log(`e.clientX : ${e.clientX}`);
  console.log(`e.clientY : ${e.clientY}`);
  console.log(`e.pageX : ${e.pageX}`);
  console.log(`e.pageY : ${e.pageY}`);
  console.log(`e.screenX : ${e.screenX}`);
  console.log(`e.screenY : ${e.screenY}`);
  console.log(`e.offsetX : ${e.offsetX}`);
  console.log(`e.offsetY : ${e.offsetY}`);
});
