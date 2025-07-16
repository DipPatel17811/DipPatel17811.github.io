function scrollCarousel(direction) {
  const carousel = document.querySelector(".carousel");
  const scrollAmount = 350;
  carousel.scrollBy({ left: scrollAmount * direction, behavior: "smooth" });
}
