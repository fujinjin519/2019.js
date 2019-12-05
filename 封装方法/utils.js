
var utils = (function () {
    let toArray = function (likeAry) {
        let ary = Array.prototype.slice.call(likeAry)
        return ary ////类数组转数组的封装
    }
    let mean = function () {
        let ary = toArray(arguments);
        ary.sort((a, b) => a - b);
        ary.pop();
        ary.shift();
        let res = eval(ary.join('+')) / ary.length
        return res   //求数组的平均数
    }

    return {
        toArray: toArray,
        mean: mean
    }
})();




//封装一个获取css的方法，并且把带数字带单位的去掉，直接变成数字
function getCss(curEle, attr) { // curEle元素  attr属性名
    let val = null
    if ('getComputedStyle' in window) {
        val = getComputedStyle(curEle)[attr]
    } else {
        val = curEle.currentStyle[attr]
    }

    /* 
    我想把带单位的属性值的单位去掉，并且转换为数字
    */
    let reg = /^(width|height|top|bottom|left|right|padding|margin|fontSize)$/
    if (reg.test(attr)) {
        val = parseFloat(val)
        //识别是不是小数，变成普通数字
    }
    return val
}

//封装一个方法，既能获取样式，也可以单个设置样式，也可以成组设置样式
function css() {
    let curEle = arguments[0];
    let attr = arguments[1];
    let val = arguments[2]; //假设传3个参数
    // 如果arguments的legnth是2，那说明你不是想获取样式，就是想成组设置样式
    if (arguments.length === 2) {

        if (typeof attr === 'string') {
            //获取的获取的属性值
            // 如果此条件成立，那就说明第二个参数就是字符串，就是想获取参数
            return getCss(curEle, attr)
        }
        else {
            setGroupCss(curEle, attr)   //成组设置样式
        }
    }
    // 如果arguments的legnth是3，那说明你是想单个设置样式
    else if (arguments.length === 3) {
        setCss(curEle, attr, val)
    }
}



//封装一个方法，如果传一个参数就是获取浏览器的某个属性，如果传2个参数，就是设置 获取浏览器的某个属性
function win(attr, val) {
    if (val === undefined) {
        return document.documentElement[attr] || document.body[attr]
    }
    else {
        document.documentElement[attr] = val;
        document.body[attr] = val;
    }
}
win('scrollTop', 500);
console.log(win('scrollTop'));
console.log(win('clientHeight'))




//封装 首字母大写
function toFirstUpperCase() {
    let reg = /\b([a-z])[a-z]*\b/g;
    let newStr = this.replace(reg, function () {
        let [word, firstWord] = arguments
        firstWord = firstWord.toUpperCase()
        word = word.slice(1)
        return `${firstWord}${word}`
    })
    return newStr
}
String.prototype.toFirstUpperCase = toFirstUpperCase;

//封装 url截取封装方法

function queryUrlParams() {
    let reg = /([^?=&#]+)=([^?=&#]+)/g
    let obj = {};
    this.replace(reg, (content, key, value) => { obj[key] = value; })
    this.replace(/#([^?=&#]+)/, (content, value) => { obj['xxx'] = value; })
    return obj
}
String.prototype.queryUrlParams = queryUrlParams


//封装时间格式化
function formatTime(template = '{0}年{1}月{2}日 {3}时{4}分{5}秒') {
    let timeAry = this.match(/\d+/g)
    template = template.replace(/\{(\d)\}/g, function (content, index) {
        let time = timeAry[index] || "00";
        time.length < 2 ? time = "0" + time : null;
        return time
    })
    return template
}
String.prototype.formatTime = formatTime;



//body的父级参照物是null
//封装获取元素距离body的左 上偏移量
function offset(cur) {
    let l = cur.offsetLeft;
    let t = cur.offsetTop;
    let parent = cur.offsetParent
    while (parent !== document.body) {
        l += parent.clientLeft +
            parent.offsetLeft
        t = parent.clientTop + parent.offsetTop;
        parent = parent.offsetParent
    }
    return {
        left: l,
        top: t
    }
}





//封装call方法
function myCall(context, ...arg) {
    context = context || window
    let res = null;
    context.$fn = this
    res = context.$fn(...arg);
    delete context.$fn
    return res;

}
Function.prototype.myCall = myCall;



//封装 slice

Object.prototype.mySlice = function (one, two) {
    let ww = [];
    if (arguments.length == 2) {
        if (one >= 0 && two > 0) {
            for (var i = 0; i < two - one; i++) {
                let ee = this[one + i];
                ww[ww.length] = ee;
            }
        }
        else if (one < 0 && two < 0) {
            for (var i = 0; i < (two + this.length) - (one + this.length); i++) {
                let ee = this[one + this.length + i];
                ww[ww.length] = ee;
            }
        }
    }
    else if (arguments.length == 1) {
        for (var i = 0; i < this.length - one; i++) {
            let ee = this[one + i]
            ww[ww.length] = ee;
        }
    }
    else if (arguments.length == 0) {
        for (var i = 0; i < this.length; i++) {
            let ee = this[i]
            ww[ww.length] == ee;
        }
    }
    return ww
}



