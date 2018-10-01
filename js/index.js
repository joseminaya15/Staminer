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
	nav : true,
	dots: false,
	loop : true,
	autoplay : true,
	mouseDrag: false,
	autoplayTimeout : 5000,
	navText: ['<i class="mdi mdi-arrow_back"></i>','<i class="mdi mdi-arrow_forward"></i>'],
  	navElement: 'span',
});

function goToSolicitud(){
	$('#solicitud1').addClass('jm-opacity-block');
	$('#solicitud2').removeClass('jm-opacity');
}