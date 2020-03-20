// 存储最基础的导航栏class属性值
var navbar_color_base;

jQuery(function($){
	
	// 下拉列表鼠标移入时自动下拉
	$('li.dropdown').mouseover(function(){$(this).addClass('open');}).mouseout(function(){$(this).removeClass('open');});


	// 关闭下拉列表的点击功能
	$(document).off('click.bs.dropdown.data-api');


	// 存储最基础的导航栏class值
	navbar_color_base = $('nav').attr("class");
	// 根据用户本地保存的导航栏颜色进行初始化设置
	if(localStorage.getItem("navbar_inverse") == null){
		localStorage.setItem("navbar_inverse",0);
	};
	// 设置导航栏黑色背景,白色就是默认的颜色,所以不用设置了
	if(localStorage.getItem("navbar_inverse") == 1){
		$('nav').attr("class", function(i,origValue){
			return origValue + " navbar-inverse";
		});
	};

});


// 点击黑/白按钮切换导航栏颜色,并记录
function navbar_inverse(){
	// 获取导航栏的class值,然后增加navbar-inverse
	$('nav').attr("class", function(i,origValue){
		if(localStorage.getItem("navbar_inverse") == 0){
			localStorage.setItem("navbar_inverse",1);
			return origValue + " navbar-inverse";
		}else{
			localStorage.setItem("navbar_inverse",0);
			return navbar_color_base;
		}
	});
}
	
	

