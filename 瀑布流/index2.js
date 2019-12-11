//请求数据
let data=null
let xhr=new XMLHttpRequest
xhr.open('GET','data.txt',false)
xhr.onreadystatechange=function(){
    if(/^2\d{2}/.test(xhr.status)&&xhr.readyState===4){
        data=JSON.parse(xhr.responseText)
    }
}
xhr.send();
console.log(data)
//渲染数据
let uls=document.getElementsByTagName('ul')
uls=utils.toArray(uls)

    function bindHtml(){
        for(var i=0;i<30;i++){       
            let index=Math.round(Math.random()*9)
            let curImg=data[index];
            let li=document.createElement('li')
            let img=document.createElement('img')
            img.setAttribute('trueImg',curImg.src);
            img.className='bg'
            img.style.height=Math.round(Math.random()*(250-180)+180)+'px';
            li.appendChild(img);
            uls.sort((a,b)=> a.scrollHeight - b.scrollHeight

            )
            uls[0].appendChild(li)

        }
    }
    bindHtml()
    
    let imgs=document.getElementsByTagName('img')
    console.log(imgs)

    
    function dealy(){
        for(var i=0;i<imgs.length;i++){
            dealyImg(i)
        }
    }
    
    function dealyImg(index){
           let curImg=imgs[index]
           if(curImg.flag){
               return

           }
  // 图片的下边框和可视窗口的下边框重合，该加载了
    // 图片的自身高度+图片的上偏移量(到body的) === 浏览器滚动条卷去的高度+当前浏览器可视窗口的高度

         let winH=utils.win('clientHeight') //获取可视窗口的高度
         let winT=utils.win('scrollTop') //获取浏览器滚动条的高度
         let curT=utils.offset(curImg).top;//图片距离body的上偏移量
         let curH=curImg.offsetHeight;//图片的自身高度
         //图片的自身高度+图片的上偏移量（到body的）===浏览器滚动条卷去的高度+当前浏览器可视窗口的高度
         if(winH+winT>curT+curH){
             let address=curImg.getAttribute('trueImg')
             let newImg=new Image;//动态创建img元素，用来检验路径是否正确
             newImg.src=address;
             newImg.onload=function(){
                 curImg.src=address
                 curImg.flag=true
                 fadeIn(curImg);
             }
         }
    }
    
    function fadeIn(img){
        utils.setCss(img,'opacity',0.1)
        let cur=Number(utils.getCss(img,'opacity'))
        var timer = setInterval(()=>{
            cur+=0.2;
            if(cur>=1){
                clearInterval(timer);
                utils.setCss(img, 'opacity', 1);
            };
            utils.setCss(img, 'opacity', cur);
        }, 200);

    }
    dealy();




 window.onscroll=function(){

      dealy()
   
      let bodyH = document.body.scrollHeight;// 浏览器真实的高度
      let winH = utils.win('clientHeight');//浏览器可视区域的高度
      let winT = utils.win('scrollTop');// 浏览器卷去的高度
       if(winT + winH +300 > bodyH){
          bindHtml();
        }
   }
