
let data = null;
let cardbox = document.getElementById('cardbox')
let xhr = new XMLHttpRequest
xhr.open('GET', 'json/product.json', false);
xhr.onreadystatechange = function () {

    if (xhr.status === 200 && xhr.readyState === 4) {

        data = xhr.responseText
    }
}
xhr.send()
console.log(data)
data = JSON.parse(data)
renderHtml()

function renderHtml() {
    let htmlStr = ``;
    data.forEach((item) => {

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
    cardbox.innerHTML = htmlStr

}

let navlist = document.getElementsByTagName('a')
let cardlist = cardbox.getElementsByTagName('li')
console.log(navlist, cardlist)
cardlist = utils.toArray(cardlist)

for (var i = 0; i < navlist.length; i++) {
    navlist[i].flag = -1
    navlist[i].index = i
    navlist[i].onclick = function () {
         this.flag *= -1
        sortlist.call(this)
        clearArrow.call(this)
        addArrow.call(this)


    }

}
function sortlist() {
     let dataAry = ['data-time', 'data-hot', 'data-price']
     cardlist.sort((a, b) => {
        console.log(this.flag)
        a = a.getAttribute(dataAry[this.index]);
        b = b.getAttribute(dataAry[this.index]);
          if (this.index === 0) {
            a = a.replace(/-/g, '')
            b = b.replace(/-/g, '')
           }
        return (a - b) * this.flag
    })
      for (var i = 0; i < cardlist.length; i++) {
        cardbox.appendChild(cardlist[i])
    }

}
function clearArrow() {
       console.log(navlist)
    for (var i = 0; i < navlist.length; i++) {
        if (this != navlist[i]) {
            navlist[i].children[0].classList.remove('bg')
            navlist[i].children[1].classList.remove('bg')
            navlist[i].flag = -1
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


