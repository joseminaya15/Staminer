function editInformation(){
	$('.jm-button--first').addClass('jm-opacity--done');
	$('.jm-button--second').addClass('jm-opacity--none');
	$('.jm-edit').addClass('jm-opacity--none');
}
function saveInformation(){
	$('.jm-edit').removeClass('jm-opacity--none');
	$('.jm-button--first').removeClass('jm-opacity--done');
	$('.jm-button--second').removeClass('jm-opacity--none');
}