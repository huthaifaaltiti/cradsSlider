const sliderElm = document.querySelector(".slider");
const btnLeft = document.querySelector(".svg-left");
const btnRight = document.querySelector(".svg-right");
var circle = document.querySelectorAll(".circle");
var testimonialCards = document.querySelectorAll(".testimonial-card");

const numberSliderBoxs = sliderElm.children.length; // 3
let idCurrentSlide = 0;

// Functions
function moveSlider() {
  let leftMargin = (sliderElm.clientWidth / numberSliderBoxs) * idCurrentSlide;
  sliderElm.style.marginLeft = -leftMargin + "px";

  for (let i = 0; i < testimonialCards.length; i++) {
    if (leftMargin == 0) {
      circle[0].classList.add("active");
      circle[1].classList.remove("active");
      circle[2].classList.remove("active");
    } else if (leftMargin == 600) {
      circle[0].classList.remove("active");
      circle[1].classList.add("active");
      circle[2].classList.remove("active");
    } else if (leftMargin == 1200) {
      circle[0].classList.remove("active");
      circle[1].classList.remove("active");
      circle[2].classList.add("active");
    } else {
      circle[0].classList.add("active");
      circle[1].classList.remove("active");
      circle[2].classList.remove("active");
    }
  }
}
function moveLeft() {
  if (idCurrentSlide === 0) idCurrentSlide = numberSliderBoxs - 1;
  else idCurrentSlide--;

  moveSlider();
}
function moveRight() {
  if (idCurrentSlide === numberSliderBoxs - 1) idCurrentSlide = 0;
  else idCurrentSlide++;

  moveSlider();
}

// Event Listeners:
btnLeft.addEventListener("click", moveLeft);
btnRight.addEventListener("click", moveRight);

//For
for (let i = 0; i < circle.length; i++) {
  circle[i].addEventListener("click", function () {
    for (let i = 0; i < circle.length; i++) {
      circle[i].classList.remove("active");
    }

    this.classList.add("active");
  });
}

circle[0].addEventListener("click", function () {
  sliderElm.style.marginLeft = 0 + "px";
});

circle[1].addEventListener("click", function () {
  sliderElm.style.marginLeft = -600 + "px";
});

circle[2].addEventListener("click", function () {
  sliderElm.style.marginLeft = -1200 + "px";
});
