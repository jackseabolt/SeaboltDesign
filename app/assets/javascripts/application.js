// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap-sprockets
//= require turbolinks
//= require_tree .


// controlls parallex scrolling for the main background image

	function parallex() {
				var ypos = window.pageYOffset;
				var title = document.getElementById('title');
				var image = document.getElementById('section_1_background'); 
				var sub = document.getElementById('title_sub'); 
				image.style.top = ypos * 0.4 + 'px'; 
				title.style.top = ypos * -0.2 + 'px';
				sub.style.top = ypos * -0.2 + 'px';
			}
	
	window.addEventListener('scroll', parallex); 

// controls JQuery for links

$(document).on('turbolinks:load', function() {

	$('a').hover(function(){
			$(this).animate({'color':'#00ddda !important'},400);
		},
		function(){
			$(this).animate({'color':'white !important'},400);
	});
	$('.footer_links').hover(function(){
			$(this).animate({'color':'#00ddda !important'},400);
		},
		function(){
			$(this).animate({'color':'white !important'},400);
	});
})



	// $(document).on('turbolinks:load', function(){
	// 	$('.nav_item').hover(function(){
	// 		$(this).animate({'color':'#00ddda'},400);
	// 		}, 
	// 		function(){
	// 			$(this.animate({'color': 'white'}, 400);
	// 		}
	// 	);
	// });


