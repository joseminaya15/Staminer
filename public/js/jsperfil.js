function editInformation(){
	$('.jm-button--first').addClass('jm-opacity--done');
	$('.jm-button--second').addClass('jm-opacity--none');
	$('.jm-edit').addClass('jm-opacity--none');
	$('#informacion-oculta').show();
}
function saveInformation(){
	$('.jm-edit').removeClass('jm-opacity--none');
	$('.jm-button--first').removeClass('jm-opacity--done');
	$('.jm-button--second').removeClass('jm-opacity--none');
	$('#informacion-oculta').hide();
}
$('.jm-line').keydown(function(){
	var textarea = $(this)[0];
	textarea.style.height = 'auto';
	textarea.style.height = textarea.scrollHeight + 'px';
	// if( $('textarea').height() >= '54px'){
	// 	$('.jm-line').css('height','54px !important');
	// 	console.log("entra");
	// }
});
function goToEditCabecera(){
	$('#modalEncabezado').modal('show');
}
