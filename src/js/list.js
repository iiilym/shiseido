
require(["./requirejs.config"], () => {
	
	require(["jquery", "item","url","header","footer"], ($,item,url) => {
		 item.init(url.baseUrlRap+"/list");
		 class List{
			constructor(){
				this.nav();
				this.select();
			}
			nav(){
				$(".select_1").mouseenter(function(){
					 $(".nav_select").show();
				})
			//     $(".select_1").mouseleave(function(){
			//         $(".nav_select").hide();
			//    })
				$(".nav_select").mouseleave(function(){
					$(".nav_select").hide();
			   })
				$(".select_2").mouseenter(function(){
				$(".nav_select").show();
			   })
			   $(".nav_select").mouseleave(function(){
				$(".nav_select").hide();
			   })
			 }
			select(){
				$(".li_bottom_select_1").on("click",function(){
					$(".li_bottom_select_container1").css({"display":"block"});
			  })
			  $(".li_bottom_select_1").on("mouseleave",function(){
					$(".li_bottom_select_container1").css({"display":"none"});
			  })
			}
			// scroll(){
			// 	if(){
					
			// 	}
			// }
		 }
		 
		 return new List();
	})
	
})