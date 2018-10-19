function modal(idModal) {
	$('#'+idModal).modal('toggle');
}
function initCropper(idImg) {
	'use strict';
	var console = window.console || {
		log : function() {
		}
	};
	// var $body = $('body');
	// $body.tooltip();
	var $image = $('#' + idImg);
	var $dataX = $('#dataX');
	var $dataY = $('#dataY');
	var $dataHeight = $('#dataHeight');
	var $dataWidth = $('#dataWidth');
	var $dataRotate = $('#dataRotate');
	var $dataScaleX = $('#dataScaleX');
	var $dataScaleY = $('#dataScaleY');
	var options = {
		aspectRatio : 8 / 8,
		preview : '.img-preview',
		crop : function(e) {
			$dataX.val(Math.round(e.x));
			$dataY.val(Math.round(e.y));
			$dataHeight.val(Math.round(e.height));
			$dataWidth.val(Math.round(e.width));
			$dataRotate.val(e.rotate);
			$dataScaleX.val(e.scaleX);
			$dataScaleY.val(e.scaleY);
		}
	};
	$image.on({
		'build.cropper' : function(e) {
		},
		'built.cropper' : function(e) {
		},
		'cropstart.cropper' : function(e) {
		},
		'cropmove.cropper' : function(e) {
		},
		'cropend.cropper' : function(e) {
		},
		'crop.cropper' : function(e) {
		},
		'zoom.cropper' : function(e) {
		}
	}).cropper(options);
	return $image;
}
function recortarImagen($image, fotoOriginal) {
    var $this = $('<button class="mdl-button mdl-js-button mdl-js-ripple-effect" data-method="getCroppedCanvas" id="botonRecortarPerfil" onclick="recortarImagen(this.id, \'fotoRecortar\')">recortar</button>');
    var data = $this.data();
    var $target;
    var result;
    //VERIFICAR SI EL BOTON ESTA DISABLED
    if ($this.prop('disabled') || $this.hasClass('disabled')) {
      return;
    }
    //VERIFICANDO QUE EXISTE
    if (data.method) {
      data = $.extend({}, data);
      if (typeof data.target !== 'undefined') {
        $target = $(data.target);
        if (typeof data.option === 'undefined') {
          try {
            data.option = JSON.parse($target.val());
          } catch (e) {
          }
        }
      }
      if ( (/iP(hone|od|ad)/).test(window.navigator.platform) && (fotoOriginal.height() > 1000 || fotoOriginal.width() > 1000)) {
    	  alert('achicar!!');
      }
      //RECORTAR IMAGEN
      result = $image.cropper('getCroppedCanvas', null, null);
      return result.toDataURL("image/png"); 
    }
}
function msj(tipo, msj, cabecera){
		if (tipo == 'error'){
				toastr.error(msj, cabecera, {
						closeButton: true,
						positionClass: "toast-bottom-right",
						showDuration: 250,
						hideDuration: 250,
						timeOut: 5000,
						showEasing: "swing",
						hideEasing: "swing",
						showMethod: "fadeIn",
						hideMethod: "fadeOut"
				});
		} else if (tipo == 'warning'){
				toastr.warning(msj, cabecera, {
						closeButton: true,
						positionClass: "toast-bottom-right",
						showDuration: 250,
						hideDuration: 250,
						timeOut: 5000,
						showEasing: "swing",
						hideEasing: "swing",
						showMethod: "fadeIn",
						hideMethod: "fadeOut"
				});
		} else if (tipo == 'success'){
				toastr.warning(msj, cabecera, {
						closeButton: true,
						positionClass: "toast-bottom-right",
						showDuration: 250,
						hideDuration: 250,
						timeOut: 5000,
						showEasing: "swing",
						hideEasing: "swing",
						showMethod: "fadeIn",
						hideMethod: "fadeOut"
				});
		} else{
			toastr.success(msj, cabecera, {timeOut: 4000});
		}
}