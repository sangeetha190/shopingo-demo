$(function () {
  "use strict";
  $(".banner-slider").owlCarousel({
    loop: true,
    margin: 0,
    responsiveClass: true,
    nav: true,
    navText: [
      "<i class='bx bx-chevron-left'></i>",
      "<i class='bx bx-chevron-right' ></i>",
    ],
    dots: false,
    responsive: {
      0: {
        nav: false,
        margin: 0,
        items: 1,
      },
      576: {
        nav: false,
        items: 1,
      },
      768: {
        nav: false,
        items: 1,
      },
      1024: {
        nav: false,
        items: 1,
      },
      1366: {
        items: 1,
      },
      1400: {
        items: 1,
      },
    },
  });

  $(".browse-category").owlCarousel({
    loop: true,
    margin: 24,
    responsiveClass: true,
    navText: [
      "<i class='bx bx-chevron-left'></i>",
      "<i class='bx bx-chevron-right' ></i>",
    ],
    dots: false,
    responsive: {
      0: {
        nav: false,
        margin: 16,
        items: 2,
      },
      576: {
        nav: false,
        items: 2,
      },
      768: {
        nav: false,
        items: 3,
      },
      1024: {
        nav: false,
        items: 4,
      },
      1366: {
        items: 5,
      },
      1400: {
        items: 5,
      },
    },
  });
});
