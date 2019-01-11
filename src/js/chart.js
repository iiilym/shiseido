require(["./requirejs.config"],()=>{
    //引入index需要依赖的模块
    require(["jquery","item-detail","url","minheader","footer"],($,Item,url)=>{
        Item.init(url.baseUrlRap+"/seen","#seen_template");
    })
})