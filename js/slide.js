const slide = document.querySelector("#slide");
const prevBtn = document.querySelector(".arrow-prev");
const nextBtn = document.querySelector(".arrow-next");
let currentPosition = 0;
const step = 600;

function moveSlider(direction) {
  const currentLeft = slide.style.left;

  if ((currentLeft === "" || currentLeft === "0px") && direction === "prev") {
    currentPosition = -2400;
  } else if (direction === "prev") {
    currentPosition += step;
  } else {
    currentPosition -= step;
  }

  slide.style.left = currentPosition + "px";
}

console.log(prevBtn);

prevBtn.addEventListener("click", function () {
  moveSlider("prev");
});

nextBtn.addEventListener("click", function () {
  moveSlider("next");
});
