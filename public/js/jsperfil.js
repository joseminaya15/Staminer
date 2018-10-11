var clickFoto = 0;
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
	$('#modalEditarEncabezado').modal('show');
}
function goToGaleria(){
	window.location.href = "galeria-sponsors.html";
}
function goToSponsors(){
	window.location.href = "galeria-sponsors.html";
}
function goToRed(){
	window.location.href = "galeria-sponsors.html";
}
function DeletePublicacion(){
	$('#modalDeletePublicacion').modal('show');
}
$("#elegirFotoPerfil").change(function(e){
	cambiarFotoPerfil();
});
function cambiarFotoPerfil() {
	var inputFileImage = document.getElementById("elegirFotoPersona");
	var file = inputFileImage.files[0];
	
	extImagen = $.trim(file.name.split('.').pop());
	if(extImagen == 'jpg') {
		extImagen = 'jpeg';
	}
	if(extImagen != 'png' && extImagen != 'jpg' && extImagen != 'jpeg' && extImagen != 'PNG' &&
		extImagen != 'JPG' && extImagen != 'JPEG') {
		msj('error', 'Seleccione un archivo de tipo .JPG o .JPEG o .PNG');
		return;
	}
	if($("#elegirFotoPersona").height() > 5000 || $("#elegirFotoPersona").width() > 5000) {
		msj('error', "Seleccione una imagen mas peque\u00f1a");
		return;
	}
	if(file.size/1024/1024 >= 2) {
		msj('error', "Seleccione una imagen menor a 2MB");
		return;
	}
	canvasResize(file, {
		width: 300,
		height: 0,
		crop: false,
		quality: 80,
		callback: function(data, width, height) {
			$('.cropper-container.cropper-bg').remove();
			$('#fotoRecortar').replaceWith('<img id="fotoRecortar" class="img-responsive">');
			$("#fotoRecortar").attr("src", data);
			imagenRecortada = data;
			initCropper('fotoRecortar');
			modal("modalEditarFoto");
		}
	});
}
function subirImagenRecortada(){
	modal('modalRecortarFoto');
}
function abrirSelectFoto(elem){
	if(clickFoto == 0) {
		clickFoto = 1
		if($(elem).is("button")){
			elem = $(elem).parent().find("img");
		}
		ses_persona = $(elem).attr("data-personal");
		ses_foto_colaborador = $(elem);
		$("#elegirFotoPerfil").val('');
		$("#elegirFotoPerfil").trigger('click');
		setTimeout("clickFoto = 0;", 2000);
	}
}
