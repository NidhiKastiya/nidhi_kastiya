// JavaScript Document
$(document).ready(function ($) {
	"use strict";
	slideShow();


	function slideShow() {


		var current = $('#slider .show');

		var next = current.next().length ?
			current.next() :
			current.siblings().first();


		current.hide().removeClass('show');
		next.fadeIn("slow").addClass('show');


		setTimeout(slideShow, 3000);

	};

});
