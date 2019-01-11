//首页业务逻辑
require(["./requirejs.config"],()=>{
    //引入index需要依赖的模块
    require(["jquery","list-new","item-detail","url", "header","footer"],($,Index,Item,url)=>{
        Index.init(url.baseUrlRap+"/list-new","#item_2");
        Item.init(url.baseUrlRap+"/index-message","#item_1");
                
        $(function(){
            //query对象可以直接使用
            //但是如果一个DOM对象要反复使用，最好用一个变量缓存一下        
            let $imgs = $("#div1 ul li");
                // $btns = $("#div1 ol li");
            let index = 0;                          
            //前后切换
            $("#goPrev").on("click", function(){
                //切换图片按钮，修改index得值
                $imgs.eq(index).removeClass("ac").animate({opacity: 0});
                if(--index < 0) index = $imgs.length-1;
                $imgs.eq(index).addClass("ac").animate({opacity: 1});                        
            })
        
            $("#goNext").on("click", function(){
                $imgs.eq(index).removeClass("ac").animate({opacity: 0});        
                if(++index >= $imgs.length) index = 0;        
                $imgs.eq(index).addClass("ac").animate({opacity: 1});
            })
                
            let timer = null;        
            $("#div1").hover(function(){
                clearInterval(timer);
            }, (function autoPlay(){
                timer = setInterval(() => {
                    $("#goNext").trigger("click");
                },2000);
                return autoPlay;
            })());                
        })  
        $(".call").on("mouseenter",function(){
            $(".img1").css({"display":"block"});
            // $(".img_div1").css({"width":"80px","height":"80px","background-color":"white"})
        })
        $(".call").on("mouseleave",function(){
            $(".img1").css({"display":"none"});
            // $(".img_div1").css({"width":"80px","height":"80px","background-color":"white"})
        })
        $(".about").on("mouseenter",function(){
            $(".img2").css({"display":"block"});
            // $(".img_div1").css({"width":"80px","height":"80px","background-color":"white"})
        })
        $(".about").on("mouseleave",function(){
            $(".img2").css({"display":"none"});
            // $(".img_div1").css({"width":"80px","height":"80px","background-color":"white"})
        })
        // $("#toTop").on("click",function(){
        //     $(".a4").attr({"href":"#top"});
        // })
                              		 
	})   
})