// 搜索功能,js代码

function search(value){
	
	// 点击的是搜索按钮
	if(value == undefined){
		// 传递搜索框的内容,用来增加搜索历史记录
		add_search_history($('.form-control').val());
		
	// 否则点击的是传递了参数进来的链接按钮	
	}else{
		add_search_history(value);
		$(".my-main-div").load("https://cdn.jsdelivr.net/gh/dimlt/dimlt.github.io@0.1.7/htmls/dimlt.github.io.info.html");
	}
}