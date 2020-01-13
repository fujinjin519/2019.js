let timer
//计算内容区域的高度
function computedMain() {
    let winH = document.documentElement.clientHeight
    let headerH = $('.header')[0].offsetHeight;
    let footerH = $('.footer')[0].offsetHeight

    let fontSize = parseFloat(document.documentElement.style.fontSize)
    let maiH = (winH - headerH - footerH) / fontSize + 'rem';
    console.log(maiH);

    $('.main').css('height', maiH);
}
computedMain()



//请求数据
$.ajax({
    url: './json/lyric.json',
    type: 'get',
    async: false,
    success: function (data) {
        console.log(data);
        bindHtml(data.lyric);
    }

})
//数据绑定
function bindHtml(data) {
    data = data.replace(/&#(\d+);/g, function (res, a) {
        // console.log(a);
        switch (a) {
            case "32":
                return " ";
            case "40":
                return "(";
            case "41":
                return ")";
            case "45":
                return "-";
        }
        return res

    })
    // console.log(data);

    let arr = []
    data.replace(/\[(\d+)&#58;(\d+)&#46;\d+\]([^&#]+)(?:(&#\d+))/g,
        function (res, a, b, val) {
            arr.push({
                a,
                b,
                val
            });
        })
    let str = ``
    for (let i = 0; i < arr.length; i++) {
        let cur = arr[i]
        str += `  <p data-min="${cur.a}" data-sec="${cur.b}">${cur.val}</p>`
    }
    $('.wrap').html(str)
    music.addEventListener("canplay", function () {
        $("#right").html(formate(music.duration))

    })

}

//给

$('#musicBtn').tap(function () {
    let music = $('#music')[0]
    if (music.paused) {
        music.play()
        $(this).addClass('select')

        timer = setInterval(computedTime, 100)
    } else {
        music.pause()
        $(this).removeClass('select')
        clearInterval(timer)

    }
})

function formate(time) {
    let min = Math.floor(time / 60);
    let sec = Math.floor(time % 60);
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
    return min + ':' + sec;
}
let curT = 0
let flag=0
function computedTime() {
    let curTime = music.currentTime;
    let duration = music.duration
    let cur = formate(curTime)
    if(curTime>=duration){
        clearInterval(timer)
        $("#musicBtn").removeClass('select')
        return
    }
    $('#left').html(cur)
    $('.lineBg').css("width", curTime / duration * 100 + '%')
    let min = cur.split(":")[0]
    let sec = cur.split(":")[1]
    let allP = document.getElementsByTagName('p')
    for (let i = 0; i < allP.length; i++) {
        let curP = allP[i]
        let minP = curP.getAttribute('data-min')
        let secP = curP.getAttribute('data-sec')
        if (min === minP && sec === secP) {
            curP.removeAttribute('data-min')
            flag++
            $(curP).addClass('select').siblings().removeClass('select');
            if (flag >= 6) {
                curT -= 0.84;
                $(".wrap").css("top", curT + 'rem')
           }
            }
           }

}

