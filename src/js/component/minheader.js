define(["jquery","cookie"], ()=> {
    class minHeader{
        constructor(){
            this.init();
        }
        init(){
            //初始化，加载minheader.html
            new Promise((resolve,reject)=>{
                $("#minheader").load("/html/component/minheader.html",()=>{
                    resolve();
                })
            }).then(()=>{
                
                this.chart();
                this.logo();
                
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
        }
    
    
    return new minHeader();
})