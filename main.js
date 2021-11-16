const animation = ScrollReveal({ reset: true });
const tooltip = document.getElementById("hoverid");

function mouseover() {
  tooltip.style.borderRadius = "25%";
  tooltip.style.transition = "0.3s ease";
}

function mouseout() {
  tooltip.style.borderRadius = "50%";
  tooltip.style.transition = "0.3s ease";
}

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

animation.reveal(".slide-up", {
  distance: "150%",
  duration: 1500,
  origin: "top",
  opacity: null,
  easing: "cubic-bezier(0.5, 0, 0, 1)",
});

animation.reveal(".rotate1", {
  delay: 1600,
  origin: "right",
  rotate: {
    x: 200,
    z: 100,
    y: 100,
  },
});

animation.reveal(".rotate2", {
  delay: 1700,
  origin: "right",
  rotate: {
    x: 100,
    z: 100,
    y: 100,
  },
});

animation.reveal(".rotate3", {
  delay: 1800,
  origin: "right",
  rotate: {
    x: 100,
    z: 100,
    y: 100,
  },
});

animation.reveal(".rotate4", {
  delay: 1900,
  origin: "right",
  rotate: {
    x: 100,
    z: 100,
    y: 100,
  },
});

animation.reveal(".rotate5", {
  delay: 2000,
  origin: "right",
  rotate: {
    x: 100,
    z: 100,
    y: 100,
  },
});
