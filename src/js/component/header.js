define(["jquery","cookie"],($)=>{
    // Index.init(url.baseUrlRap+"/nav-select","#nav_template");
    class Header{
        constructor(){
            this.init();
            
        }
        init(){
            //加载header.html
            new Promise((resolve,reject)=>{
                $("header").load("/html/component/header.html",()=>{
                    resolve();
                })
            }) .then(()=>{
                 this.register();
                 this.cart();
                 this.logo();
                 this.nav();
                 this.login();
                 this.exit();
                 this.productNum();
             })
         }
         register(){
            $(".register").on("click","#register",function(){
                $("#register").attr({ "href": "javascript:;"});
            })
        }
         cart(){
             $(".cart").on("click",function(){
                 location.href="/html/cart.html";
             })
         }
         logo(){
             $("#header_logo").on("click",function(){
                 location.reload();
             })
         }
         login(){
            if($.cookie("username")){
                $("#register").html($.cookie("username")+"&nbsp;"+"&nbsp;"+"欢迎您");
                // $("#login").show();
                //    console.log($.cookie("username")));
                // $("#register").css({ "dispaly": "none"});
                
                $(".register").css({"display":"flex","justify-content":"flex-end","align-item":"center"});
                $("#login").css({ "display": "block"});
                
            }
            // this.register();
         }
         exit(){
            $("#login").on("click",function(){
                if(confirm("真的要退出吗？")){
                    location.href="/html/register.html"
                    $.cookie("username", username_1, {expires:-1,path: "/"});
                }
            })
         }

         //购物车数量
        //  productNum(){
        //      console.log(arr.length);
        //     // $("b").html(arr.length);
        //  }

         nav(){
            $(".select_1").mouseenter(function(){
                 $(".nav_select").show();
            })
            
        //     $(".select_1").mouseleave(function(){
        //         $(".nav_select").hide();
        //         // $(".select_1").css({"border-left":"none","box-shadow": "0 0 5px #888"});
        //    })
            $(".nav_select").mouseleave(function(){
                $(".nav_select").hide()
           })
            $(".select_2").mouseenter(function(){
            $(".nav_select").show();
           
           })
           $(".nav_select").mouseleave(function(){
            $(".nav_select").hide();
           })
         }
    }
    return new Header();
})