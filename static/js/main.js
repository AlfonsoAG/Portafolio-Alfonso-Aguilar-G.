// MENU DESLIZABLE

$("#toggle").click(function () {
  $(this).toggleClass("on");
  $("#resize").toggleClass("active");
});

$("#resize ul li a").click(function () {
  $(this).toggleClass("on");
  $("#resize").toggleClass("active");
});

$(".close-btn").click(function () {
  $(this).toggleClass("on");
  $("#resize").toggleClass("active");
});

// MENU DESLIZABLE

// ANIMACION DEL MENU

TweenMax.from("#brand", 1, {
  delay: 0.4,
  y: 10,
  opacity: 0,
  ease: Expo.easeInOut,
});

TweenMax.staggerFrom(
  "#menu li a",
  1,
  {
    delay: 0.4,
    opacity: 0,
    ease: Expo.easeInOut,
  },
  0.1
);

// ANIMACION DEL MENU
