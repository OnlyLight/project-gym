"use strict";$(document).ready(function(){$(document).scroll(function(){var e=$(".nav");e.toggleClass("active",$(this).scrollTop()>e.height()/2)}),$(".js-menu").click(function(e){e.preventDefault(),$(".menu").toggleClass("active")}),$(document).click(function(){$(event.target).closest(".js-menu").length||$(".menu").removeClass("active")}),$(".js-close-menu").click(function(e){e.preventDefault(),$(".menu").removeClass("active")}),$(".js-dropdown").click(function(e){$(".dropdown__list").toggleClass("show")}),$(document).click(function(){$(event.target).closest(".js-dropdown").length||$(".dropdown__list").removeClass("show")}),$(".dropdown__item").click(function(e){e.preventDefault(),$(".dropdown__list").removeClass("show")}),$(".slider").slick({loop:!0,arrows:!1,dots:!0,focusOnSelect:!1,focusOnChange:!1,centerMode:!1})});