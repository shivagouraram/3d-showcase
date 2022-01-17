document.addEventListener("DOMContentLoaded", function () {
  const showSlider = new Swiper(".showcase__carousel", {
    loop: true,
    slidesPerView: 3,
    speed: 1800,
    centeredSlides: true,
    navigation: {
      nextEl: ".showcase__navigation-next",
      prevEl: ".showcase__navigation-prev"
    }
  });

  document.querySelector("video").playbackRate = 2;
});
