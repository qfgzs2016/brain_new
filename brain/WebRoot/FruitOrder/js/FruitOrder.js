// JavaScript Document
var waitTime = 1000;
var order;
var tid;
var rdn;
var list = new Array();
var lis = document.getElementsByTagName("li");
var times;
var score;

function init() {
    times = 0;
    document.getElementById('times').innerHTML = times;
    secondTime = -1;
    document.getElementById('second').innerHTML = 0;
    score = 0;
    document.getElementById('score').innerHTML = score;
    document.getElementById('start').style.display = 'inline';
    document.getElementById('again').style.display = 'none';
    order = 0;
    rdn = 0;
    if (tid) {
        clearTimeout(tid);
    }
    if (timer) {
        clearTimeout(timer);
    }
}
addLoadEvent(init);

function action() {
    for (var i = 0; i < 4; i++) {
        list[i] = 0;
    }
    for (var i = 0; i < 4; i++) {
        list[i] = getRandNum();
        /*console.log("**list[rdn] "+list[i]);*/
    }
    appear(order);
    tid = setInterval('disappear(order); order++;appear(order); ', waitTime);

}
document.getElementById('start').onclick = function () {
    document.getElementById('again').style.display = 'inline';
    document.getElementById('start').style.display = 'none';
    times++;
    document.getElementById('times').innerHTML = times;
    for (var i = 0; i < lis.length; i++) {
        lis[i].firstChild.style.display = 'none';
    }
    changeTime();
    action();
}
document.getElementById('again').onclick = function () {
    window.location.reload();
}

function appear(n) {
    if (order == 4) {
        clearTimeout(tid);
        clickEvent();
        return;
    }
    var bigImg = document.createElement("img"); //创建一个img元素  
    bigImg.src = "FruitOrder/image/" + n + ".png"; //给img元素的src属性赋
    var myLi = document.getElementById(list[n]); //获得dom对象值  

    myLi.appendChild(bigImg); //为dom添加子元素img  

}

function disappear(n) {
    var myLi = document.getElementById(list[n]); //获得dom对象值 
    myLi.removeChild(myLi.lastChild);

}

function clickEvent() {
    for (var i = 0; i < lis.length; i++) {
        lis[i].onclick = function () {
            if (list[rdn] == parseInt(this.getAttribute("id"))) {
                var bigImg = document.createElement("img"); //创建一个img元素  
                bigImg.src = "FruitOrder/image/" + rdn + ".png"; //给img元素的src属性赋值
                var myLi = document.getElementById(list[rdn]); //获得dom对象值  
                myLi.appendChild(bigImg); //为dom添加子元素img  
                rdn++;
                if (rdn == 4) {

                    $.ajax({
                        url: "servlet/SaveFruitServlet",
                        type: "POST",
                        data: {
                            clickTime: secondTime
                        },
                        dataType: "json",
                        success: function (result) {
                            if (result.code == 1) {
                                //跳转到显示游戏结束结果页面
                                $(".fruit-score").html(result.avg.toFixed(2));
                            } else {
                                //再玩一次，，正常情况不能出现
                            }

                        }

                    });

                    clearTimeout(timer);
                    document.getElementById('again').style.display = 'inline';
                    //alert("游戏完成");

                }
            } else {
                createtips("你错了", "fs_main_wrapper", tipsAction);
            }
        }
    }
}

function tipsAction() {

}

function getRandNum() { //得到不重复的随机值
    var i = -1;
    while (i == -1 || !conin(i, 4)) {
        i = Math.floor(Math.random() * 9) + 1;
    }
    return i;
}

function conin(n, m) {
    for (var i = 0; i < m; i++) {
        if (n == list[i]) {
            return false;
        }
    }
    return true;
}

var timer;
var secondTime;

function changeTime() {
        secondTime++;
        document.getElementById('second').innerHTML = secondTime;
        timer = setTimeout("changeTime();", 1000); //调用自身实现
        return secondTime;
    } //计时器