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
	    	
	    	$(window).scrollTop($(this).offset().top);

			contentToShow
				.addClass('active')
			    .siblings('dd').removeClass('active');
		}

		$(tabs).css({'min-height': contentToShow.outerHeight()});
	});
}));