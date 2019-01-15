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
                
                
                this.logo();
                
                this.login();
                this.exit();
                this.count();
            })
        }
        register(){
            $(".register").on("click","#register",function(){
                $("#register").attr({ "href": "javascript:;"});
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
                $("#login").css({ "dispaly": "block"});
            }
            this.register();
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
    
    
    return new minHeader();
})