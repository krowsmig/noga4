$(document).ready(function(){
	var pd_btm  = $(".img_title_div").outerHeight() - $(".img_title_div").height();

	var top_height = $("#gnb").outerHeight() + $("#main").outerHeight() + $("#target").outerHeight() - (pd_btm  * 3 );
	var top_height_2 = top_height + $("#img_title_1").outerHeight() + $("#content_1").outerHeight() + $("#content_2").outerHeight()  + (pd_btm  * 1 );
	var top_height_3 = top_height_2 + $("#img_title_2").outerHeight() + $("#content_3").outerHeight() + (pd_btm + pd_btm);
	var top_height_4 = top_height_3 + $("#img_title_3").outerHeight() + $("#content_4").outerHeight() + (pd_btm - 200);
	
	
	$(window).resize(function(){ 
		pd_btm  = $(".img_title_div").outerHeight() - $(".img_title_div").height();
	
		top_height = $("#gnb").outerHeight() + $("#main").outerHeight() + $("#target").outerHeight() - (pd_btm  * 3 );
		top_height_2 = top_height + $("#img_title_1").outerHeight() + $("#content_1").outerHeight() + $("#content_2").outerHeight()  + (pd_btm  * 1 );
		top_height_3 = top_height_2 + $("#img_title_2").outerHeight() + $("#content_3").outerHeight() + (pd_btm + pd_btm);
		top_height_4 = top_height_3 + $("#img_title_3").outerHeight() + $("#content_4").outerHeight() + (pd_btm - 200);
	});
	
	$(".img_title_div").addClass("show_now");
	
	
	$(window).scroll(function(){
		if ($(this).scrollTop() > top_height) {
			
			$("#img_title_1 .img_title_div").removeClass("show_now");
	
		}  else {
	
		}
	
	
		if ($(this).scrollTop() > top_height_2) {
			
			$("#img_title_2 .img_title_div").removeClass("show_now");
	
		} else {
	
		}
	
		if ($(this).scrollTop() > top_height_3) {
			
			$("#img_title_3 .img_title_div").removeClass("show_now");
	
		} else {
	
		}
	
		if ($(this).scrollTop() > top_height_4) {
			
			$("#img_title_4 .img_title_div").removeClass("show_now");
	
		} else {
	
		}
	
	
	});	
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
