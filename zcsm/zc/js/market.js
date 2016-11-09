/**
 * Created by Administrator on 2016/7/12.
 */


$(function(){

    /*
    * 控制导航
    * */
    $(".zp").on("click",function(){
        $(".zp .zq").fadeToggle(300);
    });


    /*
    * 解析url
    * */

    function getQueryStringArgs() {
        var qs = location.search.length > 0 ? location.search.substring(1) : "";
        var args = {};
        var item = [];
        var name = null;
        var value = null;
        var items = qs.length ? qs.split("&") : [];
        for (var i = 0; i < items.length; i++) {
            item = items[i].split("=");
            name = item[0];
            value = item[1];

            if (name.length) {
                args[name] = value;
            }
        }
        return args;
    }

    myAjax(getQueryStringArgs().ball);

    /*
    * 页面信息
    * */

    function myAjax(ballct){
        $.ajax({
            type:"get",
            url:"http://localhost/zhichenshop/market.php",
            dataType:"json",
            data:{
                ball:ballct
            },
            success:function(data){
                marketView(data);
            },
            error:function(){

            }
        });
    }

    function marketView(data){
        $(".mt img").attr("src",data.marketimg);
        $(data.marketinfo).each(function(index){
            $(".a6 li em").eq(index).html(data.marketinfo[index].mc);
            $(".a6 li span").eq(index).html(data.marketinfo[index].mcdesc);
            $(".a6 li img").eq(index).attr("src",data.marketinfo[index].mcicon);
        })
    }

});