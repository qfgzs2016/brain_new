// JavaScript Document
var link="/brain/FruitOrder/FruitOrder.jsp";
var waitTime = 1000;
var order;
var tid;
var rdn;
var list = new Array();
var lis = document.getElementsByTagName("li");
var times=3;
var score;
function oneGameInit(){
	secondTime = -1;
	document.getElementById('second').innerHTML = 0;
   
    order = 0;
    rdn = 0;
    if (tid) {
        clearTimeout(tid);
    }
    if (timer) {
        clearTimeout(timer);
    }
   
}
function init() {
	score = 0;
	document.getElementById('score').innerHTML = score;
    document.getElementById('times').innerHTML = times;
    document.getElementById('start').style.display = 'inline';
    document.getElementById('again').style.display = 'none';    
}
addLoadEvent(init);

function action() {
    list=getDiffNum(1,9,4);
    appear(order);
    tid = setInterval('disappear(order); order++;appear(order); ', waitTime);
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
                	oneGameOver();
                }
            } else {
            	
               // createtips("你错了", "fs_main_wrapper", tipsAction);
            }
        }
    }
}
function addClickEventForLis(){
	
}
function removeClickEventForLis(){
	for (var i = 0; i < lis.length; i++) {
		lis[i].onclick=null;
	}
}
function oneGameOver(){
	submitDataAction()
    clearTimeout(timer);
    removeClickEventForLis();
    for(var i=0;i<4;i++){
    	disappear(i);
    }
 
    document.getElementById('again').style.display = 'inline';
    if(times>=2){
    	times--;
    	document.getElementById('times').innerHTML = times;
    	oneGameInit();
        action();
    }
    else{
    	submitDate();
    	createPrompt();	
    }
    	
}
function submitDate(){
	$.ajax({
        url: "servlet/SaveFruitServlet",
        type: "POST",
        data: {
            clickTime: score
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
}
function tipsAction() {

}
/***************获得不相同的随机数数组******************************/
function getDiffNum(start,end,count){
	var dis=end-start;
	var arr=new Array();
	var result=new Array();
	for(var i=0;i<dis+1;i++){
		arr[i]=i+start;	
	}
	for(var j=0;j<count;j++){
		do{
			//num=Math.floor(Math.random()*(dis+1)+start); 
			num=Math.floor(Math.random()*dis+1);
		}while(arr[num]==null);
		result[j]=arr[num];
		arr[num]=null;
	}
	return result
}



var timer;
var secondTime;

function changeTime() {
        secondTime++;
        document.getElementById('second').innerHTML = secondTime;
        timer = setTimeout("changeTime();", 1000); //调用自身实现
        return secondTime;
    } //计时器

function submitDataAction(){
		if(secondTime<=3){
			score+=75;
		}
		else if(secondTime>3&&secondTime<=5){
			score+=60;
		}
		else if(secondTime>5&&secondTime<=10){
			score+=45;
		}
		else if(secondTime>10){
			score+=30;
		}
		else{
			score+=0;
		}	
	
	/*secondTime=-1;
	clearInterval(timer);
	changeTime();*/
	document.getElementById("score").innerHTML=score;
	/*if(times>=1){
		times--;
	}*/
	
	document.getElementById('times').innerHTML=times;
	if(times>=1){
		/*produce();*/
	}
	else{
		submitDate();
		createPrompt();	
	}

}

document.getElementById('start').onclick = function () {
    document.getElementById('again').style.display = 'inline';
    document.getElementById('start').style.display = 'none';
    
    oneGameInit();
    
    for (var i = 0; i < lis.length; i++) {
        lis[i].firstChild.style.display = 'none';
    }
    changeTime();
    action();
}
document.getElementById('again').onclick = function () {
    window.location.reload();
}
