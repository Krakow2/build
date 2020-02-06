$(document).ready(function () {
  $('.hero-slider').slick({
    arrows: true,
    dots: true,
    prevArrow: $('.hero-arrow__left'),
    nextArrow: $('.hero-arrow__right'),
    autoplay: true,
    autoplaySpeed: 2000
  });
});

$(document).ready(function () {
  $('.apart-slider').slick({
    arrows: true,
    dots: false,
    prevArrow: $('.apart-arrow__left'),
    nextArrow: $('.apart-arrow__right'),
    autoplay: false,
    autoplaySpeed: 2000
  });
});

$('.menu-btn').on('click', function (e) {
  e.preventDefault();
  $('.menu').toggleClass('menu_active');
  $('.content').toggleClass('content_active');
});

$('.menu-btn').on('click', function (e) {
  e.preventDefault;
  $(this).toggleClass('menu-btn_active');
});
