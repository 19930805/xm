$(function(){
    //导航栏函数
    $(".navul li").on("click",function(){
        $(".navul li").removeClass();
        $(this).addClass("navulshow");
        setTimeout(function(){
            //产品列表的函数
            $(".select .p1 span").on("click",function(){
                $(".select .p1 span").removeClass();
                $(this).addClass("selected");
            });
            $(".select .p2 span").on("click",function(){
                $(".select .p2 span").removeClass();
                $(this).addClass("selected");
            });
            $(".select .p3 span").on("click",function(){
                $(".select .p3 span").removeClass();
                $(this).addClass("selected");
            });
            $(".select .p4 span").on("click",function(){
                $(".select .p4 span").removeClass();
                $(this).addClass("selected");
            });
            $(".order span").on("click",function(){
                $(".order span").removeClass();
                $(this).addClass("ordsele");
            });
            //联系我们的函数
            $(".lx-left>div").map(function(index){
                this.value=index;
            });
            $(".lx-left>div").on("mouseenter",function(e){
                $(".lx-left>div").removeClass();
                $(this).addClass("lxleftshow");
                var outindex = e.target.value;
                $(".lx-right>div").removeClass().addClass(function(index){
                    if(index==outindex){
                        return "lxrightshow";
                    }
                });
            });
            var sContent ="我们公司在天安门2楼";
            var map = new BMap.Map("l-map");
            var point = new BMap.Point(116.404, 39.915);
            map.centerAndZoom(point, 15);
            var infoWindow = new BMap.InfoWindow(sContent);  // 创建信息窗口对象
            map.openInfoWindow(infoWindow,point); //开启信息窗口
            document.getElementById("r-result").innerHTML = "信息窗口的内容是：<br />" + infoWindow.getContent()
        },500)
    });
});
