
;(function() {
	$(document).ready(function () {

		var $cache = {
			isDesktop: $('html.no-touch').length > 0 ? true : false,
			slider: $('.slider-list')
		};

		$cache.slider.slick({
			dots: true,
			infinite: true,
			speed: 500,
			fade: true,
			cssEase: 'linear',
			slidesToShow: 1,
			slidesToScroll: 1, 
			arrows: false,
			mobileFirst: true
		});

		if (!$cache.isDesktop) {
			$(document).on('click', '.h-nav-m-icon', function (e) {
				e.preventDefault();
				var navigation = $('.h-nav'),
					menuIcon = $(this).find('i');

				if(navigation.hasClass('open')) {
					navigation.removeClass('open');
				} else {	
					navigation.addClass('open');
				}
			});

			$(document).on('click', '.h-nav-link, .h-nav-submenu_link', function (e) {
				var	_this = $(this),
					parentNode = _this.parent('li');


				if (parentNode.has('div').length !== 0) {
					e.preventDefault();

					if(parentNode.hasClass('open')) {
						_this.removeClass('open');

						parentNode.removeClass('open');
					} else {
						_this.addClass('open');
				
						parentNode.addClass('open');
						parentNode.siblings().removeClass('open');
					}
				}
			});
		}

	});
}());

