define(["jquery","template"],($,template)=>{
    function Index(){

    }
    Index.prototype.init=function(url,id){
        // console.log(url);
        new Promise((resolve,reject)=>{
            //先加载页面
        $(id).load("/html/component/item-detail.html",()=>{
           resolve();
        })
    }).then(()=>{
            $.ajax({
                url:url,
                type:"get",
                success:function(res){
                    // console.log(res);
                    //判断是否成功
                    if(res.res_code===1){
                        // console.log(res.res_body);
                         let list=res.res_body.data;
                        //渲染template
                        let html=template("item-detail-template",{list});
                        // console.log(html);
                        
                        $(id).html(html);
                    }
                }
            })
        })
        
        
    }
     return new Index();
})