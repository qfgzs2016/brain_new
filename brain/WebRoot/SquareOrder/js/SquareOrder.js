// JavaScript Document
var link="/brain/SquareOrder/SquareOrder.jsp";
var jushu=4;//局数
var timer;//计时器
var secondTime =-1;
var score=0;
var rdn = 1;//判断是否点击正确，及一局的
var list = new Array();
var lis = document.getElementsByTagName("li");
function init(){
	document.getElementById("jushu").innerHTML=jushu-1; 
	document.getElementById('second').innerHTML ="0"; 
	document.getElementById('again').style.display='none';	
	document.getElementById('nextNum').style.display='none';	
	
}
function oneGameInit(){
	
}
addLoadEvent(init);
function action() {
	
    for (var i = 0; i < lis.length; i++) {
        lis[i].onclick = function() {
			 for (var j = 1; j <=lis.length; j++) {
				 if(rdn-1== list[j-1]){
					 document.getElementById(j).style.backgroundColor='#fff';
				 }
			 }
			lastNum=parseInt(this.getAttribute("id"));
            if (rdn == list[lastNum - 1]) {
				rdn++;
				if(rdn==17){
					startAction();
				}
				else{
					document.getElementById('tips').innerHTML =rdn;	
					this.style.backgroundColor='#0f0';
				}
								
            }
            else {
            	
            		//createtips('错啦！！！应该是：'+rdn,'fs_main_wrapper',tipsAciotn); 
            }
        }	
    }  
}
function submitDate(){
	$.ajax({
        url: "servlet/SaveNumberSortServlet",
        type: "POST",
        data: {
            clickTime: score
        },
        dataType: "json",
        success: function(result) {
            if (result.code == 1) {
                //跳转到显示游戏结束结果页面        
            	$(".square-score").html(result.avg.toFixed(2));
                }
            else {
                //再玩一次，，正常情况不能出现
                }
        }

    });
}
function tipsAciotn(){
	
}
document.getElementById('start').onclick=function(){
	
	document.getElementById('start').style.display='none';
	document.getElementById('nextNum').style.display='inline';	
	startAction();
}
function startAction(){//每局开始
	rdn = 1;
	secondTime=0;
	calculationScore();
	if(timer){clearInterval(timer);}
	if(jushu>3){
		document.getElementById("jushu").innerHTML=--jushu;
	}
	else{
		submitDate();
		createPrompt();	
		return;
	}
	document.getElementById('tips').innerHTML ="1"; 	
	/****************功能块开始**********************/
	if(e.classList.contains('fanzhuan')){
		e.classList.remove("fanzhuan");
	}else{
		e.classList.add("fanzhuan");	
	}
	e.style.backgroundColor='#fff';
	document.getElementById(1).innerHTML ="";
    for (var j =1; j < lis.length; j++) {
		if(lis[j].classList.contains('fanzhuan')){
			lis[j].classList.remove("fanzhuan");
		}
		else{
			lis[j].classList.add("fanzhuan");
		}
		lis[j].style.backgroundColor='#fff';
		document.getElementById(j+1).innerHTML ="";
     }
    /****************功能块结束**********************/
}

document.getElementById('again').onclick=function(){
	if(rdn<17){
		document.getElementById("jushu").innerHTML=jushu;   
	}
	else{
		document.getElementById("jushu").innerHTML=++jushu;   
	}
	 if(timer){
		clearInterval(timer);           
	 }
    secondTime=-1;
	rdn = 1;
	document.getElementById('tips').innerHTML ="1"; 	
	for (var j =0; j < lis.length; j++) {
		if(lis[j].classList.contains('fanzhuan')){
			lis[j].classList.remove("fanzhuan");
		}
		else{
			lis[j].classList.add("fanzhuan");
		}
		lis[j].style.backgroundColor='#fff';
		//lis[j].style.borderColor='#0F0';
		document.getElementById(j+1).innerHTML ="";
     }
}

function calculationScore(){
	if(timer){//如果不加刚开始因为secondTime为零所以调用会出错
		if(secondTime<=5){
			score+=80
		}else if(secondTime>5 && secondTime<=12){
			score+=60
		}
		else if(secondTime>12 && secondTime<=18){
			score+=40
		}
		else  if(secondTime>18 && secondTime<=32){
			score+=10
		}
		else{
			
		}
	}

	document.getElementById('score').innerHTML =score;	
}
/*******************以下一小部分为css动画结束检测**********************************/
var e = document.getElementById('1');
function whichTransitionEvent() {
    var t;
    var el = document.createElement('fakeelement');
    var transitions = {
        'transition': 'transitionend',
        'OTransition': 'oTransitionEnd',
        'MozTransition': 'transitionend',
        'WebkitTransition': 'webkitTransitionEnd'
    }
    for (t in transitions) {
        if (el.style[t] !== undefined) {
            return transitions[t];
        }
    }
}
/* 监听变换事件! */
var transitionEvent = whichTransitionEvent();
transitionEvent && e.addEventListener(transitionEvent, 
function() {//css动画完成代码段
	for (var i = 0; i < lis.length; i++) {
        list[i] = 0;
    }
    for (var i = 0; i < lis.length; i++) {
        list[i] = getRandNum();
        lis[i].innerHTML = list[i];
    }
	/*console.log("16个");*/
	action();
	changeTime();  
});
/*******************以上一小部分为css动画结束检测**********************************/


function getRandNum() {
    //得到不重复的随机值
    var i = -1;
    while (i == -1 || !conin(i)) {
        i = Math.floor(Math.random() * 16) + 1;

    }
    return i;
}
function conin(n) {
    for (var i = 0; i < list.length; i++) {
        if (n == list[i]) {
            return false;
        }
    }
    return true;
}

function changeTime()//计时器
 {
    secondTime++;
    document.getElementById('second').innerHTML = secondTime;
    timer = setTimeout("changeTime();", 1000);
    //调用自身实现
    return secondTime;
}

right = function() {
    e.className += ' hide';
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