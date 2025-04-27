let currentSlide = 0;

const slides = document.querySelector(".slides");
const totalSlides = document.querySelectorAll(".slide").length;
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

function updateSlidePosition() {
  slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function moveSlide(direction) {
  currentSlide += direction;
  if (currentSlide < 0) {
    currentSlide = totalSlides - 1;
  } else if (currentSlide >= totalSlides) {
    currentSlide = 0;
  }
  updateSlidePosition();
}

// Event listener
prevBtn.addEventListener("click", () => moveSlide(-1));
nextBtn.addEventListener("click", () => moveSlide(1));
