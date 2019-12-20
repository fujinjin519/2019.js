// var divs=document.getElementsByTagName('div')
// function toArray(likeAry){
//   var ary=[]
   
//     try{
     
//         ary=Array.prototype.slice.call(likeAry)

//     }catch(e){
       
//         for(var i=0;i<likeAry.length;i++){
//             ary.push(likeAry[i])
//         }


//     }
//     return ary
// }

//1.单例模式       类数组转数组的方法封装
// var utils={
//     toArray: function (likeAry){
//     var ary=[]
     
//       try{
//          ary=Array.prototype.slice.call(likeAry)
  
//       }catch(e){
//            for(var i=0;i<likeAry.length;i++){
//               ary.push(likeAry[i])
//           }
  
  
//       }
//       return ary
//   }
  
    
// }
// utils.toArray()

//2.高级单例模式闭包：
var utils=(function(){
    function toArray(likeAry){
        var ary=[]
       
        try{
           ary=Array.prototype.slice.call(likeAry)
    
        }catch(e){
           
            for(var i=0;i<likeAry.length;i++){
                ary.push(likeAry[i])
            }
    
    
        }
        return ary;
    }
    return{toArray:toArray} //对象给了utils     属性名可以换    ：属性值（后面不能换）

})()
// utils.toArray()