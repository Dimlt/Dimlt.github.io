jQuery(function($){
	
// 下拉列表鼠标移入时自动下拉
$('li.dropdown').mouseover(function(){$(this).addClass('open');}).mouseout(function(){$(this).removeClass('open');});


// 关闭下拉列表的点击功能
$(document).off('click.bs.dropdown.data-api');


});

