"use strict";$(document).ready(function(){$(".js-section-result").slick({slidesToShow:2,slidesToScroll:2,arrows:!1,dots:!0,dotsClass:"secsion-result__dots",responsive:[{breakpoint:1024,settings:{slidesToShow:1,slidesToScroll:1,dots:!0}},{breakpoint:1024,settings:{slidesToShow:1,slidesToScroll:1,dots:!0}}]});$(".section-promotion__slide-wrap").slick({slidesToShow:1,slidesToScroll:1,arrows:!0,appendArrows:".section-promotion__arrow",prevArrow:'<button class="section-promotion__prev"><i class="fas fa-chevron-left"></i></button>',nextArrow:'<button class="section-promotion__next"><i class="fas fa-chevron-right"></i></button>'}),$(".section-quality__slide").slick({slidesToShow:1,slidesToScroll:1,arrows:!1,dots:!0}),$(document).scroll(function(){var o=$(".nav");o.toggleClass("active",$(this).scrollTop()>o.height()/2)}),$(".js-menu").click(function(o){o.preventDefault(),$(".menu").toggleClass("active")}),$(document).click(function(){$(event.target).closest(".js-menu").length||$(".menu").removeClass("active")}),$(".js-close-menu").click(function(o){o.preventDefault(),$(".menu").removeClass("active")}),$(".js-dropdown").click(function(o){$(".dropdown__list").toggleClass("show")}),$(document).click(function(){$(event.target).closest(".js-dropdown").length||$(".dropdown__list").removeClass("show")}),$(".dropdown__item").click(function(o){o.preventDefault(),$(".dropdown__list").removeClass("show")}),$(".slider").slick({loop:!0,arrows:!1,dots:!0,focusOnSelect:!1,focusOnChange:!1,centerMode:!1,responsive:[{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]}),$(".sidebar__slider-content").slick({autoplay:!0,loop:!0,arrows:!1,dots:!0,focusOnSelect:!1,focusOnChange:!1,centerMode:!1}),$(".gallery-item").magnificPopup({type:"image",closeOnContentClick:!1,closeBtnInside:!1,mainClass:"item-slide__control",gallery:{enabled:!0,tCounter:'<span class="mfp-counter"></span>'},zoom:{enabled:!0,duration:300,easing:"ease-in-out"}})});