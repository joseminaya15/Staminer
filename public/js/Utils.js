function modal(idModal) {
	$('#'+idModal).modal('toggle');
}
function initCropper(idImg) {
	'use strict';
	var console = window.console || {
		log : function() {
		}
	};
	var $body = $('body');
	$body.tooltip();
	var $image = $('#' + idImg);
	var $dataX = $('#dataX');
	var $dataY = $('#dataY');
	var $dataHeight = $('#dataHeight');
	var $dataWidth = $('#dataWidth');
	var $dataRotate = $('#dataRotate');
	var $dataScaleX = $('#dataScaleX');
	var $dataScaleY = $('#dataScaleY');
	var options = {
		aspectRatio : 9 / 9,
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