// let fs=require("fs")
// let result=fs.readdir("./",function(err,resault){
//     console.log(result);
    
// })
// console.log(100);
//readdir    异步
//readdirSync 同步
// readFileSync  ：同步读文件，也有同步异步 
//汉子和字母对应的是一个buffer数据，一个汉字是三个字母，
//utf8，buffer数据转汉字，但是音视频传输的过程就是buffer格式的不需要转，不用设置utf8
// let content=fs.readFileSync("./2.html","utf8")
// console.log(content);
//readFile ：异步读文件，三个参数，路径，编码格式，回调函数）
fs.readFile("./2.html","utf8",function(err,result){
    console.log(result);
    

})


