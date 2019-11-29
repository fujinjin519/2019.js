// console.log(utils)

//第一步：从服务器获取数据，然后渲染到页面上
//1.创建一个变量，准备接受请求来的数据
//2.利用ajax请求数据，然后把数据放到变量中
// 1.创建一个ajax实例
// 2.打开一个请求链接，基于get请求同步完成
// 3.监听服务器返回的信息状态，如果状态是200，而且状态码是4，证明数据请求成功
// 4.发送ajax请求
//3.把请求的来的数据赋值给变量接收

let data = null; //创建一个变量，准备接受请求来的数据
let cardbox = document.getElementById('cardbox')
let xhr = new XMLHttpRequest //创建一个实例
xhr.open('GET', 'json/product.json', false);//打开一个请求链接，基于get请求 同步
xhr.onreadystatechange = function () {
    //如果状态是200，而且状态码是4
    if (xhr.status === 200 && xhr.readyState === 4) {
        data = xhr.responseText
    }
}
xhr.send()      // 发送ajax请求
console.log(data)
data = JSON.parse(data) //把json格式的字符串转换为jason格式的对象，
renderHtml() //让渲染数据的方法执行
//向页面中渲染数据的方法
function renderHtml() {
    let htmlStr = ``; //创建一个变量，准备接受拼接好的字符串
    data.forEach((item) => {
        //有多少项就循环多少次，就会往htmlstr里拼接多少个li
        // console.log(item)
        //把每一个li的时间，热度，价格等属性自定义到结构体上
        htmlStr += `
        <li data-time="${item.time}" data-hot = "${item.hot}" data-price="${item.price}">
        <img src="${item.img}" alt="">
        <span>${item.title}</span>
        <span>${item.time}</span>
        <span>${item.hot}</span>
        <span>${item.price}</span>


    </li>
    `

    })
    console.log(htmlStr)
    cardbox.innerHTML = htmlStr //把字符串的数据渲染到页面中

}
// 点击相应的按钮进行排序，按照时间，热度，价格进行排序
//1.想操作谁，就获取谁
//   2.给相应的元素绑定相应的事件
//   3.在事件中做你想做的事情

let navlist = document.getElementsByTagName('a')//获取三个按钮（a标签）
let cardlist = cardbox.getElementsByTagName('li')//获取所有的li
console.log(navlist, cardlist)
cardlist = utils.toArray(cardlist)//把类数组转数组


for (var i = 0; i < navlist.length; i++) {
    navlist[i].flag = -1 //给每一个a标签增加一个flag属性用来判断是升序降序
    navlist[i].index = i //给每一按钮设置自定义属性，存储的是当前的索引
    navlist[i].onclick = function () {
        //此方法里的this就是你当前点击的元素
        this.flag *= -1
        sortlist.call(this)
        clearArrow.call(this)
        addArrow.call(this)


    }

}
function sortlist() {
    //这里的this就是当前点击的元素
    let dataAry = ['data-time', 'data-hot', 'data-price']
    //属性映射表，通过当前点击按钮
    cardlist.sort((a, b) => {
        //这里的this就是当前点击的元素（a标签）
        console.log(this.flag)
        //当我们拿到数据进行页面渲染时，可以把我们想要用的
        a = a.getAttribute(dataAry[this.index]);
        b = b.getAttribute(dataAry[this.index]);
        if (this.index === 0) {
            a = a.replace(/-/g, '')
            b = b.replace(/-/g, '')

        }
        return (a - b) * this.flag
    })
    // console.log(cardList)
    for (var i = 0; i < cardlist.length; i++) {
        cardbox.appendChild(cardlist[i])
    }

}
function clearArrow() {

    //这里的this就是当前点击的元素a标签
    //元素.classlist.当前元素的cals名列表
    //元素.classlist.remove('class'名)：移除指定的class名
    console.log(navlist)
    for (var i = 0; i < navlist.length; i++) {
        if (this != navlist[i]) {
            //如果条件成立，那就是剩下的那两个a标签，把这两个fla设置为默认值-1
            navlist[i].children[0].classList.remove('bg')
            navlist[i].children[1].classList.remove('bg')
            navlist[i].flag=-1

        }


    }
}
function addArrow() {
    let up = this.children[0]
    let down = this.children[1]
    if (this.flag > 0) {
        up.classList.add('bg')
        down.classList.remove('bg')
    } else {
        up.classList.remove('bg')
        down.classList.add('bg')
    }

}