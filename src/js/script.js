$(document).ready(function () {

	//slick-slider

	$('.carousel__inner').slick({
		speed: 1200,
		autoplay: false,
		autoplaySpeed: 1200,
		prevArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
		nextArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
		responsive: [{
			breakpoint: 768,
			adaptiveHeight: true,
			settings: {
				dots: true,
				arrows: false
			}
		}, ]
	});

	//Slide of card

	$('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
		$(this)
			.addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
			.closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
	});

	function toggleSlide(item) {
		$(item).each(function (i) {
			$(this).on('click', function (e) {
				e.preventDefault();
				$('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
				$('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
			});
		});
	};
	toggleSlide('.catalog-item__link');
	toggleSlide('.catalog-item__back');

	// Modal windows 

	$('[data-modal=consultation]').on('click', function () {
		$('body').addClass('_lock');
		$('.overlay, #consultation').fadeIn('slow');
	});

	$('.modal__close').on('click', function () {
		$('body').removeClass('_lock');
		$('.overlay, #consultation, #order, #thanks').fadeOut();
	});

	// $('.overlay').on('click', function () {
	// 	$('body').removeClass('_lock');
	// 	$('.overlay, #consultation, #order, #thanks').fadeOut();
	// });

	$('.button_catalog').each(function (i) {
		$(this).on('click', function () {
			$('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
			$('.overlay, #order').fadeIn('slow');
		});
	});

	function validateForms(form) {
		$(form).validate({
			rules: {
				name: {
					required: true,
					minlength: 2
				 },
				phone: "required",
				email: {
					required: true,
					email: true
				}
			},
			messages: {
				name: {
					required: "Введите свое имя",
					minlength: jQuery.validator.format("Минимальное кол-во символов: {0}")
				 },
				phone: "Введите номер вашего телефона",
				email: {
					required: "Нам нужен ваш email для обратной связи",
					email: "Ваш email должен соответствовать формату: name@domain.com"
				}
			}
		});
	}

	validateForms('#consultation-form');
	validateForms('#consultation form');
	validateForms('#order form');

	$('input[name=phone]').mask("+375 (99) 999-99-99");

});