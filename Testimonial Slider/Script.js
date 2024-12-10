const slidebar = document.querySelectorAll(".slider-container");
const leftarrow = document.querySelector(".left-arrow");
const rightarrow = document.querySelector(".right-arrow");
let currentIndex = 0;
function showcards(index) {
  slidebar.forEach((elem, i) => {
    elem.style.display = i === index ? "block" : "none";
  });
}
showcards(currentIndex);

rightarrow.addEventListener("click", () => {
  currentIndex = currentIndex < slidebar.length - 1 ? currentIndex + 1 : 0;
  showcards(currentIndex);
});
leftarrow.addEventListener("click", () => {
  currentIndex = currentIndex > 0 ? currentIndex - 1 : slidebar.length - 1;
  showcards(currentIndex);
});
