let bindHtml = (data) => {
    let imgs = ``;
    let lis = ``;
    $.each(data, function (index, item) {
        imgs += `<img src="${item.img}" alt="">`
        lis += `<li></li>`
    })
    $("#wrapper").html(imgs);
    $("#list").html(lis);
}

let timer;

let send = () => {
    $.ajax({
        url: "banner.json",
        type: "get",
        async: false,
        success: function (data) {
            bindHtml(data);
            timer = setInterval(autoMove, 1000);
        }
    })
}
send();

let step = 0;
function autoMove() {
    step++;
    step === 5 ? step = 0 : null;
    $('#wrapper img').eq(step).fadeIn().siblings().fadeOut();
    changeTip();
}

let changeTip = () => {
    $('#list li').eq(step).addClass('bg').siblings().removeClass('bg');
}
changeTip();

$('#outer').hover(function () {
    clearInterval(timer);
}, function () {
    timer = setInterval(autoMove, 1000);
})

let flag = true
$('#list li').hover(function () {
    if(!flag){
        return
    }
    flag = false;
    setTimeout(function () {
        flag = true;
    },500);

    step = $(this).index()-1;
    autoMove();
})

$('#right').click(function () {
    if(!flag){
        return
    }
    flag = false;
    setTimeout(function () {
        flag = true;
    },500);

    autoMove();
})

$('#left').click(function () {
    if(!flag){
        return
    }
    flag = false;
    setTimeout(function () {
        flag = true;
    },800);

    step = step-1;
    if(step<0){
        step = 4;
    }
    $('#wrapper img').eq(step).fadeIn().siblings().fadeOut();
    changeTip();
})
