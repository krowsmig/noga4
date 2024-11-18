$(document).ready(function(){

	// menu ul list mouseover event
	$(".menu_ul li").mouseover(function(){
		var getIndex = $(this).index();


		$(".mob_div").addClass("mob_class_"+getIndex);

	});

	// menu ul list mouseleave event
	$(".menu_ul li").mouseleave(function(){
		getIndex = $(this).index();

		$(".mob_div").removeClass("mob_class_"+getIndex);


	});

	// prevent site from being refreshed
	$(".menu_ul li a").click(function(){
		return false;

	});

		
});
