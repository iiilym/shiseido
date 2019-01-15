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
                 this.count();
                //  this.productNum();
             })
         }
         register(){
            $(".register").on("click","#register",function(){
                $("#register").attr({ "href": "/html/register.html"});
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
               
                
                $(".register").css({"display":"flex","justify-content":"flex-end","align-item":"center"});
                $("#login").css({ "display": "block"});
                
            }
           
         }
         exit(){
            $("#login").on("click",function(){
                if(confirm("真的要退出吗？")){
                   
                    $("#register").html("登录/注册");
                    $("#login").css({ "display": "none"});
                   
                    $.cookie("username", username_1, {expires:-1,path: "/"});
                }
            })
         }

         

         nav(){
            $(".select_1").mouseenter(function(){
                 $(".nav_select").show();
            })
            
        
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
         count(){
           
            var arr=JSON.parse($.cookie("cart"));
            var count=0;
            for(var vlaue of arr){
                
                count+=Number(vlaue.num);
                
            }          
            console.log(count);
            // console.log(arr)
            // console.log($.cookie("cart"));
            $(".productNum").html(count);
         }
    }
    return new Header();
})