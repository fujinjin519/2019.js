let express=require("express");
let app=express();
//利用cros解决跨域
app.use(function(req,res,next){
    //设置允许请求的地址，*:代表所有的路径
    res.header("Access-Control-Allow-Origin","*");
    //设置允许的跨域请求方式
    res.header("Access-Control-Allow-Methods","GET,POST")
   
    next()
})
app.get("/getData",function(req,res){
    res.send("你很帅")

})
app.listen(8080)