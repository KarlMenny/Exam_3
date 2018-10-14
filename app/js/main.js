'use strict';

(function($){
	$(document).ready(function() {

		$('a').click(function(){
			$('html, body').animate({
				scrollTop: $($.attr(this, 'href')).offset().top - 0
			}, 600);
			return false;
		});

		$('.menu__burger').click(function() {
			$('.menu__items').toggleClass('active');
		});

		$('.slider-works').slick({
			dots: true,
			autoplay: true,
			autoplaySpeed: 2000,
			infinite: true,
			prevArrow: '<div class="slider-works__prev"></div>',
			nextArrow: '<div class="slider-works__next"></div>',
			appendDots: $('.slider-works__pages'),
			appendArrows: $('.slider-works__arrows'),
			accessibility: true
		});
	});
})(jQuery);
