
require(["./requirejs.config"], () => {
	
	require(["jquery", "item","url","header","footer"], ($,item,url) => {
		 item.init(url.baseUrlRap+"/list");
		//  item.add();
		 class List{
			constructor(){
				this.nav();
				 this.select();
				// this.add();
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
				//点击旁边的分类出来选项
				$(".li_bottom_select_1").on("click",function(){
					$(".li_bottom_select_container1").css({"display":"block"});
				})
				$(".li_bottom_select_1").on("mouseleave",function(){
					$(".li_bottom_select_container1").css({"display":"none"});
				})
				$(".li_bottom_select_2").on("click",function(){
					$(".li_bottom_select_container2").css({"display":"block"});
				})
				$(".li_bottom_select_2").on("mouseleave",function(){
					$(".li_bottom_select_container2").css({"display":"none"});
				})
				$(".li_bottom_select_3").on("click",function(){
					$(".li_bottom_select_container3").css({"display":"block"});
				})
				$(".li_bottom_select_3").on("mouseleave",function(){
					$(".li_bottom_select_container3").css({"display":"none"});
				})
			}

			
		 }
		 
		 return new List();
	})
	
})