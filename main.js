const animation = ScrollReveal({ reset: true });
const btn = document.getElementById("btn-id");
const title = document.getElementById("title");

// animation.reveal(".reveal", {
//   delay: 500,
//   origin: "top",
//   distance: "20px",
//   easing: "cubic-bezier(0.5, 0, 0, 1)",
// });

animation.reveal(".image", {
  delay: 500,
  origin: "left",
  duration: 1500,
  distance: "20px",
  easing: "cubic-bezier(0.5, 0, 0, 1)",
});

animation.reveal(".des-content", {
  delay: 1000,
  origin: "top",
  distance: "20px",
  easing: "cubic-bezier(0.5, 0, 0, 1)",
});
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

ScrollReveal().reveal(".slide-up", {
  distance: "150%",
  duration: 1500,
  origin: "top",
  opacity: null,
  easing: "cubic-bezier(0.5, 0, 0, 1)",
});

// ScrollReveal().reveal(".reveal", {
//   delay: 700,
//   easing: "cubic-bezier(0.5, 0, 0, 1)",
//   rotate: {
//     x: 20,
//     z: 20,
//   },
// });
