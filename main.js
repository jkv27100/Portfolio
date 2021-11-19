const animation = ScrollReveal({ reset: false });
const btn = document.getElementById("button");

document.addEventListener("scroll", handleScroll);
// get a reference to our predefined button
var scrollToTopBtn = document.querySelector(".scrollToTopBtn");

function handleScroll() {
  var scrollableHeight = document.documentElement.clientHeight;
  var GOLDEN_RATIO = 0.5;

  if (document.documentElement.scrollTop / scrollableHeight > GOLDEN_RATIO) {
    //show button
    if (!scrollToTopBtn.classList.contains("showScrollBtn"))
      scrollToTopBtn.classList.add("showScrollBtn");
  } else {
    //hide button
    if (scrollToTopBtn.classList.contains("showScrollBtn"))
      scrollToTopBtn.classList.remove("showScrollBtn");
  }
}

scrollToTopBtn.addEventListener("click", scrollToTop);

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

animation.reveal(".image", {
  delay: 500,
  origin: "left",
  duration: 1500,
  distance: "20px",
  easing: "cubic-bezier(0.5, 0, 0, 1)",
});

// animation.reveal(".des-content", {
//   delay: 1000,
//   origin: "top",
//   distance: "20px",
//   easing: "cubic-bezier(0.5, 0, 0, 1)",
// });
animation.reveal(".header", {
  delay: 1200,
  origin: "top",
  distance: "20px",
  easing: "cubic-bezier(0.5, 0, 0, 1)",
});
animation.reveal(".details", {
  delay: 1400,
  origin: "top",
  distance: "20px",
  easing: "cubic-bezier(0.5, 0, 0, 1)",
});

animation.reveal(".slide", {
  delay: 1600,
  origin: "top",
  distance: "20px",
  easing: "cubic-bezier(0.5, 0, 0, 1)",
});

animation.reveal(".slide-up", {
  distance: "150%",
  duration: 1500,
  origin: "top",
  opacity: null,
  easing: "cubic-bezier(0.5, 0, 0, 1)",
});

animation.reveal(".fade-in", {
  delay: 1800,
  duration: 1600,
  origin: "top",
  distance: "50px",
  easing: "cubic-bezier(0.5, 0, 0, 1)",
});

animation.reveal(".reveal-text", {
  delay: 500,
  duration: 1000,
  origin: "bottom",
  distance: "20px",
  easing: "cubic-bezier(0.5, 0, 0, 1)",
});

animation.reveal(".step-name", {
  delay: 1200,
  duration: 600,
  origin: "bottom",
  distance: "20px",
  easing: "cubic-bezier(0.5, 0, 0, 1)",
});

animation.reveal(".stepper-wrapper", {
  delay: 1000,
  duration: 600,
  origin: "bottom",
  distance: "50px",
  easing: "cubic-bezier(0.5, 0, 0, 1)",
});

animation.reveal(".fade-sec", {
  delay: 300,
  duration: 1000,
  origin: "bottom",
  distance: "100px",
  easing: "cubic-bezier(0.5, 0, 0, 1)",
});
