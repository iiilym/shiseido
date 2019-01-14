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