const horozontal = document.querySelector(".line.horozontal");
const vertical = document.querySelector(".line.vertical");
const target = document.querySelector(".target");
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
  vertical.style.left = clientX + "px";
  horozontal.style.top = clientY + "px";
  target.style.left = clientX + "px";
  target.style.top = clientY + "px";

  client.innerHTML = `clientX : ${clientX}, clientY : ${clientY}`;
  page.innerHTML = `pageX : ${pageX}, pageY : ${pageY}`;
  screen.innerHTML = `screenX : ${screenX}, screenY : ${screenY}`;
  offset.innerHTML = `offsetX : ${offsetX}, offsetY : ${offsetY}`;
});
