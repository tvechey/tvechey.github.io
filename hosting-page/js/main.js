;($(document).ready(function() {
	var tabs = '.tabs',
		tabsHeight = $('.tabs-content-item.active').outerHeight();

	$(tabs).css({'min-height': tabsHeight});

	$(tabs).on('click', '.tabs-item', function (e) {
		var	attr = $(this).attr('data-show'),
			contentToShow = $(this).next();

		var isActive = $(this).hasClass('active') ? true : false;

		if (!isActive) {
			$(this)
				.addClass('active')
			    .siblings('dt').removeClass('active');

			contentToShow
				.addClass('active')
			    .siblings('dd').removeClass('active');

			$(window).scrollTop(contentToShow.offset().top);
		}

		$(tabs).css({'min-height': contentToShow.outerHeight()});
	});
}));