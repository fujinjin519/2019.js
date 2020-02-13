//express：基于node封装的框架，是第三方模块
//npm install express --save/yarn add 
let express=require("express")
//express是一个函数
let app=express();
//app是express的返回值，监听端口号，可以调用listen监听端口号
//express的路由
//app后面的是请求方式，里面是请求的路径，login
app.get("/login/:a",function(req,res){
   // console.log("你登录成功");
   console.log(req.params);
   
});
app.get("/loginout",function(req,res){
    console.log("你登录成功");
})
app.listen(8080,function(){
    console.log("8080端口已经监听成功");
    
})
