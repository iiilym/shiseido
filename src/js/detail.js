require(["./requirejs.config"], () => {
	require(["jquery","url","template","header","footer"], ($,url,template) => {
		$(function(){
            //获取请求商品的ID,将地址里面的?id=1保留键值对，并以等号分隔开，得到一个数组
            let arrSearch = location.search.slice(1).split("=");
            let searchObj={};
            searchObj[arrSearch[0]]=arrSearch[1];
            //用ajax发送请求
            $.ajax({
                url:url.baseUrlRap+"/detail",
                type:"GET",
                data:searchObj,
                dataType:"json",
                success:function(res){
                    if(res.res_code===1){
                        // let list=res.res_body.data;
                       //渲染template
                       let html=template("detail-template",{detail:res.res_body.data});
                       // console.log(html);
                       
                       $(".de_image img").html(html);
                   }
                }
            })
        //     console.log(arrSearch);
        // console.log(location.search);
        })
        
	})
})