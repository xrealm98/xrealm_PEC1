import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 800,
  once: true,
});

function iniSlide() {
  let slides = document.querySelectorAll(".slide");
  let dots = document.querySelectorAll(".dot");
  let slideIndex = 1;

  function sliderShow(nSlide) {
    if (nSlide > slides.length) {
      slideIndex = 1;
    }
    if (nSlide < 1) {
      slideIndex = slides.length;
    }

    Array.from(slides).forEach((slide) => {
      slide.style.display = "none";
    });

    Array.from(dots).forEach((dot) => {
      dot.classList.remove("active");
    });

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");
  }

  const plusSlides = (n) => {
    sliderShow((slideIndex += n));
  };
  const currentSlide = (n) => {
    sliderShow((slideIndex = n));
  };
  sliderShow(slideIndex);
  document
    .querySelector(".prev")
    .addEventListener("click", () => plusSlides(-1));
  document
    .querySelector(".next")
    .addEventListener("click", () => plusSlides(1));
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => currentSlide(index + 1));
  });

  setInterval(() => {
    plusSlides(1);
  }, 4000); 
}

iniSlide();
