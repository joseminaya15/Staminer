// JavaScript Document
function submenuOn(){
	document.getElementById('submenu').className ='active';
}
function submenuOff(){
	document.getElementById('submenu').className ='';
}


jQuery('document').ready(function($){
	var btnFormat = $('.foto-formato');
	
	btnFormat.click(function(){
		
		var col1 = $(this).parent().parent(),
			col2 = $(this).closest('.row').children('.info-col');
		
		if(col1.hasClass('horizontal')){
			col1.addClass('col-sm-6');
			col2.addClass('col-sm-6');
			col1.removeClass('horizontal');
			col2.removeClass('horizontal');
			
		}else{
			col1.removeClass('col-sm-6');
			col2.removeClass('col-sm-6');
			col1.addClass('horizontal');
			col2.addClass('horizontal');
		}
	});
});

/* SELECT */

var x, i, j, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom-select");
for (i = 0; i < x.length; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  /*for each element, create a new DIV that will act as the selected item:*/
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /*for each element, create a new DIV that will contain the option list:*/
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < selElmnt.length; j++) {
    /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /*when an item is clicked, update the original select box,
        and the selected item:*/
        var y, i, k, s, h;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        h = this.parentNode.previousSibling;
        for (i = 0; i < s.length; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            for (k = 0; k < y.length; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
      /*when the select box is clicked, close any other select boxes,
      and open/close the current select box:*/
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
  });
}
function closeAllSelect(elmnt) {
  /*a function that will close all select boxes in the document,
  except the current select box:*/
  var x, y, i, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  for (i = 0; i < y.length; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < x.length; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);


/* non-close Dropdown */
$('.non-close > a').on('click', function (event){
	
	if($(this).parent().hasClass('open')){
		$(this).parent().removeClass('open');
	} else{
		$('.dropdown').removeClass('open');
		$(this).parent().toggleClass('open');
	}
});
			
$('body').on('click', function (e) {
	if (!$('.non-close').is(e.target) 
	&& $('.non-close').has(e.target).length === 0 
	&& $('.open').has(e.target).length === 0
	){
	$('.non-close').removeClass('open');
}
});

$('.lnk-modal').on('click', function (event){
	$(this).parent().parent().parent().parent().removeClass('open');
});


/* Dropdown inside Overflow hidden */
$(function() {
  // whenever we hover over a menu item that has a submenu
  $('.overflowDrop').on('mouseover', function() {
    var $menuItem = $(this),
        $submenuWrapper = $('> .dropdown-menu', $menuItem);
    
    // grab the menu item's position relative to its positioned parent
    var menuItemPos = $menuItem.position();
    
    // place the submenu in the correct position relevant to the menu item
    $submenuWrapper.css({
      top: menuItemPos.top + 20,
      right: 4
    });
  });
});


// menu Políticas
  $(function() {
    $('.lnk-goto[href*="#"]:not([href="#"])').click(function() {
		
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		  
        var target = $(this.hash);
		
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
			
			$('html, body').animate({
				scrollTop: target.offset().top - 50
			}, 400);
			return false;
        }
      }
    });
  });

// menu Políticas
  $(function() {
    $('.politicas-condiciones .configuracion-menu li a[href*="#"]:not([href="#"])').click(function() {
		
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		  
        var target = $(this.hash);
		var liElement = $(this).parent();
		
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
			
			$('li').removeClass('active');
			liElement.addClass('active');
			$('html, body').animate({
				scrollTop: target.offset().top - 80
			}, 600);
			return false;
        }
      }
    });
  });

// menu Mobile perfil
  $(function() {
    $('li.gotoLnk a[href*="#"]:not([href="#"])').click(function() {
		
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		  
        var target = $(this.hash);
		var liElement = $(this).parent();
		
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
			
			if(target.is(':visible')){
				target.css({
					display: 'none'
				});
				
				$('li.gotoLnk').css({
					borderBottomColor: '#e1e1e1'
				});
				
				
			} else {
				$('.otras-redes-widget').css({
					display: 'none'
				});
				$('.col-ficha').css({
					display: 'none'
				});

				target.css({
					display: 'block'
				});

				$('li.gotoLnk').css({
					borderBottomColor: '#e1e1e1'
				});
				liElement.css({
					borderBottomColor: '#0064dc'
				});

				$('html, body').animate({
					scrollTop: target.offset().top - 98
				}, 600);
				return false;
			}
        }
      }
    });
  });

//////////////textareas
$( '.notes' ).keydown(function(){
	var textarea = $(this)[0];
	textarea.style.height = 'auto';
	textarea.style.height = textarea.scrollHeight + 'px';
});

$('#mod-editar-publicacion').on('shown.bs.modal', function (e) {
  	var el = document.getElementById('text-edit');
	el.style.height = el.scrollHeight + 'px';
});

////////////////////logro viewer

// website logro
    $('.openViewer').click(function () {
		var src = $(this).attr( "data-theUrl" );
		var theModal = $(this).attr( "href" );
        $(theModal+' iframe').attr('src', src);
    });

    $('.modal').on( 'hidden.bs.modal', function (e) {
        $('.modal iframe').removeAttr('src');
		delete src;
		delete theModal;
    });

//// carousel

$('#staminer-home-slider').carousel({
  pause: null
});