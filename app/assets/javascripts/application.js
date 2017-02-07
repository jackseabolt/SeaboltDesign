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
//= require jquery.turbolinks
//= require jquery_ujs
//= require bootstrap-sprockets
//= require turbolinks
//= require_tree .


// controlls parallex scrolling for the main background image

	function parallex() {
				var ypos = window.pageYOffset;
				var image = document.getElementById('section_1_background'); 
				image.style.top = ypos * 0.4 + 'px'; 
			}
	
	window.addEventListener('scroll', parallex); 

// controlls link hover effects

$(document).on('turbolinks:load', function(){

	function rise(){	
		var ypos = window.pageYOffset;
		var title = $('#title');
		if (ypos > 100px) {
			title.animate({top: "0px"}, 2000);
		}
	}

	window.addEventListener('scroll', rise);
});	


