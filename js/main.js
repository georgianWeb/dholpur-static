$(function () {
	$(window).scroll(function () {
		var hdrTop = $('.header-top').outerHeight();
		if ($(this).scrollTop() > hdrTop) {
			$('body').addClass("scroll-header");
		} else {
			$('body').removeClass("scroll-header");
		}
	});
	$("#back-to-top").hide();
	$(window).scroll(function () {
		if ($(window).scrollTop() > 100) {
			$("#back-to-top").fadeIn(500)
		} else {
			$("#back-to-top").fadeOut(500)
		}
	});
	$("#back-to-top").click(function () {
		$("body,html").animate({
			scrollTop: 0
		}, 500);
		return false
	});
	//================ header gap  
	var hdrBottom = $('.header-bottom').outerHeight();
	$('.hdr-gap').css('height', hdrBottom);

	var menuTitleSec = $('.menu-sec-title').outerHeight();
	$('.section-menu-gap').css('height', menuTitleSec);

	$(window).on('load reszie', function () {
		var hdrBottom = $('.header-bottom').outerHeight();
		$('.hdr-gap').css('height', hdrBottom);

		var menuTitleSec = $('.menu-sec-title').outerHeight();
		$('.section-menu-gap').css('height', menuTitleSec);
	});

	//========= 

	var popupBox = $('popup-wrap')

	if ($('body').hasClass('home-page')) {
		$(document).ready(function () {
			$("body").addClass("popup-show");
		});

		$("button.popup-close").click(function () {
			$("body").removeClass("popup-show");
		});

		$("body").click(function () {
			$(this).removeClass("popup-show");
		});

	}

	//============= 

	$('.hslidr-row').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: false,
		cssEase: 'linear',
		arrows: false,
		autoplay: true,
		pauseOnHover: true,
		infinite: true,
		autoplaySpeed: 1500,
		adaptiveHeight: true
	});

	$('.news-row.slider').slick({
		dots: false,
		arrows: false,
		fade: false,
		vertical: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		verticalSwiping: true,
		autoplay: true,
		pauseOnHover: true,
		autoplaySpeed: 1200,
		cssEase: 'linear',
		speed: 2000,
	});
	$('.gallerySlider').slick({
		infinite: true,
		arrows: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: ".arrPrev",
		nextArrow: ".arrNext",
		responsive: [{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
			}
		}, {
			breakpoint: 850,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
			}
		}, {
			breakpoint: 650,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			}
		}]
	});
	$('.usefulLinkSlider').slick({
		infinite: true,
		arrows: true,
		slidesToShow: 5,
		slidesToScroll: 1,
		prevArrow: ".uSarrPrev",
		nextArrow: ".uSarrNext",
		responsive: [{
			breakpoint: 1024,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 1,
			}
		}, {
			breakpoint: 850,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
			}
		}, {
			breakpoint: 653,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		}, {
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
		]
	});
	$(function () {
		$('.scroll3').infiniteslide({
			speed: 20,
			direction: 'up'
		});
	});

	$('a[href*="#"]').on('click', function (e) {
		e.preventDefault()
		$('html, body').animate({
			scrollTop: $($(this).attr('href')).offset().top - 42,
		}, 800, 'linear')
	})
	//-------- parallax 
	$.fn.parallax = function (options) {
		var windowHeight = $(window).height();
		// Establish default settings
		var settings = $.extend({
			speed: 0.12
		}, options);
		// Iterate over each object in collection
		return this.each(function () {
			// Save a reference to the element
			var $this = $(this);
			// Set up Scroll Handler
			$(window).on("scroll resize load", function () {
				var scrollTop = $(window).scrollTop();
				var offset = $this.offset().top;
				var height = $this.outerHeight();
				// Check if above or below viewport
				if (offset + height < scrollTop || offset > scrollTop + windowHeight) {
					return;
				}
				var yBgPosition = Math.floor((offset - scrollTop) * settings.speed);
				// Apply the Y Background Position to Set the Parallax Effect
				$this.css('background-position', '0 ' + yBgPosition + 'px');
			});
		});
	}
	$('.parallaxSec').parallax({
		speed: 0.2 //==== gap of image position
	});
	//========= mobile menu 
	$('.menu-wrpper ul > li.sub-item >a').after('<div class="child-trigger"><div><span></span><span></span></div></div>');
	$('.mobile-trigger').click(function () {
		$('.menu-wrpper').slideToggle(250);
		$('body').toggleClass('mobile-open');
		$('.sub-item').removeClass('child-open');
		$('.menu-wrpper .submenu').slideUp(300);
		return false;
	});

	$('.child-trigger').click(function () {
		$(this).next('.submenu').slideToggle(250);
		$(this).next('.submenu').children('.sub-item').find('.submenu').slideUp(250);
		$(this).next('.submenu').children('.sub-item').removeClass('child-open');
		$(this).parent().toggleClass('child-open');
		return false;
	});

	//====== 

	$('table.table').wrap('<div class="table-wrap">');

});
$(document).ready(function () {
	var banrHeight = $('.banner-area').outerHeight();
	var scrollHeight = banrHeight - '40';
	$(".page-scroll-arrow").click(function () {
		$("body,html").animate({
			scrollTop: scrollHeight
		}, 500);
		return false
	});
});