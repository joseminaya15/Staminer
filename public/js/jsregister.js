$(".jm-show").click(function() {
	$(this).find('i').toggleClass("st-mostrar st-editar");
    var input = $(this).parents('.jm-card__login--contenido').find('.jm-pass');
    if (input.attr("type") == "password") {
    	input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
});