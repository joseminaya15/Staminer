$('#principal .owl-carousel').owlCarousel({
	lazyLoad : true,
	animateOut: 'fadeOut',
	animateIn: 'fadeIn',
	responsive : {
		0 : {
			items : 1
		}
	},
	navigation : false,
	nav : false,
	dots: false,
	loop : true,
	autoplay : true,
	mouseDrag: false,
	autoplayTimeout : 5000
});

function goToSolicitud(){
	$('#solicitud1').addClass('jm-opacity-block');
	$('#solicitud2').removeClass('jm-opacity');
}