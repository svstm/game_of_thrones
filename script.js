// Инициализация слайдера для миниатюр
const thumbsSwiper = new Swiper(".thumbs-swiper", {
  slidesPerView: 3, // Показывать 3 миниатюры в строке
  grid: {
    rows: 3,
  },

  spaceBetween: 10, // Отступы между миниатюрами
  watchSlidesProgress: true, // Следить за активным слайдом
});

// Инициализация основного слайдера
const mainSwiper = new Swiper(".main-swiper", {
  spaceBetween: 10,

  navigation: {
    nextEl: ".swiper-button-next1",
    prevEl: ".swiper-button-prev1",
  },
  thumbs: {
    swiper: thumbsSwiper, // Синхронизация с миниатюрами
  },
});
