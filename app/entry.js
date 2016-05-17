var $ = require("jquery");
var _ = require("underscore");

// document.write("It works.");
$(window).ready(function () {

	$.getJSON( "/tests.json", function( tests ) {
		console.log(tests);
	  	tests = (_.isArray(tests) && !_.isString(tests))?tests:[];

	  	var markup = '';
	  	markup += '<div id="tests" style="width:400px;">';
	  	_.each(tests, function (val, index) {

	  		markup += '<div class="test" data-index="'+index+'" style="box-shadow:0px 0px 3px black;border-radius:5px;padding:10px;margin:10px;width:100%;">';
		  		markup += '<button style="margin-left:2px;">Start Test</button>';

		  		markup += '<table style="width:100%;margin-top:5px;">'
		  			markup += '<tr>'
		  				markup += '<td style="width:80%;border:1px solid black;">'
		  					markup += val['3rd'];
		  				markup += '</td>'
		  				markup += '<td class="status" style="width:20%;border:1px solid black;text-align:center;">'
		  					markup += '-';
		  				markup += '</td>'
		  			markup += '</tr>'
		  			markup += '<tr>'
		  				markup += '<td style="width:80%;border:1px solid black;">'
		  					markup += val['exe'];
		  				markup += '</td>'
		  				markup += '<td style="width:20%;border:1px solid black;text-align:center;">'
		  					markup += '-';
		  				markup += '</td>'
		  			markup += '</tr>'
		  		markup += '</table>'

		  	markup += '</div>'
	  	});
	  	markup += '</div>'

	  	var tests_el = $(markup).appendTo('body');
	  	tests_el.find('button').bind('click', function () {

	  		var button = $(this);
	  		var test_el = button.closest('.test');
	  		var index = test_el.data('index');
	  		
	  		var test = tests[index];

	  		
	  		test_el.find('.status').html('<img src="'+test['3rd']+'"/>');
	  		test_el.find('.status').find('img').bind('load error', function (e) {
	  			console.log(e);
	  		});

	  		//  $.ajax({
	  		//  	type: "HEAD",
	  		//  	async: true,
	  		//  	url: test['3rd'],
	  		//  	complete: function(jqXHR, text){
	  		//  		// console.log(jqXHR);
	  		//  		// console.log(text);
	  		//  		// console.log(jqXHR.getAllResponseHeaders());
	  		//  		statusCode = jqXHR.status;
	  		//  		// test_el.find('.status').html(text);
	  		//  	},
	  		//  	success: function(data, textStatus, request){
	  		//  		test_el.find('.status').html('Success');
			  //       // alert(request.getResponseHeader('some_header'));
			  //  	},
			  //  	error: function (request, textStatus, errorThrown) {
			  //  		test_el.find('.status').html('Error');
			  //  		console.log(request);
			  //  		console.log(textStatus);
			  //  		console.log(request.getResponseHeader('Header'));
			  //  		console.log(errorThrown);
			  //       // alert(request.getResponseHeader('some_header'));
			  //  	}
	  		// });
	  	});


	});
});