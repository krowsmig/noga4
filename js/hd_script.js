$(document).ready(function(){
				var pd_btm  = $(".img_title_div").outerHeight() - $(".img_title_div").height();

				var top_height = $("#gnb").outerHeight() + $("#main").outerHeight() + $("#target").outerHeight() - (pd_btm  * 4 );
				var top_height_2 = top_height + $("#img_title_1").outerHeight() + $("#content_1").outerHeight() + (pd_btm  * 2 );
				var top_height_3 = top_height_2 + $("#img_title_2").outerHeight() + $("#content_2").outerHeight() + (pd_btm  * 2 );
				var top_height_4 = top_height_3 + $("#img_title_3").outerHeight() + $("#content_3").outerHeight() + (pd_btm );
				

				$(window).resize(function(){ 
					pd_btm  = $(".img_title_div").outerHeight() - $(".img_title_div").height();
					top_height = $("#gnb").outerHeight() + $("#main").outerHeight() + $("#target").outerHeight() - (pd_btm * 4 );
					top_height_2 = top_height + $("#img_title_1").outerHeight() + $("#content_1").outerHeight() + (pd_btm  * 2 );
					top_height_3 = top_height_2 + $("#img_title_2").outerHeight() + $("#content_2").outerHeight() + (pd_btm  * 2 );
					top_height_4 = top_height_3 + $("#img_title_3").outerHeight() + $("#content_3").outerHeight() + (pd_btm );
					console.log(pd_btm);

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
						// alert(top_height_2);
						$("#img_title_3 .img_title_div").removeClass("show_now");

					} else {

					}

					if ($(this).scrollTop() > top_height_4) {
						$("#img_title_4 .img_title_div").removeClass("show_now");

					} else {

					}


				});



			});
