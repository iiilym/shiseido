require(["./requirejs.config"],()=>{
    //引入index需要依赖的模块
    require(["jquery","item-detail","url","cookie","minheader","footer"],($,Item,url)=>{
        Item.init(url.baseUrlRap+"/seen","#seen_template");
        
        //用cookie拼接tbody
         var arr=JSON.parse($.cookie("cart"));
        console.log(arr);
        var str="";
        for(var value of arr){
            str+=`<tr class="tbody_tr">
                    <td class="tbody_td tbody_td1"><a href=""><img src="${value.img}"></a> </td>
                    <td class="tbody_td tbody_td2"><span>${value.title}</span></td>
                    
                    <td class="tbody_td tbody_td4"><span class="word_1"><a href="javascript:;" class="jian"></a><div class="input" >${value.num}</div><a href="javascript:;" class="jia"></a></span></td>
                    <td class="tbody_td tbody_td3"><span>${value.price}</span></td>
                    <td class="tbody_td tbody_td5">
                        <a href="javascript:;" class="td_a td_a1 td_a td_a">删除</a>
                        <a href="javascript:;" class="td_a td_a2 td_a td_a">收藏</a>
                    </td>
                </tr>`            
        }
            $("tbody").html(str);
            $("#moneyAll").html();
        //      //数量加减
        // let num=$(".input");
       
        // var count=1;
        
        // $(".jia").on("click",function(){
        //     let price=Number($("#money").html());
        //     price+=100;
        //    num.html(Number(num.html())+1);//数量
        
        //    $("#money").html(price);//总价
        // })
        // $(".jian").on("click",function(){
        //    if(Number(num.html())>1){
        //     let price=Number($("#money").html());
        //     price-=100;
        //     num.html(Number(num.html())-1)
        //     $("#money").html(price);//总价
            
        //    }
           
        // })
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
        //      price=Number($("#money").html())/Number(num.html());
        //     console.log(price);
        //     num.html(Number(num.html())-1)
        //     $("#money").html(price);//总价
            
        //    }
           
        // })

        // allPrice();
        console.log(arr.length);
        $("b").html(arr.length);
        //点击加减
        $("table").on("click",".jia",function(){
            let num=$(".input");
           num.html(Number(num.html())+1);//数量
            console.log(11)
        })
        $("table").on("click",".jian",function(event){
                let num=$(".input");
               if(Number(num.html())>1){           
                num.html(Number(num.html())-1)              
               }
            })
        // allPrice();


//         table.onclick = function(e){
//             e = e || event;
//             //找到事件源
//             var target = e.target || e.srcElement;
//             //找到当前tr
//             var tr = target.parentNode.parentNode;
//             //判断事件源
//             if(target.className === "jia"){
//                 let num=$(".input");
//                 num.html(Number(num.html())+1);//数量
                
//                 allPrice();
//             }else if(target.className === "jian"){
//                 let num=$(".input");
//                    if(Number(num.html())>1){           
//                     num.html(Number(num.html())-1)
//                 calcPrice();
//             // }else if(target.className === "td_a1"){
//             //     if(confirm("你真的不要了吗？")){	
//             //         tr.parentNode.removeChild(tr);
//             //         allPrice();
//             //     }
//             // }                         
//         }
        
//         //计算价格
//         // function allPrice(){
//         //     var sum = 0;
//         //     //找到被选中的那些行，然后把这些行的单价X数量，累加
//         //     var aTr = $("tr", tbody);
//         //     for(var j = 0; j < aTr.length; j++){
//         //             var price = Number(aTr[2].html());
//         //             var num = Number(atr[3].html());
//         //             sum += price*num;
                
//         //     }
//         //     $("#moneyAll").html = sum + "元";
//         //     }
//     }

    })
})