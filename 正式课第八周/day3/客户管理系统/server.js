let express=require("express")
let promiseFs=require("./promiseFS")
let bodyParser=require("body-parser")
let session=require("express-session")
let app=express()
app.listen(8080,function(){
    console.log("8080已经启动成功");
    

})
app.use(session({
    
}))

