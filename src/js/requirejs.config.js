require.config({
    baseUrl:"/",
    paths:{
        "jquery":"libs/jquery/jquery-1.11.3.min",
        "cookie":"libs/jquery/jquery-plugins/jquery.cookie",
        "header":"js/component/header",
        "footer":"js/component/footer",
        "item":"js/component/item",
        "url":"js/component/url",
        "template": "libs/template-web",
        "minheader":"js/component/minheader",
        "list-new":"js/component/list-new",
        "item-detail":"js/component/item-detail",
        "nav":"js/component/nav"
    },
    //不符合AMD规范的  垫片
    shim:{
        "cookie":{
            deps:["jquery"]
        }
    }
})