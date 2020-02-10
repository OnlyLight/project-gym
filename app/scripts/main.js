$(document).ready(function() {
  $(".js-section-result").slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: false,
    dots: true,
    dotsClass: "secsion-result__dots",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        }
      }
    ]
  });

  var prevArr =
    '<button class="section-promotion__prev"><i class="fas fa-chevron-left"></i></button>';
  var nextArr =
    '<button class="section-promotion__next"><i class="fas fa-chevron-right"></i></button>';

  $(".section-promotion__slide-wrap").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    appendArrows: ".section-promotion__arrow",
    prevArrow: prevArr,
    nextArrow: nextArr
  });

  $(".section-quality__slide").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true
  });

  $(document).scroll(function() {
    var $header = $(".nav");
    $header.toggleClass("active", $(this).scrollTop() > $header.height() / 2);
  });

  $(".js-menu").click(function(e) {
    e.preventDefault();
    $(".menu").toggleClass("active");
  });

  $(document).click(function() {
    var outside = $(event.target).closest(".js-menu").length;
    if (!outside) {
      $(".menu").removeClass("active");
    }
  });

  $(".js-close-menu").click(function(e) {
    e.preventDefault();
    $(".menu").removeClass("active");
  });

  $(".js-dropdown").click(function(e) {
    $(".dropdown__list").toggleClass("show");
  });

  $(document).click(function() {
    var outside = $(event.target).closest(".js-dropdown").length;
    if (!outside) {
      $(".dropdown__list").removeClass("show");
    }
  });

  $(".dropdown__item").click(function(e) {
    e.preventDefault();
    $(".dropdown__list").removeClass("show");
  });

  $(".slider").slick({
    // autoplay: true,
    loop: true,
    arrows: false,
    dots: true,
    focusOnSelect: false,
    focusOnChange: false,
    centerMode: false
  });

  // MagnificPopup
  $(".gallery-item").magnificPopup({
    type: "image",
    closeOnContentClick: false,
    closeBtnInside: false,
    mainClass: "item-slide__control",
    gallery: {
      enabled: true,
      tCounter: '<span class="mfp-counter"></span>'
    },
    zoom: {
      enabled: true,

      duration: 300,
      easing: "ease-in-out"
    }
  });
});
