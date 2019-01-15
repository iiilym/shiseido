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
                       
                    //    console.log(Number($("#money").html()));
                       $(".de_bottom_detail").on("click",".jia",function(event){
                        let num=$(".input");
                        let price=Number($("#money").html());
                        price+=price;
                       num.html(Number(num.html())+1);//数量
                        // console.log(11);
                       $("#money").html(price);//总价
                    })
                    $(".de_bottom_detail").on("click",".jian",function(event){
                        let num=$(".input");
                       if(Number(num.html())>1){           
                        let price=Number($("#money").html());
                         price=Number($("#money").html())/Number(num.html());
                        // console.log(price);
                        num.html(Number(num.html())-1)
                        $("#money").html(price);//总价
                        
                       }
                       
                    })
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



        $(".call").on("mouseenter",function(){
            $(".img1").css({"display":"block"});
            
        })
        $(".call").on("mouseleave",function(){
            $(".img1").css({"display":"none"});
            
        })
        $(".about").on("mouseenter",function(){
            $(".img2").css({"display":"block"});
            
        })
        $(".about").on("mouseleave",function(){
            $(".img2").css({"display":"none"});
            
        })
        //数量加减
        
        
        //  console.log(Number($("#money").html()));
        // $(".de_bottom_detail").on("click",".jia",function(event){
        //     let num=$(".input");
        //     let price=Number($("#money").html());
        //     price+=price;
        //    num.html(Number(num.html())+1);//数量
        //     console.log(11);
        //    $("#money").html(price);//总价
        // })
        // $(".de_bottom_detail").on("click",".jian",function(event){
        //     let num=$(".input");
        //    if(Number(num.html())>1){           
        //     let price=Number($("#money").html());
        //      price-=price/(Number(num.html())-1);
        //     console.log(price);
        //     num.html(Number(num.html())-1)
        //     $("#money").html(price);//总价
            
        //    }
           
        // })

        //点击购买跳转到购物车
        $(".buy_now").on("click",function(){
            location.href="/html/chart.html";
        })
        

        //点击加入购物车
        $(".de_bottom_detail").on("click",".addChart",function(event){
            // $("<p></p>").append( $(".detail_addchart_bottom" ));
            // $("p").css({""})
            event.stopPropagation();
           //获取商品信息
           
           let arrSearch=location.search.slice(1);
        
        //    console.log(arrSearch[1]);
           var obj={
               id:arrSearch[1],
               title:$(".detailTitle").html(),
               price:$("#money").html(),
               img:$(".detailImg").attr("src"),
               num:1
           };console.log(arrSearch);
           //判断是否已经存了cookie，存了就将json转为js,不存在数组为空
           var arr=$.cookie("cart") ? JSON.parse($.cookie("cart")) : [];
           //判断是否重复，重复就数量加一，不重复就存进数组
           var index;
        //    console.log("arr",arr)
           var isExist=arr.some(function(item,i){
               index=i;
            //    console.log(2222222222)
            //    console.log(item.title)
               return item.title===obj.title;

           })
           if(isExist){
               obj.num+=1;
            //    console.log(33333333)
           }else{

                // console.log("obj",obj)
                arr.push(obj);
           }
           $.cookie("cart",JSON.stringify(arr),{expires:7,path: "/"});
		   console.log("obj1",$.cookie("cart"));
        })


        
	})
})
