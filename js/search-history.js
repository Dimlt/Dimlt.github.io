// 搜索历史的具体js代码 
// 使用该功能时,在ul标签的class属性中追加一个 search-history-ul 值即可

var availableTags = new Array();

jQuery(function($){

	// 输入搜索关键字时,自动弹出提示
		// 需要导入外部js和css文件
		// <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
		// <link rel="stylesheet" href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
	$('.nav li ul li a').each(function(){
			availableTags.push($(this).html()); //自动获取导航栏下拉列表的值
	});
	$("#search-input" ).autocomplete({
		  source: availableTags
	});
	
	// 显示当前的搜索历史
	get_search_history();
	
});


// 刷新历史记录 
function get_search_history(){
	// 创建两个数组,用于获取标签历史记录和非标签历史记录
	var search_history_label = new Array();
	var search_history_array = new Array();
	// 获取标签历史记录
	if(localStorage.getItem("search_history_label") != null){
		search_history_label = localStorage.getItem("search_history_label").split(',');
	}
	// 获取非标签历史记录
	if(localStorage.getItem("search_history_array") != null){
		search_history_array = localStorage.getItem("search_history_array").split(',');
	}
	// 清空历史记录
	var search_history_ul = $(".search-history-ul");
	search_history_ul.empty();
	search_history_ul.html("<li class='search-history-label'></li><li class='divider'></li>");
	// 给标签历史记录赋值
	$.each(search_history_label,function(index,value){
		// 设置标签历史记录的html
		var search_history_label_html = "&nbsp;<span class='label label-primary'>"+value+"</span>";
		// 如果是最后一个标签,则加上一个空格
		if(index == 0){
			search_history_label_html = search_history_label_html+"&nbsp;"
		}
		// 往前追加显示标签历史记录
		$(".search-history-label").prepend(search_history_label_html);
	});
	// 给非标签历史记录赋值
	$.each(search_history_array,function(index,value){
		// 设置非标签历史记录的html
		var search_history_array_html = "<li><span>&nbsp;&nbsp;&nbsp;"+value+"&nbsp;&nbsp;<a href='javascript:;' onclick='del_search_history("+index+")'>删除</a></span></li><li class='divider'></li>";
		// 往前追加显示非标签历史记录
		$(".search-history-label + li").after(search_history_array_html);
		// 当为非标签历史记录的最后一个的时候,删除最后的那根横线
		if(index == search_history_array.length){
			$('.search-history-ul').children("li:last-child").remove();
		}
	});
	
}

// 点击搜索按钮,增加搜索历史 
function add_search_history(){
	// 创建两个数组,用于获取标签历史记录和非标签历史记录
	var search_history_label = new Array();
	var search_history_array = new Array();
	// 获取当前标签搜索历史
	if(localStorage.getItem("search_history_label") != null){
		search_history_label = localStorage.getItem("search_history_label").split(',');
	}
	// 获取当前标签搜索历史
	if(localStorage.getItem("search_history_array") != null){
		search_history_array = localStorage.getItem("search_history_array").split(',');
	}
	// 区分是不是标签历史记录
	var flag = true;
	// 如果搜索内容属于标签,则添加到标签
	availableTags.find(function(value) {
		if(value == $('.form-control').val()) {
			// 添加属于标签的历史记录
		    search_history_label.push(value);
			if(search_history_label.length > 3){
				// 如果添加之后,标签的历史记录长度大于3,则删除最前面的标签历史记录
				search_history_label.splice(0,1);
			}
			// 设置属于标签的历史记录
		    localStorage.setItem("search_history_label",search_history_label);
		    flag = false;
		}
	});
	// 如果搜索内容不属于标签,则添加到历史记录
	if(flag){
		if($('.form-control').val()!=null && $.trim($('.form-control').val())!=""){
			// 添加不属于标签的历史记录
			search_history_array.push($('.form-control').val());
			// 设置不属于标签的历史记录
			localStorage.setItem("search_history_array",search_history_array);
		}
	}
	// 刷新历史记录
	get_search_history();
}


// 点击删除按钮,删除选择的历史记录
function del_search_history(index){
	// 防止瞎搞
	if(localStorage.getItem("search_history_array") != null){
		// 获取历史记录
		var search_history_array = localStorage.getItem("search_history_array").split(',');
		
		if(search_history_array.length == 1){
			// 如果是为最后一条历史记录,则删除
			localStorage.removeItem("search_history_array");
			
		}else{	
			// 移除要删除的历史记录
			search_history_array.splice(index,1);
			// 设置历史记录
			localStorage.setItem("search_history_array",search_history_array);
		}
		
		// 刷新历史记录
		get_search_history();
	}
}