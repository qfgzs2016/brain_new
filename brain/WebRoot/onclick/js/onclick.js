// JavaScript Document
var frequency=15;
var score=0;
var res;
var result;
var flag=-1;   //用于判断是否点击 -1 表示不可点击 0 表示可以开始点击 1 表示已经点击
var link="/brain/onclick/onclick.jsp";
var fs_wrapper=document.getElementById('fs_wrapper'); 
var OKBtn=document.getElementById("OKBtnID");
helpInfo = '<div class="gameHelp">';
helpInfo += ' <p class="gameHelp_title">游戏玩法</p>';
helpInfo += ' <p class="gameHelp_text">';
helpInfo += '游戏开始后会出现一个黑点,几秒之后变白点，当它变白时点击，速度越快越好，共15轮。';
helpInfo += '</p>';
helpInfo += '</div>';
function init(){
	OKBtn.innerHTML="开始";
	frequency=15;
	score=0;
	document.getElementById('frequencyID').innerHTML=frequency;
}
addLoadEvent(init);

//4：开始计时
function submitDataAction(){
	overTime();
}

//1:点击开始按钮
OKBtn.onclick=function(){		
		initFrequency();
		document.getElementById("OKBtnID").style.display="none";
}
//初始化轮数
function initFrequency(){
	overSecond=0;
	flag=-1;
	frequency--;
	if(frequency!=-1){
		document.getElementById('frequencyID').innerHTML=frequency;
		produce();
	}else{
		submitDate();
		createPrompt();
	}
	document.getElementById('clickimg').onclick=function(){
		if(flag==0){
			flag=1;
		}
	}
	
}
//2:启动定时器
function produce(){
	document.getElementById("clickID").innerHTML='<img id="clickimg" src="onclick/img/black.png" height="100" width="100"   />';
	clicktime = setTimeout(changeColor,3000);	
}
//3:更改图片，开始计时，监听点击事件
function changeColor(){
	document.getElementById('clickimg').src='onclick/img/white.png';
	flag=0;
	submitDataAction();
}

var overSecond=0;
function overTime()//计时器
{
	overSecond+=0.01;
	document.getElementById('second').innerHTML=overSecond.toFixed(2);
	timer = setTimeout("overTime();",10);//调用自身实现
	if(flag==1){
		if(overSecond<=1){
			score+=8;
		}
		else if(overSecond>1&&overSecond<=2){
			score+=7;
		}
		else if(overSecond>2&&overSecond<=3){
			score+=6;
		}
		else if(overSecond>3&&overSecond<=4){
			score+=5;
		}
		else if(overSecond>4&&overSecond<=5){
			score+=4;
		}
		else if(overSecond>5&&overSecond<=6){
			score+=3;
		}
		else if(overSecond>6&&overSecond<=7){
			score+=2;
		}
		else if(overSecond>7&&overSecond<=8){
			score+=1;
		}
		else{
			score+=0;
		}
		document.getElementById("scoreID").innerHTML=score;
		clearTimeout(timer);
		initFrequency();
	}
}




function submitDate(){
	$.ajax({
		url: "servlet/Saveonclickervlet",
		type: "POST",
		data: { score: score},
		dataType: "json",
		success: function (result) {            	
			if (result.code == 1) {//跳转到显示游戏结束结果页面
				$("#avrScoreID").html(result.avg.toFixed(2));
			}
			 else{//再玩一次，，正常情况不能出现
			}
		}
	 
		})
}
	
document.getElementById('help').onclick=function(){
	
	produceMask02(helpInfo,fs_wrapper);
	
}


	
	







