
(function () { //避免全局变量污染
    //1.获取元素
    let list = document.getElementById('list');
    let navs = document.getElementsByTagName('a');
    let oLis = list.getElementsByTagName('li')
    let data

    //2.获取到product.json文件中的数据 ajax
    //1创建一个ajax实例
    let xhr = new XMLHttpRequest();
    //2打开一个路径 fasle同步，直到前端成功接收到所有的数据后，才会继续向下执行。
    //true异步：当ajax发送请求，浏览器不会在此等候后端返回的数据，而是向下执行js代码
    xhr.open('get', './json/product.json', false);
    //3监听回调函数
    xhr.onreadystatechange = function () {
        //当xhr实例的readystate的值是4，并且xhr.status的值是2开头的三位数，说明前端成功接收到后段返回的数据
        if (xhr.readyState === 4 && /^2\d{2}/.test(xhr.status)) {
            data = JSON.parse(xhr.responseText)


        }
    }
    //以上三步是ajax任务的准备，请求并没有发送出去
    //4.发送请求
    xhr.send();
    console.log(data);



    //3.绑定数据
    function bindHtml() {
        //循环data数据，拼接字符串，通过innerhtml，放到list
        let str = ``;
        for (let i = 0; i < data.length; i++) {
            let cur = data[i]
            str += `<li data-time="${cur.time}" data-hot="${cur.hot}" data-price="${cur.price}">
             <img src="${cur.img}" alt="">
             <span>${cur.title}</span>
             <span>${cur.time}</span>
             <span>${cur.price}</span>
             <span>${cur.hot}</span>
         </li>`
        }
        list.innerHTML = str;

    }
    bindHtml();
    // 4.给每一个a绑定点击事件
    for (let i = 0; i < navs.length; i++) {
        navs[i].index=i
        navs[i].flag=-1
        navs[i].onclick =function () {
            this.flag*=-1
            sortList.call(this)
            removeArrow.call(this)
            addArrow.call(this)


            

        }
    }
    function sortList() {

        var ary = utils.toArray(oLis)
        var newAry=["data-time","data-hot","data-price"]
        let that=this;
        
        ary.sort(function (a,b){ 
           let cur=a.getAttribute(newAry[that.index])
           let next=b.getAttribute(newAry[that.index])
             
          if(that.index===0){
              cur=cur.replace("-","").replace("-","")
              next=next.replace("-","").replace("-","");

          }
            return (cur-next)*that.flag;
           
        
        });
        //文档碎片，减少dom
        let frg=document.createDocumentFragment()
        for(let i=0;i<ary.length;i++){
            frg.appendChild(ary[i])

        }
        list.appendChild(frg)
        frg=null
    }
    //实现增加背景颜色
    function addArrow(){
         let up=this.children[0];
         let down=this.children[1];
         if(this.flag>0){
             //如果flag大于0升序
             up.classList.add('bg')
             down.classList.remove('bg')
             
         }else{
            up.classList.remove('bg')
            down.classList.add('bg')
}

    }
    function removeArrow(){
        for(let i=0;i<navs.length;i++){
            if(this!==navs[i]){
                navs[i].children[0].classList.remove('bg')
                navs[i].children[1].classList.remove('bg')
                navs[i].flag=-1
            }
        }
            
    }

})();

