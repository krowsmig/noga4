$(document).ready(function(){
		
	// #content_3 list click event
	$("#content_3 ul li a").click(function(){
		$(this).parent().addClass("on");
		$(this).parent().siblings().removeClass("on");

		return false;
	});

	// pagination
	$(".pagination a").click(function(){
		$(this).siblings().removeClass("on");
		$(this).addClass("on");

		var num = $(this).index();
		
		$("#step_ul").removeClass();
		$("#step_ul").addClass("num_"+num);

		return false;
	});
	

		
});
