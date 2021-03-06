"use strict";

$(document).ready(function () {
  $(".js-section-result").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    dots: true,
    dotsClass: "secsion-result__dots"
  });

  var prevArr = '<button class="section-promotion__prev"><i class="fas fa-chevron-left"></i></button>';
  var nextArr = '<button class="section-promotion__next"><i class="fas fa-chevron-right"></i></button>';

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

  $(document).scroll(function () {
    var $header = $(".nav");
    $header.toggleClass("active", $(this).scrollTop() > $header.height() / 2);
  });

  $(".js-menu").click(function (e) {
    e.preventDefault();
    $(".menu").toggleClass("active");
  });

  $(document).click(function () {
    var outside = $(event.target).closest(".js-menu").length;
    if (!outside) {
      $(".menu").removeClass("active");
    }
  });

  $(".js-close-menu").click(function (e) {
    e.preventDefault();
    $(".menu").removeClass("active");
  });

  $(".js-dropdown").click(function (e) {
    $(".dropdown__list").toggleClass("show");
  });

  $(document).click(function () {
    var outside = $(event.target).closest(".js-dropdown").length;
    if (!outside) {
      $(".dropdown__list").removeClass("show");
    }
  });

  $(".dropdown__item").click(function (e) {
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
    responsive: [{
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
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

  $(".group-panel:not(:first-child)").children(".group-panel__content").hide();

  $(".group-panel:first-child").find(".group-panel__toggle").addClass("active");

  $(".group-panel__toggle").click(function () {
    $(this).toggleClass("active");
    $(this).parent().next().slideToggle();
    return false;
  });

  $(".slider-location").slick({
    autoplay: true,
    loop: true,
    slidesToShow: 2,
    arrows: false,
    dots: true,
    focusOnSelect: false,
    focusOnChange: false,
    centerMode: false,
    responsive: [{
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true
      }
    }]
  });
});