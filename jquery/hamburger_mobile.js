// JavaScript Document
$(document).ready(function () {
	"use strict";
	var moboContainer = $('.moboheaderConter');

	$('.moboHeaderDiv').click(function () {

		if (moboContainer.css('width') == '0px') {
			moboContainer.removeClass('moboStyle2');

			moboContainer.addClass('moboStyle');
			$('.overflow').css('display', 'block');
		} else {
			moboContainer.removeClass('moboStyle');
			moboContainer.addClass('moboStyle2');
			$('.overflow').css('display', 'none');
		}
	})
});
