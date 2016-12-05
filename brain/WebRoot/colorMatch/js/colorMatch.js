// JavaScript Document
var topic=document.createElement('div');
var knowBtn=document.createElement('img');
var startBtn=document.createElement('img');
var maskStartBtn=document.createElement('img');
var sametBtn=document.createElement('button');
var diffBtn=document.createElement('button');
var helpMask = document.createElement("div");
var fs_wrapper=document.getElementById('fs_wrapper');
var link="/brain/colorMatch/colorMatch.jsp";
var score;
var fs_wrapper=document.getElementById('fs_wrapper'); 
helpInfo = '<div class="gameHelp">';
helpInfo += ' <p class="gameHelp_title">游戏玩法</p>';
helpInfo += ' <p class="gameHelp_text">';
helpInfo += '判断左边花朵的颜色是否和右边的文字描述相同，并点击下方的按钮确定。';
helpInfo += '</p>';
helpInfo += '</div>';
function init(){
	score=0;
	if(document.getElementById('score')){
		document.getElementById('score').innerHTML=score;
	}
	
	secondTime=46;
	if(!document.getElementById('topicID')){
		var topInfo;
		topInfo  = ' <p style="font-size:50px;font-weight:bolder">颜色速配</p><br/><br/><br/>';
		topInfo += ' <span>左边颜色与右边文字表达一致吗？</span>';
		topic.setAttribute('id','topicID');
		topic.setAttribute('class','topicClass');
		topic.style.width='50%';	
		topic.style.height='6%';
		topic.style.color='white';
		topic.innerHTML=topInfo;
		topic.style.position='absolute'
		topic.style.top='20%'
		topic.style.left='25%'
		fs_wrapper.appendChild(topic);	
	}
	else{
		topic.style.display="inline";
	}

		if(!document.getElementById('startID')){
		startBtn.setAttribute('id','startID');
		startBtn.setAttribute('class','startClass');
		startBtn.src="colorMatch/img/colorMatchStart.png";
		startBtn.style.width='12%';	
		startBtn.style.height='9%';
		startBtn.style.position='absolute'
		startBtn.style.top='70%'
		startBtn.style.left='43%'
		fs_wrapper.appendChild(startBtn);
		startBtn.onclick=function(){
			knowBtn.style.display="none";
			startBtn.style.display="none";
			topic.style.display="none";
			gameStarted();
			changeTime();
			offPic.src="img/286-pause2.png";
			timeFlag=true;
			isPause();
			}
		}	
		else{
			startBtn.style.display="inline";
		}
/*	knowBtn.onclick=function(){
		produceMask(helpInfo,fs_wrapper);
	}*/
	document.getElementById('help').onclick=function(){
		produceMask(helpInfo,fs_wrapper);
		
	}
	
}


addLoadEvent(init);

