
(function () { 
    let list = document.getElementById('list');
    let navs = document.getElementsByTagName('a');
    let oLis = list.getElementsByTagName('li')
    let data

    let xhr = new XMLHttpRequest();

    xhr.open('get', './json/product.json', false);
    
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && /^2\d{2}/.test(xhr.status)) {
            data = JSON.parse(xhr.responseText)


        }
    }
    
    xhr.send();
    console.log(data);

function bindHtml() {
        
        let str = "";
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
      
        let frg=document.createDocumentFragment()
        for(let i=0;i<ary.length;i++){
            frg.appendChild(ary[i])

        }
        list.appendChild(frg)
        frg=null
    }
   
    function addArrow(){
         let up=this.children[0];
         let down=this.children[1];
         if(this.flag>0){
            
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

