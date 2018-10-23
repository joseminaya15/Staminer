function goToFeed(){
    window.location.href = "feed.html";
}
$(".jm-show").click(function() {
	$(this).find('i').toggleClass("active");
    var input = $(this).parent().find('.form-control');
    if (input.attr("type") == "password") {
    	input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
});
function sendPassword(){
    var correo = $('#correo_password').val();
    if( correo == null || correo == "" ){
        msj('error', 'Escriba su correo');
	    return;
    }else{
        msj('error', 'Su contraseña ha sido enviada');
    }
    // $('#ModalForgetPassword').modal('hide');
}