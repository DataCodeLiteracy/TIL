let divParent = document.querySelector(".divParent");
let divChild = document.querySelector(".divChild");

document.addEventListener("click", (e) => {
  console.log(`offsetX : ${e.offsetX}`);
  console.log(`offsetY : ${e.offsetY}`);

  divParent.style.left = "300px";
  // divParent.style.top = divParent.offsetTop;
});

// divParent.style.left = "300px";
