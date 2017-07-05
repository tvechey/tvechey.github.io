;(function () {
	$(document).ready(function (argument) {
		var $cache = {
			globalNabigation: $('.header-nav'),
			slider: $('.slider-list')
		};

		$cache.globalNabigation.on('click', '.header-nav-mobile', function () {
			$cache.globalNabigation.toggleClass('is-opened')
		});

		if ($cache.slider.length > 0) {
			$cache.slider.slick({
				dots: true,
				infinite: true,
				speed: 500,
				slidesToShow: 1,
				slidesToScroll: 1, 
				arrows: false,
				mobileFirst: true,
				autoplay: true,
				autoplaySpeed: 20000
			});
		}

	})
})();
