import AOS from "aos";
import Typed from "typed.js";
import "aos/dist/aos.css";

window.addEventListener('load', () => {
    import('aos').then((AOS) => {
        import('aos/dist/aos.css'); 
        AOS.init({
            duration: 800,
            once: true,
        });
    });
});
const typed = document.querySelector("#typed-text");
if (typed) {
  new Typed(typed, {
    strings: [
      "Explora destinos increíbles",
      "Descubre lugares únicos",
      "Vive aventuras inolvidables",
    ],
    typeSpeed: 50,
    loop: true,
  });
}

function iniSlide() {
  let slides = document.querySelectorAll(".slide");
  let dots = document.querySelectorAll(".dot");
  if (slides.length === 0 || dots.length === 0) return;
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
  }, 5000);

const slider = document.querySelector(".slider-container");
  if (!slider) return;
  let startX = 0;
  let endX = 0;

  slider.addEventListener("touchstart", function (e) {
    startX = e.touches[0].clientX;
  });

  slider.addEventListener("touchmove", function (e) {
    endX = e.touches[0].clientX;
  });
  slider.addEventListener('touchend', function() {
  if (startX - endX > 50) {
     plusSlides(1);
  } else if (endX - startX > 50) {
    plusSlides(-1);
  }
 
  startX = 0;
  endX = 0;
});
}

function scrollToTop() {
  const btnToTop = document.getElementById("btnToTop");
  if (!btnToTop) return;

  btnToTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
  window.addEventListener("scroll", () => {
    window.scrollY > 100
      ? (btnToTop.style.display = "block")
      : (btnToTop.style.display = "none");
  });
}

scrollToTop();
iniSlide();
