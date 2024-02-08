const slide = document.getElementById("slide");
const slideItems = document.querySelectorAll(".slide-item");
const prev = document.querySelector(".arrow-prev");
const next = document.querySelector(".arrow-next");
const step = 400;
let current = 0;
let max = 4;

(function () {
  prev.addEventListener("click", function () {
    shiftSlide("prev");
  });

  next.addEventListener("click", function () {
    shiftSlide("next");
  });

  function shiftSlide(direction) {
    if (direction === "prev") {
      if (current === 0) {
        current = max;
      } else {
        current--;
      }
    } else {
      if (current === max) {
        current = 0;
      } else {
        current++;
      }
    }

    slideItems.forEach((slideItem, index) => {
      // console.log(index, current, index - current);
      slideItem.style.transform = `translateX(${-400 * current}px)`;
    });
  }
})();
