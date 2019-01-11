require(["./requirejs.config"], () => {
	require(["jquery","url","template","item-detail","header","footer"], ($,url,template,Index) => {
        Index.init(url.baseUrlRap+"/list-new2","#detail_container_template");
		$(function(){
            //获取请求商品的ID,将地址里面的?id=1保留键值对，并以等号分隔开，得到一个数组
            let arrSearch = location.search.slice(1).split("=");
            let searchObj={};
            searchObj[arrSearch[0]]=arrSearch[1];
            //用ajax发送请求
            $.ajax({
                url:url.baseUrlRap+"/detail",
                type:"GET",
                data:searchObj,
                dataType:"json",
                success:function(res){
                    // console.log(res);
                    if(res.res_code===1){
                         let detail=res.res_body;
                    //    渲染template
                       let html=template("detail-template",{detail});
                        // console.log(res.res_body.img);
                       
                       $(".de_bottom_detail_t").html(html);
                   }
                   
                }
            })
       
        })
        //点击旁边的分类出来选项
        $(".de_bottom_select_1").on("click",function(){
            $(".de_bottom_select_container1").css({"display":"block"});
        })
        $(".de_bottom_select_1").on("mouseleave",function(){
            $(".de_bottom_select_container1").css({"display":"none"});
        })
        $(".de_bottom_select_2").on("click",function(){
            $(".de_bottom_select_container2").css({"display":"block"});
        })
        $(".de_bottom_select_2").on("mouseleave",function(){
            $(".de_bottom_select_container2").css({"display":"none"});
        })
        $(".de_bottom_select_3").on("click",function(){
            $(".de_bottom_select_container3").css({"display":"block"});
        })
        $(".de_bottom_select_3").on("mouseleave",function(){
            $(".de_bottom_select_container3").css({"display":"none"});
        })

        //数量加减
        let num=$(".input");
       
        var count=1;
        
        $(".jia").on("click",function(){
            let price=Number($("#money").html());
            price+=100;
           num.html(Number(num.html())+1);//数量
        
           $("#money").html(price);//总价
        })
        $(".jian").on("click",function(){
           if(Number(num.html())>1){
            let price=Number($("#money").html());
            price-=100;
            num.html(Number(num.html())-1)
            $("#money").html(price);//总价
            
           }
           
        })

        //点击购买跳转到购物车
        $(".buy_now").on("click",function(){
            location.href="/html/chart.html";
        })

        //点击加入购物车
        // $(".addchart_now addChart").on("click",function(){
        //     // $("<p></p>").append( $(".detail_addchart_bottom" ));
        //     // $("p").css({""})
           
        // })

	})
})
