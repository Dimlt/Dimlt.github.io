// 修改页面登录按钮为 用户的名字
// 也是登录完成之后执行的 回调方法

function change_login_value(username) {

    // 把登录 变成用户名
    // 先隐藏,然后再显示用户名
    $('#login_a').fadeOut(1000);

    $('#login-successfully-li').fadeIn(800);

    setTimeout(function(){
        $('#login_a').empty().append(username).css("color","#47eca1");
        $('#login_a').fadeIn(1000);
    },1000);

    setTimeout(function(){
        $('#login-successfully-li').fadeOut(1000);
    },2000)


    // 关闭 下拉列表
    $('.form-horizontal').parent().removeClass('open');

    // 把点击登录的form 变成登出
    $('.form-horizontal').empty();
    $('.form-horizontal').append("<div class=\"form-group\">\n" +
        "\t\t\t\t\t\t\t\t\t<div class=\"col-sm-8 col-sm-offset-3\"><a href=\"https://localhost/logout\" style=\"color: #7b5399;font-size: 25px;\"><strong>登出</strong></a></div>\n" +
        "\t\t\t\t\t\t\t\t</div>");
    $('.form-horizontal').css("width","0px");
}