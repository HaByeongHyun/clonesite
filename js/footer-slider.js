let footerSwiper = new Swiper('.swiper-footer', {
  slidesPerView: 5,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: '.footer-swiper-button-next',
    prevEl: '.footer-swiper-button-prev',
  },
});
