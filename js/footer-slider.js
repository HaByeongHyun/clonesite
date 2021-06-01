let footerSwiper = new Swiper('.swiper-footer', {
  slidesPerView: 4,
  spaceBetween: 40,
  slidesPerGroup: 1,
  autoplay: {
    delay: 2000,
  },
  loop: true,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: '.footer-swiper-button-next',
    prevEl: '.footer-swiper-button-prev',
  },
});
