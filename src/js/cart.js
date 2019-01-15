require(["./requirejs.config"],()=>{
    //引入index需要依赖的模块
    require(["jquery","item-detail","url","minheader","cookie","footer"],($,Item,url)=>{
        Item.init(url.baseUrlRap+"/seen","#seen_template");
        
        //用cookie拼接tbody
         var arr=JSON.parse($.cookie("cart"));
        // console.log(arr);
        var str="";
        for(var value of arr){
            str+=`<tr class="tbody_tr id="${value.id}">
                    <td class="tbody_td tbody_td1"><a href=""><img src="${value.img}"></a> </td>
                    <td class="tbody_td tbody_td2"><span>${value.title}</span></td>
                    <td class="tbody_td tbody_td3 prices">${value.price}</td>
                    <td class="tbody_td tbody_td4"><span class="word_1"><a href="javascript:;" class="jian"></a><div class="input" >${value.num}</div><a href="javascript:;" class="jia"></a></span></td>
                    <td class="tbody_td tbody_td3"><span class="subtotal">${value.price}</span></td>
                    <td class="tbody_td tbody_td5">
                        <a href="javascript:;" class="td_a td_a1">删除</a>
                        <a href="javascript:;" class="td_a td_a2">收藏</a>
                    </td>
                </tr>`            
        }
            $("tbody").html(str);
            $("#moneyAll").html();
       
            
        // console.log(arr.length);
        
        //点击加减
        $("table").on("click",".jia",function(){
            //找到当前行
            var price=$(this).parents(".tbody_tr").find(".tbody_td3").html();
            var num=$(this).parents(".tbody_tr").find(".input").html();
        //    num.html(Number(num.html())+1);//数量
           $(this).parents(".tbody_tr").find(".input").html(Number(num)+1);
           $(this).parents(".tbody_tr").find(".subtotal").html((Number(num)+1)*price);
           //修改cookie
           arr=JSON.parse($.cookie("cart"));
            $(".input").each(function(i,item){
                arr[i].num=$(item).html();
            })
            $.cookie("cart",JSON.stringify(arr),{path:"/",expires:3});
            fn();
        //    console.log(11)
           
        })
        $("table").on("click",".jian",function(){
            //找到当前行
            var price=$(this).parents(".tbody_tr").find(".tbody_td3").html();
            var num=$(this).parents(".tbody_tr").find(".input").html();
        //    num.html(Number(num.html())+1);//数量
        if(Number(num)>1){
            $(this).parents(".tbody_tr").find(".input").html(Number(num)-1);
            $(this).parents(".tbody_tr").find(".subtotal").html((Number(num)-1)*price);
        }         
           //修改cookie
           arr =JSON.parse($.cookie("cart"));
            $(".input").each(function(i,item){
                c[i].num=$(item).html();
            })
            $.cookie("cart",JSON.stringify(arr),{path:"/",expires:3});
            fn();
        //    console.log(11)
        })

        //点击删除
        $("table").on("click",".td_a1",function(){
            if(confirm("真的要删除吗？")){
                $(this).parents(".tbody_tr ").remove();
            let id=$(this).parents("tbody").attr("id");
            // cartArr=JSON.parse($.cookie("cart"));
            arr =JSON.parse($.cookie("cart"));
            for(let i=0;i<arr.length;i++){
                if(arr[i].id===id){
                    arr.splice(i,1);
                    break;
                }
            }
            
            }
            $.cookie("cart",JSON.stringify(arr),{path:"/",expires:3});   
            fn();
        })
        //计算价格

fn();
function  fn(){
           
            let sum=0;
            var atr = $("tbody .tbody_tr");
            atr.each(function(i,item){
               let prices = Number($(item).find(".prices").text());
               var input_num = Number($(item).find(".input").text());
                sum+= prices*input_num;
               
            //    console.log(1,sum)
               $(item).find(".subtotal").text(sum);

            //    console.log(prices,input_num)
            })
           
            $("#moneyAll").text(sum);
             
            
            }
            fn();
            // console.log($.cookie("cart"));
            // console.log(arr)
    })
})