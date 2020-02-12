let fs=require("fs")
// let result=fs.readdir("./",function(err,resault){
//     console.log(result);
    
// })
// console.log(100);
//1.readdir    异步
//2.readdirSync 同步
// 3.readFileSync  ：同步读文件，也有同步异步 
//汉子和字母对应的是一个buffer数据，一个汉字是三个字母，
//utf8，buffer数据转汉字，但是音视频传输的过程就是buffer格式的不需要转，不用设置utf8
// let content=fs.readFileSync("./2.html","utf8")
// console.log(content);
//4.readFile ：异步读文件，三个参数，路径，编码格式，回调函数）
fs.readFile("./2.html","utf8",function(err,result){
    console.log(result);
    

})
//5.writeFileSync:写文件,把之前的内容覆盖（path,内容，编码格式）
fs.writeFileSync("./3.txt","内容","utf8")

//6.writeFile:异步写文件，都有回调函数.这次的回调只有一个err,
//写入文件成功以后，就会触发这个回调
fs.writeFile("./3.txt","内容","utf8",function(err){
    console.log(100);
    
})
//7.appendFileSync:向文件末尾追加内容
fs.appendFileSync("./3.txt","内容好好","utf8")
//8.appendFile:异步的向文件末尾追加
//9.copyFileSync:把文件的内容拷贝到新的文件中，并且替换到原来的内容，覆盖
fs.copyFileSync("./2.html","./3.txt")
//10.copyFile：异步，都传一个回调函数
//11.mkdir:创建一个新的文件夹目录，会多一个文件
fs.mkdir("./js",err=>{


})
//12.rmdir:删除目录：异步的
fs.rmdir("./js",err=>{

})
//13.unlink：删除文件
fs.unlink("./3.txt",err={

})

//封装fs,利用promise的