function gameStarted(){
	
	var game_info_text;
	game_info_text  = ' <p style="color:white; font-weight:bold; margin-top:8px;">';
    game_info_text += '时间 0：<span id="second">45</span>&nbsp;&nbsp;&nbsp;&nbsp;';
	game_info_text += '得分：<span id="score">0</span>';
	game_info_text += '</p>';
	game_info_text += ' <p class="demo">';
    game_info_text += '<span>颜色</span>';
	game_info_text += '<span>描述</span>';
	game_info_text += '</p>';
	game_info_text += '<div class="demo01">';
	game_info_text += '<span id="colorAreaID" class="colorAreaClass">❀</span>';
	game_info_text += '<span id="colorDesID" class="colorDesClass">红</span>';
	game_info_text += '</div>';
	fs_wrapper.innerHTML=game_info_text;
	
	if(!document.getElementById('diffBtnID')){
		diffBtn.setAttribute('id','diffBtnID');
		diffBtn.setAttribute('class','diffBtnClass btnStyle');
		diffBtn.innerHTML="不相同";
		diffBtn.style.marginTop="18%";
		fs_wrapper.appendChild(diffBtn);
		
		diffBtn.onclick=function(){
			
			if(witchColor!=witchDes){
				score+=10;
				
			}
			else{
				if(score>=10){
					score-=10;
				}
			}	
			document.getElementById('score').innerHTML=score;
			produceNew();	
		}
	}	
	if(!document.getElementById('sametBtnID')){
		sametBtn.setAttribute('id','sameBtnID');
		sametBtn.setAttribute('class','sameBtnClass btnStyle');
		sametBtn.innerHTML="相同";
		sametBtn.style.marginTop="18%";
		sametBtn.style.marginLeft="10%";
		fs_wrapper.appendChild(sametBtn);
		sametBtn.onclick=function(){
			
			if(witchColor==witchDes){
				score+=10;
			}
			else{
				if(score>=10){
					score-=10;
				}
				
			}
			document.getElementById('score').innerHTML=score;	
			produceNew();
		}
	}	
	
	produceNew();
}
var colorRDes=0;
var colorR=0;
var witchDes;
var witchColor;
function produceNew(){
	var colorArea=document.getElementById('colorAreaID');
	var colorDes=document.getElementById('colorDesID')
	
	witchDes=Math.floor(Math.random()*4);
	var witchDesColor=Math.floor(Math.random()*3)+1;
	var desArray=new Array("红","绿","蓝","紫");
	var DesColArr=new Array("red","green","blue","purple");
	
	witchColor=Math.floor(Math.random()*4);
	var ColArr=new Array("red","green","blue","purple");
	
	var isSame=Math.random();
	colorArea.style.color=ColArr[witchColor];
	switch(witchColor){
		case 0:
			
			/*colorR=0;*/
			colorDes.style.color=DesColArr[witchDesColor];
			if(isSame<=0.43){
				colorDes.innerHTML="红";
				witchDes=0;
			}
			else{
				colorDes.innerHTML=desArray[witchDes];
				/*if(witchDes==0) colorDes=0;
				else colorRDes=2;*/
			}
		break;
		case 1:
			/*colorArea.style.backgroundColor=ColArr[witchColor];*/
			/*colorR=1;*/
			colorDes.style.color=DesColArr[witchDesColor];
			if(isSame<=0.43){
				colorDes.innerHTML="绿";
				witchDes=1;
			}
			else{
				colorDes.innerHTML=desArray[witchDes];
				/*if(witchDes==1) colorDes=1;
				else colorRDes=2;*/
			}
			
		break;
		case 2:
			/*colorArea.style.backgroundColor=ColArr[witchColor];*/
			/*colorR=2;*/
			colorDes.style.color=DesColArr[witchDesColor];
			if(isSame<=0.43){
				colorDes.innerHTML="蓝";
				witchDes=2;
			}
			else{
				colorDes.innerHTML=desArray[witchDes];
				/*if(witchDes==2) colorDes=2;
				else colorRDes=3;*/
			}
		break;
		case 3:
			/*colorArea.style.backgroundColor=ColArr[witchColor];*/
			/*colorR=3;*/
			colorDes.style.color=DesColArr[witchDesColor];
			if(isSame<=0.43){
				colorDes.innerHTML="紫";
				witchDes=3;
			}
			else{
				colorDes.innerHTML=desArray[witchDes];
				/*if(witchDes==3) colorDes=3;
				else colorRDes=4;*/
			}
		break;
		
	}	
	/*console.log(witchColor+"  "+witchDes);
	console.log(isSame)*/;
}
function submitDate(){
	$.ajax({
		url: "servlet/SaveColorMatchServlet",
		type: "POST",
		data: { score: score},
		dataType: "json",
		success: function (result) {            	
			if (result.code == 1) {//跳转到显示游戏结束结果页面
				$("#avrScoreID").html(result.avg.toFixed(2));
				//document.getElementByClass("colorMatch-score").innerHTML = mahjongscore.toFixed(2);
			}
			 else{//再玩一次，，正常情况不能出现
			}
		}
	 
		})
	
}
function isPause(){
	if(timeFlag){
		sametBtn.disabled=false;
		diffBtn.disabled=false;
		
	}
	else{
		sametBtn.disabled=true;
		diffBtn.disabled=true;
	}	
}


















