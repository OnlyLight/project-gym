$(document).ready(function() {
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
});
