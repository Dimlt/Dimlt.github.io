// 到页面的顶部
function to_top(){
	$(window).scrollTop(0);
}

// 到页面的底部
function to_bottom(){
    $(document).scrollTop($(document).height()-$(window).height());
}


jQuery(function($){
	
	// 到页面顶部的图片切换
	$('#to-top-span').hover(
		function(){$('#to-top-img1').hide();$('#to-top-img2').show();},
		function(){$('#to-top-img2').hide();$('#to-top-img1').show();}
	);
	
	// 到页面底部的图片切换
	$('#to-bottom-span').hover(
		function(){$('#to-bottom-img1').hide();$('#to-bottom-img2').show();},
		function(){$('#to-bottom-img2').hide();$('#to-bottom-img1').show();}
	);
	
});










