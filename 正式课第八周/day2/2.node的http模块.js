//fs语法这样规定的，node的语法
//http模块
//服务器处于监听的状态，
let http=require("http");
let server=http.createServer(function(req,res){
    console.log(999);
   //每当访问一次8080端口，该函数执行一次 
   // req请求信息  res:响应信息
})
//一个端口号只能启动一个服务。一台服务器可以启动65535个端口号
server.listen(8080,function(){
    //让当前的服务监听8080端口，监听成功以后，会默认调用这个回调函数
    console.log("8080端口已经启动");
})
