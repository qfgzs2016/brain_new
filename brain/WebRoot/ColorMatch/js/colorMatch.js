// JavaScript Document
var topic=document.createElement('div');
var knowBtn=document.createElement('img');
var startBtn=document.createElement('img');
var maskStartBtn=document.createElement('img');
var sametBtn=document.createElement('img');
var diffBtn=document.createElement('img');
var helpMask = document.createElement("div");
var fs_wrapper=document.getElementById('fs_wrapper');
var link="colorMatch/colorMatch.jsp";
var score;
function init(){
	score=0;
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
		topic.style.left='30%'
		fs_wrapper.appendChild(topic);	
	}	
	if(!document.getElementById('knowID')){
		knowBtn.setAttribute('id','knowID');
		knowBtn.setAttribute('class','knowClass');
		knowBtn.src="colorMatch/img/colorMatchKnow.png";
		knowBtn.style.width='12%';	
		knowBtn.style.height='9%';
		knowBtn.style.position='absolute'
		knowBtn.style.top='70%'
		knowBtn.style.left='25%'
		fs_wrapper.appendChild(knowBtn);	
	}	
		if(!document.getElementById('startID')){
		startBtn.setAttribute('id','startID');
		startBtn.setAttribute('class','startClass');
		startBtn.src="colorMatch/img/colorMatchStart.png";
		startBtn.style.width='12%';	
		startBtn.style.height='9%';
		startBtn.style.position='absolute'
		startBtn.style.top='70%'
		startBtn.style.left='60%'
		fs_wrapper.appendChild(startBtn);
		startBtn.onclick=function(){
			knowBtn.style.display="none";
			startBtn.style.display="none";
			topic.style.display="none";
			gameStarted();
			changeTime();
		}
	}	
	knowBtn.onclick=function(){
		produceMask();
	}
	document.getElementById('help').onclick=function(){
		produceMask();
	}
function produceMask(){
		if ( !document.getElementById("helpmaskID") && 1)
		{     
			var inne; 
			inne = '<div class="gameHelp">';
			inne += ' <p class="gameHelp_title">游戏玩法</p>';
			inne += ' <p class="gameHelp_text">';
			inne += '麻将上会出现一组符号，其中一个为蓝色，请记住它的位置，并在下一组符号出现时判断是否与其相同。';
			inne += '</p>';
			inne += '</div>';
			var fs_wrapper=document.getElementById('fs_wrapper');   
			helpMask.id = "helpmaskID";
			helpMask.class = "helpmaskClass";
			helpMask.style.textAlign="center";
			helpMask.style.position = "absolute";
			helpMask.style.zIndex = "2";
			var eleOffsetWidth=parseInt(fs_wrapper.offsetWidth );
			/*var eleClientWidth=parseInt(fs_wrapper.clientWidth );*/
			helpMask.style.width =eleOffsetWidth+'px';
			helpMask.style.height =parseInt(fs_wrapper.offsetHeight)+'px';
			helpMask.style.top =fs_wrapper.offsetTop+'px';
			helpMask.style.left =fs_wrapper.offsetLeft+'px';
			helpMask.style.background = "gray";
			helpMask.style.filter = "alpha(opacity=80)";
			helpMask.style.opacity = "1";
		  	helpMask.innerHTML = inne;
		   if(!document.getElementById('maskStartID')){
				maskStartBtn.setAttribute('id','maskStartID');
				maskStartBtn.setAttribute('class','startClass');
				maskStartBtn.src="colorMatch/img/colorMatchStart.png";
				maskStartBtn.style.width='14%';	
				maskStartBtn.style.height='10%';
				maskStartBtn.style.position='absolute'
				maskStartBtn.style.top='80%'
				maskStartBtn.style.left='45%'
				helpMask.appendChild(maskStartBtn);
				maskStartBtn.onclick=function(){
					 init();
					 helpMask.style.display="none";	
				}
			}	
		   document.body.appendChild(helpMask);      
		}
		else{//已存在遮罩
			 helpMask.style.display="inline";	
			 maskStartBtn.onclick=function(){
					 init();
					 helpMask.style.display="none";	
			}
		}
		
	}	
}
addLoadEvent(init);

function gameStarted(){
	
	var game_info_text;
	game_info_text  = ' <p style="color:white; font-weight:bold; margin-top:8px;">';
    game_info_text += '时间 0：<span id="second">45</span>&nbsp;&nbsp;&nbsp;&nbsp;';
	game_info_text += '得分：<span id="score">0</span>';
	game_info_text += '</p>';
	game_info_text += ' <p style="color:white; font-weight:bolder; font-size:30px; margin-top:8%;">';
    game_info_text += '<span style="float:left;margin-left:15%;">颜色</span>';
	game_info_text += '<span style="float:right;margin-right:15%;">描述</span>';
	game_info_text += '</p>';
	game_info_text += '<div>';
	game_info_text += '<div id="colorAreaID" class="colorAreaClass"></div>';
	game_info_text += '<div id="colorDesID" class="colorDesClass">红</div>';
	game_info_text += '</div>';
	game_info_text += '';
	fs_wrapper.innerHTML=game_info_text;
	
	if(!document.getElementById('sametBtnID')){
		sametBtn.setAttribute('id','sameBtnID');
		sametBtn.setAttribute('class','sameBtnClass');
		sametBtn.src="colorMatch/img/sameBtn.png";
		sametBtn.style.width='10%';	
		sametBtn.style.height='7%';
		/*sametBtn.style.position='absolute'
		sametBtn.style.top='60%'
		sametBtn.style.left='10%'*/
		fs_wrapper.appendChild(sametBtn);
		sametBtn.onclick=function(){
			
			if(witchColor==witchDes){
				score+=10;
			}
			else{
				score-=10;
				
			}
			document.getElementById('score').innerHTML=score;	
			produceNew();
		}
	}	
	if(!document.getElementById('diffBtnID')){
		diffBtn.setAttribute('id','diffBtnID');
		diffBtn.setAttribute('class','diffBtnClass');
		diffBtn.src="colorMatch/img/diffBtn.png";
		diffBtn.style.width='10%';	
		diffBtn.style.height='7%';
		/*diffBtn.style.position='absolute'
		diffBtn.style.top='60%'
		diffBtn.style.left='50%'*/
		fs_wrapper.appendChild(diffBtn);
		diffBtn.onclick=function(){
			
			if(witchColor!=witchDes){
				score+=10;
				
			}
			else{
				score-=10;
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
	switch(witchColor){
		case 0:
			colorArea.style.backgroundColor=ColArr[witchColor];
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
			colorArea.style.backgroundColor=ColArr[witchColor];
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
			colorArea.style.backgroundColor=ColArr[witchColor];
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
			colorArea.style.backgroundColor=ColArr[witchColor];
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



















