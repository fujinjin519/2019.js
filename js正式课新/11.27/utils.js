
var utils = (function(){
    let toArray = function(likeAry){
        let ary = Array.prototype.slice.call(likeAry)
        return ary ////类数组转数组的封装
    }
    let mean = function(){
        let ary = toArray(arguments);
        ary.sort((a,b)=>a-b);
        ary.pop();
        ary.shift();
       let res =  eval(ary.join('+'))/ary.length
       return res   //求数组的平均数
    }

    return {
        toArray:toArray,
        mean:mean
    }
})();
