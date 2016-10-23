// JavaScript Document
var frequency=15;
var score=0;
var res;
var result;
var link="/brain/Threesum/Threesum.jsp";
var fs_wrapper=document.getElementById('fs_wrapper'); 
var OKBtn=document.getElementById("OKBtnID");
var sumres=document.getElementById("sumresID");
var ifRight=document.getElementById("isRightID");
var sumres=document.getElementById("sumresID")
helpInfo = '<div class="gameHelp">';
helpInfo += ' <p class="gameHelp_title">游戏玩法</p>';
helpInfo += ' <p class="gameHelp_text">';
helpInfo += '以尽可能快的的速度把出现的三个数字加起来，并输入框内点击确认';
helpInfo += '</p>';
helpInfo += '</div>';
function init(){
	OKBtn.innerHTML="开始";
	document.getElementById("threeNumID").innerHTML='X+X+X';
	frequency=15;
	score=0;
	document.getElementById('frequencyID').innerHTML=frequency;
	sumres.disabled=true;
}
addLoadEvent(init);
function action(){
	compare();
	overTime();
}
function submitDataAction(){
	res=document.getElementById("sumresID").value;
	if((res)==result){
		if(overSecond<=10){
			score+=20;
		}
		else if(overSecond>10&&overSecond<=20){
			score+=10;
		}
		else if(overSecond>20&&overSecond<=30){
			score+=5;
		}
		else{
			score+=0;
		}	
		isRight(ifRight);
	}
	else{
		score+=0;
		isWrong(ifRight);
	}
	overSecond=-1;
	clearInterval(timer);
	overTime();
	document.getElementById("scoreID").innerHTML=score;
	frequency--;
	document.getElementById('frequencyID').innerHTML=frequency;
	if(frequency>=1){
		produce();
	}
	else{
		createPrompt();	
	}
	
	document.getElementById("sumresID").value=null;

}
sumres.onkeypress=function(event){
	if(event.keyCode==13){
		submitDataAction();
	}
}
var islife=false;
OKBtn.onclick=function(){	
	if(islife==false){
		action();
		sumres.disabled=false;
		islife=true;
		OKBtn.innerHTML="确定";	
	}
	else{
		
		submitDataAction();
	}
	
}
function compare(){
	produce();
	
}
/*	var times=0;//轮数
	var difficulty=10;//难度
	
	
	var sumScore=document.getElementById('score');
		sumScore.innerHTML=score;
	*/
function produce(){
	var m1 = Math.floor(Math.random()*10)+2;
	var m2 = Math.floor(Math.random()*10)+2;
	var m3 = Math.floor(Math.random()*10)+2;
	document.getElementById("threeNumID").innerHTML=m1+'+'+m2+'+'+m3;
	result=m1+m2+m3;
	document.getElementById("sumresID").focus();
}
var overSecond=-1;
function overTime()//计时器
{
	overSecond++;
	document.getElementById('second').innerHTML=overSecond;
	timer = setTimeout("overTime();",1000);//调用自身实现
}

function submitDate(){
	$.ajax({
		url: "servlet/SaveThreeSumServlet",
		type: "POST",
		data: { score: score},
		dataType: "json",
		success: function (result) {            	
			if (result.code == 1) {//跳转到显示游戏结束结果页面
				$("#avrScoreID").html(result.avg.toFixed(2));
				//document.getElementByClass("puke-score").innerHTML = mahjongscore.toFixed(2);
			}
			 else{//再玩一次，，正常情况不能出现
			}
		}
	 
		})
}
	
document.getElementById('help').onclick=function(){
	
	produceMask02(helpInfo,fs_wrapper);
	console.log("asad");
}

function isPause(){
	if(timeFlag){
		OKBtn.disabled=true;
	}
	else{
		OKBtn.disabled=false;
	}	
}
	
	







