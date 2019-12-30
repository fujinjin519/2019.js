var oUl = document.getElementsByTagName('ul')
var arr = Array.from(oUl)
let data=null
let xhr = new XMLHttpRequest()
xhr.open("get", "data.txt", false)
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && /^2\d{2}/.test(xhr.status)) {
        data = JSON.parse
            (xhr.responseText)
    }
}
xhr.send()

function bindHtml() {
    for (let i = 0; i < 50; i++) {
        let num = Math.round(Math.random() * 7)
        let cur = data[num]
        let li = document.createElement('li')
        let a = document.createElement("a")
        a.innerHTML = "采集"
        a.href = "javascript:;"
        li.appendChild(a)
        let img = document.createElement("img")
        img.setAttribute("trueImg", cur.src)
        img.style.height = Math.round(Math.random() * (350 - 200) + 200) + "px"
        li.appendChild(img)
        let p = document.createElement("p")
        p.innerHTML = cur.title
        li.appendChild(p)
        arr.sort(function (a, b) {
            return
            a.scrollHeight - b.scrollHeight
        })
        arr[0].appendChild(li)
    }
}
bindHtml()

let imgs = document.getElementsByTagName('img')

function delay() {
    for (let i = 0; i < imgs.length; i++) {
        checkImg(imgs[i])
    }
}

let winH = utils.win("cientHeight")
function checkImg(curImg) {
    if (curImg.load) {
        return
    }
    let curH = curImg.offsetHeight
    let curT = utils.offset(curImg).t
    let winT = utils.win("scrollTop")
    if (winT + winH > curT + curH) {
        let address = curImg.getAttribute("trueImg")
        let img = new Image
        img.src = address
        img.onload = function () {
            curImg.src = address
            curImg = true

        }

    }

}
delay()

let container=document.getElementsByClassName('container')[0]
window.onscroll=function(){
    let containerH=container.offsetHeight
    let curT=utils.win("scollTop")
    if(curT+winH+300>containerH){
      bindHtml()
    }
    delay()
}