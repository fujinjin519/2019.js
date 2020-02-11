(function () {
    //头部广告点击消失
    function headerAdvertising() {
        let advertising = document.getElementById('advertising');
        let btnT = document.getElementById('btnT');
        btnT.onclick = function () {
            advertising.style.display = 'none'
        }
    }
    headerAdvertising();

    // 地址切换
    function siteCut() {
        let a = document.querySelector('.a');
        let ge1 = document.getElementById('ge1');
        let as = ge1.getElementsByTagName('a');

        for (let i = 0; i < as.length; i++) {
            as[i].onclick = function (e) {
                a.innerHTML = as[i].innerHTML;
                for (let j = 0; j < as.length; j++) {
                    as[j].style.color = '#999';
                    as[j].parentNode.style.background = '#fff';
                }
                as[i].style.color = 'white';
                as[i].parentNode.style.background = 'red';
            }
        }
    }
    siteCut()

    //搜索框小字
    function inputIcon() {
        let input = document.getElementById('input');
        let inputZi = document.getElementById('input-zi');
        input.onkeydown = function () {
            inputZi.style.display = 'none';
        }
        input.onkeyup = function () {
            if (input.value === '') {
                inputZi.style.display = 'block';
            }
        }
    }
    inputIcon()

    //小图标选项卡
    function xuan(li, div) {
        for (let i = 0; i < li.length; i++) {
            li[i].onmouseover = function () {
                for (let j = 0; j < li.length; j++) {
                    li[j].className = ''
                    div[j].style.display = 'none';
                }
                li[i].className = 'active'
                div[i].style.display = 'block';
            }
        }
    }

    let ul = document.getElementById('tabsList');
    let lis = ul.getElementsByTagName('li');
    let divs = document.getElementsByClassName('ycg');
    xuan(lis, divs);

    let ul1 = document.getElementById('ul1');
    let lis1 = ul1.getElementsByTagName('li');
    let divs1 = document.getElementsByClassName('smallycg1');
    xuan(lis1, divs1);

    let ul2 = document.getElementById('ul2');
    let lis2 = ul2.getElementsByTagName('li');
    let divs2 = document.getElementsByClassName('smallycg2');
    xuan(lis2, divs2);

    let ul3 = document.getElementById('ul3');
    let lis3 = ul3.getElementsByTagName('li');
    let divs3 = document.getElementsByClassName('smallycg3');
    xuan(lis3, divs3);

    //小图标选项卡移动
    let tabs = document.getElementById('tabs');
    let icon = document.getElementsByClassName('icon');
    let putAway = document.getElementsByClassName('putAway');

    for (let i = 0; i < icon.length; i++) {
        icon[i].onmouseover = function () {
            let flag = false;
            if (flag) {
                return;
            }
            flag = true;
            setTimeout(() => {
                !flag;
            }, 500);

            let top = parseInt(getComputedStyle(tabs).top);
            let timer = null;
            timer = setInterval(() => {
                top -= 10;
                if (top <= -220) {
                    clearInterval(timer);
                }
                tabs.style.top = top + 'px';
            }, 10);
        }
    }

    for (let i = 0; i < putAway.length; i++) {
        putAway[i].onclick = function () {
            let top = parseInt(getComputedStyle(tabs).top);
            let timer = null;
            timer = setInterval(() => {
                top += 10;
                if (top >= 0) {
                    clearInterval(timer);
                }
                tabs.style.top = top + 'px';
            }, 10);
        }

    }

    //倒计时
    function Countdown() {
        let countdown = '2020/02/08 22:00:00'
        let target = new Date(countdown);
        let now = new Date();
        let timer = null;
        let time = document.getElementById('time');
        let hour = document.getElementById('hour');
        let min = document.getElementById('min');
        let sec = document.getElementById('sec');

        function computed() {
            let spanTime = target - now;

            if (spanTime <= 0 && target !== null) {
                clearInterval(timer);
                timer = null;
                let ary = countdown.split('');

                ary[12] = parseInt(ary[12]) + 2
                if (ary[12] >= 10) {
                    ary[12] = 0;
                    ary[11] = parseInt(ary[11]) + 1;
                }

                let h = ary[11] + '' + ary[12];

                if (h >= 24) {
                    ary[11] = '0';
                    ary[12] = '0'
                    ary[9] = parseInt(ary[9]) + 1;
                    if (ary[9] >= 10) {
                        ary[9] = 0;
                        ary[8] = parseInt(ary[8]) + 1;
                    }
                }

                countdown = ary.join('');
                fn()
                return
            }

            hour.innerHTML = Math.floor(spanTime / (60 * 60 * 1000));
            if (hour.innerHTML.length === 1) {
                hour.innerHTML = `0${hour.innerHTML}`;
            }
            spanTime -= hour.innerHTML * 60 * 60 * 1000;

            min.innerHTML = Math.floor(spanTime / (60 * 1000));
            if (min.innerHTML.length === 1) {
                min.innerHTML = `0${min.innerHTML}`;
            }
            spanTime -= min.innerHTML * 60 * 1000;

            sec.innerHTML = Math.floor(spanTime / 1000);
            if (sec.innerHTML.length === 1) {
                sec.innerHTML = `0${sec.innerHTML}`;
            }
            now = new Date(now.getTime() + 1000);
        }
        computed();

        function fn() {
            target = new Date(countdown);
            now = new Date();
            clearInterval(timer)
            timer = setInterval(computed, 1000);
            time.innerHTML = countdown.slice(11, 16)
        }
        fn();
    }
    Countdown()

    // 排行榜选项卡
    function rankingList() {
        let btRight = document.getElementById('bt-right');
        let lis = btRight.children;
        let rank = document.getElementsByClassName('rank');
        xuan(lis,rank)
    }
    rankingList()

    // 图片滚动
    function PictureScroll() {
        let rollMain = document.getElementsByClassName('roll-main')[0],
            PictureScroll = document.getElementsByClassName('PictureScroll-main')[0];
            

        function dong() {
            let left = parseInt(rollMain.style.left);
            left -= 2;
            rollMain.style.left = left+'px';
            
            if (left <= -1200) {
                clearInterval(timer);
                rollMain.style.left = "0px";
                timer = setInterval(dong,20);
            }
        }
        let timer = setInterval(dong,20);

        PictureScroll.onmouseover = function () {
            clearInterval(timer);
        }

        PictureScroll.onmouseout = function () {
            timer = setInterval(dong,20);
        }
    }
    PictureScroll()
})()