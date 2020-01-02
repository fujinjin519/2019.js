
var oUl = document.getElementsByTagName('ul')
var arr=Array.from(oUl)
let data = null;
let xhr = new XMLHttpRequest();
xhr.open('get', 'data.txt', false);
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && /^2\d{2}/.test(xhr.status)) {
        data = JSON.parse(xhr.responseText);
    }
}
xhr.send();
console.log(data);


function bindHtml() {
    for (var i = 0; i < 50; i++) {
        var num = Math.round(Math.random() * 7)
        var cur = data[num]
        var li = document.createElement('li')
        var a = document.createElement('a')
        a.innerHTML = "采集"
        a.href = "javascript:;"
        li.appendChild(a)
        var img = document.createElement('img')
        img.setAttribute("trueImg", cur.src)

        img.style.height = Math.round(Math.random() * (350 - 200) + 200) + "px"
        li.appendChild(img)
        var p = document.createElement('p')
        p.innerHTML = cur.title;
        li.appendChild(p);

        arr.sort(function (a, b) {
            return a.scrollHeight - b.scrollHeight

        })
        arr[0].appendChild(li)

    }


}
bindHtml()

var imgs = document.getElementsByTagName('img')

function delay() {

    for (var i = 0; i < imgs.length; i++) {
       checkImg(imgs[i])

    }

}
var winH = utils.win("clientHeight")


function checkImg(curImg) {

    if (curImg.load) {
        return;
    }
    var curH = curImg.offsetHeight
    var curT = utils.offset(curImg).t
    var winT = utils.win("scrollTop")
   

  if (winH + winT > curH + curT) {
        var address = curImg.getAttribute("trueImg")
        var img = new Image;
        img.src = address;

        img.onload = function () {
            curImg.src = address
            curImg = true;

       }
   }

}
delay()

var container = document.getElementsByClassName("container")[0]

window.onscroll = function () {

    var containerH = container.offsetHeight
    var curT = utils.win("scrollTop")
    if (curT + winH + 300 > containerH) {

        bindHtml()
    }
  delay();
}