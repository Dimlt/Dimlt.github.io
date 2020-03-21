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
	$(".form-control" ).autocomplete({
		  source: availableTags
	});
	
	// 显示当前的搜索历史
	get_search_history();
	
});


// 刷新并显示历史记录 
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
		var search_history_label_html = "&nbsp;<span class='label label-primary' onclick=\"search('"+value+"')\" style='cursor:pointer;'>"+value+"</span>";
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
		var search_history_array_html = "<li><span>&nbsp;&nbsp;&nbsp;<span style='cursor:pointer;' onclick=\"search('"+value+"')\">"+value+"</span>&nbsp;&nbsp;<a href='javascript:;' onclick='del_search_history("+index+")'>删除</a></span></li><li class='divider'></li>";
		// 往前追加显示非标签历史记录
		$(".search-history-label + li").after(search_history_array_html);
		// 当为非标签历史记录的最后一个的时候,删除最后的那根横线
		if(index == search_history_array.length-1){
			$('.search-history-ul').children("li:last-child").remove();
		}
	});
	
}

// 点击搜索按钮,增加搜索历史 
function add_search_history(searchValue){
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
	// 该条记录是否存在
	var isExist = false;
	// 如果已经存在该条历史记录,则不增加这条记录
	$.each(search_history_label,function(index,value){
		if(value == searchValue){
			zIndexTop(search_history_label,index);
			localStorage.setItem("search_history_label",search_history_label);
			isExist = true;
		}
	});
	// 如果已经存在该条历史记录,则不增加这条记录
	$.each(search_history_array,function(index,value){
		if(value == searchValue){
			zIndexTop(search_history_array,index);
			localStorage.setItem("search_history_array",search_history_array);
			isExist = true;
		}
	});
	// 如果不存在
	if(!isExist){
		// 区分是不是标签历史记录的变量
		var flag = true;
		// 如果搜索内容属于标签,则添加到标签
		availableTags.find(function(value) {
			// 防止相同标签
			if(flag){
				if(value == searchValue) {
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
			}
		});
		// 如果搜索内容不属于标签,则添加到历史记录
		if(flag){
			if(searchValue!=null && $.trim(searchValue)!=""){
				// 添加不属于标签的历史记录
				search_history_array.push(searchValue);
				// 设置不属于标签的历史记录
				localStorage.setItem("search_history_array",search_history_array);
			}
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
			// 如果是为最后一条历史记录,则删除本地历史记录
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


//置顶，即将当前元素移到数组的最后一位
function zIndexTop(arr,index){
   if(index+1 != arr.length){

     //首先判断当前元素需要上移几个位置,置底移动到数组的第一位
      var moveNum = arr.length - 1 - index;

      //循环出需要一个一个上移的次数
       for (var i = 0; i<moveNum; i++) {
         swapArray(arr, index, index + 1);
         index++;
     }
   }else{
      //已经处于置顶
  }
}

/**
	* 数组元素交换位置
	* @param {array} arr 数组
	* @param {number} index1 添加项目的位置
	* @param {number} index2 删除项目的位置
	* index1和index2分别是两个数组的索引值，即是两个要交换元素位置的索引值，如1，5就是数组中下标为1和5的两个元素交换位置
*/
function swapArray(arr,index1,index2) {
   arr[index1] = arr.splice(index2,1,arr[index1])[0];
   return arr;
}