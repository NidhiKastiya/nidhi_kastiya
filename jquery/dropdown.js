// JavaScript Document
$(document).ready(function () {
			"use strict";
			$("#isSelect").click(function () {

				alert($('#power').val());
			});

			$("#selectAPEPDCL-Southern Power Distribution Ltd").click(function () {
				$("#power").val("a");

			});

			$("#selectAPEPDCL-Easten Power Distribution Ltd").click(function () {
				$("#power").val("b");

			});

			$("#selectMaharashtra State Electricity Distribution Co. ltd").click(function () {

				$("#power").val("c");

			});
			$("#selectAdani Electricity Mumbai Limited").click(function () {

				$("#power").val("d");

			});
			$("#selectTata Power").click(function () {

				$("#power").val("e");

			});
