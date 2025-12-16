const burger = document.getElementById("burger");
const header = document.getElementById("header");
const body = document.getElementById("body");

burger.addEventListener("click", () => {
  header.classList.toggle("active");
  burger.classList.toggle("active");
  body.classList.toggle("active");
});

let index = 0;

function moveSlide(step) {
  const items = document.querySelectorAll(".carousel-item");
  const itemsPerSlide = 1;
  index += step;

  const totalItems = items.length;
  const maxIndex = Math.ceil(totalItems / itemsPerSlide) - 1;

  if (index > maxIndex) {
    index = 0;
  } else if (index < 0) {
    index = maxIndex;
  }

  const carouselContainer = document.querySelector(".carousel-container");
  carouselContainer.style.transform = `translateX(-${index * 100}%)`;

  updateDots();
}

function currentSlide(n) {
  index = n;
  const carouselContainer = document.querySelector(".carousel-container");
  carouselContainer.style.transform = `translateX(-${index * 100}%)`;

  updateDots();
}

function updateDots() {
  const dots = document.querySelectorAll(".dot");
  dots.forEach((dot) => dot.classList.remove("active"));
  dots[index].classList.add("active");
}

let reviewIndex = 0;

function moveReviewSlides(step) {
  const reviewItems = document.querySelectorAll(".review-slide");
  const totalReviewItems = reviewItems.length;
  reviewIndex += step;

  if (reviewIndex >= totalReviewItems) {
    reviewIndex = 0;
  } else if (reviewIndex < 0) {
    reviewIndex = totalReviewItems - 1;
  }

  const reviewCarousel = document.querySelector(".review-carousel-container");
  reviewCarousel.style.transform = `translateX(-${reviewIndex * 100}%)`;
}

const animatedItems = document.querySelectorAll(
  ".animate, .animate-left, .animate-right, .animate-scale"
);

function animateOnScroll() {
  animatedItems.forEach((el) => {
    const rect = el.getBoundingClientRect().top;
    const triggerPoint = window.innerHeight - 80;

    if (rect < triggerPoint) {
      el.classList.add("show");
    }
  });
}

window.addEventListener("scroll", animateOnScroll);
window.addEventListener("load", animateOnScroll);
