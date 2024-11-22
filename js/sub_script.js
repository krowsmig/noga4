$(document).ready(function(){
	
	// navigation button
	$("nav a").click(function(){
		$("body").toggleClass("open");

		return false;
	});

	

	var getHeights = $("#main").outerHeight() -300;
	$(window).resize(function(){ 
		getHeights = $("#main").outerHeight() -300;
	});
	$(function(){
		$(window).scroll(function(){
			if ($(this).scrollTop() > getHeights) {

				$(".target_ul").addClass("chart_ani");

				setTimeout(function(){
					$(".target_ul").addClass("after");
				}, 4000);
			} else {
				// $(".target_ul").removeClass("chart_ani");
				// $(".target_ul").removeClass("after");
			}
		}).resize(function(){ 
			if ($(this).width() < 1024) {
				
			} else {

			}
		});
	});


});
