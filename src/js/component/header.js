define(["jquery"],()=>{
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
                 this.chart();
                 this.logo();
                 this.nav();
             })
         }
         register(){
             $(".register").on("click","#register",function(){
                 location.href = "/html/register.html";
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
         nav(){
            $(".select_1").mouseenter(function(){
                 $(".nav_select_1").css("display","block");
                // $(".nav_select_1").style.display="block";
            })
         }
    }
    return new Header();
})