$(document).ready(function(){

	/**
	 * jQuery Validate Function
	 *
	 * This function provides front-end validation for your form.
	 * If all tests set up here pass, the form data is AJAX submitted
	 * to the mailer.php file.
	 *
	 * Update this file as needed for your form.
	 * All ids and name values must match up to your form here.
	 *
	 * @author Rochelle Lewis <rlewis37@cnm.edu>
	 **/

	/* begin validate function here */
	$("#contactform").validate({

		// setup handling of form errors
		debug: true,
		errorClass: "alert alert-danger",
		errorLabelContainer: "#output-area",
		errorElement: "div",

		// rules here define what is good or bad input
		// each rule starts with the form input element's NAME attribute
		rules: {
			emailinput: {
				email: true,
				required: true,
				maxlength: 128
			},
			nameinput: {
				required: true,
				maxlength: 50
			},
			phoneinput: {
				required: false,
				maxlength: 15
			},
			companynameinput: {
				required: false,
				maxlength: 75
			},
			servicesinput: {
				required: true,
				maxlength: 2000
			},
			subjectinput: {
				required: true,
				maxlength: 50
			}
		},

		// error messages to display to the end user when rules above don't pass
		messages: {
			nameinput: {
				required: "Please enter your name.",
				maxlength: "That's a really long name, try entering a shorter nickname instead."
			},
			emailinput: {
				email: "Please enter a valid email address.",
				required: "Please enter a valid email address.",
				maxlength: "128 characters max"
			},
			servicesinput: {
				required: "Please enter a message.",
				maxlength: "2000 characters max."
			},
			subjectinput: {
				required: "Please enter a subject for your email.",
				maxlength: "50"
			}
		},

		// AJAX submit the form data to back end if rules pass
		submitHandler: function(form) {
			$("#contactform").ajaxSubmit({
				type: "POST",
				url: $("#contactform").attr("action"),

				success: function(ajaxOutput) {
					// clear the output area's formatting
					$("#output-area").css("display", "");

					// write the server's reply to the output area
					$("#output-area").html(ajaxOutput);

					// reset the form if it was successful
					if($(".alert-success").length >= 1) {
						$("#contactform")[0].reset();
					}
				}
			})
		}

	});/* end validate function here */

	// if ($(document).width() < 750) {
	// 	$('.g-recaptcha').attr('data-size', 'compact');
	// }
	// else {
	// 	$('.g-recaptcha').attr('data-size', 'normal');
	// }


});/*end document.ready()*/