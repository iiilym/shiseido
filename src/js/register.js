//登录注册页面业务逻辑
require(["./requirejs.config"],()=>{
    //引入register需要依赖的模块
    require(["jquery","header","footer"],()=>{
        
        var passWordReg=/.{6,}/;
        // var numReg= /^1[35789]\d{9}$/;
        var emailReg=/\w+@[a-z0-9]+\.[a-z]+/i;
        $("#re_bottom_btn_2").on("click",function(e){
            e=e || window.event;
            var email=$("#email").val();
            var password=$("#password").val();
            // var name=$("#username").val();
           
            // console.log(username,password,phone);
            //判断输入的信息是否符合规范，符合规范在用ajax提交
            if(!passWordReg.test(password)){
                alert("密码格式不对，请重新输入")
                }else if(! emailReg.test(email)){
                    alert("邮箱格式不对，请重新输入")
                }else{
                    //用ajax提交
                    $.ajax({
                        url:'http://loaclhost/shiseido_register/api/v1/register.php',
                        type:"post",
                        date:{
                            // name:username,
                            email:email,
                            password:password
                        },
                        success:function(res){
                            console.log(res);
                            if(res.code===1){
                                alert("注册成功，请登录");

                            }
                        },
                        dataType:"json"
                    })
                }
            e.preventDefault();
            return false;
        })
    })
})