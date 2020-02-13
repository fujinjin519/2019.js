let express=require("express")
let app=express()
app.listen(8080,function(){
    console.log("8080端口已启动");
    
})
//中间件：在创建完服务以后和处理请求之前，提前做一些事情，
//服务器可以提前将json中的数据读取出来，提前准备好，当真正请求来临时，不需要再花费时间读取，直接取到返回就好，一般情况下，需要将