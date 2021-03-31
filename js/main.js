//SLIDER SECTION ONE
let swiper = new Swiper('.slider-main01', {
  pagination: {
    el: '.slider-pag-main01',
  },
});

//SLIDER SECTION THIRD
var swiperServices = new Swiper('.servicios01',
  {
    slidesPerView: 4,
    spaceBetween: 20,
    pagination: {
      el: '.servicios-pag01',
      clickable: true,
    },
    navigation: {
      nextEl: '.servicios-pag-left-arrow01',
      prevEl: '.servicios-pag-right-arrow01',
    },
    breakpoints: {
      '@0.00': {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      '@0.75': {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      '@1.00': {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      '@1.50': {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    }

  });


//SLIDER SECTION FOUR


let swiperCustomers = new Swiper('.cliente01',
  {
    slidesPerView: 6,
    spaceBetween: 60,
    pagination: {
      el: '.cliente-pag01',
      clickable: true,
    },
    navigation: {
      nextEl: '.cliente-pag-left-arrow01',
      prevEl: '.cliente-pag-right-arrow01',
    },
    breakpoints: {

      '@0.00': {
        slidesPerView: 2,
      },
      '@0.95': {
        slidesPerView: 2,
      },
      '@1.25': {
        slidesPerView: 3,
      },
      '@1.50': {
        slidesPerView: 6,
      },
    }
  });