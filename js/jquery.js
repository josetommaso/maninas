$(window).resize(function() {
	var viewportWidth = $(window).width();
	if (viewportWidth <= 767 ) {
		$('button').removeClass('btn-lg').addClass('btn-sm')
	}else {
		$('button').removeClass('btn-sm').addClass('btn-lg')
	}
})
