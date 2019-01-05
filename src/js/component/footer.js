define(["jquery"], ()=> {
    class Footer{
        constructor(){
            this.init();
        }
        init(){
            //初始化，加载footer.html
            new Promise((resolve,reject)=>{
                $("footer").load("/html/component/footer.html",()=>{
                    resolve();
                })
            })
        }
    }
    return new Footer();
});