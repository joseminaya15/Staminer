$(document).ready(function(){
	$('#principal .owl-carousel').on('changed.owl.carousel', function(e) {
		var items     = e.item.count;
		var item      = e.item.index;
		$('#numberItem').text('0'+(item-2));
		$('#numberLength').text('0'+items);
	});
	$('.owl-nav').append('<div class="owl-number"><span id="numberItem">01</span>/<span id="numberLength">05</span></div>');
})
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
	info: true,
	loop : true,
	autoplay : true,
	mouseDrag: false,
	autoplayTimeout : 5000,
	navText: ['<i class="st st-arrow_left"></i>','<i class="st st-arrow_right"></i>'],
  	navElement: 'span',
});
function callback(event) {
    var items     = event.item.count;     // Number of items
    var item      = event.item.index;     // Position of the current item
	console.log(items);
}
function goToSolicitud(){
	$('#solicitud1').addClass('jm-opacity-block');
	$('#solicitud2').removeClass('jm-opacity');
}