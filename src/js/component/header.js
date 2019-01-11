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
                 
                 this.chart();
                 this.logo();
                 this.nav();
                 this.login();
             })
         }
         register(){
            $(".register").on("click","#register",function(){
                $("#register").attr({ "href": "javascript:;"});
            })
        }
         chart(){
             $(".chart").on("click",function(){
                 location.href="/html/chart.html";
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
                $("#login").css({ "dispaly": "block"});
            }
            this.register();
         }
         nav(){
            $(".select_1").mouseenter(function(){
                $(".select_1").css({"box-shadow": "0 0 5px #888"});
                 $(".nav_select").show();
            })
            
        //     $(".select_1").mouseleave(function(){
        //         $(".nav_select").hide();
        //         // $(".select_1").css({"border-left":"none","box-shadow": "0 0 5px #888"});
        //    })
            $(".nav_select").mouseleave(function(){
                $(".nav_select").hide();
                $(".select_1").css({"box-shadow": "none"});
           })
            $(".select_2").mouseenter(function(){
            $(".nav_select").show();
            $(".select_2").css({"box-shadow": "0 0 5px #888"});
           })
           $(".select_2").mouseleave(function(){
            $(".nav_select").hide();
       })
           $(".nav_select").mouseleave(function(){
            $(".nav_select").hide();
            $(".select_2").css({"box-shadow": "none"});
           })
         }
    }
    return new Header();
})