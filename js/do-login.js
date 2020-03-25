// 执行登录的js

function do_login(){

    // 登录的路径
    var url = 'https://sdplayer2333.cn/user/login';
    // 登录时传递的参数
    var params={
        username:$("#inputUsername").val(),
        password:$("#inputPassword").val(),
    }

    //  jsonp
    $.ajax({
        async : true, // 此次ajax是否是异步请求,默认为true: 是异步请求
        url : url,
        type : "GET", // 只能发送get请求
        dataType : "jsonp", // 返回的数据类型，设置为JSONP方式
        jsonp : 'callback', //指定一个查询参数名称来覆盖默认的 jsonp 回调参数名 callback
        jsonpCallback: 'handleResponse', //设置回调函数名
        data :params,
        success : function(result){
            $('#login-message-span').empty();
            if(result[0].state == 20){
                $('#login-message-span').css("color","rgb(48, 255, 52)");
                $('#login-message-span').html(result[0].message);
                console.log("登录成功:"+result[0].message);
            }else{
                $('#login-message-span').css("color","rgb(230, 17, 28)");
                $('#login-message-span').html(result[0].message);
                console.log("登录失败:"+result[0].message);
            }
        }
    });

}