// JavaScript Document
var link="/brain/PukeMatch/PukeMatch.jsp";
var score=0;
var secondTime=46;
var diffBtn=document.getElementById('diffBtnID');
var sameBtn=document.getElementById('sameBtnID');
var fs_wrapper=document.getElementById('fs_wrapper'); 
helpInfo = '<div class="gameHelp">';
helpInfo += ' <p class="gameHelp_title">游戏玩法</p>';
helpInfo += ' <p class="gameHelp_text">';
helpInfo += '会出现一张扑克花色，请记住它的花色，并在下张花色出现时判断是否与其相同。';
helpInfo += '</p>';
helpInfo += '</div>';
function init(){
	score=0;
	document.getElementById('score').innerHTML=score;
	secondTime=46;
	timeFlag=true;
	document.getElementById('startBtnID').style.display='inline';	
	document.getElementById('sameBtnID').style.display='none';	
	var ss=document.getElementById('diffBtnID').style.display='none';
	drawPuke();
}
addLoadEvent(init);

document.getElementById('startBtnID').onclick=function(){	
		document.getElementById('sameBtnID').style.display='inline';	
		document.getElementById('diffBtnID').style.display='inline';
		document.getElementById('startBtnID').style.display='none';
		document.getElementById('tips').style.display='none';
		changeTime();	
		drawPuke();		
		offPic.src="img/286-pause2.png";
		timeFlag=true;
		isPause();
}
var noOk=document.getElementById('pukeid')
document.getElementById('diffBtnID').onclick=function(){
	if(now!=last){
		isRight(noOk);
		score+=10;
	}
	else{
		isWrong(noOk);	
		score-=10;//分数容易太高修改
	}
	document.getElementById('score').innerHTML=score;
	drawPuke();	
}

document.getElementById('sameBtnID').onclick=function(){
	if(now==last){
		isRight(noOk);
		score+=10;
	}
	else{
		isWrong(noOk);
		score-=10;//分数容易太高修改
	}
	document.getElementById('score').innerHTML=score;	
	drawPuke();	
}
var now;
var last;
var pk=document.getElementById("pk");
function drawPuke(){
	if(pk.childNodes.length==1){
		pk.removeChild(pk.firstChild);
	}
	else{
		
	}
	/*console.log(pk.childNodes.length);*/
	last=now;
	
	if(Math.random<=0.3333){
		
	}
	else{
		now=Math.floor(Math.random()*4);
	}
	if(now==0){
		 producePuke(10);
		
	}
	else if(now==1){
		 producePuke(11);
			
	}
	else if(now==2){
		 producePuke(12);
			
	}
	else{
		 producePuke(13);
		
	}	
}
function producePuke(n){

	var puke=document.createElement('img');
	puke.src="PukeMatch/img/"+n+".png"
	pk.appendChild(puke);
	
}
document.getElementById('help').onclick=function(){
	produceMask(helpInfo,fs_wrapper)
}


function submitDate(){
	$.ajax({
		url: "servlet/SavePukeServlet",
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
function isPause(){
	if(timeFlag){
		diffBtn.disabled=false;
		sameBtn.disabled=false;
	
	}
	else{
		diffBtn.disabled=true;
		sameBtn.disabled=true;
	}	
}
  
  
  
  
  
  
  
  
  
  
  
  
  