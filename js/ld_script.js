$(document).ready(function(){

	// add classes to body for animation
	$("body").addClass("no_y ld_1 ld_4 ld_none");

	// reduce opacity of the whole contents 
	$("#wrapper").css("opacity","0");
	
	// handle links with @href started with '#' only
	$(document).on('click', 'a[href^="#"]', function(e) {
	    // target element id
	    var id = $(this).attr('href');

	    // target element
	    var $id = $(id);
	    if ($id.length === 0) {
	        return;
	    }

	    // prevent standard hash navigation (avoid blinking in IE)
	    e.preventDefault();

	    // top position relative to the document
	    var pos = $id.offset().top;

	    // animated top scrolling
	    $('body, html').animate({scrollTop: pos});
	});

	$(window).scroll(function(){
		// var roll = $('body').scrollTop(200);

		if ($(window).scrollTop() >= 400) {
			$("#wrapper").addClass("slide");
			$(".top_btn").addClass("add_top");
			$(".move_div").addClass("showup");
		} else {
			$("#wrapper").removeClass("slide");
			$(".top_btn").removeClass("add_top");
			$(".move_div").removeClass("showup");
	
		}

	});

	// hamburger button
	$(".burger a").click(function(){
		$("body").toggleClass("open");

		return false;
	});

	// navigation button
	$("nav").click(function(){
		$("body").removeClass("open");

	});


	// Close menu by pressing the ESC key.
	$(document).keyup(function (e) {
	  if ($('body').hasClass('open') && e.keyCode === 27) { // ESC
	    $('body').removeClass('open');
	  }
	});

	
});

$(window).on("load", function() {

		// loading animtion
		$("#wrapper").css("opacity","0");
		setTimeout(function(){
			$("#wrapper").css("opacity","1");
		}, 1000);
		setTimeout(function(){
			$("body").addClass("ld_2");
			$("body").removeClass("no_y");
		}, 2000);

		setTimeout(function(){
			$("body").addClass("ld_3");
			$("body").removeClass("ld_4");
		}, 3000);


		setTimeout(function(){
			$("body").addClass("adjst");
			$("body").removeClass("no_y");
			$("body").removeClass("ld_none");
			$("body").removeClass("ld_1");
			$("body").removeClass("ld_2");
			$("body").removeClass("ld_3");
			$("body").removeClass("ld_4");
		}, 4000);


		// sub span animation (add class)
		setTimeout(function(){
			$("#cont .sub span").each(function(k, v) {
				var el = this;		
				setTimeout(function(){
					$(el).addClass("ro_ani");
				}, k*700);			
			});

		}, 3800);

		// sub span animation (remove class)
		setTimeout(function(){
			$("#cont .sub span").each(function(k, v) {
				var el = this;		
				setTimeout(function(){
					$(el).removeClass("ro_ani");
				}, k*1000);			
			});
		}, 6000);
	

		// main span animation
		setTimeout(function(){

			$("#cont .main span").eq(0).addClass("txt_ani");

			setTimeout(function(){
					$("#cont .main span").eq(0).removeClass("txt_ani");
				}, 2400);
		}, 3800);

		setTimeout(function(){

			$("#cont .main span").eq(1).addClass("txt_ani");

			setTimeout(function(){
					$("#cont .main span").eq(1).removeClass("txt_ani");
				}, 1300);
		}, 6000);

		setTimeout(function(){

			$("#cont .main span").eq(2).addClass("txt_ani");

			setTimeout(function(){
					$("#cont .main span").eq(2).removeClass("txt_ani");
				}, 1250);
		}, 7400);

		setTimeout(function(){

			$("#cont .main span").eq(3).addClass("txt_ani");

			setTimeout(function(){
					$("#cont .main span").eq(3).removeClass("txt_ani");
				}, 2200);
		}, 8900);

		// lazy loading for background images
		$(".lazy_img").removeClass("lazy_css");

		// close move div
		setTimeout(function(){
			$(".move_div").addClass("close");
		}, 90000);


});
