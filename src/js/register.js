//登录注册页面业务逻辑
require(["./requirejs.config"],()=>{
    //引入register需要依赖的模块
    require(["jquery","header","footer","cookie"],()=>{
        
        var passWordReg=/.{6,}/;
        var emailReg=/\w+@[a-z0-9]+\.[a-z]+/i;
        
        //注册
        $("#form_register").on("submit",function(e){
            e.preventDefault();
            var email=$("#email").val();
            var password=$("#password").val();
            var username=$("#username").val();
            var tel=$("#tel").val();           
            // console.log(email,username,password,tel);

            //判断输入的信息是否符合规范，符合规范在用ajax提交
            if(!passWordReg.test(password)){
                alert("密码格式不对，请重新输入")
                }else if(! emailReg.test(email)){
                    alert("邮箱格式不对，请重新输入")
                }else{
                    //用ajax提交
                    console.log(email,username,password,tel);
                    $.ajax({
                        url:'http://localhost/shiseido_register/api/v1/register.php',
                        type:"post",
                        data:{
                            username,
                            email,
                            password,
                            tel,
                            
                        },
                        success:function(res){
                            console.log(res);
                            if(res.res_code===1){
                                alert("注册成功，请登录");   
                                // $(document).ready(function(){ });
                                $("input[id=username_1]").focus();
                                                        
                            }
                        },
                        dataType:"json"
                    })
                }

                
            
        })

        //登录
        $("#form_login").on("submit",function(e){       
            var username_1=$("#username_1").val();
            var password_1=$("#password_1").val();         
            e.preventDefault();
            $.ajax({
                url: "http://localhost/shiseido_register/api/v1/login.php",
                type: "post",
                data: {
                    username_1,
                    password_1
                },
                success: function(res){
                    if(res.res_code===1){
                        
                    }
                },
                })
            // $.cookie("username", username_1, {path: "/"});
            // console.log(username_1)
            if(confirm("登录成功，去首页")){
                
                // $.cookie("username", "username_1", {expires:7,path: "/"});
                location.href = "/index.html";
                // $("#register").hide();
                // $("#login").val("欢迎您"+ username_1).show();
            }
            $.cookie("username", username_1, {expires:7,path: "/"});
            
        })
            
            
    

    })
})