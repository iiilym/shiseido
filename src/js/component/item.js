define(["jquery","template"],($,template)=>{
    function Item(){

    }
    Item.prototype.init=function(url){
        // console.log(url);
        new Promise((resolve,reject)=>{
            //先加载页面
        $("#list_container_template").load("/html/component/item.html",()=>{
            resolve();
        })
    }).then(()=>{
            $.ajax({
                url:url,
                type:"get",
                success:function(res){
                    // console.log(res);
                    //判断是否成功
                    if(res.res_code===1){
                         let list=res.res_body.data;
                        //渲染template
                        let html=template("list-template",{list:res.res_body.data});
                        // console.log(html);
                        
                        $("#list_container_template .list_item").html(html);
                        
                        //点击加入购物车
                        $(".list_item").on("click",".addChart",function(event){
                            event.stopPropagation();
                           //获取商品信息
                           
                        
                            var id=$(this).parents(".item").find(".chartImg").attr("data-main");
                           console.log(id);
                            // console.log(arrSearch[1]);
                           var obj={
                               id:$(this).parents(".item").find(".chartImgs").attr("data-main"),
                               title:$(this).parents(".item").find(".chartTitle").html(),
                               price:$(this).parents(".item").find(".chartPrice").html(),
                               img:$(this).parents(".item").find(".chartImg").attr("src"),
                               num:1
                           };
                           //判断是否已经存了cookie，存了就将json转为js,不存在数组为空
                           var arr=$.cookie("cart") ? JSON.parse($.cookie("cart")) : [];
                           //判断是否重复，重复就数量加一，不重复就存进数组
                           var index;
                        //    console.log("arr",arr)
                           var isExist=arr.some(function(item,i){
                               index=i;
                            //    console.log(2222222222)
                            //    console.log(item.title)
                               return item.id===obj.id;
                
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
                    }
                }
            })
        })
        
        
    }
    // Item.prototype.add=function(){
    //     //点击加入购物车
	// 			$(".item").each(function(){
	// 				$(this).on("click",".addChart",function(){
	// 					// var title=$(this, ".chartTitle").html();
	// 					// // var title=$(".chartTitle").html();
	// 					// // var price=$(".chartPrice").html();
	// 					// // var count=1;
	// 					// console.log(title);	
	// 					alert(123);					
	// 				})
	// 				// alert($(this).html());
	// 			})
    // }
    return new Item();
})