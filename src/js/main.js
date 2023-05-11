const hamber = document.querySelector(".hamburgerMenu");
const aside = document.querySelector("aside");
const closeBtn = document.querySelector(".close");

hamber.addEventListener("click", () => {
  aside.classList.remove("hide");
});
closeBtn.addEventListener("click", () => {
  aside.classList.add("hide");
});