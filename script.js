const elements = document.querySelectorAll(".fade-in");

const showOnScroll = () => {
  elements.forEach(el => {
    const position = el.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (position < screenHeight - 100) {
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
      el.style.transition = "0.6s ease";
    }
  });
};

window.addEventListener("scroll", showOnScroll);
window.addEventListener("load", showOnScroll);