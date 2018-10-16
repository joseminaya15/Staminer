function goToFeed(){
    window.location.href = "feed.html";
}
$(".jm-show").click(function() {
	$(this).find('i').toggleClass("st-mostrar st-editar");
    var input = $(this).parent().find('.form-control');
    if (input.attr("type") == "password") {
    	input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
});