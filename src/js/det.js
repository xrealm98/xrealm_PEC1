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