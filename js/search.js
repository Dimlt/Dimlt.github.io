// 搜索功能,js代码

function search(value){
	
	// 点击的是搜索按钮
	if(value == undefined){
		// 传递搜索框的内容,用来增加搜索历史记录
		add_search_history($('.form-control').val());
		
	// 否则点击的是传递了参数进来的链接按钮	
	}else{
		// 增加搜索历史记录
		add_search_history(value);
		
		// 如果该标签没有对应的html文件,则返回404页面
		if(label_html_map.get(value) == undefined || label_html_map.get(value) == null || $.trim(label_html_map.get(value)) == ''){
			$(".my-main-div").load("https://cdn.jsdelivr.net/gh/dimlt/dimlt.github.io@0.2.7/htmls/404.html",search_finished_html);
		}else{
			$(".my-main-div").load("https://cdn.jsdelivr.net/gh/dimlt/dimlt.github.io@0.2.7/htmls/"+label_html_map.get(value));
		}
		
	}
}

// 存储文章的标签和文章html对应关系的map
// 导航栏文章标签 : 文章html文件名
var label_html_map = new Map();

jQuery(function($){
	
	// 手动配置已经写好的文章的map
	label_html_map.set('前端','dimlt.github.io.info.html');
	
});

// 搜索已经完成了的文章
function search_finished_html(){
	
	// 搜索已经完成了的文章,并显示到404页面
	label_html_map.forEach(function (value,key) {
		$('#finished-html-404').append("<h5 style='font-size:20px'> <a href=\"javascript:search('"+key+"')\" style='color:#4986b0;text-decoration:none;'><strong>"+key+"</strong></a></h5>");
	});
	
}
