$(document).ready(function() {
  $(".js-section-result").slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    arrows: false,
    dots: true,
    dotsClass: "secsion-result__dots",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true
        }
      },
      {
        breakpoint: 992,
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
    centerMode: false,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $(".sidebar__slider-content").slick({
    autoplay: true,
    loop: true,
    arrows: false,
    dots: true,
    focusOnSelect: false,
    focusOnChange: false,
    centerMode: false
  });

  $(".group-panel .group-panel__content").hide();
  $(".group-panel__toggle").click(function() {
    $(".group-panel__toggle .icon")
      .removeClass("plus")
      .addClass("minus");
    $(this)
      .children()
      .removeClass("minus")
      .addClass("plus");
    $(".group-panel .group-panel__content").slideUp();
    $(this)
      .parent()
      .next()
      .slideDown();
    return false;
  });
});
